import { X } from "lucide-react";
import { spreads } from "../../data/spreads";
import type { Reading } from "../../types/tarot";
import { InterpretationPanel } from "../spreads/InterpretationPanel";
import { SpreadBoard } from "../spreads/SpreadBoard";

export function HistoryDetail({ reading, onClose }: { reading: Reading; onClose: () => void }) {
  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-night/80 p-4 backdrop-blur">
      <article className="mx-auto max-w-6xl rounded-lg border border-gold/25 bg-ink p-4 shadow-2xl md:p-6">
        <div className="mb-5 flex items-start justify-between gap-4">
          <div>
            <p className="text-xs uppercase tracking-[0.22em] text-gold">
              {new Date(reading.createdAt).toLocaleString()} · {spreads.find((spread) => spread.id === reading.spreadId)?.name}
            </p>
            <h2 className="mt-1 font-display text-3xl text-bone">{reading.question || "Consulta sin pregunta escrita"}</h2>
          </div>
          <button className="rounded-full border border-white/10 p-2 text-bone/75 hover:bg-white/10" onClick={onClose} title="Cerrar">
            <X size={20} />
          </button>
        </div>
        <div className="space-y-6">
          <SpreadBoard cards={reading.cards} />
          <InterpretationPanel reading={reading} />
        </div>
      </article>
    </div>
  );
}
