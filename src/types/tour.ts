// @/types/tours.ts

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

/**
 * Objeto final que consumen los componentes de la interfaz.
 * Devuelto por `useTour` y `useTours`.
 */
export interface Tour {
  id: string;
  slug: string;
  createdAt: string;
  state: string;          // state_slug
  theme: TourTheme;       // theme_slug
  durationHours: number;
  price: number;
  image: string;
  rating: number;
  reviews: number;
  featured: boolean;

  // Campos resueltos por el hook según el idioma activo
  title: string;
  place: string;
  startTime: string;
  meetingPoint: string;
  includes: string[];
  excludes: string[];
  highlights: string[];
  itinerary: ItineraryStep[];
}

/** Entidad de Estado/Región resuelta */
export interface State {
  slug: string;
  label: string;
}

/** Entidad de Tema/Categoría resuelta */
export interface Theme {
  slug: TourTheme;
  label: string;
}