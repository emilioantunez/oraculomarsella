import type { TarotCard as TarotCardType } from "../../types/tarot";
import { TarotCard } from "./TarotCard";

export function CardGrid({ cards, onSelect }: { cards: TarotCardType[]; onSelect: (card: TarotCardType) => void }) {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5">
      {cards.map((card) => (
        <TarotCard key={card.id} card={card} onSelect={onSelect} />
      ))}
    </div>
  );
}
