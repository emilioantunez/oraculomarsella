import type { SpreadDefinition } from "../types/tarot";

export const spreads: SpreadDefinition[] = [
  {
    id: "three-past-present-future",
    name: "3 cartas: Pasado / Presente / Futuro",
    description: "Una lectura temporal simple para observar origen, centro actual y tendencia.",
    positions: [
      { index: 1, name: "Pasado", shortName: "Pasado", prompt: "raíz o influencia que viene de atrás" },
      { index: 2, name: "Presente", shortName: "Presente", prompt: "energía principal de la situación actual" },
      { index: 3, name: "Futuro", shortName: "Futuro", prompt: "dirección probable si se mantiene la dinámica presente" },
    ],
  },
  {
    id: "three-situation-action-result",
    name: "3 cartas: Situación / Acción / Resultado",
    description: "Una lectura práctica para decidir un enfoque ante una pregunta concreta.",
    positions: [
      { index: 1, name: "Situación", shortName: "Situación", prompt: "lo esencial del asunto consultado" },
      { index: 2, name: "Acción", shortName: "Acción", prompt: "actitud o movimiento recomendado" },
      { index: 3, name: "Resultado", shortName: "Resultado", prompt: "resultado potencial de actuar con conciencia" },
    ],
  },
  {
    id: "five-card",
    name: "5 cartas",
    description: "Explora contexto, tensión, antecedentes, futuro cercano y resultado potencial.",
    positions: [
      { index: 1, name: "Situación actual", shortName: "Actual", prompt: "núcleo presente de la consulta" },
      { index: 2, name: "Obstáculo", shortName: "Obstáculo", prompt: "resistencia, bloqueo o aprendizaje" },
      { index: 3, name: "Pasado reciente", shortName: "Pasado", prompt: "hecho o actitud reciente que influye" },
      { index: 4, name: "Futuro cercano", shortName: "Futuro", prompt: "desarrollo inmediato probable" },
      { index: 5, name: "Resultado potencial", shortName: "Resultado", prompt: "síntesis posible si se integra la lectura" },
    ],
  },
  {
    id: "celtic-cross",
    name: "Cruz Celta",
    description: "Tirada completa de 10 cartas para una mirada amplia y matizada.",
    positions: [
      { index: 1, name: "Situación", shortName: "Centro", prompt: "tema central de la consulta" },
      { index: 2, name: "Desafío", shortName: "Desafío", prompt: "factor que cruza o tensiona el tema" },
      { index: 3, name: "Base", shortName: "Base", prompt: "raíz inconsciente o fundamento" },
      { index: 4, name: "Pasado", shortName: "Pasado", prompt: "influencia que empieza a quedar atrás" },
      { index: 5, name: "Corona", shortName: "Corona", prompt: "aspiración, idea dominante o posibilidad visible" },
      { index: 6, name: "Futuro", shortName: "Futuro", prompt: "próximo giro de la situación" },
      { index: 7, name: "Sí mismo", shortName: "Yo", prompt: "actitud personal ante el asunto" },
      { index: 8, name: "Entorno", shortName: "Entorno", prompt: "influencias externas o clima alrededor" },
      { index: 9, name: "Esperanzas y miedos", shortName: "Deseo/Miedo", prompt: "expectativa emocional ambivalente" },
      { index: 10, name: "Resultado", shortName: "Resultado", prompt: "integración y desenlace potencial" },
    ],
  },
];
