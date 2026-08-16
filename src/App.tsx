import { useEffect, useState } from "react";
import { AppShell } from "./components/layout/AppShell";
import { getReadings } from "./lib/storage";
import { DictionaryPage } from "./pages/DictionaryPage";
import { HistoryPage } from "./pages/HistoryPage";
import { ReadingPage } from "./pages/ReadingPage";
import type { Reading } from "./types/tarot";

type View = "dictionary" | "reading" | "history";

export default function App() {
  const [view, setView] = useState<View>("dictionary");
  const [readings, setReadings] = useState<Reading[]>([]);

  const refreshHistory = () => setReadings(getReadings());

  useEffect(() => {
    refreshHistory();
  }, []);

  return (
    <AppShell view={view} onViewChange={setView}>
      {view === "dictionary" && <DictionaryPage />}
      {view === "reading" && <ReadingPage onSaved={refreshHistory} />}
      {view === "history" && <HistoryPage readings={readings} onChanged={refreshHistory} />}
    </AppShell>
  );
}
