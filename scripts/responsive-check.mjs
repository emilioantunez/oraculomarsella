import fs from "node:fs/promises";

const endpoint = "http://127.0.0.1:9223";
const appUrl = "http://127.0.0.1:5173/";
const outputDir = new URL("../qa-screenshots/", import.meta.url);

let nextId = 1;

async function json(url, options) {
  const response = await fetch(url, options);
  if (!response.ok) {
    throw new Error(`${response.status} ${response.statusText}: ${url}`);
  }
  return response.json();
}

async function connect() {
  const target = await json(`${endpoint}/json/new?${encodeURIComponent(appUrl)}`, { method: "PUT" });
  const socket = new WebSocket(target.webSocketDebuggerUrl);
  const pending = new Map();

  socket.addEventListener("message", (event) => {
    const message = JSON.parse(event.data);
    if (message.id && pending.has(message.id)) {
      const { resolve, reject } = pending.get(message.id);
      pending.delete(message.id);
      if (message.error) reject(new Error(message.error.message));
      else resolve(message.result);
    }
  });

  await new Promise((resolve) => socket.addEventListener("open", resolve, { once: true }));

  return {
    send(method, params = {}) {
      const id = nextId++;
      socket.send(JSON.stringify({ id, method, params }));
      return new Promise((resolve, reject) => pending.set(id, { resolve, reject }));
    },
    close() {
      socket.close();
    },
  };
}

const measureScript = String.raw`
(() => {
  const visible = (element) => {
    const style = getComputedStyle(element);
    const rect = element.getBoundingClientRect();
    return style.display !== "none" && style.visibility !== "hidden" && Number(style.opacity) !== 0 && rect.width > 0 && rect.height > 0;
  };
  const viewportWidth = window.innerWidth;
  const overflowing = [...document.querySelectorAll("body *")]
    .filter(visible)
    .map((element) => {
      const rect = element.getBoundingClientRect();
      return {
        tag: element.tagName.toLowerCase(),
        className: String(element.className || "").slice(0, 160),
        text: (element.innerText || element.getAttribute("aria-label") || element.title || "").trim().slice(0, 80),
        left: Math.round(rect.left),
        right: Math.round(rect.right),
        width: Math.round(rect.width),
      };
    })
    .filter((item) => item.left < -2 || item.right > viewportWidth + 2)
    .slice(0, 10);
  return {
    title: document.title,
    viewportWidth,
    viewportHeight: window.innerHeight,
    scrollWidth: document.documentElement.scrollWidth,
    scrollHeight: document.documentElement.scrollHeight,
    hasHorizontalOverflow: document.documentElement.scrollWidth > viewportWidth + 2,
    overflowing,
  };
})()
`;

async function clickByText(client, text) {
  await client.send("Runtime.evaluate", {
    expression: `
      [...document.querySelectorAll("button")]
        .find((button) => button.innerText.includes(${JSON.stringify(text)}))
        ?.click();
    `,
  });
  await new Promise((resolve) => setTimeout(resolve, 350));
}

async function runCase(client, viewport, label, setup) {
  await client.send("Emulation.setDeviceMetricsOverride", {
    width: viewport.width,
    height: viewport.height,
    deviceScaleFactor: 1,
    mobile: viewport.width < 700,
  });
  await client.send("Page.navigate", { url: appUrl });
  await new Promise((resolve) => setTimeout(resolve, 900));
  if (setup) await setup(client);

  const result = await client.send("Runtime.evaluate", {
    expression: measureScript,
    returnByValue: true,
  });
  const measurement = result.result.value;
  const screenshot = await client.send("Page.captureScreenshot", {
    format: "png",
    captureBeyondViewport: false,
  });
  await fs.mkdir(outputDir, { recursive: true });
  await fs.writeFile(new URL(`${label}.png`, outputDir), Buffer.from(screenshot.data, "base64"));
  return { label, ...measurement };
}

const viewports = [
  { label: "mobile-390", width: 390, height: 844 },
  { label: "tablet-768", width: 768, height: 1024 },
  { label: "desktop-1440", width: 1440, height: 1000 },
];

const client = await connect();
await client.send("Page.enable");
await client.send("Runtime.enable");

const results = [];
for (const viewport of viewports) {
  results.push(await runCase(client, viewport, `${viewport.label}-dictionary`));
  results.push(await runCase(client, viewport, `${viewport.label}-reading`, async (tab) => {
    await clickByText(tab, "Tiradas");
  }));
  results.push(await runCase(client, viewport, `${viewport.label}-manual`, async (tab) => {
    await clickByText(tab, "Tiradas");
    await clickByText(tab, "Mi mazo");
  }));
}

client.close();

const failures = results.filter((item) => item.hasHorizontalOverflow || item.overflowing.length > 0);
console.log(JSON.stringify({ checked: results.length, failures, results }, null, 2));
process.exitCode = failures.length ? 1 : 0;
