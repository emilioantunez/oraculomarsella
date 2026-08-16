import { Hand, Save, Sparkles } from "lucide-react";
import { useEffect, useState } from "react";
import { spreads } from "../data/spreads";
import { drawSpread } from "../lib/draw";
import { createReading } from "../lib/interpretation";
import { saveReading } from "../lib/storage";
import type { DrawnCard, Reading } from "../types/tarot";
import { InterpretationPanel } from "../components/spreads/InterpretationPanel";
import { ManualSpreadInput } from "../components/spreads/ManualSpreadInput";
import { QuestionInput } from "../components/spreads/QuestionInput";
import { SpreadBoard } from "../components/spreads/SpreadBoard";
import { SpreadSelector } from "../components/spreads/SpreadSelector";

type ReadingMode = "random" | "manual";

export function ReadingPage({ onSaved }: { onSaved: () => void }) {
  const [spread, setSpread] = useState(spreads[0]);
  const [mode, setMode] = useState<ReadingMode>("random");
  const [question, setQuestion] = useState("");
  const [manualCards, setManualCards] = useState<DrawnCard[]>([]);
  const [userTake, setUserTake] = useState("");
  const [reading, setReading] = useState<Reading | null>(null);
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    setManualCards(spread.positions.map((position) => ({ cardId: "", orientation: "upright", position })));
    setReading(null);
    setSaved(false);
  }, [spread]);

  const doReading = () => {
    const drawn = drawSpread(spread);
    setReading(createReading(spread, drawn, question));
    setSaved(false);
  };

  const interpretManualReading = () => {
    const completeCards = manualCards.filter((card) => card.cardId);
    if (completeCards.length !== spread.positions.length) return;
    setReading(createReading(spread, completeCards, question));
    setSaved(false);
  };

  const save = () => {
    if (!reading) return;
    saveReading(reading);
    setSaved(true);
    onSaved();
  };

  return (
    <div className="space-y-6">
      <section className="max-w-3xl">
        <p className="text-xs uppercase tracking-[0.28em] text-gold">Tiradas</p>
        <h1 className="mt-2 font-display text-4xl text-bone md:text-5xl">Consulta simbólica</h1>
        <p className="mt-3 text-bone/70">
          Formula una pregunta, elige una estructura y usa una tirada aleatoria o carga las cartas que sacaste con tu propio mazo.
        </p>
      </section>
      <SpreadSelector selected={spread} onSelect={setSpread} />
      <div className="grid max-w-xl grid-cols-2 gap-2 rounded-full border border-white/10 bg-white/5 p-1">
        <button
          className={`flex items-center justify-center gap-2 rounded-full px-4 py-3 text-sm transition ${
            mode === "random" ? "bg-gold text-night" : "text-bone/70 hover:bg-white/10"
          }`}
          onClick={() => {
            setMode("random");
            setReading(null);
            setSaved(false);
          }}
          type="button"
        >
          <Sparkles size={17} />
          Aleatoria
        </button>
        <button
          className={`flex items-center justify-center gap-2 rounded-full px-4 py-3 text-sm transition ${
            mode === "manual" ? "bg-gold text-night" : "text-bone/70 hover:bg-white/10"
          }`}
          onClick={() => {
            setMode("manual");
            setReading(null);
            setSaved(false);
          }}
          type="button"
        >
          <Hand size={17} />
          Mi mazo
        </button>
      </div>
      <QuestionInput value={question} onChange={setQuestion} />
      {mode === "manual" && (
        <>
          <ManualSpreadInput spread={spread} cards={manualCards} onChange={setManualCards} />
          <label className="block rounded-lg border border-white/10 bg-white/[0.045] p-4">
            <span className="mb-2 block font-display text-xl text-gold">Lo que yo interpreté</span>
            <textarea
              className="min-h-24 w-full resize-y rounded-lg border border-white/10 bg-night/70 p-4 text-bone outline-none transition focus:border-gold"
              placeholder="Anota aquí lo que viste en tu tirada: intuiciones, símbolos, relación entre cartas o conclusión personal."
              value={userTake}
              onChange={(event) => setUserTake(event.target.value)}
            />
          </label>
        </>
      )}
      <div className="flex flex-wrap gap-3">
        {mode === "random" ? (
          <button className="flex items-center gap-2 rounded-full bg-gold px-5 py-3 font-medium text-night transition hover:bg-bone" onClick={doReading}>
            <Sparkles size={18} />
            Barajar y revelar
          </button>
        ) : (
          <button
            className="flex items-center gap-2 rounded-full bg-gold px-5 py-3 font-medium text-night transition hover:bg-bone disabled:cursor-not-allowed disabled:opacity-55"
            onClick={interpretManualReading}
            disabled={manualCards.filter((card) => card.cardId).length !== spread.positions.length}
          >
            <Hand size={18} />
            Interpretar mi tirada
          </button>
        )}
        {reading && (
          <button
            className="flex items-center gap-2 rounded-full border border-gold/35 px-5 py-3 text-gold transition hover:bg-gold/10 disabled:cursor-default disabled:opacity-60"
            onClick={save}
            disabled={saved}
          >
            <Save size={18} />
            {saved ? "Guardada" : "Guardar tirada"}
          </button>
        )}
      </div>
      <SpreadBoard cards={reading?.cards ?? []} />
      {reading && mode === "manual" && userTake.trim() && (
        <section className="rounded-lg border border-sea/30 bg-sea/10 p-4">
          <h2 className="font-display text-2xl text-sea">Contraste con tu lectura</h2>
          <p className="mt-2 text-bone/80">
            Tu interpretación queda como referencia personal. Compárala con las palabras clave, la orientación de cada carta y la síntesis general: si tu lectura recoge el tono de las posiciones, los bloqueos de las invertidas y el cierre de la última carta, probablemente estás leyendo en una línea coherente.
          </p>
          <p className="mt-3 rounded-md border border-white/10 bg-night/45 p-3 text-sm text-bone/70">{userTake}</p>
        </section>
      )}
      <InterpretationPanel reading={reading} />
    </div>
  );
}
