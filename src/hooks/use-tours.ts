import { useState, useEffect, useCallback } from "react";
import { supabase } from "@/supabase/client";
import { Tour, TourTheme, ItineraryStep } from "@/types/tour";
import { useLocale } from "next-intl";

// 1. Tipos e Interfaces
interface RawTourTranslationResponse {
  title: string;
  place: string;
  start_time: string;
  meeting_point: string;
  includes: string[];
  excludes: string[];
  highlights: string[];
  itinerary: ItineraryStep[];
}

interface RawTourResponse {
  id: string;
  slug: string;
  created_at: string;
  state_slug: string;
  theme_slug: TourTheme;
  duration_hours: number;
  price: number;
  image: string;
  rating: number;
  reviews: number;
  featured: boolean;
  mundra_tour_translations: RawTourTranslationResponse[];
}

export interface UseToursFilters {
  search?: string;
  state?: string;
  minPrice?: number;
  sortBy?: "price" | "duration" | "title" | "newest";
  sortOrder?: "asc" | "desc";
}

export interface UseToursOptions {
  lang?: string;
  page?: number;
  limit?: number;
  filters?: UseToursFilters;
}

export interface UseToursResult {
  tours: Tour[];
  loading: boolean;
  error: string | null;
  totalCount: number;
  refetch: () => void;
}

// 2. Función pura para mapear la respuesta
const mapTourResponse = (data: RawTourResponse): Tour => {
  const translation = data.mundra_tour_translations?.[0];

  return {
    id: data.id,
    slug: data.slug,
    createdAt: data.created_at,
    state: data.state_slug,
    theme: data.theme_slug,
    durationHours: Number(data.duration_hours),
    price: Number(data.price),
    image: data.image,
    rating: Number(data.rating),
    reviews: data.reviews,
    featured: data.featured,
    title: translation?.title || "",
    place: translation?.place || "",
    startTime: translation?.start_time || "",
    meetingPoint: translation?.meeting_point || "",
    includes: translation?.includes || [],
    excludes: translation?.excludes || [],
    highlights: translation?.highlights || [],
    itinerary: translation?.itinerary || [],
  };
};

// 3. Implementación del Hook
export function useTours({
  lang = "es",
  page = 1,
  limit = 10,
  filters = {},
}: UseToursOptions = {}): UseToursResult {
  const [tours, setTours] = useState<Tour[]>([]);
  const [totalCount, setTotalCount] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const locale = useLocale()
  lang = locale;

  const fetchTours = useCallback(async () => {
    setLoading(true);
    setError(null);

    try {
      // Calculamos rangos de paginación
      const from = (page - 1) * limit;
      const to = from + limit - 1;

      // Iniciamos el Query Builder solicitando el contador exacto para la paginación
      let query = supabase
        .from("mundra_tours")
        .select<string, RawTourResponse>(
          `
          id,
          slug,
          created_at,
          state_slug,
          theme_slug,
          duration_hours,
          price,
          image,
          rating,
          reviews,
          featured,
          mundra_tour_translations!inner (
            title,
            place,
            start_time,
            meeting_point,
            includes,
            excludes,
            highlights,
            itinerary
          )
        `,
          { count: "exact" }
        )
        .eq("mundra_tour_translations.language_code", lang);

      // --- APLICACIÓN DINÁMICA DE FILTROS ---
      if (filters.state) {
        query = query.eq("state_slug", filters.state);
      }

      if (filters.minPrice !== undefined) {
        query = query.gte("price", filters.minPrice);
      }

      if (filters.search) {
        query = query.ilike("mundra_tour_translations.title", `%${filters.search}%`);
      }

      // --- ORDENAMIENTO ---
      const isAsc = filters.sortOrder === "asc";
      switch (filters.sortBy) {
        case "price":
          query = query.order("price", { ascending: isAsc });
          break;
        case "duration":
          query = query.order("duration_hours", { ascending: isAsc });
          break;
        case "newest":
          query = query.order("created_at", { ascending: false });
          break;
        case "title":
          // Nota: PostgREST no soporta ordenar la tabla base por una columna anidada directamente
          // Para escalar esto a miles de registros, se recomienda una Vista SQL. 
          // Por defecto caerá en el ordenamiento base, pero lo manejamos en memoria abajo.
          break;
        default:
          query = query.order("created_at", { ascending: false });
          break;
      }

      // --- PAGINACIÓN ---
      query = query.range(from, to);

      // Ejecutamos la consulta
      const { data, error: fetchError, count } = await query;

      if (fetchError) throw fetchError;

      const mappedTours = (data || []).map(mapTourResponse);

      // Sort en memoria temporal para el título (Solo aplica a la página actual)
      if (filters.sortBy === "title") {
        mappedTours.sort((a, b) =>
          isAsc ? a.title.localeCompare(b.title) : b.title.localeCompare(a.title)
        );
      }

      setTours(mappedTours);
      setTotalCount(count || 0);
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : "Error al cargar los tours";
      setError(message);
      setTours([]);
      setTotalCount(0);
    } finally {
      setLoading(false);
    }
  }, [lang, page, limit, filters.search, filters.state, filters.minPrice, filters.sortBy, filters.sortOrder]);

  useEffect(() => {
    fetchTours();
  }, [fetchTours]);

  return {
    tours,
    loading,
    error,
    totalCount,
    refetch: fetchTours,
  };
}