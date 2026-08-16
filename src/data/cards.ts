import type { Suit, TarotCard } from "../types/tarot";
import { sources } from "./sources";

const area = (theme: string, upright: string, reversed: string) => ({
  love: {
    upright: `En amor, ${upright}`,
    reversed: `En amor, ${reversed}`,
  },
  workMoney: {
    upright: `En trabajo y dinero, ${theme} favorece decisiones conscientes, avance gradual y lectura clara de prioridades.`,
    reversed: `En trabajo y dinero, conviene revisar excesos, bloqueos o supuestos antes de comprometer recursos.`,
  },
  health: {
    upright: `En salud, invita a observar hábitos y energía vital desde la prudencia, sin sustituir orientación profesional.`,
    reversed: `En salud, sugiere bajar el ritmo, pedir apoyo cualificado si hace falta y evitar conclusiones alarmistas.`,
  },
  spirituality: {
    upright: `En espiritualidad, ${theme} abre una comprensión más honesta del propio camino.`,
    reversed: `En espiritualidad, pide integrar la sombra de esta carta con paciencia y discernimiento.`,
  },
});

const majorCards: TarotCard[] = [
  {
    id: "major-00-fool",
    name: { es: "El Loco", en: "The Fool" },
    arcana: "major",
    number: 0,
    keywords: {
      upright: ["comienzo", "espontaneidad", "libertad", "confianza"],
      reversed: ["imprudencia", "ingenuidad", "dispersión", "riesgo innecesario"],
    },
    meaning: {
      upright: "Inicio de un camino, apertura a lo desconocido y confianza en la experiencia. Representa potencial puro antes de tomar forma.",
      reversed: "Impulso sin evaluación, falta de dirección o rechazo a mirar consecuencias prácticas.",
    },
    symbolism: "Una figura avanza hacia un precipicio con una pequeña bolsa; el perro, la rosa blanca y el sol hablan de inocencia, vitalidad y advertencia.",
    correspondences: { element: "air", planet: "Urano", astrology: "Aire / Urano en correspondencias modernas" },
    areas: area("la apertura a lo nuevo", "puede señalar frescura, aventura emocional o una relación que necesita espacio.", "advierte idealización, promesas vagas o impulsividad afectiva."),
    sourceNotes: sources,
  },
  {
    id: "major-01-magician",
    name: { es: "El Mago", en: "The Magician" },
    arcana: "major",
    number: 1,
    keywords: {
      upright: ["voluntad", "habilidad", "manifestación", "iniciativa"],
      reversed: ["manipulación", "bloqueo", "engaño", "potencial disperso"],
    },
    meaning: {
      upright: "Capacidad de unir intención, palabra y acción. Los recursos ya están presentes y deben usarse con precisión.",
      reversed: "Talento mal empleado, promesas sin sustento o dificultad para convertir intención en acto.",
    },
    symbolism: "El Mago eleva una vara y señala la tierra, con los cuatro símbolos de los palos sobre la mesa: voluntad que conecta arriba y abajo.",
    correspondences: { planet: "Mercurio", astrology: "Mercurio" },
    areas: area("la voluntad dirigida", "favorece comunicación clara, magnetismo y comienzo activo.", "señala juegos de poder, seducción ambigua o palabras que no se sostienen."),
    sourceNotes: sources,
  },
  {
    id: "major-02-high-priestess",
    name: { es: "La Sacerdotisa", en: "The High Priestess" },
    arcana: "major",
    number: 2,
    keywords: {
      upright: ["intuición", "misterio", "silencio", "sabiduría interior"],
      reversed: ["secretos", "desconexión", "confusión", "intuición ignorada"],
    },
    meaning: {
      upright: "Conocimiento velado, escucha interna y comprensión que madura en silencio antes de expresarse.",
      reversed: "Información retenida, ruido emocional o dificultad para confiar en señales internas.",
    },
    symbolism: "Sentada entre columnas, con velo, luna y rollo de la Torá; representa el umbral entre lo visible y lo oculto.",
    correspondences: { planet: "Luna", astrology: "Luna" },
    areas: area("la escucha profunda", "indica sensibilidad, vínculo reservado o necesidad de respetar tiempos íntimos.", "puede mostrar silencios incómodos, secretos o intuiciones desatendidas."),
    sourceNotes: sources,
  },
  {
    id: "major-03-empress",
    name: { es: "La Emperatriz", en: "The Empress" },
    arcana: "major",
    number: 3,
    keywords: {
      upright: ["fertilidad", "creatividad", "abundancia", "cuidado"],
      reversed: ["dependencia", "bloqueo creativo", "exceso", "descuido"],
    },
    meaning: {
      upright: "Crecimiento natural, placer, nutrición y capacidad de dar forma fértil a una idea o vínculo.",
      reversed: "Cuidado desequilibrado, creatividad bloqueada o abundancia vivida como exceso.",
    },
    symbolism: "Figura coronada en un entorno fértil, rodeada de trigo, agua y símbolos venusinos: naturaleza receptiva y generadora.",
    correspondences: { planet: "Venus", astrology: "Venus" },
    areas: area("la fertilidad creativa", "habla de sensualidad, ternura y posibilidad de crecimiento afectivo.", "marca dependencia, complacencia o falta de nutrición mutua."),
    sourceNotes: sources,
  },
  {
    id: "major-04-emperor",
    name: { es: "El Emperador", en: "The Emperor" },
    arcana: "major",
    number: 4,
    keywords: {
      upright: ["estructura", "autoridad", "orden", "protección"],
      reversed: ["rigidez", "control", "autoritarismo", "inestabilidad"],
    },
    meaning: {
      upright: "Orden, límites y autoridad madura. La energía se estabiliza mediante estructura y responsabilidad.",
      reversed: "Control excesivo, resistencia a los límites o falta de una base firme.",
    },
    symbolism: "Sentado en un trono de piedra con carneros, expresa gobierno, disciplina y voluntad encarnada.",
    correspondences: { zodiac: "Aries", astrology: "Aries" },
    areas: area("la estructura consciente", "favorece compromiso, protección y acuerdos claros.", "puede señalar dominio, frialdad o lucha por el control."),
    sourceNotes: sources,
  },
  {
    id: "major-05-hierophant",
    name: { es: "El Hierofante", en: "The Hierophant" },
    arcana: "major",
    number: 5,
    keywords: {
      upright: ["tradición", "enseñanza", "rito", "pertenencia"],
      reversed: ["dogma", "rebeldía", "convención vacía", "criterio propio"],
    },
    meaning: {
      upright: "Aprendizaje dentro de una tradición, guía ética y transmisión de conocimiento establecido.",
      reversed: "Cuestionamiento de normas, necesidad de pensar por cuenta propia o rigidez institucional.",
    },
    symbolism: "Un maestro religioso bendice entre columnas ante dos iniciados; las llaves cruzadas aluden a doctrina y acceso espiritual.",
    correspondences: { zodiac: "Tauro", astrology: "Tauro" },
    areas: area("la tradición y el aprendizaje", "indica compromiso, valores compartidos o formalización.", "sugiere presión social, relación rígida o necesidad de redefinir creencias."),
    sourceNotes: sources,
  },
  {
    id: "major-06-lovers",
    name: { es: "Los Enamorados", en: "The Lovers" },
    arcana: "major",
    number: 6,
    keywords: {
      upright: ["elección", "unión", "valores", "armonía"],
      reversed: ["indecisión", "desalineación", "tentación", "conflicto de valores"],
    },
    meaning: {
      upright: "Elección desde valores profundos, unión consciente y armonía entre deseo y responsabilidad.",
      reversed: "Dudas, división interna o elección tomada sin coherencia con lo esencial.",
    },
    symbolism: "La pareja bajo una figura angélica une amor humano, conciencia moral y elección.",
    correspondences: { zodiac: "Géminis", astrology: "Géminis" },
    areas: area("la elección del corazón", "es una carta central de vínculo, atracción y decisión afectiva.", "muestra triángulos, ambivalencia o falta de alineación emocional."),
    sourceNotes: sources,
  },
  {
    id: "major-07-chariot",
    name: { es: "El Carro", en: "The Chariot" },
    arcana: "major",
    number: 7,
    keywords: {
      upright: ["avance", "control", "victoria", "dirección"],
      reversed: ["descontrol", "bloqueo", "prisa", "dirección perdida"],
    },
    meaning: {
      upright: "Triunfo mediante disciplina emocional, enfoque y dirección firme.",
      reversed: "Fuerzas opuestas sin conducción, presión excesiva o avance forzado.",
    },
    symbolism: "Auriga coronado entre esfinges opuestas; el dominio no nace de la fuerza bruta sino de la voluntad integrada.",
    correspondences: { zodiac: "Cáncer", astrology: "Cáncer" },
    areas: area("el avance dirigido", "señala decisión para mover la relación o superar distancia.", "advierte tironeos, competencia o querer ganar más que comprender."),
    sourceNotes: sources,
  },
  {
    id: "major-08-strength",
    name: { es: "La Fuerza", en: "Strength" },
    arcana: "major",
    number: 11,
    keywords: {
      upright: ["coraje", "paciencia", "templanza instintiva", "compasión"],
      reversed: ["inseguridad", "reactividad", "agotamiento", "dominio forzado"],
    },
    meaning: {
      upright: "Fuerza suave: dominio de los impulsos mediante paciencia, confianza y ternura firme.",
      reversed: "Desgaste, inseguridad o intento de controlar lo instintivo por presión.",
    },
    symbolism: "Una mujer abre con calma la boca del león; el infinito sobre su cabeza habla de poder interior continuo.",
    correspondences: { zodiac: "Leo", astrology: "Leo" },
    areas: area("la fuerza compasiva", "indica paciencia, deseo vital y capacidad de cuidar sin dominar.", "sugiere orgullo herido, impulsos difíciles o cansancio emocional."),
    sourceNotes: sources,
  },
  {
    id: "major-09-hermit",
    name: { es: "El Ermitaño", en: "The Hermit" },
    arcana: "major",
    number: 9,
    keywords: {
      upright: ["introspección", "prudencia", "guía", "búsqueda"],
      reversed: ["aislamiento", "soledad", "evasión", "desorientación"],
    },
    meaning: {
      upright: "Retiro sabio para encontrar una luz propia antes de actuar o enseñar.",
      reversed: "Aislamiento estéril, distancia defensiva o rechazo de guía necesaria.",
    },
    symbolism: "Anciano con lámpara en la cima; la estrella dentro de la lámpara sugiere sabiduría concentrada.",
    correspondences: { zodiac: "Virgo", astrology: "Virgo" },
    areas: area("la introspección", "pide espacio, madurez y honestidad antes de definir el vínculo.", "puede indicar frialdad, retirada o soledad no expresada."),
    sourceNotes: sources,
  },
  {
    id: "major-10-wheel",
    name: { es: "La Rueda de la Fortuna", en: "Wheel of Fortune" },
    arcana: "major",
    number: 10,
    keywords: {
      upright: ["ciclo", "cambio", "oportunidad", "destino"],
      reversed: ["resistencia", "repetición", "demora", "inestabilidad"],
    },
    meaning: {
      upright: "Giro de ciclo, movimiento inevitable y oportunidad de alinearse con el cambio.",
      reversed: "Resistencia a un ciclo que cambia o repetición de patrones no comprendidos.",
    },
    symbolism: "Rueda con figuras simbólicas y criaturas de los evangelistas; recuerda ascenso, descenso y ley cíclica.",
    correspondences: { planet: "Júpiter", astrology: "Júpiter" },
    areas: area("los ciclos de cambio", "marca un giro, encuentro significativo o cambio de etapa.", "señala altibajos, repetición de dinámicas o falta de estabilidad."),
    sourceNotes: sources,
  },
  {
    id: "major-11-justice",
    name: { es: "La Justicia", en: "Justice" },
    arcana: "major",
    number: 8,
    keywords: {
      upright: ["equilibrio", "verdad", "ley", "responsabilidad"],
      reversed: ["injusticia", "evasión", "sesgo", "desequilibrio"],
    },
    meaning: {
      upright: "Claridad, consecuencia y equilibrio. Cada decisión pide honestidad y responsabilidad.",
      reversed: "Falta de imparcialidad, asuntos pendientes o negativa a asumir consecuencias.",
    },
    symbolism: "Figura con balanza y espada; une discernimiento intelectual y equilibrio moral.",
    correspondences: { zodiac: "Libra", astrology: "Libra" },
    areas: area("la verdad equilibrada", "favorece acuerdos justos y conversaciones honestas.", "indica reclamos, desigualdad o verdades evitadas."),
    sourceNotes: sources,
  },
  {
    id: "major-12-hanged-man",
    name: { es: "El Colgado", en: "The Hanged Man" },
    arcana: "major",
    number: 12,
    keywords: {
      upright: ["pausa", "entrega", "nueva perspectiva", "sacrificio"],
      reversed: ["estancamiento", "resistencia", "victimismo", "demora inútil"],
    },
    meaning: {
      upright: "Suspensión voluntaria que permite ver desde otro ángulo y soltar control.",
      reversed: "Parálisis sin aprendizaje o resistencia a una entrega necesaria.",
    },
    symbolism: "Hombre suspendido de un pie con halo sereno; el sacrificio es interior y transformador.",
    correspondences: { planet: "Neptuno", element: "water", astrology: "Agua / Neptuno en correspondencias modernas" },
    areas: area("la pausa transformadora", "pide paciencia, empatía y cambio de mirada.", "señala espera agotadora, dependencia o sacrificios no correspondidos."),
    sourceNotes: sources,
  },
  {
    id: "major-13-death",
    name: { es: "La Muerte", en: "Death" },
    arcana: "major",
    number: 13,
    keywords: {
      upright: ["transformación", "final", "renovación", "desapego"],
      reversed: ["resistencia al cambio", "estancamiento", "duelo prolongado", "cierre pendiente"],
    },
    meaning: {
      upright: "Cierre simbólico y transformación profunda. No anuncia muerte literal: señala que una forma termina para permitir otra.",
      reversed: "Apego a lo que ya cumplió su ciclo o dificultad para atravesar una transición.",
    },
    symbolism: "La figura de la muerte avanza con bandera; personas de distintos rangos muestran que el cambio alcanza a todos.",
    correspondences: { zodiac: "Escorpio", astrology: "Escorpio" },
    areas: area("la transformación", "puede indicar final de etapa, renovación del vínculo o necesidad de soltar una forma vieja.", "marca resistencia a cerrar ciclos o miedo a cambiar dinámicas afectivas."),
    sourceNotes: sources,
  },
  {
    id: "major-14-temperance",
    name: { es: "La Templanza", en: "Temperance" },
    arcana: "major",
    number: 14,
    keywords: {
      upright: ["armonía", "moderación", "integración", "sanación"],
      reversed: ["exceso", "desbalance", "impaciencia", "desarmonía"],
    },
    meaning: {
      upright: "Mezcla equilibrada de opuestos, paciencia y sanación gradual.",
      reversed: "Desproporción, prisa o dificultad para integrar partes opuestas de la experiencia.",
    },
    symbolism: "Ángel que vierte agua entre copas, con un pie en tierra y otro en agua: integración consciente.",
    correspondences: { zodiac: "Sagitario", astrology: "Sagitario" },
    areas: area("la armonía gradual", "favorece reconciliación, equilibrio y tiempos serenos.", "advierte impaciencia, extremos o falta de reciprocidad."),
    sourceNotes: sources,
  },
  {
    id: "major-15-devil",
    name: { es: "El Diablo", en: "The Devil" },
    arcana: "major",
    number: 15,
    keywords: {
      upright: ["apego", "deseo", "sombra", "atadura"],
      reversed: ["liberación", "conciencia", "ruptura de patrón", "desapego"],
    },
    meaning: {
      upright: "Confrontación con dependencias, deseo, materialidad y cadenas psicológicas que parecen más fuertes de lo que son.",
      reversed: "Reconocimiento de una atadura y posibilidad de recuperar poder personal.",
    },
    symbolism: "Figura demoníaca sobre dos personas encadenadas flojamente; la esclavitud es también mental y puede cuestionarse.",
    correspondences: { zodiac: "Capricornio", astrology: "Capricornio" },
    areas: area("la conciencia de los apegos", "muestra magnetismo, deseo intenso o vínculo con patrones posesivos.", "favorece soltar dependencia, celos o dinámicas repetitivas."),
    sourceNotes: sources,
  },
  {
    id: "major-16-tower",
    name: { es: "La Torre", en: "The Tower" },
    arcana: "major",
    number: 16,
    keywords: {
      upright: ["ruptura", "revelación", "crisis liberadora", "verdad súbita"],
      reversed: ["crisis evitada", "resistencia", "cambio interno", "tensión acumulada"],
    },
    meaning: {
      upright: "Derrumbe simbólico de estructuras falsas. No predice desgracia literal: revela lo que ya no podía sostenerse.",
      reversed: "Cambio resistido, tensión interna o intento de aplazar una verdad necesaria.",
    },
    symbolism: "Rayo que golpea una torre coronada; figuras caen de una altura construida sobre falsa seguridad.",
    correspondences: { planet: "Marte", astrology: "Marte" },
    areas: area("la verdad que libera", "puede indicar conversación disruptiva o quiebre de una ilusión.", "señala tensión no dicha o miedo a remover una estructura frágil."),
    sourceNotes: sources,
  },
  {
    id: "major-17-star",
    name: { es: "La Estrella", en: "The Star" },
    arcana: "major",
    number: 17,
    keywords: {
      upright: ["esperanza", "inspiración", "renovación", "confianza"],
      reversed: ["desánimo", "desconexión", "fe debilitada", "vulnerabilidad"],
    },
    meaning: {
      upright: "Recuperación de esperanza, inspiración y orientación después de una etapa difícil.",
      reversed: "Pérdida temporal de fe o dificultad para recibir inspiración y cuidado.",
    },
    symbolism: "Mujer vierte agua en tierra y estanque bajo estrellas; vulnerabilidad que restaura el flujo vital.",
    correspondences: { zodiac: "Acuario", astrology: "Acuario" },
    areas: area("la esperanza renovada", "favorece ternura, honestidad y confianza en el proceso.", "marca inseguridad, distancia emocional o dificultad para creer en el vínculo."),
    sourceNotes: sources,
  },
  {
    id: "major-18-moon",
    name: { es: "La Luna", en: "The Moon" },
    arcana: "major",
    number: 18,
    keywords: {
      upright: ["inconsciente", "sueños", "ilusión", "sensibilidad"],
      reversed: ["clarificación", "miedo revelado", "confusión que cede", "autoengaño"],
    },
    meaning: {
      upright: "Territorio ambiguo de emociones, sueños y temores. Pide caminar con intuición y cautela.",
      reversed: "La confusión empieza a aclararse o se revela una ilusión que condicionaba la mirada.",
    },
    symbolism: "Luna entre torres, perro, lobo y cangrejo emergente; camino nocturno entre instinto e imaginación.",
    correspondences: { zodiac: "Piscis", astrology: "Piscis" },
    areas: area("la sensibilidad inconsciente", "indica emociones profundas, fantasías o señales sutiles.", "puede aclarar confusiones, miedos o sospechas infundadas."),
    sourceNotes: sources,
  },
  {
    id: "major-19-sun",
    name: { es: "El Sol", en: "The Sun" },
    arcana: "major",
    number: 19,
    keywords: {
      upright: ["alegría", "claridad", "vitalidad", "éxito"],
      reversed: ["claridad parcial", "ego", "demora", "ánimo bajo"],
    },
    meaning: {
      upright: "Claridad, vitalidad y expresión franca. La conciencia ilumina lo que antes estaba oscuro.",
      reversed: "Alegría disminuida, exceso de ego o demora en reconocer lo positivo.",
    },
    symbolism: "Niño sobre caballo blanco bajo un sol radiante y girasoles; inocencia consciente y vida manifiesta.",
    correspondences: { planet: "Sol", astrology: "Sol" },
    areas: area("la claridad vital", "habla de alegría compartida, confianza y expresión sincera.", "señala orgullo, expectativas infantiles o dificultad para disfrutar."),
    sourceNotes: sources,
  },
  {
    id: "major-20-judgement",
    name: { es: "El Juicio", en: "Judgement" },
    arcana: "major",
    number: 20,
    keywords: {
      upright: ["llamado", "renacimiento", "evaluación", "despertar"],
      reversed: ["culpa", "negación", "autocrítica", "llamado ignorado"],
    },
    meaning: {
      upright: "Despertar, revisión de vida y decisión de responder a un llamado más auténtico.",
      reversed: "Culpa estancada, miedo al juicio o resistencia a escuchar una verdad interior.",
    },
    symbolism: "Ángel con trompeta despierta figuras desde tumbas; simboliza resurrección de conciencia.",
    correspondences: { element: "fire", planet: "Plutón", astrology: "Fuego / Plutón en correspondencias modernas" },
    areas: area("el despertar", "puede traer reconciliación, segunda oportunidad o conversación decisiva.", "muestra juicios duros, culpa o incapacidad de cerrar una etapa."),
    sourceNotes: sources,
  },
  {
    id: "major-21-world",
    name: { es: "El Mundo", en: "The World" },
    arcana: "major",
    number: 21,
    keywords: {
      upright: ["culminación", "integración", "logro", "plenitud"],
      reversed: ["cierre pendiente", "incompleto", "demora", "integración parcial"],
    },
    meaning: {
      upright: "Ciclo completado, integración de experiencia y sensación de totalidad.",
      reversed: "Algo aún no se integra del todo; falta cierre, concreción o reconocimiento.",
    },
    symbolism: "Figura danzante dentro de una guirnalda, rodeada por los cuatro seres: totalidad y equilibrio de planos.",
    correspondences: { planet: "Saturno", astrology: "Saturno" },
    areas: area("la integración", "indica plenitud, madurez y cierre armonioso de ciclo.", "señala asuntos inconclusos o dificultad para dar un paso definitivo."),
    sourceNotes: sources,
  },
];

const suits: Record<Suit, { es: string; en: string; element: "fire" | "water" | "air" | "earth"; theme: string; symbol: string }> = {
  wands: { es: "Bastos", en: "Wands", element: "fire", theme: "voluntad, creatividad y acción", symbol: "vara" },
  cups: { es: "Copas", en: "Cups", element: "water", theme: "emoción, vínculo e intuición", symbol: "copa" },
  swords: { es: "Espadas", en: "Swords", element: "air", theme: "mente, palabra y conflicto", symbol: "espada" },
  pentacles: { es: "Oros", en: "Pentacles", element: "earth", theme: "materia, cuerpo y recursos", symbol: "pentáculo" },
};

type Rank = TarotCard["number"];

const rankData: Record<string, { es: string; en: string; up: string[]; rev: string[]; meaning: string; reversed: string; image: string }> = {
  "1": {
    es: "As",
    en: "Ace",
    up: ["semilla", "inicio", "potencial", "don"],
    rev: ["demora", "potencial bloqueado", "falta de raíz", "oportunidad desaprovechada"],
    meaning: "semilla pura del palo, una oportunidad inicial que debe cuidarse para manifestarse",
    reversed: "potencial detenido, inicio débil o falta de condiciones para desarrollar la promesa del palo",
    image: "Una mano emerge de una nube ofreciendo el símbolo del palo como don inicial.",
  },
  "2": {
    es: "Dos",
    en: "Two",
    up: ["dualidad", "decisión", "balance", "encuentro"],
    rev: ["indecisión", "desequilibrio", "bloqueo", "evitación"],
    meaning: "encuentro de dos fuerzas que exige balance, elección o cooperación",
    reversed: "polaridad mal integrada, duda o incapacidad de sostener un acuerdo interno o externo",
    image: "Dos símbolos del palo crean una tensión o alianza que pide equilibrio.",
  },
  "3": {
    es: "Tres",
    en: "Three",
    up: ["expansión", "colaboración", "crecimiento", "primer fruto"],
    rev: ["dispersión", "triangulación", "retraso", "falta de apoyo"],
    meaning: "primer crecimiento visible del palo, cooperación y desarrollo de una intención",
    reversed: "expansión desordenada, apoyo insuficiente o crecimiento que necesita ajuste",
    image: "Tres símbolos muestran una estructura inicial que empieza a tomar forma.",
  },
  "4": {
    es: "Cuatro",
    en: "Four",
    up: ["estabilidad", "pausa", "base", "seguridad"],
    rev: ["rigidez", "estancamiento", "inquietud", "base inestable"],
    meaning: "estabilización del palo, pausa necesaria y construcción de una base reconocible",
    reversed: "comodidad convertida en rigidez o base que ya no responde a la vida real",
    image: "Cuatro símbolos forman un marco, refugio o límite que ordena la experiencia.",
  },
  "5": {
    es: "Cinco",
    en: "Five",
    up: ["tensión", "conflicto", "pérdida", "aprendizaje"],
    rev: ["reparación", "agotamiento", "conflicto interno", "salida gradual"],
    meaning: "crisis o fricción del palo que obliga a revisar prioridades y recursos",
    reversed: "la tensión empieza a procesarse, aunque puede quedar cansancio o resistencia",
    image: "Cinco símbolos aparecen en desequilibrio, señalando prueba, roce o carencia.",
  },
  "6": {
    es: "Seis",
    en: "Six",
    up: ["armonía", "reparación", "avance", "intercambio"],
    rev: ["nostalgia", "desigualdad", "demora", "apego al pasado"],
    meaning: "reacomodo armónico del palo, ayuda, transición o recuperación de equilibrio",
    reversed: "equilibrio incompleto, apego a una versión anterior o intercambio desigual",
    image: "Seis símbolos sugieren movimiento desde la tensión hacia una forma más amable.",
  },
  "7": {
    es: "Siete",
    en: "Seven",
    up: ["evaluación", "desafío", "estrategia", "perseverancia"],
    rev: ["duda", "evasión", "agotamiento", "estrategia confusa"],
    meaning: "prueba de discernimiento: defender, evaluar o elegir con más estrategia",
    reversed: "duda excesiva, cansancio o estrategia poco clara frente al desafío",
    image: "Siete símbolos crean una escena de evaluación, defensa o visión selectiva.",
  },
  "8": {
    es: "Ocho",
    en: "Eight",
    up: ["movimiento", "disciplina", "progreso", "ajuste"],
    rev: ["bloqueo", "prisa", "repetición", "desorden"],
    meaning: "movimiento concentrado del palo, práctica, avance y ajuste de ritmo",
    reversed: "avance bloqueado o aceleración sin integración suficiente",
    image: "Ocho símbolos organizados muestran ritmo, trabajo o tránsito.",
  },
  "9": {
    es: "Nueve",
    en: "Nine",
    up: ["culminación", "reserva", "madurez", "autosuficiencia"],
    rev: ["exceso", "aislamiento", "fragilidad", "satisfacción incompleta"],
    meaning: "madurez individual del palo, logro interno y conciencia de lo acumulado",
    reversed: "exceso defensivo, satisfacción frágil o aislamiento dentro del logro",
    image: "Nueve símbolos rodean a una figura o espacio de madurez y consecuencia.",
  },
  "10": {
    es: "Diez",
    en: "Ten",
    up: ["culminación", "carga", "legado", "cierre"],
    rev: ["sobrecarga", "liberación", "ciclo agotado", "reordenamiento"],
    meaning: "culminación del palo: máxima expresión, cierre de ciclo y peso de lo conseguido",
    reversed: "carga excesiva o necesidad de soltar una forma ya agotada",
    image: "Diez símbolos expresan plenitud, peso o legado acumulado.",
  },
  page: {
    es: "Sota",
    en: "Page",
    up: ["mensaje", "aprendizaje", "curiosidad", "inicio práctico"],
    rev: ["inmadurez", "mensaje confuso", "falta de práctica", "distracción"],
    meaning: "aprendiz del palo, noticia o curiosidad que abre una etapa de práctica",
    reversed: "inmadurez, falta de método o mensaje que necesita verificación",
    image: "Una figura joven contempla el símbolo del palo como algo que está aprendiendo a manejar.",
  },
  knight: {
    es: "Caballero",
    en: "Knight",
    up: ["movimiento", "búsqueda", "impulso", "misión"],
    rev: ["exceso", "prisa", "inconstancia", "fricción"],
    meaning: "movimiento activo del palo, deseo de avanzar y conquistar experiencia",
    reversed: "impulso desmedido, dirección cambiante o energía difícil de encauzar",
    image: "Un jinete porta el símbolo del palo, mostrando cómo esa energía se pone en marcha.",
  },
  queen: {
    es: "Reina",
    en: "Queen",
    up: ["receptividad", "maestría interna", "cuidado", "madurez"],
    rev: ["dependencia", "exceso emocional", "control sutil", "descuido propio"],
    meaning: "maestría receptiva del palo, inteligencia interior y capacidad de nutrir su cualidad",
    reversed: "desequilibrio receptivo, cuidado que se deforma o desconexión de la propia autoridad",
    image: "Una reina sostiene el símbolo del palo con dominio sereno y presencia interior.",
  },
  king: {
    es: "Rey",
    en: "King",
    up: ["autoridad", "dominio", "responsabilidad", "visión"],
    rev: ["rigidez", "abuso de poder", "frialdad", "descontrol"],
    meaning: "maestría externa del palo, liderazgo y uso responsable de su energía",
    reversed: "autoridad desequilibrada, imposición o incapacidad de gobernar la energía del palo",
    image: "Un rey sostiene el símbolo del palo como signo de gobierno, madurez y responsabilidad.",
  },
};

const suitFlavor: Record<Suit, { upright: string; reversed: string; astrology: string }> = {
  wands: {
    upright: "desde la iniciativa, el deseo creador y la energía vital",
    reversed: "por exceso de impulso, pérdida de motivación o voluntad mal dirigida",
    astrology: "Fuego; asociado a Aries, Leo y Sagitario",
  },
  cups: {
    upright: "desde la vida emocional, la empatía y la imaginación",
    reversed: "por confusión afectiva, dependencia o emociones no integradas",
    astrology: "Agua; asociado a Cáncer, Escorpio y Piscis",
  },
  swords: {
    upright: "desde el pensamiento, la palabra y el discernimiento",
    reversed: "por tensión mental, comunicación hiriente o ideas mal ordenadas",
    astrology: "Aire; asociado a Géminis, Libra y Acuario",
  },
  pentacles: {
    upright: "desde el cuerpo, el trabajo, la materia y la estabilidad",
    reversed: "por bloqueo práctico, inseguridad material o apego excesivo",
    astrology: "Tierra; asociado a Tauro, Virgo y Capricornio",
  },
};

const ranks: Rank[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, "page", "knight", "queen", "king"];

const makeMinor = (suit: Suit, rank: Rank): TarotCard => {
  const suitInfo = suits[suit];
  const data = rankData[String(rank)];
  const numberName = typeof rank === "number" ? String(rank).padStart(2, "0") : rank;
  const spanishName = `${data.es} de ${suitInfo.es}`;
  const englishName = `${data.en} of ${suitInfo.en}`;
  const theme = `${data.meaning} ${suitFlavor[suit].upright}`;

  return {
    id: `minor-${suit}-${numberName}`,
    name: { es: spanishName, en: englishName },
    arcana: "minor",
    suit,
    number: rank,
    keywords: {
      upright: [...data.up, suitInfo.theme],
      reversed: [...data.rev, "sombra del palo"],
    },
    meaning: {
      upright: `${spanishName} representa ${theme}. En lectura marsellesa, concreta la combinación del número o figura con el terreno de ${suitInfo.theme}.`,
      reversed: `${spanishName} invertido señala ${data.reversed} ${suitFlavor[suit].reversed}. No niega el potencial de la carta, pero pide ajustar intención, ritmo o conciencia.`,
    },
    symbolism: `${data.image} En ${suitInfo.es}, el símbolo central es la ${suitInfo.symbol}, vinculada con ${suitInfo.theme}.`,
    correspondences: {
      element: suitInfo.element,
      astrology: suitFlavor[suit].astrology,
    },
    areas: {
      love: {
        upright: `En amor, expresa ${data.meaning} dentro de la dinámica emocional o vincular, ${suitFlavor[suit].upright}.`,
        reversed: `En amor, advierte ${data.reversed}, especialmente ${suitFlavor[suit].reversed}.`,
      },
      workMoney: {
        upright: `En trabajo y dinero, favorece aplicar ${suitInfo.theme} con el matiz de ${data.meaning}.`,
        reversed: `En trabajo y dinero, pide revisar ${data.reversed} antes de avanzar o comprometer recursos.`,
      },
      health: {
        upright: `En salud, orienta a observar cómo ${suitInfo.theme} influye en hábitos y bienestar, sin reemplazar consejo profesional.`,
        reversed: `En salud, sugiere detectar desequilibrios de ritmo, estrés o descuido y consultar profesionales cuando corresponda.`,
      },
      spirituality: {
        upright: `En espiritualidad, enseña ${data.meaning} como práctica de autoconocimiento.`,
        reversed: `En espiritualidad, muestra una lección pendiente vinculada con ${data.reversed}.`,
      },
    },
    sourceNotes: sources,
  };
};

const minorCards = (Object.keys(suits) as Suit[]).flatMap((suit) => ranks.map((rank) => makeMinor(suit, rank)));

export const tarotCards: TarotCard[] = [...majorCards, ...minorCards];

export const cardById = new Map(tarotCards.map((card) => [card.id, card]));
