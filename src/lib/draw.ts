import { tarotCards } from "../data/cards";
import type { DrawnCard, SpreadDefinition } from "../types/tarot";

const shuffle = <T,>(items: T[]): T[] => {
  const copy = [...items];
  for (let index = copy.length - 1; index > 0; index -= 1) {
    const randomIndex = Math.floor(Math.random() * (index + 1));
    [copy[index], copy[randomIndex]] = [copy[randomIndex], copy[index]];
  }
  return copy;
};

export const drawSpread = (spread: SpreadDefinition): DrawnCard[] => {
  const deck = shuffle(tarotCards);
  return spread.positions.map((position, index) => ({
    cardId: deck[index].id,
    orientation: Math.random() < 0.33 ? "reversed" : "upright",
    position,
  }));
};
