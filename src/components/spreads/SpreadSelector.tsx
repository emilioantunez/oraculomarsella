import { spreads } from "../../data/spreads";
import type { SpreadDefinition } from "../../types/tarot";

export function SpreadSelector({
  selected,
  onSelect,
}: {
  selected: SpreadDefinition;
  onSelect: (spread: SpreadDefinition) => void;
}) {
  return (
    <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-4">
      {spreads.map((spread) => {
        const active = selected.id === spread.id;
        return (
          <button
            key={spread.id}
            className={`rounded-lg border p-4 text-left transition ${
              active ? "border-gold bg-gold/15" : "border-white/10 bg-white/[0.045] hover:border-gold/60"
            }`}
            onClick={() => onSelect(spread)}
          >
            <h3 className="font-display text-lg text-bone">{spread.name}</h3>
            <p className="mt-2 text-sm text-bone/60">{spread.description}</p>
          </button>
        );
      })}
    </div>
  );
}
