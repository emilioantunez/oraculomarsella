import { ReactNode } from "react";
import { Disclaimer } from "./Disclaimer";
import { Header } from "./Header";

type View = "dictionary" | "reading" | "history";

interface AppShellProps {
  children: ReactNode;
  view: View;
  onViewChange: (view: View) => void;
}

export function AppShell({ children, view, onViewChange }: AppShellProps) {
  return (
    <div className="min-h-screen">
      <Header view={view} onViewChange={onViewChange} />
      <Disclaimer />
      <main className="mx-auto max-w-7xl px-4 py-8">{children}</main>
    </div>
  );
}
