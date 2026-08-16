import { cardById } from "../data/cards";
import type { DrawnCard, Reading, ReadingCardInterpretation, SpreadDefinition, TarotCard } from "../types/tarot";

const orientationLabel = {
  upright: "al derecho",
  reversed: "invertida",
};

const marseilleMajor: Record<string, { upright: string; reversed: string; function: string }> = {
  "major-00-fool": {
    upright: "El Loco abre camino sin forma fija: movimiento, impulso vital, libertad y salida de un marco conocido.",
    reversed: "El Loco invertido muestra errancia, impulso sin escucha o energía que se escapa antes de encontrar dirección.",
    function: "mover lo estancado",
  },
  "major-01-magician": {
    upright: "El Mago inicia, prueba herramientas y convierte posibilidad en primer gesto concreto.",
    reversed: "El Mago invertido dispersa recursos, duda de su capacidad o usa la palabra sin encarnar la acción.",
    function: "comenzar desde lo disponible",
  },
  "major-02-high-priestess": {
    upright: "La Papisa guarda, madura y lee lo invisible: memoria, gestación, secreto fértil y conocimiento interior.",
    reversed: "La Papisa invertida señala cierre excesivo, silencio que pesa o saber retenido que necesita circular.",
    function: "madurar antes de actuar",
  },
  "major-03-empress": {
    upright: "La Emperatriz expresa, crea y comunica; es inteligencia fértil que toma forma.",
    reversed: "La Emperatriz invertida puede hablar de expresión desbordada, creatividad bloqueada o palabra que no encuentra cauce.",
    function: "dar forma a lo que nace",
  },
  "major-04-emperor": {
    upright: "El Emperador estabiliza, concreta y sostiene una estructura en la realidad.",
    reversed: "El Emperador invertido endurece, controla o muestra una base que ya no sostiene con firmeza.",
    function: "poner límites y estructura",
  },
  "major-05-hierophant": {
    upright: "El Papa vincula lo humano con una ley interior: guía, transmisión, consejo y sentido.",
    reversed: "El Papa invertido muestra consejo rígido, dependencia de aprobación o dificultad para escuchar una guía honesta.",
    function: "buscar orientación",
  },
  "major-06-lovers": {
    upright: "El Enamorado pone el deseo ante una elección: vínculos, atracción, duda y cruce de caminos.",
    reversed: "El Enamorado invertido señala indecisión, deseo dividido o elección hecha para complacer.",
    function: "elegir desde el deseo consciente",
  },
  "major-07-chariot": {
    upright: "El Carro avanza con dirección, conquista y afirmación de identidad.",
    reversed: "El Carro invertido puede indicar avance forzado, orgullo, dispersión de rumbo o victoria vacía.",
    function: "dirigir la energía",
  },
  "major-08-strength": {
    upright: "La Fuerza trabaja la potencia instintiva con presencia, cuerpo, deseo y dominio interior.",
    reversed: "La Fuerza invertida muestra tensión con el instinto, cansancio vital o intento de dominar lo que pide integración.",
    function: "integrar instinto y conciencia",
  },
  "major-09-hermit": {
    upright: "El Ermitaño ilumina de cerca: prudencia, búsqueda, tiempo lento y sabiduría que no se apura.",
    reversed: "El Ermitaño invertido puede ser aislamiento, demora excesiva o miedo a mirar con claridad.",
    function: "ver con paciencia",
  },
  "major-10-wheel": {
    upright: "La Rueda muestra giro de ciclo, cambio de fortuna y momento en que algo empieza a moverse.",
    reversed: "La Rueda invertida señala repetición, resistencia al cambio o ciclo que aún no encuentra salida.",
    function: "aceptar el giro",
  },
  "major-11-justice": {
    upright: "La Justicia ordena, mide y devuelve consecuencia: equilibrio, verdad, corte y responsabilidad.",
    reversed: "La Justicia invertida señala desajuste, juicio parcial o una decisión que todavía no está limpia.",
    function: "ordenar y decidir",
  },
  "major-12-hanged-man": {
    upright: "El Colgado suspende la acción para cambiar la mirada; entrega, espera y disponibilidad.",
    reversed: "El Colgado invertido indica estancamiento, sacrificio sin sentido o resistencia a soltar control.",
    function: "mirar desde otro lugar",
  },
  "major-13-death": {
    upright: "El Arcano XIII corta, limpia y transforma; no anuncia muerte literal, sino poda y mutación profunda.",
    reversed: "El Arcano XIII invertido muestra apego a lo viejo, miedo al corte o transformación retenida.",
    function: "cortar lo que ya terminó",
  },
  "major-14-temperance": {
    upright: "Templanza mezcla, repara y comunica fluidamente; armoniza opuestos sin forzar.",
    reversed: "Templanza invertida habla de desmesura, mala mezcla o intercambio que no circula bien.",
    function: "armonizar y reparar",
  },
  "major-15-devil": {
    upright: "El Diablo revela deseo, atadura, poder material y sombra; muestra dónde hay energía intensa.",
    reversed: "El Diablo invertido puede señalar dependencia, manipulación o posibilidad de liberarse de una cadena.",
    function: "reconocer el deseo y la sombra",
  },
  "major-16-tower": {
    upright: "La Casa Dios abre una estructura cerrada: descarga, revelación, liberación de una forma antigua.",
    reversed: "La Casa Dios invertida muestra resistencia a la apertura, tensión contenida o estructura que se defiende.",
    function: "abrir lo cerrado",
  },
  "major-17-star": {
    upright: "La Estrella desnuda y purifica: confianza, entrega, inspiración y contacto con lo esencial.",
    reversed: "La Estrella invertida señala pérdida de confianza, pudor excesivo o dificultad para recibir.",
    function: "volver a la confianza",
  },
  "major-18-moon": {
    upright: "La Luna lleva a lo ancestral, familiar, onírico y emocional; hay profundidad y ambigüedad.",
    reversed: "La Luna invertida puede mostrar confusión, fantasía que domina o miedo heredado que pide nombre.",
    function: "escuchar lo profundo sin perderse",
  },
  "major-19-sun": {
    upright: "El Sol aclara, une y vitaliza; trae reconocimiento, fraternidad y alegría consciente.",
    reversed: "El Sol invertido señala orgullo, claridad parcial o dificultad para compartir la luz.",
    function: "clarificar y compartir",
  },
  "major-20-judgement": {
    upright: "El Juicio llama a despertar: respuesta, revelación, nueva conciencia y renacimiento.",
    reversed: "El Juicio invertido muestra llamado ignorado, culpa o miedo a responder a una verdad interna.",
    function: "responder al llamado",
  },
  "major-21-world": {
    upright: "El Mundo integra y completa: realización, totalidad, danza entre los cuatro planos.",
    reversed: "El Mundo invertido señala cierre pendiente, integración incompleta o plenitud que aún no se encarna.",
    function: "integrar el ciclo",
  },
};

const marseilleNumbers: Record<string, string> = {
  "1": "inicio, semilla y potencia pura",
  "2": "dualidad, acumulación y gestación",
  "3": "expresión, crecimiento y primer despliegue",
  "4": "estabilidad, forma y construcción",
  "5": "crisis creativa, tensión y paso a otro nivel",
  "6": "placer, armonía y elección del corazón",
  "7": "acción dirigida, desafío y afirmación",
  "8": "equilibrio, ajuste y perfeccionamiento",
  "9": "maduración, profundidad y cierre interno",
  "10": "culminación, exceso y cambio de ciclo",
  page: "aprendizaje, mensaje y energía joven del palo",
  knight: "movimiento, búsqueda y transición del palo",
  queen: "receptividad madura y dominio interior del palo",
  king: "autoridad, dominio externo y responsabilidad del palo",
};

const marseilleSuits: Record<string, string> = {
  wands: "Bastos: deseo, trabajo, impulso vital, creatividad y acción",
  cups: "Copas: afectos, receptividad, imaginación, vínculos y mundo emocional",
  swords: "Espadas: pensamiento, palabra, corte, tensión mental y discernimiento",
  pentacles: "Oros: cuerpo, materia, recursos, valor, tiempo y realidad concreta",
};

const marseilleSuitAdvice: Record<string, string> = {
  wands: "dar un paso concreto desde la voluntad, cuidando que el impulso no se vuelva atropello",
  cups: "escuchar el clima emocional y distinguir deseo genuino de apego",
  swords: "nombrar la verdad con precisión, sin convertir la mente en una batalla",
  pentacles: "aterrizar la lectura en hechos, tiempos, cuerpo y recursos disponibles",
};

const marseilleMeaning = (card: TarotCard, orientation: keyof typeof orientationLabel) => {
  if (card.arcana === "major") {
    const major = marseilleMajor[card.id];
    return orientation === "upright" ? major.upright : major.reversed;
  }
  const number = marseilleNumbers[String(card.number)];
  const suit = marseilleSuits[card.suit!];
  const base = `En Tarot de Marsella, ${card.name.es} se lee combinando ${number} con ${suit}.`;
  if (orientation === "upright") {
    return `${base} Al derecho, esa combinación tiende a expresarse con más claridad y disponibilidad.`;
  }
  return `${base} Invertida, esa misma energía aparece bloqueada, excesiva o vivida de manera menos consciente.`;
};

export const interpretCard = (drawn: DrawnCard, question: string): ReadingCardInterpretation => {
  const card = cardById.get(drawn.cardId);
  if (!card) {
    throw new Error(`Carta no encontrada: ${drawn.cardId}`);
  }
  const meaning = marseilleMeaning(card, drawn.orientation);
  const keywords = card.keywords[drawn.orientation].slice(0, 4).join(", ");
  const questionFrame = question.trim()
    ? ` Para la pregunta "${question.trim()}",`
    : " Para una consulta libre,";

  return {
    cardId: card.id,
    positionName: drawn.position.name,
    orientation: drawn.orientation,
    text: `${questionFrame} ${drawn.position.name.toLowerCase()} muestra a ${card.name.es} ${orientationLabel[drawn.orientation]} como ${drawn.position.prompt}. ${meaning} Palabras clave de apoyo: ${keywords}.`,
  };
};

export const synthesizeReading = (cards: DrawnCard[], question: string): string => {
  return buildFinalReading(cards, question).narrative;
};

const suitHint: Record<string, string> = {
  wands: "Bastos: deseo, acción, trabajo e impulso vital",
  cups: "Copas: afecto, receptividad, vínculo e imaginación",
  swords: "Espadas: pensamiento, palabra, corte y discernimiento",
  pentacles: "Oros: cuerpo, materia, recursos y realidad concreta",
};

const suitAction: Record<string, string> = {
  wands: marseilleSuitAdvice.wands,
  cups: marseilleSuitAdvice.cups,
  swords: marseilleSuitAdvice.swords,
  pentacles: marseilleSuitAdvice.pentacles,
};

const cardTone = (card: TarotCard, drawn: DrawnCard) => {
  const words = card.arcana === "major"
    ? marseilleMajor[card.id].function
    : `${marseilleNumbers[String(card.number)]} en ${marseilleSuits[card.suit!].split(":")[0]}`;
  return `${card.name.es} ${orientationLabel[drawn.orientation]} (${words})`;
};

const resolveCards = (cards: DrawnCard[]) =>
  cards.map((drawn) => {
    const card = cardById.get(drawn.cardId);
    if (!card) {
      throw new Error(`Carta no encontrada: ${drawn.cardId}`);
    }
    return { card, drawn };
  });

const getByPosition = (resolved: ReturnType<typeof resolveCards>, names: string[]) =>
  resolved.find(({ drawn }) => names.some((name) => drawn.position.name.toLowerCase().includes(name)));

const describeArc = (resolved: ReturnType<typeof resolveCards>) => {
  const first = resolved[0];
  const last = resolved[resolved.length - 1];
  const middle = resolved[Math.floor((resolved.length - 1) / 2)];
  if (resolved.length === 3) {
    return `La jugada se mueve de ${cardTone(first.card, first.drawn)} hacia ${cardTone(last.card, last.drawn)}. Entre ambas, ${cardTone(middle.card, middle.drawn)} funciona como bisagra: no es una carta aislada, sino el modo en que el pasado o la situación actual se transforma en resultado.`;
  }
  return `La jugada abre con ${cardTone(first.card, first.drawn)}, encuentra su zona de tensión alrededor de ${cardTone(middle.card, middle.drawn)} y termina en ${cardTone(last.card, last.drawn)}. Ese recorrido importa más que cada carta por separado: muestra de dónde nace el tema, dónde se traba y qué tipo de integración pide.`;
};

export const buildFinalReading = (
  cards: DrawnCard[],
  question: string,
): NonNullable<Reading["interpretation"]["finalReading"]> => {
  const resolved = cards.map((drawn) => {
    const card = cardById.get(drawn.cardId);
    if (!card) {
      throw new Error(`Carta no encontrada: ${drawn.cardId}`);
    }
    return { card, drawn };
  });
  const majors = resolved.filter(({ card }) => card.arcana === "major").length;
  const reversed = resolved.filter(({ drawn }) => drawn.orientation === "reversed").length;
  const dominantSuits = resolved
    .filter(({ card }) => card.suit)
    .reduce<Record<string, number>>((accumulator, { card }) => {
      accumulator[card.suit!] = (accumulator[card.suit!] ?? 0) + 1;
      return accumulator;
    }, {});
  const topSuit = Object.entries(dominantSuits).sort((a, b) => b[1] - a[1])[0]?.[0];

  const challenge = getByPosition(resolved, ["obstáculo", "desafío"]);
  const base = getByPosition(resolved, ["base", "pasado", "situación"]);
  const outcome = getByPosition(resolved, ["resultado", "futuro"]) ?? resolved[resolved.length - 1];
  const self = getByPosition(resolved, ["sí mismo", "actual", "presente", "acción"]);
  const arcanaTone =
    majors >= Math.ceil(cards.length / 2)
      ? "En clave marsellesa, la presencia fuerte de Arcanos Mayores indica que la tirada habla de fuerzas arquetípicas: etapas, umbrales, decisiones de fondo y movimientos de conciencia."
      : "Como predominan Arcanos Menores, la lectura se construye desde número y palo: habla de ritmos concretos, recursos, vínculos, acciones y tensiones de la vida diaria.";
  const reversalTone =
    reversed > cards.length / 2
      ? "Muchas cartas invertidas no cierran la lectura: muestran energía disponible, pero trabada, contenida o vivida hacia adentro."
      : reversed > 0
        ? "Las invertidas señalan puntos precisos de fricción, no un bloqueo total de la jugada."
        : "La lectura fluye sin grandes bloqueos de orientación, así que la clave está más en integrar que en destrabar.";
  const dominantTone = topSuit
    ? `El tono dominante pasa por ${suitHint[topSuit]}.`
    : "Los palos aparecen bastante repartidos, así que la lectura marsellesa pide equilibrar deseo, emoción, pensamiento y materia.";
  const questionFrame = question.trim()
    ? `Para "${question.trim()}",`
    : "Para esta consulta,";
  const challengeText = challenge
    ? `El punto delicado está en ${challenge.drawn.position.name}: ${cardTone(challenge.card, challenge.drawn)} marca lo que no conviene negar ni resolver a la fuerza.`
    : `El punto delicado aparece en cómo se enlazan las cartas centrales: ahí se ve qué parte de la historia pide más honestidad.`;
  const baseText = base
    ? `La raíz de la jugada se reconoce en ${base.drawn.position.name}: ${cardTone(base.card, base.drawn)} muestra desde dónde vienes o qué energía sostiene la pregunta.`
    : `La primera carta funciona como raíz y marca el clima desde el que nace la pregunta.`;
  const outcomeText = `El desenlace potencial no es una sentencia: ${cardTone(outcome.card, outcome.drawn)} muestra hacia dónde tiende la situación si se escucha el aprendizaje de la tirada.`;
  const selfText = self
    ? `Tu lugar activo aparece en ${self.drawn.position.name}: ${cardTone(self.card, self.drawn)} sugiere cómo participar en la situación sin quedar atrapado por una lectura única.`
    : `Tu lugar activo está en tomar la tirada como espejo: no solo preguntar qué pasará, sino qué está pidiendo conciencia ahora.`;
  const action = topSuit ? suitAction[topSuit] : "unir intuición, claridad mental, acción y realismo en un paso pequeño";
  const headline =
    reversed > cards.length / 2
      ? "La jugada habla de una energía que necesita destrabarse antes de definirse"
      : majors >= Math.ceil(cards.length / 2)
        ? "La jugada marca un cambio de conciencia más que una respuesta simple"
        : "La jugada pide ordenar lo cotidiano para que el resultado tome forma";
  const narrative = `${questionFrame} la lectura marsellesa no funciona como una sentencia cerrada, sino como una arquitectura de relaciones entre arcanos, números, palos y posiciones. ${describeArc(resolved)} ${baseText} ${challengeText} ${selfText} ${outcomeText} ${arcanaTone} ${dominantTone} ${reversalTone}`;
  const turningPoint = challenge
    ? `El giro está en trabajar ${challenge.card.name.es} en la posición de ${challenge.drawn.position.name.toLowerCase()}: ahí la tirada muestra qué cambia cuando dejas de mirar una carta como “buena o mala” y la lees como función dentro de la mesa.`
    : `El giro está en leer la carta central como puente: no describe todo el asunto, pero sí cómo se transforma la energía inicial en una posibilidad de cierre.`;
  const advice = `La acción más coherente es ${action}. No tomes el resultado como destino fijo: úsalo como orientación para elegir mejor el próximo gesto.`;

  return {
    headline,
    narrative,
    turningPoint,
    advice,
    checkQuestions: [
      "¿Mi interpretación conecta las posiciones entre sí o solo describe cartas sueltas?",
      "¿Estoy leyendo los menores por número y palo, no como escenas cerradas?",
      `¿El resultado potencial conversa con la primera carta y con ${challenge ? "el obstáculo/desafío" : "la carta central"}?`,
    ],
  };
};

export const createReading = (
  spread: SpreadDefinition,
  cards: DrawnCard[],
  question: string,
): Reading => ({
  id: crypto.randomUUID(),
  createdAt: new Date().toISOString(),
  question: question.trim(),
  spreadId: spread.id,
  cards,
  interpretation: {
    individual: cards.map((card) => interpretCard(card, question)),
    synthesis: synthesizeReading(cards, question),
    finalReading: buildFinalReading(cards, question),
  },
});
