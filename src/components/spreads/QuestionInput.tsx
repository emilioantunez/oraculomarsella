export function QuestionInput({ value, onChange }: { value: string; onChange: (value: string) => void }) {
  return (
    <label className="block">
      <span className="mb-2 block text-sm font-medium text-bone/75">Pregunta o tema de consulta</span>
      <textarea
        className="min-h-24 w-full resize-y rounded-lg border border-white/10 bg-night/70 p-4 text-bone outline-none transition focus:border-gold"
        placeholder="Ej: ¿Qué necesito comprender sobre mi situación actual?"
        value={value}
        onChange={(event) => onChange(event.target.value)}
      />
    </label>
  );
}
