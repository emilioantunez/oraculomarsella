import type { TarotCard as TarotCardType } from "../../types/tarot";
import { arcanaLabel, suitLabels } from "../../lib/text";
import { SymbolicCardArt } from "./SymbolicCardArt";

export function TarotCard({ card, onSelect }: { card: TarotCardType; onSelect: (card: TarotCardType) => void }) {
  return (
    <button
      className="group rounded-lg border border-white/10 bg-white/[0.045] p-3 text-left transition hover:-translate-y-1 hover:border-gold/60 hover:bg-white/[0.08]"
      onClick={() => onSelect(card)}
    >
      <SymbolicCardArt card={card} small />
      <div className="mt-3">
        <h3 className="font-display text-lg text-bone">{card.name.es}</h3>
        <p className="text-sm text-bone/55">{card.name.en}</p>
        <p className="mt-2 text-xs uppercase tracking-[0.2em] text-gold/80">
          {arcanaLabel[card.arcana]}{card.suit ? ` · ${suitLabels[card.suit]}` : ""}
        </p>
      </div>
    </button>
  );
}
