import { tarotCards } from "../../data/cards";
import { arcanaLabel, orientationLabels, suitLabels } from "../../lib/text";
import type { DrawnCard, Orientation, SpreadDefinition } from "../../types/tarot";

interface ManualSpreadInputProps {
  spread: SpreadDefinition;
  cards: DrawnCard[];
  onChange: (cards: DrawnCard[]) => void;
}

export function ManualSpreadInput({ spread, cards, onChange }: ManualSpreadInputProps) {
  const selectedIds = new Set(cards.map((card) => card.cardId).filter(Boolean));
  const complete = cards.filter((card) => card.cardId).length;

  const updateCard = (positionIndex: number, cardId: string) => {
    onChange(
      spread.positions.map((position) => {
        const current = cards.find((card) => card.position.index === position.index);
        if (position.index !== positionIndex) {
          return current ?? { cardId: "", orientation: "upright", position };
        }
        return {
          cardId,
          orientation: current?.orientation ?? "upright",
          position,
        };
      }),
    );
  };

  const updateOrientation = (positionIndex: number, orientation: Orientation) => {
    onChange(
      spread.positions.map((position) => {
        const current = cards.find((card) => card.position.index === position.index);
        return {
          cardId: current?.cardId ?? "",
          orientation: position.index === positionIndex ? orientation : current?.orientation ?? "upright",
          position,
        };
      }),
    );
  };

  return (
    <section className="rounded-lg border border-white/10 bg-white/[0.045] p-4">
      <div className="mb-4 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h2 className="font-display text-2xl text-gold">Cargar mi tirada física</h2>
          <p className="mt-1 text-sm text-bone/65">
            Elige la carta que sacaste en cada posición y marca si apareció al derecho o invertida.
          </p>
        </div>
        <p className="text-sm text-bone/55">
          {complete}/{spread.positions.length} cartas
        </p>
      </div>
      <div className="grid gap-3">
        {spread.positions.map((position) => {
          const current = cards.find((card) => card.position.index === position.index);
          return (
            <div key={position.index} className="grid min-w-0 gap-3 rounded-lg border border-white/10 bg-night/45 p-3 lg:grid-cols-[220px_minmax(0,1fr)_220px] lg:items-center">
              <div className="min-w-0">
                <p className="text-xs uppercase tracking-[0.18em] text-gold">{position.shortName}</p>
                <p className="mt-1 text-sm text-bone/65">{position.prompt}</p>
              </div>
              <select
                className="min-w-0 w-full rounded-md border border-white/10 bg-night px-3 py-3 text-bone outline-none focus:border-gold"
                value={current?.cardId ?? ""}
                onChange={(event) => updateCard(position.index, event.target.value)}
              >
                <option value="">Seleccionar carta</option>
                {tarotCards.map((card) => {
                  const disabled = selectedIds.has(card.id) && current?.cardId !== card.id;
                  return (
                    <option key={card.id} value={card.id} disabled={disabled}>
                      {card.name.es} · {arcanaLabel[card.arcana]}{card.suit ? ` · ${suitLabels[card.suit]}` : ""}
                    </option>
                  );
                })}
              </select>
              <div className="grid min-w-0 grid-cols-2 gap-2 rounded-full border border-white/10 bg-white/5 p-1">
                {(["upright", "reversed"] as Orientation[]).map((orientation) => {
                  const active = (current?.orientation ?? "upright") === orientation;
                  return (
                    <button
                      key={orientation}
                      className={`rounded-full px-3 py-2 text-sm transition ${
                        active ? "bg-gold text-night" : "text-bone/70 hover:bg-white/10"
                      }`}
                      onClick={() => updateOrientation(position.index, orientation)}
                      type="button"
                    >
                      {orientationLabels[orientation]}
                    </button>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
