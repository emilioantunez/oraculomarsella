import type { Reading } from "../types/tarot";

const KEY = "tarot-rws-readings";

export const getReadings = (): Reading[] => {
  try {
    const raw = localStorage.getItem(KEY);
    return raw ? (JSON.parse(raw) as Reading[]) : [];
  } catch {
    return [];
  }
};

export const saveReading = (reading: Reading): Reading[] => {
  const next = [reading, ...getReadings()].slice(0, 40);
  localStorage.setItem(KEY, JSON.stringify(next));
  return next;
};

export const clearReadings = (): void => {
  localStorage.removeItem(KEY);
};
