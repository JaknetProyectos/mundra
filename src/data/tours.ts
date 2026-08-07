// AUTO-GENERADO a partir del catálogo público de Mundra.
// Actúa como el "seed" de la tabla `tours` en Supabase.

export type TourTheme =
  | "cultural"
  | "naturaleza"
  | "aventura"
  | "gastronomia"
  | "recreativo"
  | "taller";

export interface ItineraryStep {
  time: string;
  title: string;
  details: string[];
  note: string;
}

export interface TourRow {
  id: string;
  slug: string;
  title: string;
  price: number;
  state: string;
  stateLabel: string;
  image: string;
  place: string;
  duration: string;
  durationHours: number;
  type: string;
  theme: TourTheme;
  meetingPoint: string;
  startTime: string;
  itinerary: ItineraryStep[];
  includes: string[];
  excludes: string[];
  highlights: string[];
  rating: number;
  reviews: number;
  featured: boolean;
  createdAt: string;
}

export interface StateRow {
  slug: string;
  label: string;
}

export const STATES: StateRow[] = [
  {
    "slug": "baja-california",
    "label": "Baja California"
  },
  {
    "slug": "cdmx",
    "label": "Ciudad de México"
  },
  {
    "slug": "chihuahua",
    "label": "Chihuahua"
  },
  {
    "slug": "guanajuato",
    "label": "Guanajuato"
  },
  {
    "slug": "jalisco",
    "label": "Jalisco"
  },
  {
    "slug": "michoacan",
    "label": "Michoacán"
  },
  {
    "slug": "nuevo-leon",
    "label": "Nuevo León"
  },
  {
    "slug": "oaxaca",
    "label": "Oaxaca"
  },
  {
    "slug": "queretaro",
    "label": "Querétaro"
  },
  {
    "slug": "quintana-roo",
    "label": "Quintana Roo"
  },
  {
    "slug": "san-luis-potosi",
    "label": "San Luis Potosí"
  },
  {
    "slug": "sinaloa",
    "label": "Sinaloa"
  },
  {
    "slug": "veracruz",
    "label": "Veracruz"
  },
  {
    "slug": "sin-categorizar",
    "label": "Experiencias a medida"
  }
];

// no need translation
export const THEMES: { slug: TourTheme; label: string }[] = [
  { slug: "cultural", label: "Cultural e histórico" },
  { slug: "naturaleza", label: "Naturaleza" },
  { slug: "aventura", label: "Aventura" },
  { slug: "gastronomia", label: "Gastronomía" },
  { slug: "recreativo", label: "Recreativo" },
  { slug: "taller", label: "Talleres" },
];

export const TOURS: TourRow[] = [
  {
    // Autogenerados
    "id": "tour_001",
    "slug": "tour-monte-alban",
    "createdAt": "2026-03-28",

    // Redundantes
    "state": "oaxaca",
    "stateLabel": "Oaxaca",
    "duration": "4 horas",
    "durationHours": 4,
    "type": "Cultural",
    "theme": "cultural",
    
    // Requieren traducción
    "title": "Tour Monte Albán",
    "place": "Monte Albán",
    "startTime": "Antes de las 9:00 AM",
    "meetingPoint": "Hotel en Oaxaca",
    "includes": [
      "Transporte",
      "Guía inglés y español"
    ],
    "excludes": [
      "Entrada",
      "Alimentos"
    ],
    "highlights": [
      "Recorrido arqueológico",
      "Historia zapoteca",
      "Fotografías"
    ],
    "itinerary": [
      {
        "time": "9:00 AM",
        "title": "Salida",
        "details": [],
        "note": ""
      },
      {
        "time": "10:00 AM",
        "title": "Llegada",
        "details": [
          "Recorrido arqueológico",
          "Historia zapoteca",
          "Fotografías"
        ],
        "note": "Duración: 2 horas"
      },
      {
        "time": "12:30 PM",
        "title": "Tiempo libre",
        "details": [],
        "note": ""
      },
      {
        "time": "1:00 PM",
        "title": "Regreso",
        "details": [],
        "note": ""
      }
    ],

    // Escenciales o no traducibles
    "price": 1000,
    "image": "https://turismo.develops.mx/wp-content/uploads/2026/03/monte-alban.jpg",
    "rating": 4.9,
    "reviews": 272,
    "featured": false
  },
  {
    "id": "tour_002",
    "slug": "tour-centro-historico-de-oaxaca",
    "title": "Tour Centro Histórico de Oaxaca",
    "price": 700,
    "state": "oaxaca",
    "stateLabel": "Oaxaca",
    "image": "https://turismo.develops.mx/wp-content/uploads/2026/03/ChatGPT-Image-26-mar-2026-12_47_23-p.m.-1.jpg",
    "place": "Oaxaca de Juárez",
    "duration": "3 horas",
    "durationHours": 3,
    "type": "Cultural",
    "theme": "cultural",
    "meetingPoint": "Centro histórico",
    "startTime": "10:00 AM",
    "itinerary": [
      {
        "time": "10:00 AM",
        "title": "Inicio",
        "details": [],
        "note": ""
      },
      {
        "time": "10:30 AM",
        "title": "Recorrido",
        "details": [
          "Calles coloniales",
          "Mercados",
          "Cultura local"
        ],
        "note": ""
      },
      {
        "time": "11:30 AM",
        "title": "Visita a templo",
        "details": [
          "Lugar: Templo de Santo Domingo de Guzmán",
          "Recorrido guiado",
          "Historia"
        ],
        "note": ""
      },
      {
        "time": "1:00 PM",
        "title": "Final",
        "details": [],
        "note": ""
      }
    ],
    "includes": [
      "Guía inglés y español"
    ],
    "excludes": [
      "Alimentos"
    ],
    "highlights": [
      "Calles coloniales",
      "Mercados",
      "Cultura local",
      "Lugar: Templo de Santo Domingo de Guzmán",
      "Recorrido guiado"
    ],
    "rating": 4.6,
    "reviews": 200,
    "featured": false,
    "createdAt": "2026-03-27"
  },
  {
    "id": "tour_003",
    "slug": "tour-centro-historico-de-morelia",
    "title": "Tour Centro Histórico de Morelia",
    "price": 700,
    "state": "michoacan",
    "stateLabel": "Michoacán",
    "image": "https://turismo.develops.mx/wp-content/uploads/2026/03/ChatGPT-Image-26-mar-2026-12_42_03-p.m.-1.jpg",
    "place": "Morelia",
    "duration": "3 horas",
    "durationHours": 3,
    "type": "Cultural",
    "theme": "cultural",
    "meetingPoint": "Plaza principal",
    "startTime": "10:00 AM",
    "itinerary": [
      {
        "time": "10:00 AM",
        "title": "Inicio",
        "details": [],
        "note": ""
      },
      {
        "time": "10:30 AM",
        "title": "Recorrido",
        "details": [
          "Catedral",
          "Arquitectura colonial",
          "Historia"
        ],
        "note": ""
      },
      {
        "time": "12:30 PM",
        "title": "Final",
        "details": [],
        "note": ""
      }
    ],
    "includes": [
      "Guía inglés y español"
    ],
    "excludes": [
      "Alimentos"
    ],
    "highlights": [
      "Catedral",
      "Arquitectura colonial",
      "Historia"
    ],
    "rating": 4.6,
    "reviews": 24,
    "featured": false,
    "createdAt": "2026-03-27"
  },
  {
    "id": "tour_004",
    "slug": "tour-mariposa-monarca",
    "title": "Tour Mariposa Monarca",
    "price": 1200,
    "state": "michoacan",
    "stateLabel": "Michoacán",
    "image": "https://turismo.develops.mx/wp-content/uploads/2026/03/mariposas.jpg",
    "place": "Reserva de la Biosfera Mariposa Monarca",
    "duration": "6 horas",
    "durationHours": 6,
    "type": "Naturaleza",
    "theme": "naturaleza",
    "meetingPoint": "Hotel en Morelia",
    "startTime": "8:00 AM",
    "itinerary": [
      {
        "time": "8:00 AM",
        "title": "Salida",
        "details": [],
        "note": ""
      },
      {
        "time": "10:00 AM",
        "title": "Llegada",
        "details": [
          "Caminata guiada",
          "Observación de mariposas"
        ],
        "note": "Duración: 3 horas"
      },
      {
        "time": "1:00 PM",
        "title": "Descanso",
        "details": [],
        "note": ""
      },
      {
        "time": "2:00 PM",
        "title": "Regreso",
        "details": [],
        "note": ""
      }
    ],
    "includes": [
      "Transporte",
      "Guía inglés y español"
    ],
    "excludes": [
      "Entrada al santuario",
      "Alimentos"
    ],
    "highlights": [
      "Caminata guiada",
      "Observación de mariposas"
    ],
    "rating": 4.9,
    "reviews": 156,
    "featured": true,
    "createdAt": "2026-03-26"
  },
  {
    "id": "tour_005",
    "slug": "tour-tulum-zona-arqueologica",
    "title": "Tour Tulum Zona Arqueológica",
    "price": 2200,
    "state": "quintana-roo",
    "stateLabel": "Quintana Roo",
    "image": "https://turismo.develops.mx/wp-content/uploads/2026/03/cancun-zona.jpg",
    "place": "Tulum",
    "duration": "4 horas",
    "durationHours": 4,
    "type": "Cultural",
    "theme": "cultural",
    "meetingPoint": "Hotel en Cancún o Riviera Maya",
    "startTime": "8:00 AM",
    "itinerary": [
      {
        "time": "8:00 AM",
        "title": "Salida",
        "details": [],
        "note": ""
      },
      {
        "time": "10:00 AM",
        "title": "Llegada",
        "details": [
          "Recorrido guiado",
          "Historia maya",
          "Fotografías con vista al mar"
        ],
        "note": "Duración: 2 horas"
      },
      {
        "time": "12:30 PM",
        "title": "Tiempo libre",
        "details": [],
        "note": ""
      },
      {
        "time": "2:00 PM",
        "title": "Regreso",
        "details": [],
        "note": ""
      }
    ],
    "includes": [
      "Transporte",
      "Guía inglés y español"
    ],
    "excludes": [
      "Alimentos"
    ],
    "highlights": [
      "Recorrido guiado",
      "Historia maya",
      "Fotografías con vista al mar"
    ],
    "rating": 4.8,
    "reviews": 99,
    "featured": false,
    "createdAt": "2026-03-26"
  },
  {
    "id": "tour_006",
    "slug": "tour-playas-de-cancun",
    "title": "Tour Playas de Cancún",
    "price": 3900,
    "state": "quintana-roo",
    "stateLabel": "Quintana Roo",
    "image": "https://turismo.develops.mx/wp-content/uploads/2026/03/cancun-2.jpg",
    "place": "Cancún",
    "duration": "5 horas",
    "durationHours": 5,
    "type": "Recreativo",
    "theme": "recreativo",
    "meetingPoint": "Hotel en zona hotelera",
    "startTime": "10:00 AM",
    "itinerary": [
      {
        "time": "10:00 AM",
        "title": "Recepción",
        "details": [
          "Bienvenida"
        ],
        "note": ""
      },
      {
        "time": "10:30 AM",
        "title": "Playa",
        "details": [
          "Natación",
          "Actividades acuáticas opcionales",
          "Descanso"
        ],
        "note": "Duración: 2 horas"
      },
      {
        "time": "12:30 PM",
        "title": "Tiempo libre",
        "details": [
          "Alimentos",
          "Fotografías"
        ],
        "note": "Duración: 1 hora"
      },
      {
        "time": "2:00 PM",
        "title": "Actividades complementarias",
        "details": [
          "Caminata por la zona"
        ],
        "note": ""
      },
      {
        "time": "3:00 PM",
        "title": "Fin",
        "details": [],
        "note": ""
      }
    ],
    "includes": [
      "Guía inglés y español"
    ],
    "excludes": [
      "Alimentos",
      "Actividades acuáticas"
    ],
    "highlights": [
      "Bienvenida",
      "Natación",
      "Descanso",
      "Alimentos",
      "Fotografías"
    ],
    "rating": 4.9,
    "reviews": 251,
    "featured": true,
    "createdAt": "2026-03-26"
  },
  {
    "id": "tour_007",
    "slug": "tour-fortaleza-de-san-juan-de-ulua",
    "title": "Tour Fortaleza de San Juan de Ulúa",
    "price": 840,
    "state": "veracruz",
    "stateLabel": "Veracruz",
    "image": "https://turismo.develops.mx/wp-content/uploads/2026/03/ChatGPT-Image-26-mar-2026-12_08_20-p.m.-2.jpg",
    "place": "Fortaleza de San Juan de Ulúa",
    "duration": "2 horas",
    "durationHours": 2,
    "type": "Tour histórico",
    "theme": "cultural",
    "meetingPoint": "Entrada principal de la fortaleza",
    "startTime": "11:00 AM",
    "itinerary": [
      {
        "time": "11:00 AM",
        "title": "Inicio",
        "details": [
          "Introducción histórica"
        ],
        "note": ""
      },
      {
        "time": "11:15 AM",
        "title": "Recorrido guiado",
        "details": [
          "Historia colonial",
          "Recorrido por celdas y murallas",
          "Explicación arquitectónica"
        ],
        "note": "Duración: 1 hora 30 minutos"
      },
      {
        "time": "1:00 PM",
        "title": "Fin",
        "details": [],
        "note": ""
      }
    ],
    "includes": [
      "Entrada",
      "Guía inglés y español"
    ],
    "excludes": [
      "Transporte"
    ],
    "highlights": [
      "Introducción histórica",
      "Historia colonial",
      "Recorrido por celdas y murallas",
      "Explicación arquitectónica"
    ],
    "rating": 4.9,
    "reviews": 56,
    "featured": false,
    "createdAt": "2026-03-25"
  },
  {
    "id": "tour_008",
    "slug": "tour-puerto-de-veracruz-y-malecon",
    "title": "Tour Puerto de Veracruz y Malecón",
    "price": 800,
    "state": "veracruz",
    "stateLabel": "Veracruz",
    "image": "https://turismo.develops.mx/wp-content/uploads/2026/03/veracruz.jpg",
    "place": "Veracruz",
    "duration": "4 horas",
    "durationHours": 4,
    "type": "Tour cultural y recreativo",
    "theme": "recreativo",
    "meetingPoint": "Malecón de Veracruz",
    "startTime": "10:00 AM",
    "itinerary": [
      {
        "time": "10:00 AM",
        "title": "Recepción y bienvenida",
        "details": [
          "Registro con el guía",
          "Introducción histórica del puerto"
        ],
        "note": ""
      },
      {
        "time": "10:30 AM",
        "title": "Recorrido por el malecón",
        "details": [
          "Caminata panorámica",
          "Explicación cultural y musical del estado",
          "Tiempo para fotografías",
          "Duración aproximada: 1 hora 30 minutos"
        ],
        "note": ""
      },
      {
        "time": "12:00 PM",
        "title": "Zona gastronómica",
        "details": [
          "Tiempo libre para alimentos",
          "Recomendaciones locales"
        ],
        "note": "Duración: 1 hora"
      },
      {
        "time": "1:30 PM",
        "title": "Recorrido complementario",
        "details": [
          "Visita a plazas cercanas",
          "Cultura local"
        ],
        "note": ""
      },
      {
        "time": "2:00 PM",
        "title": "Fin del recorrido",
        "details": [],
        "note": ""
      }
    ],
    "includes": [
      "Guía turístico inglés y español",
      "Recorrido guiado"
    ],
    "excludes": [
      "Alimentos y bebidas",
      "Transporte"
    ],
    "highlights": [
      "Registro con el guía",
      "Introducción histórica del puerto",
      "Caminata panorámica",
      "Explicación cultural y musical del estado",
      "Tiempo para fotografías"
    ],
    "rating": 4.5,
    "reviews": 74,
    "featured": false,
    "createdAt": "2026-03-25"
  },
  {
    "id": "tour_009",
    "slug": "tour-pena-de-bernal",
    "title": "Tour Peña de Bernal",
    "price": 1970,
    "state": "queretaro",
    "stateLabel": "Querétaro",
    "image": "https://turismo.develops.mx/wp-content/uploads/2026/03/Tour-Pena-de-Bernal.jpg",
    "place": "Tequisquiapan",
    "duration": "6 horas",
    "durationHours": 6,
    "type": "Gastronómico",
    "theme": "gastronomia",
    "meetingPoint": "Hotel en Querétaro",
    "startTime": "9:00 AM",
    "itinerary": [
      {
        "time": "9:00 AM",
        "title": "Salida",
        "details": [],
        "note": ""
      },
      {
        "time": "10:30 AM",
        "title": "Llegada a Bernal",
        "details": [
          "Caminata",
          "Subida parcial a la peña",
          "Fotografías"
        ],
        "note": ""
      },
      {
        "time": "1:00 PM",
        "title": "Tiempo libre",
        "details": [],
        "note": ""
      },
      {
        "time": "3:00 PM",
        "title": "Regreso",
        "details": [],
        "note": ""
      }
    ],
    "includes": [
      "Transporte",
      "Guía inglés y español"
    ],
    "excludes": [
      "Alimentos"
    ],
    "highlights": [
      "Caminata",
      "Subida parcial a la peña",
      "Fotografías"
    ],
    "rating": 4.8,
    "reviews": 227,
    "featured": false,
    "createdAt": "2026-03-25"
  },
  {
    "id": "tour_010",
    "slug": "tour-ruta-del-vino-y-queso",
    "title": "Tour Ruta del Vino y Queso",
    "price": 3480,
    "state": "queretaro",
    "stateLabel": "Querétaro",
    "image": "https://turismo.develops.mx/wp-content/uploads/2026/03/Tour-Ruta-del-Vino-y-Queso.jpg",
    "place": "Tequisquiapan",
    "duration": "6 horas",
    "durationHours": 6,
    "type": "Gastronómico",
    "theme": "gastronomia",
    "meetingPoint": "Hotel en Querétaro",
    "startTime": "9:00 AM",
    "itinerary": [
      {
        "time": "9:00 AM",
        "title": "Salida",
        "details": [],
        "note": ""
      },
      {
        "time": "10:30 AM",
        "title": "Viñedo",
        "details": [
          "Recorrido",
          "Cata de vino"
        ],
        "note": ""
      },
      {
        "time": "12:30 PM",
        "title": "Quesería",
        "details": [
          "Degustación",
          "Proceso artesanal"
        ],
        "note": ""
      },
      {
        "time": "2:30 PM",
        "title": "Tiempo libre",
        "details": [],
        "note": ""
      },
      {
        "time": "4:00 PM",
        "title": "Regreso",
        "details": [],
        "note": ""
      }
    ],
    "includes": [
      "Transporte",
      "Degustaciones",
      "Guía inglés y español"
    ],
    "excludes": [
      "Alimentos"
    ],
    "highlights": [
      "Recorrido",
      "Cata de vino",
      "Degustación",
      "Proceso artesanal"
    ],
    "rating": 4.7,
    "reviews": 169,
    "featured": false,
    "createdAt": "2026-03-24"
  },
  {
    "id": "tour_011",
    "slug": "tour-acueducto-de-queretaro",
    "title": "Tour Acueducto de Querétaro",
    "price": 400,
    "state": "queretaro",
    "stateLabel": "Querétaro",
    "image": "https://turismo.develops.mx/wp-content/uploads/2026/03/acueducto.jpg",
    "place": "Acueducto de Querétaro",
    "duration": "1.5 horas",
    "durationHours": 1.5,
    "type": "Cultural",
    "theme": "cultural",
    "meetingPoint": "Mirador del Acueducto",
    "startTime": "12:00 PM",
    "itinerary": [
      {
        "time": "12:00 PM",
        "title": "Introducción",
        "details": [
          "Historia del acueducto"
        ],
        "note": ""
      },
      {
        "time": "12:15 PM",
        "title": "Recorrido",
        "details": [
          "Fotografías",
          "Explicación arquitectónica"
        ],
        "note": ""
      },
      {
        "time": "1:30 PM",
        "title": "Final",
        "details": [],
        "note": ""
      }
    ],
    "includes": [
      "Guía"
    ],
    "excludes": [
      "Transporte"
    ],
    "highlights": [
      "Historia del acueducto",
      "Fotografías",
      "Explicación arquitectónica"
    ],
    "rating": 4.6,
    "reviews": 86,
    "featured": false,
    "createdAt": "2026-03-24"
  },
  {
    "id": "tour_012",
    "slug": "tour-centro-historico-de-queretaro",
    "title": "Tour Centro Histórico de Querétaro",
    "price": 700,
    "state": "queretaro",
    "stateLabel": "Querétaro",
    "image": "https://turismo.develops.mx/wp-content/uploads/2026/03/Tour-Centro-Historico-de-Queretaro.jpg",
    "place": "Lago de Chapala",
    "duration": "4 horas",
    "durationHours": 4,
    "type": "Naturaleza",
    "theme": "naturaleza",
    "meetingPoint": "Hotel en Guadalajara",
    "startTime": "10:00 AM",
    "itinerary": [
      {
        "time": "10:00 AM",
        "title": "Inicio",
        "details": [
          "Introducción histórica"
        ],
        "note": ""
      },
      {
        "time": "10:30 AM",
        "title": "Recorrido por el centro",
        "details": [
          "Plazas y templos",
          "Arquitectura colonial",
          "Fotografías"
        ],
        "note": ""
      },
      {
        "time": "11:30 AM",
        "title": "Calles principales",
        "details": [
          "Historia local",
          "Cultura"
        ],
        "note": ""
      },
      {
        "time": "1:00 PM",
        "title": "Final",
        "details": [],
        "note": ""
      }
    ],
    "includes": [
      "Guía inglés y español"
    ],
    "excludes": [
      "Alimentos"
    ],
    "highlights": [
      "Introducción histórica",
      "Plazas y templos",
      "Arquitectura colonial",
      "Fotografías",
      "Historia local"
    ],
    "rating": 5,
    "reviews": 103,
    "featured": false,
    "createdAt": "2026-03-23"
  },
  {
    "id": "tour_013",
    "slug": "tour-lago-de-chapala",
    "title": "Tour Lago de Chapala",
    "price": 1650,
    "state": "jalisco",
    "stateLabel": "Jalisco",
    "image": "https://turismo.develops.mx/wp-content/uploads/2026/03/Tour-Lago-de-Chapala.jpg",
    "place": "Lago de Chapala",
    "duration": "4 horas",
    "durationHours": 4,
    "type": "Naturaleza",
    "theme": "naturaleza",
    "meetingPoint": "Hotel en Guadalajara",
    "startTime": "10:00 AM",
    "itinerary": [
      {
        "time": "10:00 AM",
        "title": "Salida",
        "details": [],
        "note": ""
      },
      {
        "time": "11:30 AM",
        "title": "Llegada al lago",
        "details": [
          "Caminata",
          "Vistas panorámicas",
          "Fotografías"
        ],
        "note": ""
      },
      {
        "time": "1:00 PM",
        "title": "Tiempo libre",
        "details": [],
        "note": ""
      },
      {
        "time": "2:30 PM",
        "title": "Regreso",
        "details": [],
        "note": ""
      }
    ],
    "includes": [
      "Transporte",
      "Guía inglés y español"
    ],
    "excludes": [
      "Alimentos"
    ],
    "highlights": [
      "Caminata",
      "Vistas panorámicas",
      "Fotografías"
    ],
    "rating": 4.6,
    "reviews": 182,
    "featured": false,
    "createdAt": "2026-03-23"
  },
  {
    "id": "tour_014",
    "slug": "tour-cultural-guadalajara",
    "title": "Tour Cultural Guadalajara",
    "price": 2900,
    "state": "jalisco",
    "stateLabel": "Jalisco",
    "image": "https://turismo.develops.mx/wp-content/uploads/2026/03/Tour-Cultural-Guadalajara.jpg",
    "place": "Guadalajara",
    "duration": "4 horas",
    "durationHours": 4,
    "type": "Cultural",
    "theme": "cultural",
    "meetingPoint": "Centro histórico",
    "startTime": "5:00 PM",
    "itinerary": [
      {
        "time": "5:00 PM",
        "title": "Inicio",
        "details": [
          "Introducción histórica"
        ],
        "note": ""
      },
      {
        "time": "5:30 PM",
        "title": "Recorrido cultural",
        "details": [
          "Plazas y arquitectura",
          "Historia local"
        ],
        "note": ""
      },
      {
        "time": "6:30 PM",
        "title": "Experiencia mariachi",
        "details": [
          "Música en vivo",
          "Interacción cultural"
        ],
        "note": ""
      },
      {
        "time": "7:30 PM",
        "title": "Cena opcional",
        "details": [],
        "note": ""
      },
      {
        "time": "9:00 PM",
        "title": "Final",
        "details": [],
        "note": ""
      }
    ],
    "includes": [
      "Guía inglés y español",
      "Show mariachi"
    ],
    "excludes": [
      "Alimentos"
    ],
    "highlights": [
      "Introducción histórica",
      "Plazas y arquitectura",
      "Historia local",
      "Música en vivo",
      "Interacción cultural"
    ],
    "rating": 4.7,
    "reviews": 98,
    "featured": false,
    "createdAt": "2026-03-23"
  },
  {
    "id": "tour_015",
    "slug": "tour-playas-y-malecon-de-puerto-vallarta",
    "title": "Tour Playas y Malecón de Puerto Vallarta",
    "price": 1050,
    "state": "jalisco",
    "stateLabel": "Jalisco",
    "image": "https://turismo.develops.mx/wp-content/uploads/2026/03/Tour-Playas-y-Malecon-de-Puerto-Vallarta.jpg",
    "place": "Puerto Vallarta",
    "duration": "5 horas",
    "durationHours": 5,
    "type": "Recreativo",
    "theme": "recreativo",
    "meetingPoint": "Malecón de Puerto Vallarta",
    "startTime": "10:00 AM",
    "itinerary": [
      {
        "time": "10:00 AM",
        "title": "Recepción",
        "details": [
          "Bienvenida por el guía",
          "Introducción al destino"
        ],
        "note": ""
      },
      {
        "time": "10:30 AM",
        "title": "Recorrido por el Malecón",
        "details": [
          "Malecón de Puerto Vallarta",
          "Caminata panorámica",
          "Esculturas icónicas",
          "Fotografías"
        ],
        "note": "Duración: 1 hora"
      },
      {
        "time": "11:30 AM",
        "title": "Tiempo en playa",
        "details": [
          "Descanso",
          "Actividades acuáticas opcionales (No incluidas)",
          "Natación"
        ],
        "note": "Duración: 2 horas"
      },
      {
        "time": "1:30 PM",
        "title": "Zona gastronómica",
        "details": [
          "Tiempo libre para comida",
          "Recomendaciones locales"
        ],
        "note": ""
      },
      {
        "time": "3:00 PM",
        "title": "Fin del recorrido",
        "details": [],
        "note": ""
      }
    ],
    "includes": [
      "Guía inglés y español",
      "Recorrido"
    ],
    "excludes": [
      "Alimentos",
      "Actividades acuáticas"
    ],
    "highlights": [
      "Bienvenida por el guía",
      "Introducción al destino",
      "Malecón de Puerto Vallarta",
      "Caminata panorámica",
      "Esculturas icónicas"
    ],
    "rating": 4.4,
    "reviews": 48,
    "featured": false,
    "createdAt": "2026-03-22"
  },
  {
    "id": "tour_016",
    "slug": "tour-callejon-del-beso",
    "title": "Tour Callejón del Beso",
    "price": 300,
    "state": "guanajuato",
    "stateLabel": "Guanajuato",
    "image": "https://turismo.develops.mx/wp-content/uploads/2026/03/callejon-beso.jpg",
    "place": "Callejón del Beso",
    "duration": "1 hora",
    "durationHours": 1,
    "type": "Experiencia cultural",
    "theme": "cultural",
    "meetingPoint": "Entrada del Callejón del Beso",
    "startTime": "12:00 PM",
    "itinerary": [
      {
        "time": "12:00 PM",
        "title": "Introducción",
        "details": [
          "Historia y leyenda del lugar"
        ],
        "note": ""
      },
      {
        "time": "12:15 PM",
        "title": "Recorrido",
        "details": [
          "Visita guiada",
          "Fotografías"
        ],
        "note": ""
      },
      {
        "time": "1:00 PM",
        "title": "Final",
        "details": [],
        "note": ""
      }
    ],
    "includes": [
      "Guía inglés y español"
    ],
    "excludes": [
      "Transporte"
    ],
    "highlights": [
      "Historia y leyenda del lugar",
      "Visita guiada",
      "Fotografías"
    ],
    "rating": 4.5,
    "reviews": 256,
    "featured": false,
    "createdAt": "2026-03-22"
  },
  {
    "id": "tour_017",
    "slug": "callejoneada-nocturna-en-guanajuato",
    "title": "Callejoneada Nocturna en Guanajuato",
    "price": 450,
    "state": "guanajuato",
    "stateLabel": "Guanajuato",
    "image": "https://turismo.develops.mx/wp-content/uploads/2026/03/callejonada.jpg",
    "place": "Guanajuato",
    "duration": "2 horas",
    "durationHours": 2,
    "type": "Experiencia cultural nocturna",
    "theme": "recreativo",
    "meetingPoint": "Plaza San Roque",
    "startTime": "7:00 PM",
    "itinerary": [
      {
        "time": "7:00 PM",
        "title": "Inicio del recorrido",
        "details": [
          "Bienvenida por estudiantina"
        ],
        "note": ""
      },
      {
        "time": "7:15 PM",
        "title": "Recorrido por callejones",
        "details": [
          "Música en vivo",
          "Leyendas",
          "Interacción con turistas"
        ],
        "note": "Duración: 1.5 horas"
      },
      {
        "time": "9:00 PM",
        "title": "Final",
        "details": [],
        "note": ""
      }
    ],
    "includes": [
      "Estudiantina",
      "Recorrido guiado inglés y español"
    ],
    "excludes": [
      "Bebidas adicionales"
    ],
    "highlights": [
      "Bienvenida por estudiantina",
      "Música en vivo",
      "Leyendas",
      "Interacción con turistas"
    ],
    "rating": 4.8,
    "reviews": 83,
    "featured": false,
    "createdAt": "2026-03-22"
  },
  {
    "id": "tour_018",
    "slug": "tour-museo-de-las-momias-de-guanajuato",
    "title": "Tour Museo de las Momias de Guanajuato",
    "price": 1670,
    "state": "guanajuato",
    "stateLabel": "Guanajuato",
    "image": "https://turismo.develops.mx/wp-content/uploads/2026/03/momias.jpg",
    "place": "Museo de las Momias de Guanajuato",
    "duration": "2 horas",
    "durationHours": 2,
    "type": "Cultural",
    "theme": "cultural",
    "meetingPoint": "Entrada del museo",
    "startTime": "11:00 AM",
    "itinerary": [
      {
        "time": "11:00 AM",
        "title": "Acceso",
        "details": [],
        "note": ""
      },
      {
        "time": "11:15 AM",
        "title": "Recorrido guiado",
        "details": [
          "Historia de las momias",
          "Contexto cultural",
          "Exposición"
        ],
        "note": "Duración: 1.5 horas"
      },
      {
        "time": "1:00 PM",
        "title": "Final",
        "details": [],
        "note": ""
      }
    ],
    "includes": [
      "Entrada",
      "Guía inglés y español"
    ],
    "excludes": [
      "Transporte"
    ],
    "highlights": [
      "Historia de las momias",
      "Contexto cultural",
      "Exposición"
    ],
    "rating": 4.5,
    "reviews": 93,
    "featured": false,
    "createdAt": "2026-03-21"
  },
  {
    "id": "tour_019",
    "slug": "tour-centro-historico-de-guanajuato",
    "title": "Tour Centro Histórico de Guanajuato",
    "price": 940,
    "state": "guanajuato",
    "stateLabel": "Guanajuato",
    "image": "https://turismo.develops.mx/wp-content/uploads/2026/03/centro_guanajuato.jpg",
    "place": "Guanajuato",
    "duration": "3 horas",
    "durationHours": 3,
    "type": "Walking tour cultural",
    "theme": "cultural",
    "meetingPoint": "Teatro Juárez",
    "startTime": "10:00 AM",
    "itinerary": [
      {
        "time": "10:00 AM",
        "title": "Recepción y bienvenida",
        "details": [
          "Introducción histórica de la ciudad"
        ],
        "note": ""
      },
      {
        "time": "10:30 AM",
        "title": "Recorrido por calles y túneles",
        "details": [
          "Exploración de calles coloridas",
          "Recorrido por túneles subterráneos",
          "Explicación histórica"
        ],
        "note": "Duración: 1.5 horas"
      },
      {
        "time": "12:00 PM",
        "title": "Plazas y puntos icónicos",
        "details": [
          "Visita a plazas principales",
          "Fotografías"
        ],
        "note": ""
      },
      {
        "time": "1:00 PM",
        "title": "Fin del recorrido",
        "details": [],
        "note": ""
      }
    ],
    "includes": [
      "Guía turístico inglés y español"
    ],
    "excludes": [
      "Transporte",
      "Alimentos"
    ],
    "highlights": [
      "Introducción histórica de la ciudad",
      "Exploración de calles coloridas",
      "Recorrido por túneles subterráneos",
      "Explicación histórica",
      "Visita a plazas principales"
    ],
    "rating": 4.5,
    "reviews": 256,
    "featured": false,
    "createdAt": "2026-03-21"
  },
  {
    "id": "tour_020",
    "slug": "tour-cerro-de-la-silla",
    "title": "Tour Cerro de la Silla",
    "price": 1700,
    "state": "nuevo-leon",
    "stateLabel": "Nuevo León",
    "image": "https://turismo.develops.mx/wp-content/uploads/2026/03/cerro_silla.jpg",
    "place": "Cerro de la Silla",
    "duration": "5 horas",
    "durationHours": 5,
    "type": "Aventura / senderismo",
    "theme": "aventura",
    "meetingPoint": "Base del Cerro de la Silla",
    "startTime": "7:00 AM",
    "itinerary": [
      {
        "time": "7:00 AM",
        "title": "Inicio del ascenso",
        "details": [
          "Calentamiento",
          "Indicaciones de seguridad"
        ],
        "note": ""
      },
      {
        "time": "8:30 AM",
        "title": "Ascenso guiado",
        "details": [
          "Caminata de montaña",
          "Vistas panorámicas",
          "Fotografías"
        ],
        "note": "Duración: 3 horas"
      },
      {
        "time": "11:30 AM",
        "title": "Llegada al mirador",
        "details": [],
        "note": ""
      },
      {
        "time": "12:30 PM",
        "title": "Descenso",
        "details": [],
        "note": ""
      }
    ],
    "includes": [
      "Guía inglés y español"
    ],
    "excludes": [
      "Alimentos",
      "Equipo especializado"
    ],
    "highlights": [
      "Calentamiento",
      "Indicaciones de seguridad",
      "Caminata de montaña",
      "Vistas panorámicas",
      "Fotografías"
    ],
    "rating": 4.6,
    "reviews": 247,
    "featured": false,
    "createdAt": "2026-03-20"
  },
  {
    "id": "tour_021",
    "slug": "tour-museo-de-arte-contemporaneo-de-monterrey",
    "title": "Tour Museo de Arte Contemporáneo de Monterrey",
    "price": 640,
    "state": "nuevo-leon",
    "stateLabel": "Nuevo León",
    "image": "https://turismo.develops.mx/wp-content/uploads/2026/03/arte_monterrey.jpg",
    "place": "Museo de Arte Contemporáneo de Monterrey",
    "duration": "2 horas",
    "durationHours": 2,
    "type": "Cultural",
    "theme": "cultural",
    "meetingPoint": "Entrada principal del museo",
    "startTime": "12:00 PM",
    "itinerary": [
      {
        "time": "12:00 PM",
        "title": "Acceso al museo",
        "details": [],
        "note": ""
      },
      {
        "time": "12:15 PM",
        "title": "Recorrido guiado",
        "details": [
          "Exposiciones de arte moderno",
          "Interpretación de obras",
          "Tiempo para fotografías"
        ],
        "note": ""
      },
      {
        "time": "2:00 PM",
        "title": "Final",
        "details": [],
        "note": ""
      }
    ],
    "includes": [
      "Acceso",
      "Guía cultural inglés y español"
    ],
    "excludes": [
      "Transporte"
    ],
    "highlights": [
      "Exposiciones de arte moderno",
      "Interpretación de obras",
      "Tiempo para fotografías"
    ],
    "rating": 4.5,
    "reviews": 171,
    "featured": false,
    "createdAt": "2026-03-20"
  },
  {
    "id": "tour_022",
    "slug": "tour-paseo-santa-lucia",
    "title": "Tour Paseo Santa Lucía",
    "price": 650,
    "state": "nuevo-leon",
    "stateLabel": "Nuevo León",
    "image": "https://turismo.develops.mx/wp-content/uploads/2026/03/santa-lucia-1.jpg",
    "place": "Paseo Santa Lucía",
    "duration": "3 horas",
    "durationHours": 3,
    "type": "Cultural y recreativo",
    "theme": "recreativo",
    "meetingPoint": "Fundidora Park",
    "startTime": "11:00 AM",
    "itinerary": [
      {
        "time": "11:00 AM",
        "title": "Inicio del recorrido",
        "details": [
          "Introducción al canal"
        ],
        "note": ""
      },
      {
        "time": "11:30 AM",
        "title": "Paseo en lancha",
        "details": [
          "Recorrido por el canal",
          "Vistas urbanas",
          "Explicación cultural"
        ],
        "note": "Duración: 1 hora"
      },
      {
        "time": "12:30 PM",
        "title": "Caminata por la zona",
        "details": [
          "Arte urbano",
          "Restaurantes",
          "Fotografías"
        ],
        "note": ""
      },
      {
        "time": "2:00 PM",
        "title": "Fin del recorrido",
        "details": [],
        "note": ""
      }
    ],
    "includes": [
      "Paseo en lancha",
      "Guía inglés y español"
    ],
    "excludes": [
      "Alimentos",
      "Bebidas"
    ],
    "highlights": [
      "Introducción al canal",
      "Recorrido por el canal",
      "Vistas urbanas",
      "Explicación cultural",
      "Arte urbano"
    ],
    "rating": 4.4,
    "reviews": 125,
    "featured": false,
    "createdAt": "2026-03-20"
  },
  {
    "id": "tour_023",
    "slug": "tour-grutas-de-garcia",
    "title": "Tour Grutas de García",
    "price": 1100,
    "state": "nuevo-leon",
    "stateLabel": "Nuevo León",
    "image": "https://turismo.develops.mx/wp-content/uploads/2026/03/grutos.jpg",
    "place": "Grutas de García",
    "duration": "4 horas",
    "durationHours": 4,
    "type": "Aventura",
    "theme": "aventura",
    "meetingPoint": "Centro de Monterrey",
    "startTime": "9:00 AM",
    "itinerary": [
      {
        "time": "9:00 AM",
        "title": "Salida",
        "details": [],
        "note": ""
      },
      {
        "time": "10:00 AM",
        "title": "Ascenso en teleférico",
        "details": [],
        "note": ""
      },
      {
        "time": "10:30 AM",
        "title": "Recorrido en cavernas",
        "details": [
          "Exploración guiada",
          "Explicación geológica",
          "Fotografías"
        ],
        "note": "Duración: 2 horas"
      },
      {
        "time": "1:00 PM",
        "title": "Regreso",
        "details": [],
        "note": ""
      }
    ],
    "includes": [
      "Transporte",
      "Guía inglés y español"
    ],
    "excludes": [
      "Alimentos"
    ],
    "highlights": [
      "Exploración guiada",
      "Explicación geológica",
      "Fotografías"
    ],
    "rating": 4.7,
    "reviews": 36,
    "featured": false,
    "createdAt": "2026-03-19"
  },
  {
    "id": "tour_024",
    "slug": "tour-parque-nacional-cumbres-de-monterrey",
    "title": "Tour Parque Nacional Cumbres de Monterrey",
    "price": 2250,
    "state": "nuevo-leon",
    "stateLabel": "Nuevo León",
    "image": "https://turismo.develops.mx/wp-content/uploads/2026/03/cumbres.jpg",
    "place": "Parque Nacional Cumbres de Monterrey",
    "duration": "6 horas",
    "durationHours": 6,
    "type": "Naturaleza y aventura",
    "theme": "aventura",
    "meetingPoint": "Hotel en Monterrey",
    "startTime": "8:00 AM",
    "itinerary": [
      {
        "time": "8:00 AM",
        "title": "Salida",
        "details": [
          "Traslado en transporte turístico",
          "Introducción al parque"
        ],
        "note": ""
      },
      {
        "time": "9:30 AM",
        "title": "Senderismo",
        "details": [
          "Caminata guiada",
          "Observación de flora y fauna",
          "Fotografías"
        ],
        "note": "Duración: 3 horas"
      },
      {
        "time": "1:00 PM",
        "title": "Tiempo libre / descanso",
        "details": [],
        "note": ""
      },
      {
        "time": "2:00 PM",
        "title": "Regreso",
        "details": [],
        "note": ""
      }
    ],
    "includes": [
      "Transporte",
      "Guía inglés y español"
    ],
    "excludes": [
      "Alimentos",
      "Equipo especializado"
    ],
    "highlights": [
      "Traslado en transporte turístico",
      "Introducción al parque",
      "Caminata guiada",
      "Observación de flora y fauna",
      "Fotografías"
    ],
    "rating": 4.4,
    "reviews": 48,
    "featured": false,
    "createdAt": "2026-03-19"
  },
  {
    "id": "tour_025",
    "slug": "tour-isla-de-la-piedra",
    "title": "Tour Isla de la Piedra",
    "price": 1820,
    "state": "sinaloa",
    "stateLabel": "Sinaloa",
    "image": "https://turismo.develops.mx/wp-content/uploads/2026/03/isla-piedra.jpg",
    "place": "Isla de la Piedra",
    "duration": "5 horas",
    "durationHours": 5,
    "type": "Naturaleza y relajación",
    "theme": "naturaleza",
    "meetingPoint": "Embarcadero de Mazatlán",
    "startTime": "10:00 AM",
    "itinerary": [
      {
        "time": "10:00 AM",
        "title": "Traslado en lancha",
        "details": [
          "Cruce hacia la isla"
        ],
        "note": ""
      },
      {
        "time": "10:30 AM",
        "title": "Llegada a la isla",
        "details": [
          "Descanso en playa",
          "Caminatas",
          "Actividades opcionales (caballos, cuatrimotos) costo adicional"
        ],
        "note": "Duración: 3 horas"
      },
      {
        "time": "2:00 PM",
        "title": "Comida (opcional) no incluido",
        "details": [],
        "note": ""
      },
      {
        "time": "3:00 PM",
        "title": "Regreso",
        "details": [],
        "note": ""
      }
    ],
    "includes": [
      "Transporte en lancha",
      "Guía"
    ],
    "excludes": [
      "Alimentos",
      "Actividades extra"
    ],
    "highlights": [
      "Cruce hacia la isla",
      "Descanso en playa",
      "Caminatas"
    ],
    "rating": 4.8,
    "reviews": 163,
    "featured": false,
    "createdAt": "2026-03-19"
  },
  {
    "id": "tour_026",
    "slug": "tour-centro-historico-de-mazatlan",
    "title": "Tour Centro Histórico de Mazatlán",
    "price": 1130,
    "state": "sinaloa",
    "stateLabel": "Sinaloa",
    "image": "https://turismo.develops.mx/wp-content/uploads/2026/03/centro_maz.jpg",
    "place": "Mazatlán",
    "duration": "3 horas",
    "durationHours": 3,
    "type": "Walking tour cultural",
    "theme": "cultural",
    "meetingPoint": "Plaza Machado",
    "startTime": "10:00 AM",
    "itinerary": [
      {
        "time": "10:00 AM",
        "title": "Inicio del recorrido",
        "details": [
          "Introducción histórica"
        ],
        "note": ""
      },
      {
        "time": "10:30 AM",
        "title": "Recorrido por calles coloniales",
        "details": [
          "Arquitectura histórica",
          "Galerías y cafés"
        ],
        "note": ""
      },
      {
        "time": "11:30 AM",
        "title": "Teatro Ángela Peralta",
        "details": [
          "Teatro Ángela Peralta",
          "Historia del teatro",
          "Recorrido exterior/interior"
        ],
        "note": "Duración: 40 minutos"
      },
      {
        "time": "1:00 PM",
        "title": "Fin del recorrido",
        "details": [],
        "note": ""
      }
    ],
    "includes": [
      "Guía inglés y español"
    ],
    "excludes": [
      "Entradas a eventos",
      "Alimentos"
    ],
    "highlights": [
      "Introducción histórica",
      "Arquitectura histórica",
      "Galerías y cafés",
      "Teatro Ángela Peralta",
      "Historia del teatro"
    ],
    "rating": 4.9,
    "reviews": 235,
    "featured": false,
    "createdAt": "2026-03-18"
  },
  {
    "id": "tour_027",
    "slug": "tour-paseo-en-barco-y-actividades-acuaticas",
    "title": "Tour Paseo en Barco y Actividades Acuáticas",
    "price": 4400,
    "state": "sinaloa",
    "stateLabel": "Sinaloa",
    "image": "https://turismo.develops.mx/wp-content/uploads/2026/03/barco.jpg",
    "place": "Mazatlán",
    "duration": "3 horas",
    "durationHours": 3,
    "type": "Tour acuático",
    "theme": "naturaleza",
    "meetingPoint": "Marina de Mazatlán",
    "startTime": "11:00 AM",
    "itinerary": [
      {
        "time": "11:00 AM",
        "title": "Abordaje",
        "details": [
          "Registro",
          "Instrucciones de seguridad"
        ],
        "note": ""
      },
      {
        "time": "11:30 AM",
        "title": "Paseo en barco",
        "details": [
          "Recorrido por la costa",
          "Vistas panorámicas"
        ],
        "note": ""
      },
      {
        "time": "12:30 PM",
        "title": "Actividades acuáticas",
        "details": [
          "snorkel (opcional)",
          "natación"
        ],
        "note": "Duración: 1 hora"
      },
      {
        "time": "2:00 PM",
        "title": "Regreso",
        "details": [],
        "note": ""
      }
    ],
    "includes": [
      "Paseo en barco",
      "Equipo básico",
      "Guía en inglés y español"
    ],
    "excludes": [
      "Bebidas",
      "Propinas"
    ],
    "highlights": [
      "Registro",
      "Instrucciones de seguridad",
      "Recorrido por la costa",
      "Vistas panorámicas",
      "snorkel (opcional)"
    ],
    "rating": 4.8,
    "reviews": 219,
    "featured": false,
    "createdAt": "2026-03-18"
  },
  {
    "id": "tour_028",
    "slug": "tour-playas-y-malecon-de-mazatlan",
    "title": "Tour Playas y Malecón de Mazatlán",
    "price": 1680,
    "state": "sinaloa",
    "stateLabel": "Sinaloa",
    "image": "https://turismo.develops.mx/wp-content/uploads/2026/03/playa_maza.jpg",
    "place": "Mazatlán",
    "duration": "4 horas",
    "durationHours": 4,
    "type": "Tour recreativo",
    "theme": "recreativo",
    "meetingPoint": "Monumento al Pescador (Malecón)",
    "startTime": "9:00 AM",
    "itinerary": [
      {
        "time": "9:00 AM",
        "title": "Recepción",
        "details": [
          "Bienvenida por el guía",
          "Introducción a Mazatlán"
        ],
        "note": ""
      },
      {
        "time": "9:30 AM",
        "title": "Recorrido por el malecón",
        "details": [
          "Malecón de Mazatlán",
          "Caminata panorámica",
          "Explicación histórica",
          "Fotografías"
        ],
        "note": "Duración: 1.5 horas"
      },
      {
        "time": "11:00 AM",
        "title": "Tiempo en playa",
        "details": [
          "Descanso",
          "Actividades libres"
        ],
        "note": "Duración: 2 horas"
      },
      {
        "time": "1:00 PM",
        "title": "Fin del recorrido",
        "details": [],
        "note": ""
      }
    ],
    "includes": [
      "Guía inglés y español",
      "Recorrido"
    ],
    "excludes": [
      "Alimentos",
      "Transporte"
    ],
    "highlights": [
      "Bienvenida por el guía",
      "Introducción a Mazatlán",
      "Malecón de Mazatlán",
      "Caminata panorámica",
      "Explicación histórica"
    ],
    "rating": 4.6,
    "reviews": 65,
    "featured": false,
    "createdAt": "2026-03-17"
  },
  {
    "id": "tour_029",
    "slug": "tour-centro-historico-de-chihuahua",
    "title": "Tour Centro Histórico de Chihuahua",
    "price": 420,
    "state": "chihuahua",
    "stateLabel": "Chihuahua",
    "image": "https://turismo.develops.mx/wp-content/uploads/2026/03/centro-chihuahua.jpg",
    "place": "Chihuahua",
    "duration": "3 horas",
    "durationHours": 3,
    "type": "Walking tour",
    "theme": "cultural",
    "meetingPoint": "Plaza de Armas de Chihuahua",
    "startTime": "10:00 AM",
    "itinerary": [
      {
        "time": "10:00 AM",
        "title": "Inicio del recorrido",
        "details": [
          "Introducción histórica"
        ],
        "note": ""
      },
      {
        "time": "10:30 AM",
        "title": "Recorrido por edificios coloniales",
        "details": [
          "Historia de la ciudad",
          "Arquitectura"
        ],
        "note": ""
      },
      {
        "time": "11:30 AM",
        "title": "Museo Casa de Pancho Villa",
        "details": [
          "Museo Casa de Pancho Villa",
          "Historia de Pancho Villa",
          "Recorrido por exhibiciones"
        ],
        "note": "Duración: 1 hora"
      },
      {
        "time": "1:00 PM",
        "title": "Final del recorrido",
        "details": [],
        "note": ""
      }
    ],
    "includes": [
      "Guía inglés y español",
      "Entrada al museo"
    ],
    "excludes": [
      "Alimentos",
      "Transporte"
    ],
    "highlights": [
      "Introducción histórica",
      "Historia de la ciudad",
      "Arquitectura",
      "Museo Casa de Pancho Villa",
      "Historia de Pancho Villa"
    ],
    "rating": 4.7,
    "reviews": 175,
    "featured": false,
    "createdAt": "2026-03-17"
  },
  {
    "id": "tour_030",
    "slug": "tour-valle-de-los-monjes-y-lago-de-arareco",
    "title": "Tour Valle de los Monjes y Lago de Arareco",
    "price": 1300,
    "state": "chihuahua",
    "stateLabel": "Chihuahua",
    "image": "https://turismo.develops.mx/wp-content/uploads/2026/03/arareco.jpg",
    "place": "Valle de los Monjes y Lago de Arareco",
    "duration": "5 horas",
    "durationHours": 5,
    "type": "Naturaleza",
    "theme": "naturaleza",
    "meetingPoint": "Hotel en Creel",
    "startTime": "9:30 AM",
    "itinerary": [
      {
        "time": "9:30 AM",
        "title": "Salida",
        "details": [],
        "note": ""
      },
      {
        "time": "10:00 AM",
        "title": "Valle de los Monjes",
        "details": [
          "Recorrido entre formaciones rocosas",
          "Fotografías"
        ],
        "note": "Duración: 1.5 horas"
      },
      {
        "time": "12:00 PM",
        "title": "Lago de Arareco",
        "details": [
          "Caminata",
          "Visitas naturales"
        ],
        "note": "Duración: 2 horas"
      },
      {
        "time": "2:30 PM",
        "title": "Regreso",
        "details": [],
        "note": ""
      }
    ],
    "includes": [
      "Transporte",
      "Guía inglés y español"
    ],
    "excludes": [
      "Alimentos"
    ],
    "highlights": [
      "Recorrido entre formaciones rocosas",
      "Fotografías",
      "Caminata",
      "Visitas naturales"
    ],
    "rating": 4.5,
    "reviews": 36,
    "featured": false,
    "createdAt": "2026-03-17"
  },
  {
    "id": "tour_031",
    "slug": "tour-pueblo-magico-creel",
    "title": "Tour Pueblo Mágico Creel",
    "price": 800,
    "state": "chihuahua",
    "stateLabel": "Chihuahua",
    "image": "https://turismo.develops.mx/wp-content/uploads/2026/03/creel.jpg",
    "place": "Creel",
    "duration": "4 horas",
    "durationHours": 4,
    "type": "Tour cultural",
    "theme": "cultural",
    "meetingPoint": "Plaza principal de Creel",
    "startTime": "10:00 AM",
    "itinerary": [
      {
        "time": "10:00 AM",
        "title": "Inicio del recorrido",
        "details": [
          "Historia del pueblo",
          "Cultura rarámuri"
        ],
        "note": ""
      },
      {
        "time": "11:00 AM",
        "title": "Recorrido por calles principales",
        "details": [
          "Visitas culturales",
          "Compras artesanales"
        ],
        "note": ""
      },
      {
        "time": "1:30 PM",
        "title": "Final del recorrido",
        "details": [],
        "note": ""
      }
    ],
    "includes": [
      "Guía inglés y español"
    ],
    "excludes": [
      "Transporte",
      "Alimentos"
    ],
    "highlights": [
      "Historia del pueblo",
      "Cultura rarámuri",
      "Visitas culturales",
      "Compras artesanales"
    ],
    "rating": 4.9,
    "reviews": 118,
    "featured": false,
    "createdAt": "2026-03-16"
  },
  {
    "id": "tour_032",
    "slug": "tour-ferrocarril-chihuahua-al-pacifico-chepe",
    "title": "Tour Ferrocarril Chihuahua al Pacífico (Chepe)",
    "price": 5100,
    "state": "chihuahua",
    "stateLabel": "Chihuahua",
    "image": "https://turismo.develops.mx/wp-content/uploads/2026/03/chepe.jpg",
    "place": "Ferrocarril Chihuahua al Pacífico",
    "duration": "9 horas",
    "durationHours": 9,
    "type": "Experiencia escénica",
    "theme": "recreativo",
    "meetingPoint": "Estación de tren en Creel",
    "startTime": "8:00 AM",
    "itinerary": [
      {
        "time": "8:00 AM",
        "title": "Abordaje del tren",
        "details": [
          "Registro y acceso",
          "Asignación de asientos"
        ],
        "note": ""
      },
      {
        "time": "8:30 AM",
        "title": "Inicio del recorrido",
        "details": [
          "Viaje panorámico",
          "Cruce de túneles y puentes",
          "Observación de paisajes"
        ],
        "note": ""
      },
      {
        "time": "12:30 PM",
        "title": "Parada en miradores",
        "details": [],
        "note": ""
      },
      {
        "time": "5:00 PM",
        "title": "Fin del recorrido",
        "details": [],
        "note": ""
      }
    ],
    "includes": [
      "Boleto de tren",
      "Asistencia",
      "Guía inglés y español"
    ],
    "excludes": [
      "Alimentos",
      "Bebidas"
    ],
    "highlights": [
      "Registro y acceso",
      "Asignación de asientos",
      "Viaje panorámico",
      "Cruce de túneles y puentes",
      "Observación de paisajes"
    ],
    "rating": 5,
    "reviews": 279,
    "featured": true,
    "createdAt": "2026-03-16"
  },
  {
    "id": "tour_033",
    "slug": "tour-barrancas-del-cobre",
    "title": "Tour Barrancas del Cobre",
    "price": 3900,
    "state": "chihuahua",
    "stateLabel": "Chihuahua",
    "image": "https://turismo.develops.mx/wp-content/uploads/2026/03/barrancas.jpg",
    "place": "Barrancas del Cobre",
    "duration": "8 horas",
    "durationHours": 8,
    "type": "Tour de naturaleza y aventura",
    "theme": "aventura",
    "meetingPoint": "Hotel en Creel",
    "startTime": "9:00 AM",
    "itinerary": [
      {
        "time": "9:00 AM",
        "title": "Salida hacia miradores",
        "details": [
          "Traslado en transporte turístico",
          "Introducción a la región"
        ],
        "note": ""
      },
      {
        "time": "10:30 AM",
        "title": "Miradores de las Barrancas",
        "details": [
          "Observación panorámica",
          "Explicación geográfica",
          "Fotografías"
        ],
        "note": "Duración: 2 horas"
      },
      {
        "time": "1:00 PM",
        "title": "Recorrido en teleférico (opcional)",
        "details": [],
        "note": ""
      },
      {
        "time": "3:00 PM",
        "title": "Regreso",
        "details": [],
        "note": ""
      }
    ],
    "includes": [
      "Transporte",
      "Guía turístico inglés y español"
    ],
    "excludes": [
      "Teleférico",
      "Alimentos",
      "Propinas"
    ],
    "highlights": [
      "Traslado en transporte turístico",
      "Introducción a la región",
      "Observación panorámica",
      "Explicación geográfica",
      "Fotografías"
    ],
    "rating": 4.5,
    "reviews": 169,
    "featured": true,
    "createdAt": "2026-03-16"
  },
  {
    "id": "tour_034",
    "slug": "tour-centro-cultural-tijuana",
    "title": "Tour Centro Cultural Tijuana",
    "price": 400,
    "state": "baja-california",
    "stateLabel": "Baja California",
    "image": "https://turismo.develops.mx/wp-content/uploads/2026/03/centro-cultural.jpg",
    "place": "Centro Cultural Tijuana",
    "duration": "2 horas",
    "durationHours": 2,
    "type": "Experiencia personalizada",
    "theme": "cultural",
    "meetingPoint": "Entrada principal del centro cultural",
    "startTime": "11:00 AM",
    "itinerary": [
      {
        "time": "11:00 AM",
        "title": "Entrada",
        "details": [],
        "note": ""
      },
      {
        "time": "11:15 AM",
        "title": "Recorrido",
        "details": [
          "Exposiciones",
          "Museos",
          "Espacios culturales"
        ],
        "note": ""
      },
      {
        "time": "12:45 PM",
        "title": "Final",
        "details": [],
        "note": ""
      }
    ],
    "includes": [
      "Acceso",
      "Guía cultural inglés y español"
    ],
    "excludes": [
      "Transporte",
      "Alimentos"
    ],
    "highlights": [
      "Exposiciones",
      "Museos",
      "Espacios culturales"
    ],
    "rating": 4.5,
    "reviews": 115,
    "featured": false,
    "createdAt": "2026-03-15"
  },
  {
    "id": "tour_035",
    "slug": "tour-avenida-revolucion-tijuana",
    "title": "Tour Avenida Revolución Tijuana",
    "price": 980,
    "state": "baja-california",
    "stateLabel": "Baja California",
    "image": "https://turismo.develops.mx/wp-content/uploads/2026/03/rev_tij.jpg",
    "place": "Avenida Revolución",
    "duration": "3 horas",
    "durationHours": 3,
    "type": "Experiencia personalizada",
    "theme": "cultural",
    "meetingPoint": "Arco de Tijuana",
    "startTime": "6:00 PM",
    "itinerary": [
      {
        "time": "6:00 PM",
        "title": "Inicio",
        "details": [],
        "note": ""
      },
      {
        "time": "6:30 PM",
        "title": "Recorrido urbano",
        "details": [
          "Arte urbano",
          "Bares y cultura local"
        ],
        "note": ""
      },
      {
        "time": "8:30 PM",
        "title": "Fin del recorrido",
        "details": [],
        "note": ""
      }
    ],
    "includes": [
      "Guía inglés y español"
    ],
    "excludes": [
      "Bebidas",
      "Consumo en bares"
    ],
    "highlights": [
      "Arte urbano",
      "Bares y cultura local"
    ],
    "rating": 4.4,
    "reviews": 228,
    "featured": false,
    "createdAt": "2026-03-15"
  },
  {
    "id": "tour_036",
    "slug": "tour-gastronomico-baja-med",
    "title": "Tour Gastronómico Baja Med",
    "price": 2400,
    "state": "baja-california",
    "stateLabel": "Baja California",
    "image": "https://turismo.develops.mx/wp-content/uploads/2026/03/gastro-baja-med.jpg",
    "place": "Ensenada",
    "duration": "4 horas",
    "durationHours": 4,
    "type": "Experiencia personalizada",
    "theme": "cultural",
    "meetingPoint": "Centro de Ensenada",
    "startTime": "2:00 PM",
    "itinerary": [
      {
        "time": "2:00 PM",
        "title": "Inicio del recorrido",
        "details": [],
        "note": ""
      },
      {
        "time": "2:30 PM",
        "title": "Degustaciones",
        "details": [
          "Platillos:",
          "Mariscos frescos",
          "Cocina Baja Med"
        ],
        "note": ""
      },
      {
        "time": "5:30 PM",
        "title": "Final del tour",
        "details": [],
        "note": ""
      }
    ],
    "includes": [
      "Guía",
      "Degustaciones"
    ],
    "excludes": [
      "Bebidas"
    ],
    "highlights": [
      "Platillos:",
      "Mariscos frescos",
      "Cocina Baja Med"
    ],
    "rating": 4.7,
    "reviews": 253,
    "featured": false,
    "createdAt": "2026-03-14"
  },
  {
    "id": "tour_037",
    "slug": "tour-valle-de-guadalupe-vino-y-gastronomia",
    "title": "Tour Valle de Guadalupe (Vino y Gastronomía)",
    "price": 3900,
    "state": "baja-california",
    "stateLabel": "Baja California",
    "image": "https://turismo.develops.mx/wp-content/uploads/2026/03/vinos_bj.jpg",
    "place": "Valle de Guadalupe",
    "duration": "6 horas",
    "durationHours": 6,
    "type": "Tour gastronómico",
    "theme": "gastronomia",
    "meetingPoint": "Hotel en Ensenada",
    "startTime": "11:00 AM",
    "itinerary": [
      {
        "time": "11:00 AM",
        "title": "Salida al valle",
        "details": [],
        "note": ""
      },
      {
        "time": "12:00 PM",
        "title": "Primera vinícola",
        "details": [
          "Cata de vinos",
          "Recorrido por viñedos"
        ],
        "note": ""
      },
      {
        "time": "1:30 PM",
        "title": "Segunda vinícola",
        "details": [],
        "note": ""
      },
      {
        "time": "3:00 PM",
        "title": "Restaurante Baja Med",
        "details": [
          "Degustación gastronómica"
        ],
        "note": ""
      },
      {
        "time": "5:00 PM",
        "title": "Regreso",
        "details": [],
        "note": ""
      }
    ],
    "includes": [
      "Transporte",
      "Guía inglés y español",
      "Catas básicas"
    ],
    "excludes": [
      "Alimentos completos",
      "Compras"
    ],
    "highlights": [
      "Cata de vinos",
      "Recorrido por viñedos",
      "Degustación gastronómica"
    ],
    "rating": 4.9,
    "reviews": 93,
    "featured": true,
    "createdAt": "2026-03-14"
  },
  {
    "id": "tour_038",
    "slug": "tour-la-bufadora",
    "title": "Tour La Bufadora",
    "price": 1750,
    "state": "baja-california",
    "stateLabel": "Baja California",
    "image": "https://turismo.develops.mx/wp-content/uploads/2026/03/ChatGPT-Image-25-mar-2026-07_57_37-p.m.-1.jpg",
    "place": "La Bufadora",
    "duration": "4 horas",
    "durationHours": 4,
    "type": "Tour guiado",
    "theme": "cultural",
    "meetingPoint": "Centro de Ensenada",
    "startTime": "10:00 AM",
    "itinerary": [
      {
        "time": "10:00 AM",
        "title": "Salida hacia La Bufadora",
        "details": [],
        "note": ""
      },
      {
        "time": "11:00 AM",
        "title": "Llegada al sitio",
        "details": [
          "Observación del géiser marino",
          "Recorrido por mercado artesanal",
          "Fotografías"
        ],
        "note": "Duración: 2 horas"
      },
      {
        "time": "1:30 PM",
        "title": "Regreso",
        "details": [],
        "note": ""
      }
    ],
    "includes": [
      "Transporte",
      "Guía inglés y español"
    ],
    "excludes": [
      "Alimentos",
      "Compras personales"
    ],
    "highlights": [
      "Observación del géiser marino",
      "Recorrido por mercado artesanal",
      "Fotografías"
    ],
    "rating": 4.8,
    "reviews": 184,
    "featured": false,
    "createdAt": "2026-03-14"
  },
  {
    "id": "tour_039",
    "slug": "tour-surf-en-playa-san-miguel",
    "title": "Tour Surf en Playa San Miguel",
    "price": 1950,
    "state": "baja-california",
    "stateLabel": "Baja California",
    "image": "https://turismo.develops.mx/wp-content/uploads/2026/03/surf.jpg",
    "place": "Playa San Miguel",
    "duration": "3 horas",
    "durationHours": 3,
    "type": "Experiencia deportiva",
    "theme": "aventura",
    "meetingPoint": "Playa San Miguel",
    "startTime": "8:00 AM",
    "itinerary": [
      {
        "time": "8:00 AM",
        "title": "Introducción",
        "details": [
          "Teoría básica de surf",
          "Seguridad en el mar"
        ],
        "note": ""
      },
      {
        "time": "8:30 AM",
        "title": "Práctica en el agua",
        "details": [
          "Uso de tabla",
          "Técnicas básicas"
        ],
        "note": "Duración: 2 horas"
      },
      {
        "time": "10:30 AM",
        "title": "Cierre de actividad",
        "details": [],
        "note": ""
      }
    ],
    "includes": [
      "Instructor inglés y español",
      "Tabla de surf",
      "Traje de neopreno"
    ],
    "excludes": [
      "Transporte",
      "Alimentos"
    ],
    "highlights": [
      "Teoría básica de surf",
      "Seguridad en el mar",
      "Uso de tabla",
      "Técnicas básicas"
    ],
    "rating": 4.9,
    "reviews": 217,
    "featured": false,
    "createdAt": "2026-03-13"
  },
  {
    "id": "tour_040",
    "slug": "tour-avistamiento-de-ballenas-en-ensenada",
    "title": "Tour Avistamiento de Ballenas en Ensenada",
    "price": 3800,
    "state": "baja-california",
    "stateLabel": "Baja California",
    "image": "https://turismo.develops.mx/wp-content/uploads/2026/03/ballenas.jpg",
    "place": "Ensenada",
    "duration": "4 horas",
    "durationHours": 4,
    "type": "Tour marítimo guiado",
    "theme": "naturaleza",
    "meetingPoint": "Marina de Ensenada",
    "startTime": "9:00 AM",
    "itinerary": [
      {
        "time": "9:00 AM",
        "title": "Recepción y registro",
        "details": [
          "Registro con guía turístico inglés y español",
          "Indicaciones de seguridad"
        ],
        "note": ""
      },
      {
        "time": "9:30 AM",
        "title": "Salida en embarcación",
        "details": [
          "Recorrido por la bahía",
          "Explicación sobre especies marinas"
        ],
        "note": ""
      },
      {
        "time": "10:30 AM",
        "title": "Avistamiento de ballenas",
        "details": [
          "Observación de ballenas grises",
          "Fotografías"
        ],
        "note": "Duración: 1.5 horas"
      }
    ],
    "includes": [
      "12:00 PM – Regreso a marina",
      "Guía inglés y español",
      "Paseo en embarcación",
      "Chaleco salvavidas"
    ],
    "excludes": [
      "Transporte",
      "Alimentos",
      "Propinas"
    ],
    "highlights": [
      "Registro con guía turístico inglés y español",
      "Indicaciones de seguridad",
      "Recorrido por la bahía",
      "Explicación sobre especies marinas",
      "Observación de ballenas grises"
    ],
    "rating": 4.5,
    "reviews": 213,
    "featured": false,
    "createdAt": "2026-03-13"
  },
  {
    "id": "tour_041",
    "slug": "experiencia-procesion-del-silencio",
    "title": "Experiencia Procesión del Silencio",
    "price": 750,
    "state": "san-luis-potosi",
    "stateLabel": "San Luis Potosí",
    "image": "https://turismo.develops.mx/wp-content/uploads/2026/03/silencio.jpg",
    "place": "Procesión del Silencio",
    "duration": "3 horas",
    "durationHours": 3,
    "type": "Experiencia personalizada",
    "theme": "cultural",
    "meetingPoint": "Centro histórico de San Luis Potosí",
    "startTime": "8:00 PM",
    "itinerary": [
      {
        "time": "8:00 PM",
        "title": "Introducción histórica",
        "details": [],
        "note": ""
      },
      {
        "time": "8:30 PM",
        "title": "Inicio de la procesión",
        "details": [
          "Participan más de 30 cofradías religiosas."
        ],
        "note": ""
      },
      {
        "time": "10:30 PM",
        "title": "Final del recorrido",
        "details": [],
        "note": ""
      }
    ],
    "includes": [
      "Guía cultural inglés y español",
      "Explicación histórica"
    ],
    "excludes": [
      "Alimentos",
      "Transporte"
    ],
    "highlights": [
      "Participan más de 30 cofradías religiosas."
    ],
    "rating": 4.5,
    "reviews": 158,
    "featured": false,
    "createdAt": "2026-03-13"
  },
  {
    "id": "tour_042",
    "slug": "museo-laberinto-de-las-ciencias-y-las-artes",
    "title": "Museo Laberinto de las Ciencias y las Artes",
    "price": 750,
    "state": "san-luis-potosi",
    "stateLabel": "San Luis Potosí",
    "image": "https://turismo.develops.mx/wp-content/uploads/2026/03/tour-centro.jpg",
    "place": "Museo Laberinto de las Ciencias y las Artes",
    "duration": "2 horas",
    "durationHours": 2,
    "type": "Experiencia personalizada",
    "theme": "cultural",
    "meetingPoint": "Entrada del museo.",
    "startTime": "11:00 AM",
    "itinerary": [
      {
        "time": "11:00 AM",
        "title": "Entrada al museo",
        "details": [],
        "note": ""
      },
      {
        "time": "11:15 AM",
        "title": "Recorrido interactivo",
        "details": [
          "Experimentos científicos",
          "Exhibiciones tecnológicas"
        ],
        "note": ""
      },
      {
        "time": "12:45 PM",
        "title": "Tiempo libre",
        "details": [],
        "note": ""
      }
    ],
    "includes": [
      "Guía certificado inglés y español",
      "Coordinación y logística del recorrido"
    ],
    "excludes": [
      "Transporte hacia el punto de encuentro",
      "Alimentos y bebidas",
      "Gastos personales"
    ],
    "highlights": [
      "Experimentos científicos",
      "Exhibiciones tecnológicas"
    ],
    "rating": 4.8,
    "reviews": 167,
    "featured": false,
    "createdAt": "2026-03-12"
  },
  {
    "id": "tour_043",
    "slug": "tour-centro-historico-de-san-luis-potosi",
    "title": "Tour Centro Histórico de San Luis Potosí",
    "price": 750,
    "state": "san-luis-potosi",
    "stateLabel": "San Luis Potosí",
    "image": "https://turismo.develops.mx/wp-content/uploads/2026/03/tour-centro.jpg",
    "place": "Centro Histórico de San Luis Potosí",
    "duration": "2 horas",
    "durationHours": 2,
    "type": "Experiencia personalizada",
    "theme": "cultural",
    "meetingPoint": "Plaza de Armas",
    "startTime": "10:00 AM",
    "itinerary": [
      {
        "time": "10:00 AM",
        "title": "Inicio del recorrido",
        "details": [],
        "note": ""
      },
      {
        "time": "10:20 AM",
        "title": "Visita a edificios históricos",
        "details": [
          "Lugares destacados:",
          "Catedral Metropolitana de San Luis Potosí",
          "Teatro de la Paz"
        ],
        "note": ""
      },
      {
        "time": "11:30 AM",
        "title": "Tiempo libre para fotos",
        "details": [],
        "note": ""
      },
      {
        "time": "12:00 PM",
        "title": "Fin del tour",
        "details": [],
        "note": ""
      }
    ],
    "includes": [
      "Guía certificado inglés y español",
      "Coordinación y logística del recorrido"
    ],
    "excludes": [
      "Transporte hacia el punto de encuentro",
      "Alimentos y bebidas",
      "Gastos personales"
    ],
    "highlights": [
      "Lugares destacados:",
      "Catedral Metropolitana de San Luis Potosí",
      "Teatro de la Paz"
    ],
    "rating": 4.9,
    "reviews": 156,
    "featured": false,
    "createdAt": "2026-03-12"
  },
  {
    "id": "tour_044",
    "slug": "tour-pueblo-magico-real-de-catorce",
    "title": "Tour Pueblo Mágico Real de Catorce",
    "price": 3500,
    "state": "san-luis-potosi",
    "stateLabel": "San Luis Potosí",
    "image": "https://turismo.develops.mx/wp-content/uploads/2026/03/pueblo-magico.jpg",
    "place": "Real de Catorce",
    "duration": "10 horas",
    "durationHours": 10,
    "type": "Experiencia personalizada",
    "theme": "cultural",
    "meetingPoint": "Centro de San Luis Potosí",
    "startTime": "7:00 AM",
    "itinerary": [
      {
        "time": "7:00 AM",
        "title": "Salida hacia Real de Catorce",
        "details": [],
        "note": ""
      },
      {
        "time": "10:30 AM",
        "title": "Entrada por el túnel Ogarrio",
        "details": [
          "Túnel de Ogarrio"
        ],
        "note": ""
      },
      {
        "time": "11:00 AM",
        "title": "Recorrido por el pueblo",
        "details": [
          "Visita a:",
          "Iglesia",
          "Plaza principal",
          "Minas antiguas"
        ],
        "note": ""
      },
      {
        "time": "1:00 PM",
        "title": "Recorrido en jeep por la sierra",
        "details": [],
        "note": "Duración: 1.5 horas"
      },
      {
        "time": "4:00 PM",
        "title": "Regreso",
        "details": [],
        "note": ""
      }
    ],
    "includes": [
      "Transporte",
      "Guía inglés y español",
      "Recorrido en jeep"
    ],
    "excludes": [
      "Alimentos",
      "Entradas a minas"
    ],
    "highlights": [
      "Túnel de Ogarrio",
      "Visita a:",
      "Iglesia",
      "Plaza principal",
      "Minas antiguas"
    ],
    "rating": 4.9,
    "reviews": 131,
    "featured": false,
    "createdAt": "2026-03-11"
  },
  {
    "id": "tour_045",
    "slug": "senderismo-y-camping-sierra-de-alvarez",
    "title": "Senderismo y Camping Sierra de Álvarez",
    "price": 980,
    "state": "san-luis-potosi",
    "stateLabel": "San Luis Potosí",
    "image": "https://turismo.develops.mx/wp-content/uploads/2026/03/senderismo.png",
    "place": "Sierra de Álvarez",
    "duration": "6 horas",
    "durationHours": 6,
    "type": "Experiencia personalizada",
    "theme": "cultural",
    "meetingPoint": "Centro de San Luis Potosí",
    "startTime": "7:00 AM",
    "itinerary": [
      {
        "time": "7:00 AM",
        "title": "Salida hacia la sierra",
        "details": [],
        "note": ""
      },
      {
        "time": "8:00 AM",
        "title": "Inicio de senderismo",
        "details": [
          "Caminata por bosque",
          "Observación de fauna",
          "Fotografía de paisaje"
        ],
        "note": "Duración: 3 horas"
      }
    ],
    "includes": [
      "12:00 PM – Picnic en mirador natural",
      "1:30 PM – Regreso a la ciudad",
      "Transporte",
      "Guía"
    ],
    "excludes": [
      "Alimentos"
    ],
    "highlights": [
      "Caminata por bosque",
      "Observación de fauna",
      "Fotografía de paisaje"
    ],
    "rating": 4.7,
    "reviews": 251,
    "featured": false,
    "createdAt": "2026-03-11"
  },
  {
    "id": "tour_046",
    "slug": "tour-laguna-de-la-media-luna",
    "title": "Tour Laguna de la Media Luna",
    "price": 1800,
    "state": "san-luis-potosi",
    "stateLabel": "San Luis Potosí",
    "image": "https://turismo.develops.mx/wp-content/uploads/2026/03/media-luna.jpg",
    "place": "Laguna de la Media Luna",
    "duration": "6 horas",
    "durationHours": 6,
    "type": "Experiencia personalizada",
    "theme": "cultural",
    "meetingPoint": "Centro de Rioverde",
    "startTime": "9:00 AM",
    "itinerary": [
      {
        "time": "9:00 AM",
        "title": "Traslado a la laguna",
        "details": [],
        "note": ""
      },
      {
        "time": "9:30 AM",
        "title": "Entrada al parque",
        "details": [
          "Natación",
          "Snorkel",
          "Exploración subacuática"
        ],
        "note": "Duración: 3 horas"
      },
      {
        "time": "1:00 PM",
        "title": "Tiempo libre para picnic",
        "details": [],
        "note": ""
      },
      {
        "time": "2:30 PM",
        "title": "Regreso",
        "details": [],
        "note": ""
      }
    ],
    "includes": [
      "Entrada al parque",
      "Chaleco salvavidas",
      "Guía inglés y español"
    ],
    "excludes": [
      "Alimentos",
      "Equipo de buceo profesional"
    ],
    "highlights": [
      "Natación",
      "Snorkel",
      "Exploración subacuática"
    ],
    "rating": 4.7,
    "reviews": 114,
    "featured": false,
    "createdAt": "2026-03-11"
  },
  {
    "id": "tour_047",
    "slug": "tour-rafting-en-el-rio-micos",
    "title": "Tour Rafting en el Río Micos",
    "price": 1900,
    "state": "san-luis-potosi",
    "stateLabel": "San Luis Potosí",
    "image": "https://turismo.develops.mx/wp-content/uploads/2026/03/rapidos.jpg",
    "place": "Río Micos",
    "duration": "4 horas",
    "durationHours": 4,
    "type": "Experiencia personalizada",
    "theme": "cultural",
    "meetingPoint": "Hotel en Ciudad Valles",
    "startTime": "9:00 AM",
    "itinerary": [
      {
        "time": "9:00 AM",
        "title": "Traslado al río",
        "details": [],
        "note": ""
      },
      {
        "time": "9:30 AM",
        "title": "Instrucción de seguridad",
        "details": [],
        "note": ""
      },
      {
        "time": "10:00 AM",
        "title": "Descenso en rafting",
        "details": [
          "Recorrido de 7 km por el río."
        ],
        "note": "Duración: 2 horas"
      },
      {
        "time": "12:30 PM",
        "title": "Final de la actividad",
        "details": [],
        "note": ""
      }
    ],
    "includes": [
      "Equipo completo",
      "Guía español e inglés",
      "Transporte"
    ],
    "excludes": [
      "Alimentos"
    ],
    "highlights": [
      "Recorrido de 7 km por el río."
    ],
    "rating": 4.6,
    "reviews": 86,
    "featured": false,
    "createdAt": "2026-03-10"
  },
  {
    "id": "tour_048",
    "slug": "tour-cascadas-de-micos-y-minas-viejas",
    "title": "Tour Cascadas de Micos y Minas Viejas",
    "price": 2600,
    "state": "san-luis-potosi",
    "stateLabel": "San Luis Potosí",
    "image": "https://turismo.develops.mx/wp-content/uploads/2026/03/ChatGPT-Image-24-mar-2026-09_36_55-p.m.-1.jpg",
    "place": "Cascadas de Micos y Cascada Minas Viejas",
    "duration": "8 horas",
    "durationHours": 8,
    "type": "Experiencia personalizada",
    "theme": "cultural",
    "meetingPoint": "Plaza principal de Ciudad Valles",
    "startTime": "8:00 AM",
    "itinerary": [
      {
        "time": "8:00 AM",
        "title": "Salida hacia las cascadas",
        "details": [
          "Traslado en transporte turístico."
        ],
        "note": ""
      },
      {
        "time": "8:45 AM",
        "title": "Llegada a Cascadas de Micos",
        "details": [
          "Explicación de seguridad y equipo.",
          "Salto de cascadas",
          "Natación en pozas",
          "Caminata entre cascadas"
        ],
        "note": "Duración: 3 horas"
      },
      {
        "time": "12:30 PM",
        "title": "Traslado a Minas Viejas",
        "details": [],
        "note": ""
      },
      {
        "time": "1:30 PM",
        "title": "Cascada Minas Viejas",
        "details": [
          "Nado en cascada",
          "Rappel opcional",
          "Tiempo para fotografías"
        ],
        "note": "Duración: 2 horas"
      }
    ],
    "includes": [
      "3:30 PM – Regreso a Ciudad Valles",
      "Llegada aproximada: 4:30 PM",
      "Transporte redondo",
      "Guía inglés y español",
      "Casco y chaleco salvavidas"
    ],
    "excludes": [
      "Alimentos",
      "Propinas"
    ],
    "highlights": [
      "Traslado en transporte turístico.",
      "Explicación de seguridad y equipo.",
      "Salto de cascadas",
      "Natación en pozas",
      "Caminata entre cascadas"
    ],
    "rating": 4.7,
    "reviews": 153,
    "featured": false,
    "createdAt": "2026-03-10"
  },
  {
    "id": "tour_049",
    "slug": "tour-nocturno-de-leyendas-del-centro-historico",
    "title": "Tour Nocturno de Leyendas del Centro Histórico",
    "price": 980,
    "state": "cdmx",
    "stateLabel": "Ciudad de México",
    "image": "https://turismo.develops.mx/wp-content/uploads/2026/03/leyendas.jpg",
    "place": "Centro Histórico de la Ciudad de México",
    "duration": "2 horas",
    "durationHours": 2,
    "type": "Experiencia personalizada",
    "theme": "cultural",
    "meetingPoint": "Frente a la Catedral Metropolitana.",
    "startTime": "8:00 PM",
    "itinerary": [
      {
        "time": "8:00 PM",
        "title": "Inicio del recorrido",
        "details": [],
        "note": ""
      },
      {
        "time": "8:20 PM",
        "title": "Callejón de leyendas",
        "details": [
          "Historias de fantasmas y personajes históricos."
        ],
        "note": ""
      },
      {
        "time": "9:00 PM",
        "title": "Edificios coloniales",
        "details": [],
        "note": ""
      },
      {
        "time": "9:50 PM",
        "title": "Final del tour",
        "details": [],
        "note": ""
      }
    ],
    "includes": [
      "Guía certificado inglés y español",
      "Coordinación y logística del recorrido"
    ],
    "excludes": [
      "Transporte hacia el punto de encuentro",
      "Alimentos y bebidas",
      "Gastos personales"
    ],
    "highlights": [
      "Historias de fantasmas y personajes históricos."
    ],
    "rating": 4.6,
    "reviews": 159,
    "featured": false,
    "createdAt": "2026-03-10"
  },
  {
    "id": "tour_050",
    "slug": "tour-de-murales-mexicanos",
    "title": "Clase de Cocina Mexicana",
    "price": 1840,
    "state": "cdmx",
    "stateLabel": "Ciudad de México",
    "image": "https://turismo.develops.mx/wp-content/uploads/2026/03/cocina.jpg",
    "place": "Ciudad de México",
    "duration": "4 horas",
    "durationHours": 4,
    "type": "Experiencia personalizada",
    "theme": "cultural",
    "meetingPoint": "Escuela gastronómica local.",
    "startTime": "10:00 AM",
    "itinerary": [
      {
        "time": "10:00 AM",
        "title": "Introducción a ingredientes",
        "details": [],
        "note": ""
      },
      {
        "time": "10:30 AM",
        "title": "Preparación de platillos",
        "details": [
          "Preparación de:",
          "Tacos al pastor",
          "Guacamole"
        ],
        "note": ""
      },
      {
        "time": "12:30 PM",
        "title": "Degustación",
        "details": [],
        "note": ""
      }
    ],
    "includes": [
      "Guía certificado inglés y español",
      "Coordinación y logística del recorrido"
    ],
    "excludes": [
      "Transporte hacia el punto de encuentro",
      "Alimentos y bebidas",
      "Gastos personales"
    ],
    "highlights": [
      "Preparación de:",
      "Tacos al pastor",
      "Guacamole"
    ],
    "rating": 4.6,
    "reviews": 205,
    "featured": false,
    "createdAt": "2026-03-09"
  },
  {
    "id": "tour_051",
    "slug": "tour-de-murales-mexicanos-2",
    "title": "Tour de Murales Mexicanos",
    "price": 800,
    "state": "cdmx",
    "stateLabel": "Ciudad de México",
    "image": "https://turismo.develops.mx/wp-content/uploads/2026/03/murales.jpg",
    "place": "Palacio de Bellas Artes",
    "duration": "2 horas",
    "durationHours": 2,
    "type": "Experiencia personalizada",
    "theme": "cultural",
    "meetingPoint": "Entrada principal del Palacio.",
    "startTime": "11:00 AM",
    "itinerary": [
      {
        "time": "11:00 AM",
        "title": "Historia del muralismo",
        "details": [],
        "note": ""
      },
      {
        "time": "11:30 AM",
        "title": "Recorrido por murales",
        "details": [
          "Explicación de obras de",
          "Diego Rivera",
          "David Alfaro Siqueiros"
        ],
        "note": ""
      },
      {
        "time": "12:30 PM",
        "title": "Final del tour",
        "details": [],
        "note": ""
      }
    ],
    "includes": [
      "Guía certificado inglés y español",
      "Coordinación y logística del recorrido"
    ],
    "excludes": [
      "Transporte hacia el punto de encuentro",
      "Alimentos y bebidas",
      "Gastos personales"
    ],
    "highlights": [
      "Explicación de obras de",
      "Diego Rivera",
      "David Alfaro Siqueiros"
    ],
    "rating": 4.8,
    "reviews": 128,
    "featured": false,
    "createdAt": "2026-03-09"
  },
  {
    "id": "tour_052",
    "slug": "mirador-de-la-torre-latinoamericana",
    "title": "Mirador de la Torre Latinoamericana",
    "price": 720,
    "state": "cdmx",
    "stateLabel": "Ciudad de México",
    "image": "https://turismo.develops.mx/wp-content/uploads/2026/03/torre_latino.jpg",
    "place": "Torre Latinoamericana",
    "duration": "1 hora",
    "durationHours": 1,
    "type": "Experiencia personalizada",
    "theme": "cultural",
    "meetingPoint": "Lobby de la Torre Latinoamericana.",
    "startTime": "5:00 PM",
    "itinerary": [
      {
        "time": "5:00 PM",
        "title": "Acceso al elevador",
        "details": [],
        "note": ""
      },
      {
        "time": "5:05 PM",
        "title": "Mirador panorámico",
        "details": [
          "Vista de:",
          "Centro Histórico",
          "Palacio de Bellas Artes",
          "Zócalo"
        ],
        "note": ""
      },
      {
        "time": "5:45 PM",
        "title": "Tiempo libre para fotos",
        "details": [],
        "note": ""
      }
    ],
    "includes": [
      "Entrada al mirador",
      "Guía inglés y español"
    ],
    "excludes": [
      "Transporte",
      "Propinas"
    ],
    "highlights": [
      "Vista de:",
      "Centro Histórico",
      "Palacio de Bellas Artes",
      "Zócalo"
    ],
    "rating": 4.7,
    "reviews": 73,
    "featured": false,
    "createdAt": "2026-03-08"
  },
  {
    "id": "tour_053",
    "slug": "experiencia-lucha-libre-mexicana",
    "title": "Experiencia Lucha Libre Mexicana",
    "price": 3550,
    "state": "cdmx",
    "stateLabel": "Ciudad de México",
    "image": "https://turismo.develops.mx/wp-content/uploads/2026/03/lucha-libre.jpg",
    "place": "Arena México",
    "duration": "3 horas",
    "durationHours": 3,
    "type": "Experiencia personalizada",
    "theme": "cultural",
    "meetingPoint": "Entrada principal de Arena México.",
    "startTime": "7:00 PM",
    "itinerary": [
      {
        "time": "7:00 PM",
        "title": "Entrada al recinto",
        "details": [],
        "note": ""
      },
      {
        "time": "7:30 PM",
        "title": "Inicio de las luchas",
        "details": [],
        "note": ""
      },
      {
        "time": "9:30 PM",
        "title": "Fin del espectáculo",
        "details": [],
        "note": ""
      }
    ],
    "includes": [
      "Entrada al evento",
      "Guía turístico inglés y español"
    ],
    "excludes": [
      "Bebidas",
      "Souvenirs"
    ],
    "highlights": [],
    "rating": 4.5,
    "reviews": 56,
    "featured": true,
    "createdAt": "2026-03-08"
  },
  {
    "id": "tour_054",
    "slug": "taller-de-chocolate-artesanal-mexicano",
    "title": "Taller de Chocolate Artesanal Mexicano",
    "price": 2900,
    "state": "cdmx",
    "stateLabel": "Ciudad de México",
    "image": "https://turismo.develops.mx/wp-content/uploads/2026/03/chocolate.jpg",
    "place": "Ciudad de México",
    "duration": "2 horas",
    "durationHours": 2,
    "type": "Experiencia personalizada",
    "theme": "cultural",
    "meetingPoint": "Tienda gastronómica en el centro histórico.",
    "startTime": "3:00 PM",
    "itinerary": [
      {
        "time": "3:00 PM",
        "title": "Historia del cacao",
        "details": [
          "Importancia del cacao en la cultura prehispánica."
        ],
        "note": ""
      },
      {
        "time": "3:20 PM",
        "title": "Preparación del chocolate",
        "details": [
          "Molido tradicional."
        ],
        "note": ""
      },
      {
        "time": "4:00 PM",
        "title": "Elaboración de tabletas",
        "details": [
          "Personalización con ingredientes."
        ],
        "note": ""
      }
    ],
    "includes": [
      "4:40 PM – Degustación",
      "Ingredientes",
      "Degustación"
    ],
    "excludes": [
      "Transporte"
    ],
    "highlights": [
      "Importancia del cacao en la cultura prehispánica.",
      "Molido tradicional.",
      "Personalización con ingredientes."
    ],
    "rating": 4.6,
    "reviews": 25,
    "featured": false,
    "createdAt": "2026-03-08"
  },
  {
    "id": "tour_055",
    "slug": "taller-de-elaboracion-de-pinatas",
    "title": "Taller de Elaboración de Piñatas",
    "price": 850,
    "state": "cdmx",
    "stateLabel": "Ciudad de México",
    "image": "https://turismo.develops.mx/wp-content/uploads/2026/03/taller-pinatas.jpg",
    "place": "Ciudad de México",
    "duration": "2 horas",
    "durationHours": 2,
    "type": "Experiencia personalizada",
    "theme": "cultural",
    "meetingPoint": "Mercado tradicional del sur de la ciudad.",
    "startTime": "12:00 PM",
    "itinerary": [
      {
        "time": "12:00 PM",
        "title": "Introducción cultural",
        "details": [
          "Historia de las piñatas en México."
        ],
        "note": ""
      },
      {
        "time": "12:15 PM",
        "title": "Creación de estructura",
        "details": [
          "Uso de cartón y papel."
        ],
        "note": ""
      },
      {
        "time": "12:45 PM",
        "title": "Decoración",
        "details": [
          "Colocación de papel de colores."
        ],
        "note": ""
      }
    ],
    "includes": [
      "1:45 PM – Fotos y final del taller",
      "Materiales",
      "Instructor inglés y español"
    ],
    "excludes": [
      "Transporte"
    ],
    "highlights": [
      "Historia de las piñatas en México.",
      "Uso de cartón y papel.",
      "Colocación de papel de colores."
    ],
    "rating": 4.6,
    "reviews": 224,
    "featured": false,
    "createdAt": "2026-03-07"
  },
  {
    "id": "tour_056",
    "slug": "taller-de-ceramica-tradicional-mexicana",
    "title": "Taller de Cerámica Tradicional Mexicana",
    "price": 1700,
    "state": "cdmx",
    "stateLabel": "Ciudad de México",
    "image": "https://turismo.develops.mx/wp-content/uploads/2026/03/taller-ceramica.jpg",
    "place": "Ciudad de México",
    "duration": "2.5 horas",
    "durationHours": 2.5,
    "type": "Experiencia personalizada",
    "theme": "cultural",
    "meetingPoint": "Estudio artesanal en colonia Roma.",
    "startTime": "10:00 AM",
    "itinerary": [
      {
        "time": "10:00 AM",
        "title": "Introducción",
        "details": [
          "Historia de la cerámica mexicana."
        ],
        "note": ""
      },
      {
        "time": "10:20 AM",
        "title": "Técnicas de modelado",
        "details": [
          "Demostración en torno."
        ],
        "note": ""
      },
      {
        "time": "10:45 AM",
        "title": "Creación de pieza",
        "details": [
          "Cada participante crea una taza o plato."
        ],
        "note": "Duración: 1 hora"
      },
      {
        "time": "11:45 AM",
        "title": "Decoración",
        "details": [
          "Aplicación de colores y detalles."
        ],
        "note": ""
      }
    ],
    "includes": [
      "12:30 PM – Final del taller",
      "Arcilla",
      "Herramientas",
      "Horneado posterior"
    ],
    "excludes": [
      "Envío de piezas",
      "Transporte"
    ],
    "highlights": [
      "Historia de la cerámica mexicana.",
      "Demostración en torno.",
      "Cada participante crea una taza o plato.",
      "Aplicación de colores y detalles."
    ],
    "rating": 4.7,
    "reviews": 117,
    "featured": false,
    "createdAt": "2026-03-07"
  },
  {
    "id": "tour_057",
    "slug": "taller-de-alebrijes-mexicanos",
    "title": "Taller de Alebrijes Mexicanos",
    "price": 950,
    "state": "cdmx",
    "stateLabel": "Ciudad de México",
    "image": "https://turismo.develops.mx/wp-content/uploads/2026/03/alebrijes.jpg",
    "place": "Ciudad de México",
    "duration": "2 horas",
    "durationHours": 2,
    "type": "Taller artesanal interactivo",
    "theme": "taller",
    "meetingPoint": "Centro cultural en el barrio de Coyoacán.",
    "startTime": "11:00 AM",
    "itinerary": [
      {
        "time": "11:00 AM",
        "title": "Bienvenida",
        "details": [
          "Presentación del artesano",
          "Historia de los alebrijes en México"
        ],
        "note": ""
      },
      {
        "time": "11:15 AM",
        "title": "Introducción a materiales",
        "details": [
          "Explicación sobre pintura acrílica",
          "Técnicas tradicionales de decoración"
        ],
        "note": ""
      },
      {
        "time": "11:30 AM",
        "title": "Creación del alebrije",
        "details": [
          "Cada participante pinta su propia figura."
        ],
        "note": "Duración: 1 hora"
      }
    ],
    "includes": [
      "12:30 PM – Finalización y fotos",
      "Fotografías del resultado final",
      "Empaque del recuerdo",
      "Figura de alebrije",
      "Materiales de pintura",
      "Instructor artesanal inglés y español"
    ],
    "excludes": [
      "Transporte",
      "Alimentos",
      "Propinas"
    ],
    "highlights": [
      "Presentación del artesano",
      "Historia de los alebrijes en México",
      "Explicación sobre pintura acrílica",
      "Técnicas tradicionales de decoración",
      "Cada participante pinta su propia figura."
    ],
    "rating": 4.5,
    "reviews": 231,
    "featured": false,
    "createdAt": "2026-03-07"
  },
  {
    "id": "tour_058",
    "slug": "tour-piramides-de-teotihuacan",
    "title": "Tour Pirámides de Teotihuacán",
    "price": 3600,
    "state": "cdmx",
    "stateLabel": "Ciudad de México",
    "image": "https://turismo.develops.mx/wp-content/uploads/2026/03/teotihuacan.jpg",
    "place": "Teotihuacán",
    "duration": "7 – 8 horas",
    "durationHours": 7,
    "type": "Experiencia personalizada",
    "theme": "cultural",
    "meetingPoint": "Se define contigo al confirmar la reserva",
    "startTime": "7:30 AM",
    "itinerary": [
      {
        "time": "7:30 AM",
        "title": "Salida desde Ciudad de México",
        "details": [
          "Traslado en autobús turístico."
        ],
        "note": ""
      },
      {
        "time": "9:00 AM",
        "title": "Taller de obsidiana",
        "details": [
          "Explicación sobre artesanía tradicional."
        ],
        "note": ""
      },
      {
        "time": "10:30 AM",
        "title": "Zona arqueológica",
        "details": [
          "Pirámide del Sol",
          "Pirámide de la Luna",
          "Recorrido por la Calzada de los Muertos",
          "Explicación de la cultura teotihuacana"
        ],
        "note": "Duración: 3 horas"
      }
    ],
    "includes": [
      "3:00 PM – Regreso a CDMX",
      "Llegada aproximada: 5:00 PM",
      "Transporte redondo",
      "Guía turístico inglés y español",
      "Visita guiada"
    ],
    "excludes": [
      "Entrada a la zona arqueológica (~$95 MXN)",
      "Comida",
      "Propinas"
    ],
    "highlights": [
      "Traslado en autobús turístico.",
      "Explicación sobre artesanía tradicional.",
      "Pirámide del Sol",
      "Pirámide de la Luna",
      "Recorrido por la Calzada de los Muertos"
    ],
    "rating": 4.6,
    "reviews": 268,
    "featured": true,
    "createdAt": "2026-03-06"
  },
  {
    "id": "tour_059",
    "slug": "tour-xochimilco-y-coyoacan",
    "title": "Tour Xochimilco y Coyoacán",
    "price": 1930,
    "state": "cdmx",
    "stateLabel": "Ciudad de México",
    "image": "https://turismo.develops.mx/wp-content/uploads/2026/03/xochimilco.jpg",
    "place": "Xochimilco y Coyoacán",
    "duration": "6 – 7 horas",
    "durationHours": 6,
    "type": "Experiencia personalizada",
    "theme": "cultural",
    "meetingPoint": "Auditorio Nacional",
    "startTime": "9:00 AM",
    "itinerary": [
      {
        "time": "9:00 AM",
        "title": "Salida hacia Coyoacán",
        "details": [
          "Traslado en transporte turístico."
        ],
        "note": ""
      },
      {
        "time": "9:45 AM",
        "title": "Recorrido por Coyoacán",
        "details": [
          "Jardín Centenario",
          "Historia del barrio colonial",
          "Tiempo para recorrer el mercado"
        ],
        "note": ""
      },
      {
        "time": "10:30 AM",
        "title": "Visita a la Casa Azul",
        "details": [
          "Museo Frida Kahlo",
          "Explicación de la vida de Frida Kahlo y Diego Rivera."
        ],
        "note": "Duración: 1 hora"
      },
      {
        "time": "12:30 PM",
        "title": "Traslado a Xochimilco",
        "details": [],
        "note": ""
      }
    ],
    "includes": [
      "1:30 PM – Paseo en trajinera",
      "Xochimilco",
      "Actividades:",
      "Paseo en trajinera",
      "Música tradicional",
      "Comida típica opcional",
      "Duración: 1 hora",
      "3:00 PM – Regreso al punto de encuentro",
      "Llegada aproximada: 4:30 PM",
      "Transporte turístico",
      "Guía español e inglés",
      "Paseo en trajinera"
    ],
    "excludes": [
      "Alimentos",
      "Bebidas",
      "Propinas"
    ],
    "highlights": [
      "Traslado en transporte turístico.",
      "Jardín Centenario",
      "Historia del barrio colonial",
      "Tiempo para recorrer el mercado",
      "Museo Frida Kahlo"
    ],
    "rating": 4.8,
    "reviews": 225,
    "featured": true,
    "createdAt": "2026-03-06"
  },
  {
    "id": "tour_060",
    "slug": "tour-centro-historico-de-ciudad-de-mexico",
    "title": "Tour Centro Histórico de Ciudad de México",
    "price": 1200,
    "state": "cdmx",
    "stateLabel": "Ciudad de México",
    "image": "https://turismo.develops.mx/wp-content/uploads/2026/03/cdmx-centro.jpg",
    "place": "Ciudad de México",
    "duration": "3 horas",
    "durationHours": 3,
    "type": "Walking tour guiado",
    "theme": "cultural",
    "meetingPoint": "Entrada principal de la · Catedral Metropolitana de la Ciudad de México · en la Plaza de la Constitución.",
    "startTime": "10:00 AM",
    "itinerary": [
      {
        "time": "10:00 AM",
        "title": "Recepción y bienvenida",
        "details": [
          "Registro con el guía turístico",
          "Introducción histórica de la antigua Tenochtitlán"
        ],
        "note": ""
      },
      {
        "time": "10:15 AM",
        "title": "Recorrido por el Zócalo",
        "details": [
          "Zócalo",
          "Historia del corazón político de México",
          "Explicación de edificios históricos",
          "Tiempo para fotografías panorámicas",
          "Duración aproximada: 20 minutos"
        ],
        "note": ""
      },
      {
        "time": "10:35 AM",
        "title": "Visita exterior a la Catedral Metropolitana",
        "details": [
          "Catedral Metropolitana de la Ciudad de México",
          "Historia de la construcción colonial",
          "Explicación del arte barroco y neoclásico",
          "Tiempo para fotos"
        ],
        "note": "Duración: 20 minutos"
      },
      {
        "time": "11:00 AM",
        "title": "Zona arqueológica del Templo Mayor",
        "details": [
          "Templo Mayor",
          "Historia del imperio mexica",
          "Explicación del centro ceremonial de Tenochtitlán",
          "Tiempo libre para fotos",
          "Entrada aproximada al sitio: $95 MXN (no incluida)"
        ],
        "note": "Duración: 30 minutos"
      }
    ],
    "includes": [
      "11:40 AM – Calle Madero",
      "Recorrido por una de las calles peatonales más famosas de la ciudad.",
      "Sitios destacados:",
      "Casa de los Azulejos",
      "tiendas y edificios coloniales",
      "arquitectura del siglo XIX",
      "Duración: 30 minutos",
      "12:10 PM – Palacio de Bellas Artes",
      "Palacio de Bellas Artes",
      "Actividades:",
      "Historia cultural del edificio",
      "Explicación de los murales de artistas mexicanos",
      "Tiempo para fotografías",
      "Duración: 20 minutos",
      "12:30 PM – Fin del recorrido",
      "El tour termina cerca del",
      "Museo Nacional de Arte",
      "Recomendaciones del guía para restaurantes y museos cercanos.",
      "Guía turístico español e inglés",
      "Recorrido guiado a pie",
      "Explicación histórica y cultural",
      "Asistencia durante el tour"
    ],
    "excludes": [
      "Transporte al punto de encuentro",
      "Entrada al Museo del Templo Mayor",
      "Alimentos o bebidas",
      "Propinas"
    ],
    "highlights": [
      "Registro con el guía turístico",
      "Introducción histórica de la antigua Tenochtitlán",
      "Zócalo",
      "Historia del corazón político de México",
      "Explicación de edificios históricos"
    ],
    "rating": 4.4,
    "reviews": 87,
    "featured": false,
    "createdAt": "2026-03-05"
  },
  {
    "id": "tour_061",
    "slug": "tour-personalizado",
    "title": "Tour Personalizado",
    "price": 0,
    "state": "sin-categorizar",
    "stateLabel": "Experiencias a medida",
    "image": "https://turismo.develops.mx/wp-content/uploads/2026/03/tour-personalizado.jpg",
    "place": "Personalizado",
    "duration": "A medida",
    "durationHours": 0,
    "type": "Experiencia personalizada",
    "theme": "cultural",
    "meetingPoint": "Se define contigo al confirmar la reserva",
    "startTime": "Flexible",
    "itinerary": [],
    "includes": [
      "Guía certificado inglés y español",
      "Coordinación y logística del recorrido"
    ],
    "excludes": [
      "Transporte hacia el punto de encuentro",
      "Alimentos y bebidas",
      "Gastos personales"
    ],
    "highlights": [],
    "rating": 4.8,
    "reviews": 223,
    "featured": false,
    "createdAt": "2026-03-05"
  }
];
