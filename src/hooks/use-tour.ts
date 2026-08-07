import { useState, useEffect, useCallback } from "react";
import { supabase } from "@/supabase/client";
import { Tour, ItineraryStep, TourTheme } from "@/types/tour";
import { useLocale } from "next-intl";

// 1. Interfaz que refleja exactamente lo que devuelve la consulta SQL de Supabase
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

export interface UseTourResult {
  tour: Tour | null;
  loading: boolean;
  error: string | null;
  notFound: boolean;
  refetch: () => void;
}

export function useTour(
  slug: string,
  lang: string = "es"
): UseTourResult {
  const [tour, setTour] = useState<Tour | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [notFound, setNotFound] = useState<boolean>(false);

  const locale = useLocale()
  lang = locale;

  const fetchTour = useCallback(async () => {
    if (!slug) {
      setTour(null);
      setLoading(false);
      setNotFound(true);
      return;
    }

    setLoading(true);
    setError(null);
    setNotFound(false);

    try {
      // 2. Pasamos la interfaz RawTourResponse como genérico a select()
      const { data, error: fetchError } = await supabase
        .from("mundra_tours")
        .select<string, RawTourResponse>(`
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
        `)
        .eq("slug", slug)
        .eq("mundra_tour_translations.language_code", lang)
        .maybeSingle();

      if (fetchError) {
        throw fetchError;
      }

      if (!data) {
        setTour(null);
        setNotFound(true);
      } else {
        const translation = data.mundra_tour_translations?.[0];

        // 3. Mapeo seguro con tipos 100% inferidos
        const cleanTour: Tour = {
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

        setTour(cleanTour);
      }
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : "Error al obtener el tour";
      setError(message);
      setTour(null);
    } finally {
      setLoading(false);
    }
  }, [slug, lang]);

  useEffect(() => {
    fetchTour();
  }, [fetchTour]);

  return {
    tour,
    loading,
    error,
    notFound,
    refetch: fetchTour,
  };
}