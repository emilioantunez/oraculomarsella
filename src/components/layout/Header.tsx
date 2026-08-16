import { BookOpen, History, Sparkles } from "lucide-react";

type View = "dictionary" | "reading" | "history";

interface HeaderProps {
  view: View;
  onViewChange: (view: View) => void;
}

const items = [
  { id: "dictionary" as const, label: "Cartas", icon: BookOpen },
  { id: "reading" as const, label: "Tiradas", icon: Sparkles },
  { id: "history" as const, label: "Historial", icon: History },
];

export function Header({ view, onViewChange }: HeaderProps) {
  return (
    <header className="sticky top-0 z-30 border-b border-white/10 bg-night/85 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 py-4 sm:flex-row sm:items-center sm:justify-between">
        <button className="text-left" onClick={() => onViewChange("dictionary")}>
          <p className="font-display text-2xl text-gold">Oráculo Marsella</p>
          <p className="text-xs uppercase tracking-[0.24em] text-bone/55">Tarot de Marsella</p>
        </button>
        <nav className="grid grid-cols-3 gap-2 rounded-full border border-white/10 bg-white/5 p-1">
          {items.map((item) => {
            const Icon = item.icon;
            const active = item.id === view;
            return (
              <button
                key={item.id}
                className={`flex items-center justify-center gap-2 rounded-full px-3 py-2 text-sm transition ${
                  active ? "bg-gold text-night" : "text-bone/75 hover:bg-white/10 hover:text-bone"
                }`}
                onClick={() => onViewChange(item.id)}
                title={item.label}
              >
                <Icon size={16} />
                <span>{item.label}</span>
              </button>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
