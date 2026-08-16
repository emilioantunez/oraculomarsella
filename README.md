# Oráculo Marsella Tarot

Aplicación web standalone para consultar las 78 cartas del Tarot y realizar tiradas interpretadas de 3 cartas, 5 cartas y Cruz Celta.

## Stack

- React + TypeScript + Vite
- Tailwind CSS
- Datos locales en TypeScript
- Historial en `localStorage`
- Sin APIs externas ni servicios de pago

## Ejecutar localmente

```bash
npm install
npm run dev
```

Luego abre la URL que indique Vite, normalmente `http://127.0.0.1:5173`.

## Build

```bash
npm run build
```

## Fuentes de contenido

Los significados se redactaron como síntesis interpretativas tradicionales basadas en:

- Tradición del Tarot de Marsella: lectura por arcanos, número, palo y posición.
- Alejandro Jodorowsky y Marianne Costa, *La vía del Tarot*.
- Yoav Ben-Dov, *The Marseille Tarot Revealed*.

## Imágenes

Las imágenes de cartas usadas en `public/cards/` corresponden a un Tarot de Marsella de dominio público, con fuente original en Wikimedia Commons:

- Wikimedia Commons, categoría *Tarot de Marseille (Single Cards)*.
- Espejo consultado para descarga y metadatos: `mixvlad/TarotCards`, mazo `tarot/marseille`, que referencia Wikimedia Commons como fuente y licencia pública por carta.

Nota: el Tarot de Marsella conserva el orden histórico `VIII Justicia` y `XI Fuerza`; la app respeta esa lectura por nombre, imagen y función simbólica.

La app evita lecturas deterministas o alarmistas. El Tarot se presenta como herramienta de reflexión y autoconocimiento, no como predicción científica.
