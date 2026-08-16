import { Trash2 } from "lucide-react";
import { spreads } from "../../data/spreads";
import type { Reading } from "../../types/tarot";

export function HistoryList({
  readings,
  onSelect,
  onClear,
}: {
  readings: Reading[];
  onSelect: (reading: Reading) => void;
  onClear: () => void;
}) {
  if (!readings.length) {
    return <p className="rounded-lg border border-white/10 bg-white/[0.045] p-6 text-bone/70">Todavía no hay tiradas guardadas.</p>;
  }

  return (
    <div className="space-y-4">
      <div className="flex justify-end">
        <button className="flex items-center gap-2 rounded-full border border-white/10 px-4 py-2 text-sm text-bone/75 hover:bg-white/10" onClick={onClear}>
          <Trash2 size={16} />
          Borrar historial
        </button>
      </div>
      <div className="grid gap-3">
        {readings.map((reading) => (
          <button
            key={reading.id}
            className="rounded-lg border border-white/10 bg-white/[0.045] p-4 text-left transition hover:border-gold/60"
            onClick={() => onSelect(reading)}
          >
            <p className="text-xs uppercase tracking-[0.18em] text-gold">
              {new Date(reading.createdAt).toLocaleString()} · {spreads.find((spread) => spread.id === reading.spreadId)?.name}
            </p>
            <h3 className="mt-2 font-display text-xl text-bone">{reading.question || "Consulta sin pregunta escrita"}</h3>
            <p className="mt-2 line-clamp-2 text-sm text-bone/65">{reading.interpretation.synthesis}</p>
          </button>
        ))}
      </div>
    </div>
  );
}
