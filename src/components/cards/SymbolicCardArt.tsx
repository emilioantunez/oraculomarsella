import type { TarotCard } from "../../types/tarot";

const suitGlyph = {
  wands: "♣",
  cups: "◡",
  swords: "†",
  pentacles: "✦",
};

export function SymbolicCardArt({ card, small = false }: { card: TarotCard; small?: boolean }) {
  const isMajor = card.arcana === "major";
  const glyph = isMajor ? "☉" : suitGlyph[card.suit!];
  const count = typeof card.number === "number" ? Math.min(card.number || 1, 10) : 4;
  return (
    <div
      className={`relative overflow-hidden rounded-md border border-gold/45 bg-ink shadow-glow ${
        small ? "h-48" : "h-[30rem]"
      }`}
    >
      <div className="absolute inset-2 rounded border border-gold/20" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_25%,rgba(215,181,109,0.28),transparent_34%),linear-gradient(160deg,rgba(140,79,216,0.34),transparent_60%)]" />
      <img
        className="relative z-10 h-full w-full object-contain p-2"
        src={`/cards/${card.id}.png`}
        alt={`Carta ${card.name.es} del Tarot de Marsella`}
        loading={small ? "lazy" : "eager"}
      />
      <div className="absolute left-3 top-2 font-display text-sm text-gold">{card.number}</div>
      <div className="absolute right-3 top-2 text-sm text-gold">{isMajor ? "★" : glyph}</div>
      <div className="pointer-events-none absolute inset-0 -z-10 flex h-full flex-col items-center justify-center gap-3 px-4 text-center">
        <div className="grid max-w-24 grid-cols-3 gap-2">
          {Array.from({ length: count }).map((_, index) => (
            <span key={index} className="text-2xl text-gold drop-shadow">
              {glyph}
            </span>
          ))}
        </div>
        <p className="font-display text-lg leading-tight text-bone">{card.name.es}</p>
      </div>
    </div>
  );
}
