import { cardById } from "../../data/cards";
import type { Reading } from "../../types/tarot";

export function InterpretationPanel({ reading }: { reading: Reading | null }) {
  if (!reading) return null;
  const finalReading = reading.interpretation.finalReading;

  return (
    <section className="space-y-5">
      {finalReading ? (
        <article className="rounded-lg border border-gold/30 bg-gold/10 p-5 shadow-glow">
          <p className="text-xs uppercase tracking-[0.24em] text-gold/80">Lectura final de la jugada</p>
          <h2 className="mt-2 font-display text-3xl text-gold">{finalReading.headline}</h2>
          <p className="mt-4 text-lg leading-8 text-bone/88">{finalReading.narrative}</p>
          <div className="mt-5 grid gap-4 lg:grid-cols-2">
            <div className="rounded-lg border border-white/10 bg-night/45 p-4">
              <h3 className="font-display text-xl text-bone">Punto de giro</h3>
              <p className="mt-2 text-sm leading-6 text-bone/75">{finalReading.turningPoint}</p>
            </div>
            <div className="rounded-lg border border-white/10 bg-night/45 p-4">
              <h3 className="font-display text-xl text-bone">Consejo de integración</h3>
              <p className="mt-2 text-sm leading-6 text-bone/75">{finalReading.advice}</p>
            </div>
          </div>
          <div className="mt-5 rounded-lg border border-sea/25 bg-sea/10 p-4">
            <h3 className="font-display text-xl text-sea">Para revisar tu lectura</h3>
            <ul className="mt-3 space-y-2 text-sm text-bone/78">
              {finalReading.checkQuestions.map((question) => (
                <li key={question}>• {question}</li>
              ))}
            </ul>
          </div>
        </article>
      ) : (
        <div className="rounded-lg border border-gold/25 bg-gold/10 p-4">
          <h2 className="font-display text-2xl text-gold">Síntesis</h2>
          <p className="mt-2 text-bone/85">{reading.interpretation.synthesis}</p>
        </div>
      )}
      <div>
        <h2 className="mb-3 font-display text-2xl text-bone">Lectura por posiciones</h2>
        <p className="mb-4 text-sm text-bone/60">
          Usa estos matices como apoyo. La lectura principal está en cómo las cartas se enlazan entre sí.
        </p>
      </div>
      <div className="grid gap-4 lg:grid-cols-2">
        {reading.interpretation.individual.map((item) => {
          const card = cardById.get(item.cardId);
          return (
            <article key={`${item.cardId}-${item.positionName}`} className="rounded-lg border border-white/10 bg-white/[0.045] p-4">
              <p className="text-xs uppercase tracking-[0.18em] text-gold">{item.positionName}</p>
              <h3 className="mt-1 font-display text-xl text-bone">{card?.name.es}</h3>
              <p className="mt-2 text-sm leading-6 text-bone/78">{item.text}</p>
            </article>
          );
        })}
      </div>
    </section>
  );
}
