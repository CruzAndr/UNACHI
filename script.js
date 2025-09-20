// ===== BASE DE DATOS COMPLETA DE TOURS (80 TOURS) =====
/**
 * Base de datos de tours turísticos.
 * Contiene la información de todos los tours disponibles, incluyendo nombre, categoría, precio, duración, imagen, descripción, servicios incluidos, dificultad y tamaño máximo de grupo.
 * Esta constante es utilizada para mostrar los tours en las diferentes páginas y para filtrar según la búsqueda del usuario.
 */
const datosTours = [
  // TOURS DE NATURALEZA (25 tours)
  // Cada objeto representa un tour de naturaleza con todos sus detalles.
  {
    id: 1,
    nombre: "Avistamiento de Delfines",
    categoria: "naturaleza",
    precio: "$45",
    duracion: "3 horas",
    imagen: "imagenes/del1.jpg",
    descripcion: "Observa delfines nariz de botella en su hábitat natural en el Golfo Dulce",
    incluye: ["Transporte", "Guía bilingüe", "Equipo de snorkel"],
    dificultad: "Fácil",
    grupoMax: 12,
  },
  {
    id: 2,
    nombre: "Senderismo Nocturno",
    categoria: "naturaleza",
    precio: "$40",
    duracion: "2.5 horas",
    imagen: "imagenes/nocturno1.jpg",
    descripcion: "Explora la vida nocturna del bosque tropical con guías expertos",
    incluye: ["Linternas", "Guía naturalista", "Refrigerio"],
    dificultad: "Moderada",
    grupoMax: 10,
  },
  {
    id: 3,
    nombre: "Observación de Aves",
    categoria: "naturaleza",
    precio: "$35",
    duracion: "4 horas",
    imagen: "imagenes/Aves1.jpg",
    descripcion: "Descubre más de 400 especies de aves en su hábitat natural",
    incluye: ["Binoculares", "Guía ornitólogo", "Desayuno"],
    dificultad: "Fácil",
    grupoMax: 8,
  },
  {
    id: 4,
    nombre: "Tour de Manglares",
    categoria: "naturaleza",
    precio: "$38",
    duracion: "3 horas",
    imagen: "imagenes/Manglare1.jpg",
    descripcion: "Navega por los manglares y observa cocodrilos, aves y monos",
    incluye: ["Bote", "Guía", "Agua y frutas"],
    dificultad: "Fácil",
    grupoMax: 15,
  },
  {
    id: 5,
    nombre: "Caminata al Bosque Nuboso",
    categoria: "naturaleza",
    precio: "$55",
    duracion: "6 horas",
    imagen: "imagenes/Nuboso1.jpg",
    descripcion: "Ascenso a las montañas para explorar el misterioso bosque nuboso",
    incluye: ["Transporte 4x4", "Almuerzo", "Guía"],
    dificultad: "Difícil",
    grupoMax: 12,
  },
  {
    id: 6,
    nombre: "Reserva Forestal Golfo Dulce",
    categoria: "naturaleza",
    precio: "$42",
    duracion: "5 horas",
    imagen: "imagenes/Tropical1.jpg",
    descripcion: "Explora senderos en la reserva forestal más importante de la región",
    incluye: ["Entrada", "Guía naturalista", "Almuerzo"],
    dificultad: "Moderada",
    grupoMax: 14,
  },
  {
    id: 7,
    nombre: "Jardín Botánico Wilson",
    categoria: "naturaleza",
    precio: "$30",
    duracion: "3 horas",
    imagen: "imagenes/cecropia1.jpg",
    descripcion: "Visita uno de los jardines botánicos más diversos de Centroamérica",
    incluye: ["Entrada", "Guía botánico", "Refrigerio"],
    dificultad: "Fácil",
    grupoMax: 20,
  },
  {
    id: 8,
    nombre: "Cascada Pavones",
    categoria: "naturaleza",
    precio: "$35",
    duracion: "4 horas",
    imagen: "imagenes/Escondidas.jpg",
    descripcion: "Caminata a una cascada escondida en el bosque tropical",
    incluye: ["Guía", "Almuerzo", "Tiempo de baño"],
    dificultad: "Moderada",
    grupoMax: 12,
  },
  {
    id: 9,
    nombre: "Santuario de Perezosos",
    categoria: "naturaleza",
    precio: "$25",
    duracion: "2 horas",
    imagen: "imagenes/perezoso1.jpg",
    descripcion: "Visita un centro de rescate y rehabilitación de perezosos",
    incluye: ["Entrada", "Charla educativa", "Guía"],
    dificultad: "Fácil",
    grupoMax: 15,
  },
  {
    id: 10,
    nombre: "Mariposario Tropical",
    categoria: "naturaleza",
    precio: "$20",
    duracion: "1.5 horas",
    imagen: "imagenes/mariposas1.jpg",
    descripcion: "Observa cientos de especies de mariposas tropicales",
    incluye: ["Entrada", "Guía especializado"],
    dificultad: "Fácil",
    grupoMax: 25,
  },
  {
    id: 11,
    nombre: "Estación Biológica La Gamba",
    categoria: "naturaleza",
    precio: "$50",
    duracion: "8 horas",
    imagen: "imagenes/Tropentstation-la-gamba.jpg",
    descripcion: "Día completo en una estación de investigación biológica",
    incluye: ["Transporte", "Almuerzo", "Guía científico"],
    dificultad: "Moderada",
    grupoMax: 10,
  },
  {
    id: 12,
    nombre: "Sendero de los Monos",
    categoria: "naturaleza",
    precio: "$32",
    duracion: "3 horas",
    imagen: "imagenes/monos1.jpg",
    descripcion: "Observa cuatro especies de monos en su hábitat natural",
    incluye: ["Guía primatólogo", "Binoculares", "Refrigerio"],
    dificultad: "Fácil",
    grupoMax: 12,
  },
  {
    id: 13,
    nombre: "Humedales de Térraba-Sierpe",
    categoria: "naturaleza",
    precio: "$48",
    duracion: "6 horas",
    imagen: "imagenes/sierpe1.jpg",
    descripcion: "Explora el humedal más grande de Costa Rica",
    incluye: ["Bote", "Guía", "Almuerzo", "Transporte"],
    dificultad: "Fácil",
    grupoMax: 16,
  },
  {
    id: 14,
    nombre: "Caminata Nocturna de Ranas",
    categoria: "naturaleza",
    precio: "$28",
    duracion: "2 horas",
    imagen: "imagenes/NocturnadeRanas.jpg",
    descripcion: "Descubre la increíble diversidad de anfibios nocturnos",
    incluye: ["Linternas", "Guía herpetólogo", "Refrigerio"],
    dificultad: "Fácil",
    grupoMax: 8,
  },
  {
    id: 15,
    nombre: "Reserva Indígena Boruca",
    categoria: "naturaleza",
    precio: "$60",
    duracion: "8 horas",
    imagen: "imagenes/estudiantes_en_boruca.jpg",
    descripcion: "Conoce la cultura y naturaleza de la reserva indígena",
    incluye: ["Transporte", "Almuerzo tradicional", "Guía indígena"],
    dificultad: "Moderada",
    grupoMax: 12,
  },
  {
    id: 16,
    nombre: "Sendero del Jaguar",
    categoria: "naturaleza",
    precio: "$65",
    duracion: "7 horas",
    imagen: "imagenes/jaguar1.jpg",
    descripcion: "Búsqueda de huellas y rastros del felino más grande de América",
    incluye: ["Guía especializado", "Almuerzo", "Equipo de rastreo"],
    dificultad: "Difícil",
    grupoMax: 6,
  },
  {
    id: 17,
    nombre: "Orquideario Natural",
    categoria: "naturaleza",
    precio: "$22",
    duracion: "2 horas",
    imagen: "imagenes/orquidia1.jpg",
    descripcion: "Admira la colección más grande de orquídeas de la región",
    incluye: ["Entrada", "Guía botánico", "Fotografías"],
    dificultad: "Fácil",
    grupoMax: 20,
  },
  {
    id: 18,
    nombre: "Río Claro - Tubing Natural",
    categoria: "naturaleza",
    precio: "$35",
    duracion: "4 horas",
    imagen: "imagenes/rioclaro.jpg",
    descripcion: "Flota por aguas cristalinas observando vida acuática",
    incluye: ["Tubo", "Chaleco", "Guía", "Refrigerio"],
    dificultad: "Fácil",
    grupoMax: 15,
  },
  {
    id: 19,
    nombre: "Avistamiento de Ballenas",
    categoria: "naturaleza",
    precio: "$75",
    duracion: "5 horas",
    imagen: "imagenes/Ballenas1.jpg",
    descripcion: "Observa ballenas jorobadas en su migración anual",
    incluye: ["Bote", "Guía marino", "Almuerzo", "Hidrofono"],
    dificultad: "Fácil",
    grupoMax: 12,
  },
  {
    id: 20,
    nombre: "Sendero de las Bromelias",
    categoria: "naturaleza",
    precio: "$30",
    duracion: "3 horas",
    imagen: "imagenes/bromelias.jpg",
    descripcion: "Descubre el ecosistema único de las plantas epífitas",
    incluye: ["Guía botánico", "Lupa", "Refrigerio"],
    dificultad: "Moderada",
    grupoMax: 10,
  },
  {
    id: 21,
    nombre: "Laguna de Sierpe",
    categoria: "naturaleza",
    precio: "$40",
    duracion: "4 horas",
    imagen: "imagenes/lagunasi.jpg",
    descripcion: "Navega por lagunas naturales llenas de vida silvestre",
    incluye: ["Kayak", "Guía", "Agua", "Frutas"],
    dificultad: "Fácil",
    grupoMax: 14,
  },
  {
    id: 22,
    nombre: "Caminata de Medicina Natural",
    categoria: "naturaleza",
    precio: "$45",
    duracion: "4 horas",
    imagen: "imagenes/caminatame.jpg",
    descripcion: "Aprende sobre plantas medicinales con un curandero local",
    incluye: ["Guía curandero", "Muestras de plantas", "Té medicinal"],
    dificultad: "Fácil",
    grupoMax: 8,
  },
  {
    id: 23,
    nombre: "Observatorio de Murciélagos",
    categoria: "naturaleza",
    precio: "$35",
    duracion: "3 horas",
    imagen: "imagenes/murcielagos.jpg",
    descripcion: "Observa la salida nocturna de miles de murciélagos",
    incluye: ["Guía especializado", "Linternas", "Refrigerio"],
    dificultad: "Fácil",
    grupoMax: 12,
  },
  {
    id: 24,
    nombre: "Sendero de los Helechos Gigantes",
    categoria: "naturaleza",
    precio: "$38",
    duracion: "4 horas",
    imagen: "imagenes/helechos.jpg",
    descripcion: "Camina entre helechos prehistóricos de hasta 15 metros",
    incluye: ["Guía", "Almuerzo ligero", "Fotografías"],
    dificultad: "Moderada",
    grupoMax: 10,
  },
  {
    id: 25,
    nombre: "Reserva de Vida Silvestre Curú",
    categoria: "naturaleza",
    precio: "$55",
    duracion: "8 horas",
    imagen: "imagenes/curu.jpg",
    descripcion: "Día completo en una reserva privada de conservación",
    incluye: ["Transporte", "Entrada", "Almuerzo", "Guía"],
    dificultad: "Moderada",
    grupoMax: 16,
  },

  // TOURS DE AVENTURA (20 tours)
  {
    id: 26,
    nombre: "Canopy Adventure",
    categoria: "aventura",
    precio: "$65",
    duracion: "2 horas",
    imagen: "imagenes/canopy1.jpg",
    descripcion: "Vuela entre las copas de los árboles en cables de hasta 200 metros",
    incluye: ["Equipo de seguridad", "Guía certificado"],
    dificultad: "Moderada",
    grupoMax: 8,
  },
  {
    id: 27,
    nombre: "Kayak en Manglares",
    categoria: "aventura",
    precio: "$50",
    duracion: "3 horas",
    imagen: "imagenes/micol1.jpg",
    descripcion: "Rema por canales naturales observando vida silvestre",
    incluye: ["Kayak", "Chaleco", "Guía", "Refrigerio"],
    dificultad: "Moderada",
    grupoMax: 12,
  },
  {
    id: 28,
    nombre: "Rappel en Cascadas",
    categoria: "aventura",
    precio: "$75",
    duracion: "4 horas",
    imagen: "imagenes/rappel1.jpg",
    descripcion: "Desciende por cascadas naturales en una aventura extrema",
    incluye: ["Equipo técnico", "Instructor", "Almuerzo"],
    dificultad: "Difícil",
    grupoMax: 6,
  },
  {
    id: 29,
    nombre: "Pesca Deportiva",
    categoria: "aventura",
    precio: "$120",
    duracion: "8 horas",
    imagen: "imagenes/pesca1.jpg",
    descripcion: "Pesca de marlín, pez vela y dorado en aguas del Pacífico",
    incluye: ["Bote", "Equipo", "Capitán", "Almuerzo"],
    dificultad: "Moderada",
    grupoMax: 4,
  },
  {
    id: 30,
    nombre: "Rafting Río Coto",
    categoria: "aventura",
    precio: "$85",
    duracion: "5 horas",
    imagen: "imagenes/RAFTING.jpg",
    descripcion: "Navega rápidos clase II-III en el río Coto Brus",
    incluye: ["Balsa", "Equipo", "Guía", "Almuerzo"],
    dificultad: "Moderada",
    grupoMax: 8,
  },
  {
    id: 31,
    nombre: "Escalada en Roca",
    categoria: "aventura",
    precio: "$70",
    duracion: "4 horas",
    imagen: "imagenes/esca.jpg",
    descripcion: "Escala formaciones rocosas naturales con vistas espectaculares",
    incluye: ["Equipo de escalada", "Instructor", "Refrigerio"],
    dificultad: "Difícil",
    grupoMax: 6,
  },
  {
    id: 32,
    nombre: "Mountain Bike Extremo",
    categoria: "aventura",
    precio: "$60",
    duracion: "4 horas",
    imagen: "imagenes/bike1.jpg",
    descripcion: "Recorre senderos montañosos en bicicleta de montaña",
    incluye: ["Bicicleta", "Casco", "Guía", "Hidratación"],
    dificultad: "Difícil",
    grupoMax: 8,
  },
  {
    id: 33,
    nombre: "Parapente Tandem",
    categoria: "aventura",
    precio: "$150",
    duracion: "3 horas",
    imagen: "imagenes/tandem.jpg",
    descripcion: "Vuela en parapente con instructor certificado",
    incluye: ["Equipo completo", "Instructor", "Video GoPro"],
    dificultad: "Moderada",
    grupoMax: 2,
  },
  {
    id: 34,
    nombre: "Canyoning Extremo",
    categoria: "aventura",
    precio: "$90",
    duracion: "6 horas",
    imagen: "imagenes/micol3.jpg",
    descripcion: "Desciende cañones con rappel, saltos y toboganes naturales",
    incluye: ["Equipo técnico", "Guía", "Almuerzo", "Transporte"],
    dificultad: "Difícil",
    grupoMax: 8,
  },
  {
    id: 35,
    nombre: "Stand Up Paddle",
    categoria: "aventura",
    precio: "$45",
    duracion: "2 horas",
    imagen: "imagenes/paddle1.jpg",
    descripcion: "Practica SUP en las tranquilas aguas del Golfo Dulce",
    incluye: ["Tabla SUP", "Remo", "Chaleco", "Instructor"],
    dificultad: "Fácil",
    grupoMax: 10,
  },
  {
    id: 36,
    nombre: "Buceo en Arrecifes",
    categoria: "aventura",
    precio: "$95",
    duracion: "4 horas",
    imagen: "imagenes/buceo1.jpg",
    descripcion: "Explora arrecifes de coral y vida marina submarina",
    incluye: ["Equipo completo", "Instructor", "2 inmersiones"],
    dificultad: "Moderada",
    grupoMax: 6,
  },
  {
    id: 37,
    nombre: "Snorkel Nocturno",
    categoria: "aventura",
    precio: "$55",
    duracion: "2 horas",
    imagen: "imagenes/sno.jpg",
    descripcion: "Descubre la vida marina nocturna con linternas subacuáticas",
    incluye: ["Equipo snorkel", "Linternas", "Guía marino"],
    dificultad: "Moderada",
    grupoMax: 8,
  },
  {
    id: 38,
    nombre: "Surf en Pavones",
    categoria: "aventura",
    precio: "$70",
    duracion: "4 horas",
    imagen: "imagenes/PAVONES.jpg",
    descripcion: "Aprende a surfear en una de las olas más largas del mundo",
    incluye: ["Tabla", "Traje", "Instructor", "Transporte"],
    dificultad: "Moderada",
    grupoMax: 6,
  },
  {
    id: 39,
    nombre: "Tirolesa Nocturna",
    categoria: "aventura",
    precio: "$80",
    duracion: "3 horas",
    imagen: "imagenes/tiro.jpg",
    descripcion: "Vuela por tirolesas iluminadas bajo las estrellas",
    incluye: ["Equipo", "Linternas", "Guía", "Cena"],
    dificultad: "Moderada",
    grupoMax: 10,
  },
  {
    id: 40,
    nombre: "Kitesurf",
    categoria: "aventura",
    precio: "$100",
    duracion: "4 horas",
    imagen: "imagenes/kite.jpg",
    descripcion: "Aprende kitesurf en las mejores condiciones de viento",
    incluye: ["Equipo completo", "Instructor", "Seguro"],
    dificultad: "Difícil",
    grupoMax: 4,
  },
  {
    id: 41,
    nombre: "Pesca en Kayak",
    categoria: "aventura",
    precio: "$65",
    duracion: "5 horas",
    imagen: "imagenes/ka.jpg",
    descripcion: "Combina kayak y pesca en aguas tranquilas",
    incluye: ["Kayak", "Equipo de pesca", "Guía", "Almuerzo"],
    dificultad: "Moderada",
    grupoMax: 8,
  },
  {
    id: 42,
    nombre: "Trekking de Supervivencia",
    categoria: "aventura",
    precio: "$120",
    duracion: "8 horas",
    imagen: "imagenes/trekking.jpg",
    descripcion: "Aprende técnicas de supervivencia en la selva",
    incluye: ["Instructor militar", "Kit supervivencia", "Almuerzo selvático"],
    dificultad: "Difícil",
    grupoMax: 6,
  },
  {
    id: 43,
    nombre: "Windsurf",
    categoria: "aventura",
    precio: "$75",
    duracion: "3 horas",
    imagen: "imagenes/wind.jpg",
    descripcion: "Practica windsurf en condiciones ideales",
    incluye: ["Tabla", "Vela", "Instructor", "Equipo seguridad"],
    dificultad: "Moderada",
    grupoMax: 6,
  },
  {
    id: 44,
    nombre: "Espeleología",
    categoria: "aventura",
    precio: "$85",
    duracion: "6 horas",
    imagen: "imagenes/espe.jpg",
    descripcion: "Explora cuevas subterráneas con formaciones únicas",
    incluye: ["Equipo espeleología", "Linternas", "Guía", "Almuerzo"],
    dificultad: "Difícil",
    grupoMax: 8,
  },
  {
    id: 45,
    nombre: "Jet Ski Safari",
    categoria: "aventura",
    precio: "$110",
    duracion: "2 horas",
    imagen: "imagenes/jet1.jpg",
    descripcion: "Recorre la costa en jet ski visitando playas remotas",
    incluye: ["Jet ski", "Chaleco", "Guía", "Combustible"],
    dificultad: "Fácil",
    grupoMax: 6,
  },

  // TOURS DE PLAYAS (20 tours)
  {
    id: 46,
    nombre: "Playa Cacao",
    categoria: "playa",
    precio: "$35",
    duracion: "6 horas",
    imagen: "imagenes/cacao.jpg",
    descripcion: "Relájate en una playa virgen de arena negra volcánica",
    incluye: ["Transporte", "Almuerzo", "Tiempo libre"],
    dificultad: "Fácil",
    grupoMax: 20,
  },
  {
    id: 47,
    nombre: "Playa Zancudo",
    categoria: "playa",
    precio: "$40",
    duracion: "8 horas",
    imagen: "imagenes/zancudo1.jpg",
    descripcion: "Disfruta de una de las playas más hermosas del Pacífico Sur",
    incluye: ["Transporte", "Almuerzo", "Actividades"],
    dificultad: "Fácil",
    grupoMax: 25,
  },
  {
    id: 48,
    nombre: "Playa Pavones - Surf",
    categoria: "playa",
    precio: "$55",
    duracion: "8 horas",
    imagen: "imagenes/pavo.jpg",
    descripcion: "Surfea en una de las olas izquierdas más largas del mundo",
    incluye: ["Transporte", "Tabla", "Instructor", "Almuerzo"],
    dificultad: "Moderada",
    grupoMax: 12,
  },
  {
    id: 49,
    nombre: "Playa Blanca - Refugio Golfito",
    categoria: "playa",
    precio: "$45",
    duracion: "6 horas",
    imagen: "imagenes/pla.jpg",
    descripcion: "Visita una playa pristina dentro del Refugio Nacional de Vida Silvestre",
    incluye: ["Bote", "Guía", "Snorkel", "Almuerzo"],
    dificultad: "Fácil",
    grupoMax: 15,
  },
  {
    id: 50,
    nombre: "Playa San Josecito",
    categoria: "playa",
    precio: "$50",
    duracion: "8 horas",
    imagen: "imagenes/jose.jpg",
    descripcion: "Playa remota accesible solo por bote, perfecta para relajarse",
    incluye: ["Bote", "Almuerzo", "Snorkel", "Hamacas"],
    dificultad: "Fácil",
    grupoMax: 12,
  },
  {
    id: 51,
    nombre: "Playa Colorada",
    categoria: "playa",
    precio: "$42",
    duracion: "7 horas",
    imagen: "imagenes/colo.jpg",
    descripcion: "Playa de arena rojiza con excelentes condiciones para el surf",
    incluye: ["Transporte", "Almuerzo", "Tabla surf opcional"],
    dificultad: "Fácil",
    grupoMax: 18,
  },
  {
    id: 52,
    nombre: "Playa Banco",
    categoria: "playa",
    precio: "$38",
    duracion: "6 horas",
    imagen: "imagenes/ba.jpg",
    descripcion: "Playa tranquila ideal para familias y relajación",
    incluye: ["Transporte", "Almuerzo", "Sombrillas"],
    dificultad: "Fácil",
    grupoMax: 20,
  },
  {
    id: 53,
    nombre: "Playa Piñuelas",
    categoria: "playa",
    precio: "$45",
    duracion: "8 horas",
    imagen: "imagenes/pi.jpg",
    descripcion: "Playa escondida con aguas cristalinas y arena dorada",
    incluye: ["Bote", "Snorkel", "Almuerzo", "Bebidas"],
    dificultad: "Fácil",
    grupoMax: 14,
  },
  {
    id: 54,
    nombre: "Playa Matapalo",
    categoria: "playa",
    precio: "$48",
    duracion: "8 horas",
    imagen: "imagenes/mata.jpg",
    descripcion: "Playa salvaje con oleaje perfecto para surf avanzado",
    incluye: ["Transporte 4x4", "Almuerzo", "Guía surf"],
    dificultad: "Moderada",
    grupoMax: 10,
  },
  {
    id: 55,
    nombre: "Playa Ventanas",
    categoria: "playa",
    precio: "$52",
    duracion: "8 horas",
    imagen: "imagenes/ve.jpg",
    descripcion: "Famosa por sus formaciones rocosas con 'ventanas' naturales",
    incluye: ["Transporte", "Almuerzo", "Exploración rocas"],
    dificultad: "Fácil",
    grupoMax: 16,
  },
  {
    id: 56,
    nombre: "Playa Ballena",
    categoria: "playa",
    precio: "$55",
    duracion: "8 horas",
    imagen: "imagenes/b.jpg",
    descripcion: "Playa en forma de cola de ballena, Patrimonio Mundial",
    incluye: ["Transporte", "Entrada parque", "Almuerzo", "Guía"],
    dificultad: "Fácil",
    grupoMax: 20,
  },
  {
    id: 57,
    nombre: "Playa Tortuga",
    categoria: "playa",
    precio: "$60",
    duracion: "10 horas",
    imagen: "imagenes/t.jpg",
    descripcion: "Excursión a playa remota famosa por anidación de tortugas",
    incluye: ["Bote", "Guía naturalista", "Almuerzo", "Cena"],
    dificultad: "Moderada",
    grupoMax: 12,
  },
  {
    id: 58,
    nombre: "Playa Hermosa Sur",
    categoria: "playa",
    precio: "$40",
    duracion: "7 horas",
    imagen: "imagenes/h.jpg",
    descripcion: "Playa extensa ideal para caminatas y deportes acuáticos",
    incluye: ["Transporte", "Almuerzo", "Kayak opcional"],
    dificultad: "Fácil",
    grupoMax: 22,
  },
  {
    id: 59,
    nombre: "Playa Dominical",
    categoria: "playa",
    precio: "$45",
    duracion: "8 horas",
    imagen: "imagenes/dominical.jpg",
    descripcion: "Centro de surf con ambiente bohemio y vida nocturna",
    incluye: ["Transporte", "Almuerzo", "Tour pueblo"],
    dificultad: "Fácil",
    grupoMax: 18,
  },
  {
    id: 60,
    nombre: "Playa Uvita",
    categoria: "playa",
    precio: "$50",
    duracion: "8 horas",
    imagen: "imagenes/uvita.jpg",
    descripcion: "Playa con piscinas naturales y arrecifes de coral",
    incluye: ["Transporte", "Snorkel", "Almuerzo", "Entrada parque"],
    dificultad: "Fácil",
    grupoMax: 16,
  },
  {
    id: 61,
    nombre: "Playa Arco",
    categoria: "playa",
    precio: "$58",
    duracion: "8 horas",
    imagen: "imagenes/arco.jpg",
    descripcion: "Playa con arco natural de piedra y aguas turquesas",
    incluye: ["Bote", "Snorkel", "Almuerzo", "Fotografía"],
    dificultad: "Fácil",
    grupoMax: 12,
  },
  {
    id: 62,
    nombre: "Playa Espadilla",
    categoria: "playa",
    precio: "$35",
    duracion: "6 horas",
    imagen: "imagenes/es.jpg",
    descripcion: "Playa urbana con todas las comodidades y servicios",
    incluye: ["Transporte", "Almuerzo", "Tiempo libre"],
    dificultad: "Fácil",
    grupoMax: 25,
  },
  {
    id: 63,
    nombre: "Playa Cocles",
    categoria: "playa",
    precio: "$65",
    duracion: "10 horas",
    imagen: "imagenes/co.jpg",
    descripcion: "Playa caribeña con cultura afro-costarricense",
    incluye: ["Transporte", "Almuerzo típico", "Tour cultural"],
    dificultad: "Fácil",
    grupoMax: 15,
  },


  // TOURS DE HISTORIA (15 tours)
  {
    id: 66,
    nombre: "Antigua Zona Americana de Golfito",
    categoria: "historia",
    precio: "$25",
    duracion: "2 horas",
    imagen: "imagenes/ame.jpg",
    descripcion: "Recorre el histórico barrio de la United Fruit Company",
    incluye: ["Guía histórico", "Entrada a museos"],
    dificultad: "Fácil",
    grupoMax: 20,
  },
  {
    id: 67,
    nombre: "Museo de la Cultura Bananera",
    categoria: "historia",
    precio: "$20",
    duracion: "1.5 horas",
    imagen: "imagenes/museo.jpg",
    descripcion: "Conoce la historia de la industria bananera en Costa Rica",
    incluye: ["Entrada", "Guía", "Material educativo"],
    dificultad: "Fácil",
    grupoMax: 25,
  },
  {
    id: 68,
    nombre: "Ferrocarril Bananero",
    categoria: "historia",
    precio: "$30",
    duracion: "3 horas",
    imagen: "imagenes/tren.jpg",
    descripcion: "Viaja en el histórico tren que transportaba bananos al puerto",
    incluye: ["Boleto de tren", "Guía", "Refrigerio"],
    dificultad: "Fácil",
    grupoMax: 30,
  },
  {
    id: 69,
    nombre: "Casa Cuna Histórica",
    categoria: "historia",
    precio: "$15",
    duracion: "1 hora",
    imagen: "imagenes/casa.jpg",
    descripcion: "Visita la antigua casa de huéspedes de la United Fruit",
    incluye: ["Entrada", "Guía", "Fotografías históricas"],
    dificultad: "Fácil",
    grupoMax: 15,
  },
  {
    id: 70,
    nombre: "Puerto Histórico de Golfito",
    categoria: "historia",
    precio: "$18",
    duracion: "1.5 horas",
    imagen: "imagenes/puerto.jpg",
    descripcion: "Explora las instalaciones portuarias históricas",
    incluye: ["Guía", "Acceso a muelles", "Historia marítima"],
    dificultad: "Fácil",
    grupoMax: 20,
  },
  {
    id: 71,
    nombre: "Cementerio Americano",
    categoria: "historia",
    precio: "$12",
    duracion: "1 hora",
    imagen: "imagenes/cementerio.jpg",
    descripcion: "Visita el cementerio de los trabajadores extranjeros",
    incluye: ["Guía histórico", "Historias personales"],
    dificultad: "Fácil",
    grupoMax: 12,
  },
  {
    id: 72,
    nombre: "Iglesia San Pablo",
    categoria: "historia",
    precio: "$10",
    duracion: "45 minutos",
    imagen: "imagenes/i.jpg",
    descripcion: "Conoce la historia religiosa de la comunidad",
    incluye: ["Guía", "Historia arquitectónica"],
    dificultad: "Fácil",
    grupoMax: 25,
  },
  {
    id: 73,
    nombre: "Escuela Americana Histórica",
    categoria: "historia",
    precio: "$15",
    duracion: "1 hora",
    imagen: "imagenes/esc.jpg",
    descripcion: "Visita la antigua escuela para hijos de empleados",
    incluye: ["Guía educativo", "Materiales históricos"],
    dificultad: "Fácil",
    grupoMax: 18,
  },
  {
    id: 74,
    nombre: "Hospital United Fruit",
    categoria: "historia",
    precio: "$20",
    duracion: "1.5 horas",
    imagen: "imagenes/hos.jpg",
    descripcion: "Recorre las instalaciones del antiguo hospital",
    incluye: ["Guía médico", "Historia de la medicina"],
    dificultad: "Fácil",
    grupoMax: 15,
  },
  {
    id: 75,
    nombre: "Club Social Americano",
    categoria: "historia",
    precio: "$22",
    duracion: "2 horas",
    imagen: "imagenes/club.jpg",
    descripcion: "Visita el exclusivo club social de los ejecutivos",
    incluye: ["Guía", "Acceso a instalaciones", "Refrigerio"],
    dificultad: "Fácil",
    grupoMax: 12,
  },
  {
    id: 76,
    nombre: "Sitios Arqueológicos Boruca",
    categoria: "historia",
    precio: "$45",
    duracion: "6 horas",
    imagen: "imagenes/64.jpg",
    descripcion: "Explora sitios arqueológicos precolombinos",
    incluye: ["Transporte", "Guía arqueólogo", "Almuerzo"],
    dificultad: "Moderada",
    grupoMax: 12,
  },
  {
    id: 77,
    nombre: "Petroglifos de Sierpe",
    categoria: "historia",
    precio: "$35",
    duracion: "4 horas",
    imagen: "imagenes/2.jpg",
    descripcion: "Descubre arte rupestre de culturas ancestrales",
    incluye: ["Bote", "Guía especializado", "Refrigerio"],
    dificultad: "Fácil",
    grupoMax: 10,
  },
  {
    id: 78,
    nombre: "Museo Regional de Golfito",
    categoria: "historia",
    precio: "$12",
    duracion: "1 hora",
    imagen: "imagenes/12.jpg",
    descripcion: "Colección completa de la historia regional",
    incluye: ["Entrada", "Guía", "Catálogo"],
    dificultad: "Fácil",
    grupoMax: 20,
  },
  {
    id: 79,
    nombre: "Ruta del Oro - Osa",
    categoria: "historia",
    precio: "$60",
    duracion: "8 horas",
    imagen: "imagenes/oro.jpg",
    descripcion: "Sigue los pasos de los buscadores de oro históricos",
    incluye: ["Transporte", "Guía", "Almuerzo", "Demostración"],
    dificultad: "Moderada",
    grupoMax: 10,
  },

]

// ===== VARIABLES GLOBALES =====
let diapositivaActual = 0
const totalDiapositivas = 4

// ===== INICIALIZACIÓN =====
document.addEventListener("DOMContentLoaded", () => {
  console.log("🚀 Página cargada, inicializando...")

  // Configurar navegación
  configurarNavegacion()

  // Configurar carrusel
  if (document.getElementById("carrusel")) {
    iniciarCarrusel()
  }

  // Cargar tours en página principal
  if (document.getElementById("cuadriculaTours")) {
    cargarToursDestacados()
  }

  // Configurar formularios
  configurarFormularios()

  // ===== BUSCADOR DE TOURS EN HERO =====
  const formBuscador = document.getElementById('formBuscadorTours');
  const resultadosDiv = document.getElementById('resultadosBuscador');
  if (formBuscador && resultadosDiv) {
    formBuscador.addEventListener('submit', function(e) {
      e.preventDefault();
      // Obtener valores
      const categoria = document.getElementById('buscadorCategoria').value;
      const personas = parseInt(document.getElementById('buscadorPersonas').value, 10);
      // Filtrar tours
      let resultados = datosTours;
      if (categoria) {
        resultados = resultados.filter(t => t.categoria === categoria);
      }
      if (!isNaN(personas) && personas > 0) {
        resultados = resultados.filter(t => t.grupoMax >= personas);
      }
      // Mostrar resultados
      resultadosDiv.innerHTML = '';
      if (resultados.length === 0) {
        resultadosDiv.innerHTML = '<div style="background:#fff; color:#2d5a27; border-radius:8px; padding:18px; font-weight:600;">No se encontraron tours con esos criterios.</div>';
      } else {
        const grid = document.createElement('div');
        grid.className = 'tours-grid';
        resultados.slice(0, 8).forEach(tour => {
          const tarjeta = crearTarjetaTour(tour);
          grid.appendChild(tarjeta);
        });
        resultadosDiv.appendChild(grid);
      }
    });
  }

  // Mostrar 4 tours en promoción en el index
  const promocionesDiv = document.getElementById('promocionesTours');
  if (promocionesDiv) {
    const promociones = [...datosTours].sort(() => 0.5 - Math.random()).slice(0, 4);
    promocionesDiv.innerHTML = '';
    promociones.forEach(tour => {
      const tarjeta = crearTarjetaTour(tour);
      promocionesDiv.appendChild(tarjeta);
    });
  }

  // Mostrar 8 tours destacados en el index (cuadrícula)
  const destacadosDiv = document.getElementById('cuadriculaTours');
  if (destacadosDiv) {
    const destacados = [...datosTours].sort(() => 0.5 - Math.random()).slice(0, 8);
    destacadosDiv.innerHTML = '';
    destacados.forEach(tour => {
      const tarjeta = crearTarjetaTour(tour);
      destacadosDiv.appendChild(tarjeta);
    });
  }

  // Carrusel de fotos
  const fotosCarrusel = [
    'imagenes/golfito2.jpg',
    'imagenes/aventuras.jpg',
    'imagenes/micol1.jpg',
    'imagenes/tucanes1.jpg',
    'imagenes/Ballenas1.jpg',
    'imagenes/canopy1.jpg',
    'imagenes/playa.jpg',
  ];
  const carruselFotos = document.getElementById('carruselFotos');
  const btnFotoPrev = document.getElementById('fotoCarruselPrev');
  const btnFotoNext = document.getElementById('fotoCarruselNext');
  let fotoActual = 0;
  let intervaloFotos = null;

  if (carruselFotos && btnFotoPrev && btnFotoNext) {
    // Renderizar slides
    carruselFotos.innerHTML = '';
    fotosCarrusel.forEach((src, i) => {
      const slide = document.createElement('div');
      slide.className = 'foto-carrusel-slide';
      if (i !== 0) slide.style.display = 'none';
      const img = document.createElement('img');
      img.src = src;
      img.alt = 'Foto carrusel';
      slide.appendChild(img);
      carruselFotos.appendChild(slide);
    });
    const slides = carruselFotos.querySelectorAll('.foto-carrusel-slide');

    function mostrarFoto(idx) {
      slides.forEach((slide, i) => {
        slide.style.display = (i === idx) ? 'flex' : 'none';
      });
    }
    function avanzarFoto(n) {
      fotoActual = (fotoActual + n + fotosCarrusel.length) % fotosCarrusel.length;
      mostrarFoto(fotoActual);
    }
    btnFotoPrev.onclick = () => {
      avanzarFoto(-1);
      reiniciarIntervalo();
    };
    btnFotoNext.onclick = () => {
      avanzarFoto(1);
      reiniciarIntervalo();
    };
    function autoAvance() {
      avanzarFoto(1);
    }
    function reiniciarIntervalo() {
      clearInterval(intervaloFotos);
      intervaloFotos = setInterval(autoAvance, 2000);
    }
    // Iniciar autoavance
    intervaloFotos = setInterval(autoAvance, 2000);
  }

  // Lógica del carrusel de promociones ya implementada, solo asegúrate de que se ejecute después del DOMContentLoaded.
  const promoCarrusel = document.getElementById('carruselPromos');
  const promoPrev = document.getElementById('promoCarruselPrev');
  const promoNext = document.getElementById('promoCarruselNext');
  let promoPos = 0;
  let promoInterval = null;
  if (promoCarrusel && promoPrev && promoNext) {
    // Seleccionar 8 tours aleatorios para promociones
    const promos = [...datosTours].sort(() => 0.5 - Math.random()).slice(0, 8);
    promoCarrusel.innerHTML = '';
    promos.forEach(tour => {
      const tarjeta = crearTarjetaTour(tour);
      promoCarrusel.appendChild(tarjeta);
    });
    const total = promos.length;
    const visibles = 4;
    function mostrarPromos(idx) {
      const cards = promoCarrusel.querySelectorAll('.tour-card');
      cards.forEach((card, i) => {
        card.style.display = (i >= idx && i < idx + visibles) ? 'block' : 'none';
      });
    }
    function avanzarPromo(n) {
      promoPos = (promoPos + n + (total - visibles + 1)) % (total - visibles + 1);
      mostrarPromos(promoPos);
    }
    promoPrev.onclick = () => {
      avanzarPromo(-1);
      reiniciarPromoInterval();
    };
    promoNext.onclick = () => {
      avanzarPromo(1);
      reiniciarPromoInterval();
    };
    function autoAvancePromo() {
      avanzarPromo(1);
    }
    function reiniciarPromoInterval() {
      clearInterval(promoInterval);
      promoInterval = setInterval(autoAvancePromo, 2500);
    }
    mostrarPromos(0);
    promoInterval = setInterval(autoAvancePromo, 2500);
  }

  // ===== GALERÍA DE EXPERIENCIAS =====
  const galeriaDiv = document.getElementById('galeriaFotos');
  if (galeriaDiv) {
    // Selección de imágenes variadas (puedes ajustar la lista si lo deseas)
    const imagenesGaleria = [
      'imagenes/golfito2.jpg',
      'imagenes/aventuras.jpg',
      'imagenes/Escondidas.jpg',
      'imagenes/zancudo1.jpg',
      'imagenes/Ballenas1.jpg',
      'imagenes/canopy1.jpg',
      'imagenes/playa.jpg',
      'imagenes/Aves1.jpg',
      'imagenes/cecropia1.jpg',
      'imagenes/monos1.jpg',
      'imagenes/banano1.jpg',
      'imagenes/mariposas1.jpg',
      'imagenes/perezoso1.jpg',
      'imagenes/sierpe1.jpg',
      'imagenes/trekking.jpg',
      'imagenes/orquidia1.jpg',
    ];
    galeriaDiv.innerHTML = '';
    imagenesGaleria.slice(0, 12).forEach(src => {
      const img = document.createElement('img');
      img.src = src;
      img.alt = 'Experiencia Golfito';
      img.loading = 'lazy';
      img.onclick = () => abrirLightboxGaleria(src);
      galeriaDiv.appendChild(img);
    });
  }

  // ===== FAQ (Preguntas Frecuentes) Acordeón =====
  const faqPreguntas = document.querySelectorAll('.faq-question');
  faqPreguntas.forEach(btn => {
    btn.addEventListener('click', function() {
      const item = this.closest('.faq-item');
      // Cerrar otros abiertos
      document.querySelectorAll('.faq-item.open').forEach(otro => {
        if (otro !== item) otro.classList.remove('open');
      });
      // Alternar el actual
      item.classList.toggle('open');
    });
  });

  // ===== BOTÓN OCULTAR/MOSTRAR RESULTADOS DEL BUSCADOR =====
  const btnToggleTours = document.getElementById('btnToggleTours');
  const resultadosBuscador = document.getElementById('resultadosBuscador');
  if (btnToggleTours && resultadosBuscador) {
    // Mostrar el botón solo si hay resultados
    const observer = new MutationObserver(() => {
      const grid = resultadosBuscador.querySelector('.tours-grid');
      btnToggleTours.style.display = (grid && grid.children.length > 0) ? 'block' : 'none';
      // Si se muestran resultados, asegúrate de que estén visibles
      if (grid && grid.children.length > 0) {
        grid.style.display = '';
        btnToggleTours.textContent = 'Ocultar resultados';
      }
    });
    observer.observe(resultadosBuscador, { childList: true, subtree: true });

    btnToggleTours.addEventListener('click', function() {
      const grid = resultadosBuscador.querySelector('.tours-grid');
      if (!grid) return;
      if (grid.style.display === 'none') {
        grid.style.display = '';
        btnToggleTours.textContent = 'Ocultar resultados';
      } else {
        grid.style.display = 'none';
        btnToggleTours.textContent = 'Mostrar resultados';
      }
    });
  }

  // ===== FORZAR VISUALIZACIÓN DE TOURS EN TODOS LOS GRIDS =====
  document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.tours-grid').forEach(grid => {
      if (grid.children.length === 0) {
        datosTours.slice(0, 8).forEach(tour => {
          const tarjeta = crearTarjetaTour(tour);
          grid.appendChild(tarjeta);
        });
      }
    });
  });

  console.log("✅ Inicialización completada")
})

// ===== NAVEGACIÓN =====
function configurarNavegacion() {
  const hamburguesa = document.getElementById("hamburguesa")
  const menuNavegacion = document.getElementById("menuNavegacion")

  if (hamburguesa && menuNavegacion) {
    hamburguesa.addEventListener("click", () => {
      menuNavegacion.classList.toggle("active")
      hamburguesa.classList.toggle("active")
    })
  }

  // Cerrar menú al hacer clic en un enlace
  const enlaces = document.querySelectorAll(".nav-link")
  enlaces.forEach((enlace) => {
    enlace.addEventListener("click", () => {
      menuNavegacion.classList.remove("active")
      hamburguesa.classList.remove("active")
    })
  })
}

// ===== CARRUSEL =====
function iniciarCarrusel() {
  setInterval(cambiarDiapositivaAutomatica, 5000)
}

function cambiarDiapositiva(direccion) {
  const diapositivas = document.querySelectorAll(".carousel-slide")
  const indicadores = document.querySelectorAll(".indicator")

  // Remover clase active de la diapositiva actual
  diapositivas[diapositivaActual].classList.remove("active")
  indicadores[diapositivaActual].classList.remove("active")

  // Calcular nueva diapositiva
  diapositivaActual += direccion

  if (diapositivaActual >= totalDiapositivas) {
    diapositivaActual = 0
  } else if (diapositivaActual < 0) {
    diapositivaActual = totalDiapositivas - 1
  }

  // Activar nueva diapositiva
  diapositivas[diapositivaActual].classList.add("active")
  indicadores[diapositivaActual].classList.add("active")
}

function irADiapositiva(indice) {
  const diapositivas = document.querySelectorAll(".carousel-slide")
  const indicadores = document.querySelectorAll(".indicator")

  // Remover clase active
  diapositivas[diapositivaActual].classList.remove("active")
  indicadores[diapositivaActual].classList.remove("active")

  // Establecer nueva diapositiva
  diapositivaActual = indice

  // Activar nueva diapositiva
  diapositivas[diapositivaActual].classList.add("active")
  indicadores[diapositivaActual].classList.add("active")
}

function cambiarDiapositivaAutomatica() {
  cambiarDiapositiva(1)
}

// ===== TOURS =====
function cargarToursDestacados() {
  const contenedor = document.getElementById("cuadriculaTours")
  if (!contenedor) return

  // Mostrar tours destacados (mezcla de categorías)
  const toursDestacados = [
    datosTours[0], // Avistamiento de Delfines
    datosTours[25], // Canopy Adventure
    datosTours[46], // Playa Zancudo
    datosTours[65], // Zona Americana
    datosTours[10], // Mariposario
    datosTours[28], // Rappel
  ]

  toursDestacados.forEach((tour) => {
    const tarjeta = crearTarjetaTour(tour)
    contenedor.appendChild(tarjeta)
  })
}

/**
 * Crea y retorna un elemento de tarjeta HTML para mostrar la información de un tour.
 * Incluye imagen, nombre, descripción, detalles y botón de detalles.
 * @param {Object} tour - Objeto con los datos del tour.
 * @returns {HTMLElement} Elemento div de la tarjeta del tour.
 */
function crearTarjetaTour(tour) {
  const tarjeta = document.createElement("div")
  tarjeta.className = "tour-card"
  tarjeta.innerHTML = `
    <div class="tour-image">
      <img src="${tour.imagen}" alt="${tour.nombre}" loading="lazy">
      <div class="tour-category">${tour.categoria}</div>
    </div>
    <div class="tour-content">
      <h3>${tour.nombre}</h3>
      <p>${tour.descripcion}</p>
      <div class="tour-details">
        <span class="tour-duration">
          <i class="fas fa-clock"></i> ${tour.duracion}
        </span>
        <span class="tour-difficulty">
          <i class="fas fa-signal"></i> ${tour.dificultad}
        </span>
      </div>
      <div class="tour-footer">
        <span class="tour-price">${tour.precio}</span>
        <button class="btn btn-primary" onclick="abrirDetallesTour(${tour.id})">
          Ver Detalles
        </button>
      </div>
    </div>
  `
  return tarjeta
}

/**
 * Muestra los detalles completos de un tour en un modal.
 * Incluye imagen, nombre, descripción, detalles, servicios incluidos y botón de reserva.
 * @param {number} tourId - ID del tour a mostrar.
 */
function abrirDetallesTour(tourId) {
  const tour = datosTours.find((t) => t.id === tourId)
  if (!tour) return
  const modal = document.getElementById("modalTour")
  const contenido = document.getElementById("contenidoModalTour")
  contenido.innerHTML = `
    <div class="tour-detail-header">
      <img src="${tour.imagen}" alt="${tour.nombre}" class="tour-detail-image">
    </div>
    <div class="tour-detail-info">
      <h2>${tour.nombre}</h2>
      <p class="tour-detail-description">${tour.descripcion}</p>
      <div class="tour-detail-meta">
        <span><i class="fas fa-clock"></i> ${tour.duracion}</span>
        <span><i class="fas fa-users"></i> Máx. ${tour.grupoMax} personas</span>
        <span><i class="fas fa-signal"></i> ${tour.dificultad}</span>
      </div>
    </div>
    <div class="tour-detail-body">
      <h3>¿Qué incluye?</h3>
      <ul class="tour-includes">
        ${tour.incluye.map((item) => `<li><i class="fas fa-check"></i> ${item}</li>`).join("")}
      </ul>
      <div class="tour-detail-footer">
        <div class="tour-price-large">${tour.precio} <span>por persona</span></div>
        <button class="btn btn-primary btn-large" onclick="irAReserva('${tour.nombre}')">
          <i class="fas fa-calendar-plus"></i> Reservar Ahora
        </button>
      </div>
    </div>
  `
  modal.style.display = "block"
  document.body.style.overflow = "hidden"
}

/**
 * Redirige a la página de reserva con el nombre del tour seleccionado.
 * @param {string} nombreTour - Nombre del tour a reservar.
 */
function irAReserva(nombreTour) {
  // Cerrar modal
  cerrarModal("modalTour")

  // Ir a página de reserva
  window.location.href = `reserva.html?tour=${encodeURIComponent(nombreTour)}`
}

// ===== FORMULARIOS =====
/**
 * Configura los formularios de contacto y reserva, y preselecciona el tour si viene en la URL.
 */
function configurarFormularios() {
  // Formulario de contacto
  const formularioContacto = document.getElementById("formularioContacto")
  if (formularioContacto) {
    formularioContacto.addEventListener("submit", manejarFormularioContacto)
  }

  // Formulario de reserva
  const formularioReserva = document.getElementById("formularioReserva")
  if (formularioReserva) {
    formularioReserva.addEventListener("submit", manejarFormularioReserva)

    // Pre-llenar tour si viene en URL
    const urlParams = new URLSearchParams(window.location.search)
    const tourParam = urlParams.get("tour")
    if (tourParam) {
      const selectTour = document.getElementById("tourSeleccionado")
      if (selectTour) {
        // Buscar la opción que contiene el nombre del tour
        for (const option of selectTour.options) {
          if (option.text.includes(tourParam)) {
            option.selected = true
            break
          }
        }
      }
    }
  }
}

/**
 * Maneja el envío del formulario de contacto, realiza la petición al backend y muestra notificaciones.
 * @param {Event} e - Evento de envío del formulario.
 */
async function manejarFormularioContacto(e) {
  e.preventDefault()
  console.log("📧 Enviando formulario de contacto...")

  const formData = new FormData(e.target)
  const datos = Object.fromEntries(formData)

  console.log("Datos del formulario:", datos)

  const boton = e.target.querySelector('button[type="submit"]')
  const textoOriginal = boton.innerHTML
  boton.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Enviando...'
  boton.disabled = true

  try {
    const response = await fetch("http://localhost:3000/api/contacto", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(datos),
    })

    console.log("Respuesta del servidor:", response.status)
    const resultado = await response.json()
    console.log("Resultado:", resultado)

    if (resultado.success) {
      mostrarNotificacion("¡Mensaje enviado exitosamente! Te responderemos pronto.")
      e.target.reset()
    } else {
      mostrarNotificacion(`Error: ${resultado.mensaje}`, "error")
    }
  } catch (error) {
    console.error("Error enviando formulario:", error)
    mostrarNotificacion("Error de conexión. Intenta de nuevo.", "error")
  } finally {
    boton.innerHTML = textoOriginal
    boton.disabled = false
  }
}

/**
 * Maneja el envío del formulario de reserva, realiza la petición al backend y muestra notificaciones.
 * @param {Event} e - Evento de envío del formulario.
 */
async function manejarFormularioReserva(e) {
  e.preventDefault()
  console.log("📅 Enviando formulario de reserva...")

  const formData = new FormData(e.target)
  const datos = Object.fromEntries(formData)

  console.log("Datos de la reserva:", datos)

  const boton = e.target.querySelector('button[type="submit"]')
  const textoOriginal = boton.innerHTML
  boton.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Enviando...'
  boton.disabled = true

  try {
    const response = await fetch("http://localhost:3000/api/reserva", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(datos),
    })

    console.log("Respuesta del servidor:", response.status)
    const resultado = await response.json()
    console.log("Resultado:", resultado)

    if (resultado.success) {
      mostrarNotificacion("¡Reserva enviada exitosamente! Te contactaremos pronto.")
      e.target.reset()
    } else {
      mostrarNotificacion(`Error: ${resultado.mensaje}`, "error")
    }
  } catch (error) {
    console.error("Error enviando reserva:", error)
    mostrarNotificacion("Error de conexión. Intenta de nuevo.", "error")
  } finally {
    boton.innerHTML = textoOriginal
    boton.disabled = false
  }
}

// ===== UTILIDADES =====
/**
 * Desplaza suavemente la vista a la sección indicada por su ID.
 * @param {string} seccionId - ID de la sección a la que se debe desplazar.
 */
function desplazarASeccion(seccionId) {
  const seccion = document.getElementById(seccionId)
  if (seccion) {
    seccion.scrollIntoView({ behavior: "smooth" })
  }
}

/**
 * Abre un modal por su ID y bloquea el scroll del body.
 * @param {string} idModal - ID del modal a abrir.
 */
function abrirModal(idModal) {
  const modal = document.getElementById(idModal)
  if (modal) {
    modal.style.display = "block"
    document.body.style.overflow = "hidden"
  }
}

/**
 * Cierra un modal por su ID y restaura el scroll del body.
 * @param {string} idModal - ID del modal a cerrar.
 */
function cerrarModal(idModal) {
  const modal = document.getElementById(idModal)
  if (modal) {
    modal.style.display = "none"
    document.body.style.overflow = "auto"
  }
}

/**
 * Muestra una notificación en pantalla con el mensaje y tipo especificado.
 * @param {string} mensaje - Mensaje a mostrar.
 * @param {string} [tipo="success"] - Tipo de notificación (success, error, etc).
 */
function mostrarNotificacion(mensaje, tipo = "success") {
  const notificacion = document.getElementById("notificacion")
  const elementoMensaje = document.getElementById("mensajeNotificacion")

  if (notificacion && elementoMensaje) {
    elementoMensaje.textContent = mensaje
    notificacion.className = `notification ${tipo}`
    notificacion.classList.add("show")

    setTimeout(() => {
      notificacion.classList.remove("show")
    }, 5000)
  } else {
    // Fallback si no existe el elemento de notificación
    alert(mensaje)
  }
}

/**
 * Cierra la notificación actualmente visible.
 */
function cerrarNotificacion() {
  const notificacion = document.getElementById("notificacion")
  if (notificacion) {
    notificacion.classList.remove("show")
  }
}

// ===== GALERÍA DE FOTOS =====
function abrirLightboxGaleria(src) {
  const lightbox = document.getElementById('lightboxGaleria');
  const img = document.getElementById('lightboxImagen');
  if (lightbox && img) {
    img.src = src;
    lightbox.style.display = 'flex';
  }
}
function cerrarLightboxGaleria() {
  const lightbox = document.getElementById('lightboxGaleria');
  const img = document.getElementById('lightboxImagen');
  if (lightbox && img) {
    lightbox.style.display = 'none';
    img.src = '';
  }
}

// ===== FUNCIONES GLOBALES PARA COMPATIBILIDAD =====
window.cambiarDiapositiva = cambiarDiapositiva
window.irADiapositiva = irADiapositiva
window.abrirDetallesTour = abrirDetallesTour
window.desplazarASeccion = desplazarASeccion
window.abrirModal = abrirModal
window.cerrarModal = cerrarModal
window.cerrarNotificacion = cerrarNotificacion
window.datosTours = datosTours
window.crearTarjetaTour = crearTarjetaTour
