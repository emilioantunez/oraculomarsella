import { Search } from "lucide-react";
import type { Arcana, Suit } from "../../types/tarot";

interface CardFiltersProps {
  query: string;
  arcana: "all" | Arcana;
  suit: "all" | Suit;
  onQueryChange: (query: string) => void;
  onArcanaChange: (arcana: "all" | Arcana) => void;
  onSuitChange: (suit: "all" | Suit) => void;
}

export function CardFilters({ query, arcana, suit, onQueryChange, onArcanaChange, onSuitChange }: CardFiltersProps) {
  return (
    <div className="grid gap-3 rounded-lg border border-white/10 bg-white/[0.045] p-4 md:grid-cols-[1fr_180px_180px]">
      <label className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-bone/45" size={18} />
        <input
          className="w-full rounded-md border border-white/10 bg-night/70 py-3 pl-10 pr-3 text-bone outline-none transition focus:border-gold"
          placeholder="Buscar por nombre o palabra clave"
          value={query}
          onChange={(event) => onQueryChange(event.target.value)}
        />
      </label>
      <select
        className="rounded-md border border-white/10 bg-night/70 px-3 py-3 text-bone outline-none focus:border-gold"
        value={arcana}
        onChange={(event) => onArcanaChange(event.target.value as "all" | Arcana)}
      >
        <option value="all">Todos los arcanos</option>
        <option value="major">Mayores</option>
        <option value="minor">Menores</option>
      </select>
      <select
        className="rounded-md border border-white/10 bg-night/70 px-3 py-3 text-bone outline-none focus:border-gold"
        value={suit}
        onChange={(event) => onSuitChange(event.target.value as "all" | Suit)}
        disabled={arcana === "major"}
      >
        <option value="all">Todos los palos</option>
        <option value="wands">Bastos</option>
        <option value="cups">Copas</option>
        <option value="swords">Espadas</option>
        <option value="pentacles">Oros</option>
      </select>
    </div>
  );
}
