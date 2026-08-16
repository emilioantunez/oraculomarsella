import { X } from "lucide-react";
import { arcanaLabel, suitLabels } from "../../lib/text";
import type { TarotCard } from "../../types/tarot";
import { SymbolicCardArt } from "./SymbolicCardArt";

export function CardDetail({ card, onClose }: { card: TarotCard; onClose: () => void }) {
  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-night/80 p-4 backdrop-blur">
      <article className="mx-auto max-w-5xl rounded-lg border border-gold/25 bg-ink p-4 shadow-2xl md:p-6">
        <div className="mb-4 flex items-start justify-between gap-4">
          <div>
            <p className="text-xs uppercase tracking-[0.24em] text-gold">
              {arcanaLabel[card.arcana]}{card.suit ? ` · ${suitLabels[card.suit]}` : ""}
            </p>
            <h2 className="mt-1 font-display text-3xl text-bone">{card.name.es}</h2>
            <p className="text-bone/55">{card.name.en}</p>
          </div>
          <button className="rounded-full border border-white/10 p-2 text-bone/75 hover:bg-white/10" onClick={onClose} title="Cerrar">
            <X size={20} />
          </button>
        </div>
        <div className="grid gap-6 lg:grid-cols-[280px_1fr]">
          <SymbolicCardArt card={card} />
          <div className="space-y-5">
            <section className="grid gap-4 md:grid-cols-2">
              <Info title="Al derecho" text={card.meaning.upright} words={card.keywords.upright} />
              <Info title="Invertida" text={card.meaning.reversed} words={card.keywords.reversed} />
            </section>
            <section>
              <h3 className="font-display text-xl text-gold">Simbolismo</h3>
              <p className="mt-2 text-bone/80">{card.symbolism}</p>
            </section>
            <section>
              <h3 className="font-display text-xl text-gold">Correspondencias</h3>
              <p className="mt-2 text-bone/80">
                {[card.correspondences.element, card.correspondences.planet, card.correspondences.zodiac, card.correspondences.astrology]
                  .filter(Boolean)
                  .join(" · ") || "Sin correspondencia única consensuada."}
              </p>
            </section>
          </div>
        </div>
        <section className="mt-6 grid gap-4 md:grid-cols-2">
          {Object.entries(card.areas).map(([key, value]) => (
            <div key={key} className="rounded-lg border border-white/10 bg-white/[0.04] p-4">
              <h3 className="font-display text-lg text-gold">{areaTitle(key)}</h3>
              <p className="mt-2 text-sm text-bone/80"><strong>Derecho:</strong> {value.upright}</p>
              <p className="mt-2 text-sm text-bone/80"><strong>Invertida:</strong> {value.reversed}</p>
            </div>
          ))}
        </section>
      </article>
    </div>
  );
}

function Info({ title, text, words }: { title: string; text: string; words: string[] }) {
  return (
    <div className="rounded-lg border border-white/10 bg-white/[0.04] p-4">
      <h3 className="font-display text-xl text-gold">{title}</h3>
      <p className="mt-2 text-bone/80">{text}</p>
      <div className="mt-3 flex flex-wrap gap-2">
        {words.map((word) => (
          <span key={word} className="rounded-full border border-gold/25 px-2 py-1 text-xs text-gold/90">{word}</span>
        ))}
      </div>
    </div>
  );
}

function areaTitle(key: string) {
  return {
    love: "Amor",
    workMoney: "Trabajo / dinero",
    health: "Salud",
    spirituality: "Espiritualidad",
  }[key];
}
