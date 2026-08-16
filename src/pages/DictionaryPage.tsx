import { useMemo, useState } from "react";
import { tarotCards } from "../data/cards";
import type { Arcana, Suit, TarotCard } from "../types/tarot";
import { CardDetail } from "../components/cards/CardDetail";
import { CardFilters } from "../components/cards/CardFilters";
import { CardGrid } from "../components/cards/CardGrid";

export function DictionaryPage() {
  const [query, setQuery] = useState("");
  const [arcana, setArcana] = useState<"all" | Arcana>("all");
  const [suit, setSuit] = useState<"all" | Suit>("all");
  const [selected, setSelected] = useState<TarotCard | null>(null);

  const filtered = useMemo(() => {
    const normalized = query.trim().toLowerCase();
    return tarotCards.filter((card) => {
      const matchesQuery =
        !normalized ||
        card.name.es.toLowerCase().includes(normalized) ||
        card.name.en.toLowerCase().includes(normalized) ||
        card.keywords.upright.concat(card.keywords.reversed).some((word) => word.toLowerCase().includes(normalized));
      const matchesArcana = arcana === "all" || card.arcana === arcana;
      const matchesSuit = suit === "all" || card.suit === suit;
      return matchesQuery && matchesArcana && matchesSuit;
    });
  }, [query, arcana, suit]);

  return (
    <div className="space-y-6">
      <section className="max-w-3xl">
        <p className="text-xs uppercase tracking-[0.28em] text-gold">Diccionario</p>
        <h1 className="mt-2 font-display text-4xl text-bone md:text-5xl">Las 78 cartas del Tarot</h1>
        <p className="mt-3 text-bone/70">
          Consulta significados al derecho e invertidos, simbolismo, correspondencias y lecturas por áreas desde la tradición del Tarot de Marsella.
        </p>
      </section>
      <CardFilters
        query={query}
        arcana={arcana}
        suit={suit}
        onQueryChange={setQuery}
        onArcanaChange={(next) => {
          setArcana(next);
          if (next === "major") setSuit("all");
        }}
        onSuitChange={setSuit}
      />
      <p className="text-sm text-bone/55">{filtered.length} cartas encontradas</p>
      <CardGrid cards={filtered} onSelect={setSelected} />
      {selected && <CardDetail card={selected} onClose={() => setSelected(null)} />}
    </div>
  );
}
