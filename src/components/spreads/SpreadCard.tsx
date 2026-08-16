import { cardById } from "../../data/cards";
import { orientationLabels } from "../../lib/text";
import type { DrawnCard } from "../../types/tarot";
import { SymbolicCardArt } from "../cards/SymbolicCardArt";

export function SpreadCard({ drawn, index }: { drawn: DrawnCard; index: number }) {
  const card = cardById.get(drawn.cardId);
  if (!card) return null;

  return (
    <div className="animate-reveal rounded-lg border border-white/10 bg-white/[0.045] p-3" style={{ animationDelay: `${index * 90}ms` }}>
      <p className="mb-2 text-xs uppercase tracking-[0.18em] text-gold">{drawn.position.name}</p>
      <div className={drawn.orientation === "reversed" ? "rotate-180" : ""}>
        <SymbolicCardArt card={card} small />
      </div>
      <h3 className="mt-3 font-display text-lg text-bone">{card.name.es}</h3>
      <p className="text-sm text-bone/60">{orientationLabels[drawn.orientation]}</p>
    </div>
  );
}
