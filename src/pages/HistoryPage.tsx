import { useState } from "react";
import { clearReadings } from "../lib/storage";
import type { Reading } from "../types/tarot";
import { HistoryDetail } from "../components/history/HistoryDetail";
import { HistoryList } from "../components/history/HistoryList";

export function HistoryPage({ readings, onChanged }: { readings: Reading[]; onChanged: () => void }) {
  const [selected, setSelected] = useState<Reading | null>(null);

  const clear = () => {
    clearReadings();
    setSelected(null);
    onChanged();
  };

  return (
    <div className="space-y-6">
      <section className="max-w-3xl">
        <p className="text-xs uppercase tracking-[0.28em] text-gold">Historial</p>
        <h1 className="mt-2 font-display text-4xl text-bone md:text-5xl">Tiradas guardadas</h1>
        <p className="mt-3 text-bone/70">Las consultas se guardan únicamente en este navegador mediante almacenamiento local.</p>
      </section>
      <HistoryList readings={readings} onSelect={setSelected} onClear={clear} />
      {selected && <HistoryDetail reading={selected} onClose={() => setSelected(null)} />}
    </div>
  );
}
