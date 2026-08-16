import type { Suit } from "../types/tarot";

export const suitLabels: Record<Suit, string> = {
  wands: "Bastos",
  cups: "Copas",
  swords: "Espadas",
  pentacles: "Oros",
};

export const orientationLabels = {
  upright: "Derecho",
  reversed: "Invertida",
};

export const arcanaLabel = {
  major: "Arcano Mayor",
  minor: "Arcano Menor",
};
