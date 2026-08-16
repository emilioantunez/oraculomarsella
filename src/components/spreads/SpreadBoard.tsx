import type { DrawnCard } from "../../types/tarot";
import { SpreadCard } from "./SpreadCard";

export function SpreadBoard({ cards }: { cards: DrawnCard[] }) {
  if (!cards.length) {
    return (
      <div className="grid gap-4 sm:grid-cols-3">
        {Array.from({ length: 3 }).map((_, index) => (
          <div key={index} className="card-back h-56 animate-shuffle rounded-lg border border-gold/20" style={{ animationDelay: `${index * 120}ms` }} />
        ))}
      </div>
    );
  }

  return (
    <div className={`grid gap-4 ${cards.length > 5 ? "sm:grid-cols-2 lg:grid-cols-5" : "sm:grid-cols-2 lg:grid-cols-5"}`}>
      {cards.map((card, index) => (
        <SpreadCard key={`${card.position.index}-${card.cardId}`} drawn={card} index={index} />
      ))}
    </div>
  );
}
