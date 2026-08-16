export type Arcana = "major" | "minor";
export type Suit = "wands" | "cups" | "swords" | "pentacles";
export type Orientation = "upright" | "reversed";
export type LifeArea = "love" | "workMoney" | "health" | "spirituality";

export interface TarotCard {
  id: string;
  name: {
    es: string;
    en: string;
  };
  arcana: Arcana;
  suit?: Suit;
  number: number | "page" | "knight" | "queen" | "king";
  keywords: {
    upright: string[];
    reversed: string[];
  };
  meaning: {
    upright: string;
    reversed: string;
  };
  symbolism: string;
  correspondences: {
    element?: "fire" | "water" | "air" | "earth";
    astrology?: string;
    planet?: string;
    zodiac?: string;
  };
  areas: Record<LifeArea, { upright: string; reversed: string }>;
  sourceNotes: string[];
}

export interface SpreadPosition {
  index: number;
  name: string;
  shortName: string;
  prompt: string;
}

export interface SpreadDefinition {
  id:
    | "three-past-present-future"
    | "three-situation-action-result"
    | "five-card"
    | "celtic-cross";
  name: string;
  description: string;
  positions: SpreadPosition[];
}

export interface DrawnCard {
  cardId: string;
  orientation: Orientation;
  position: SpreadPosition;
}

export interface ReadingCardInterpretation {
  cardId: string;
  positionName: string;
  orientation: Orientation;
  text: string;
}

export interface Reading {
  id: string;
  createdAt: string;
  question: string;
  spreadId: SpreadDefinition["id"];
  cards: DrawnCard[];
  interpretation: {
    individual: ReadingCardInterpretation[];
    synthesis: string;
    finalReading?: {
      headline: string;
      narrative: string;
      turningPoint: string;
      advice: string;
      checkQuestions: string[];
    };
  };
}
