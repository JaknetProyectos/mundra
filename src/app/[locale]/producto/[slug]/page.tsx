"use client";

import { useState } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { useTranslations, useLocale } from "next-intl";
import {
  MapPin,
  Clock,
  Sparkles,
  CheckCircle2,
  XCircle,
  Calendar,
  Users,
  ShoppingCart,
  Check,
  ArrowLeft,
  Compass,
  AlertTriangle,
  RefreshCw,
  Minus,
  Plus,
  Info,
  ChevronRight
} from "lucide-react";

import { useTour } from "@/hooks/use-tour";
import { useTours } from "@/hooks/use-tours";
import { useCart } from "@/hooks/use-cart";

export default function TourDetailPage() {
  const t = useTranslations("tourDetailPage");
  const locale = useLocale();
  const params = useParams();
  const slug = params?.slug as string;

  // 1. Hook para obtener el tour actual dinámicamente según el idioma
  const { tour, loading, error, notFound, refetch } = useTour(slug, locale as "es" | "en");

  // 2. Hook de carrito
  const { addItem } = useCart();

  // 3. Estados locales para la reservación
  const todayISO = new Date().toISOString().split("T")[0];
  const [selectedDate, setSelectedDate] = useState<string>(todayISO);
  const [people, setPeople] = useState<number>(2);
  const [addedSuccess, setAddedSuccess] = useState<boolean>(false);

  // 4. Hook para obtener tours relacionados
  const { tours: relatedCandidates, loading: loadingRelated } = useTours({
    lang: locale as "es" | "en",
    limit: 4,
    filters: {
      state: tour?.state,
    },
  });

  // Filtramos el tour actual si aparece entre los relacionados
  const relatedTours = relatedCandidates
    .filter((item) => item.id !== tour?.id)
    .slice(0, 3);

  // Manejador para agregar al carrito
  const handleAddToCart = () => {
    if (!tour || !selectedDate) return;

    // Corrección de zona horaria para evitar que la fecha cambie de día
    const [year, month, day] = selectedDate.split("-").map(Number);
    const reservationDate = new Date(year, month - 1, day, 12, 0, 0);

    addItem(tour, reservationDate, people, 1);

    setAddedSuccess(true);
    setTimeout(() => setAddedSuccess(false), 3500);
  };

  // ESTADO DE CARGA PRINCIPAL
  if (loading) {
    return (
      <div className="min-h-screen bg-purple-950/5 flex flex-col justify-center items-center gap-4">
        <div className="relative flex items-center justify-center">
          <div className="h-16 w-16 rounded-full border-4 border-purple-200 border-t-orange-500 animate-spin" />
          <Compass className="h-7 w-7 text-purple-900 absolute animate-pulse" />
        </div>
        <p className="text-sm font-bold text-purple-900 animate-pulse">{t("states.loading")}</p>
      </div>
    );
  }

  // ESTADO DE ERROR: NO ENCONTRADO
  if (notFound) {
    return (
      <div className="min-h-screen bg-purple-950/5 flex flex-col items-center justify-center p-6 text-center">
        <div className="bg-white p-8 md:p-12 rounded-3xl border border-purple-100 shadow-xl max-w-md w-full flex flex-col items-center space-y-4">
          <div className="h-20 w-20 rounded-full bg-orange-100 flex items-center justify-center text-orange-500 mb-2">
            <Compass className="h-10 w-10 animate-spin-slow" />
          </div>
          <h1 className="text-2xl font-extrabold text-slate-900">{t("states.notFoundTitle")}</h1>
          <p className="text-sm text-slate-600">
            {t("states.notFoundDescription")}
          </p>
          <Link
            className="w-full py-3.5 bg-gradient-to-r from-orange-500 to-amber-500 text-white font-bold rounded-2xl shadow-lg shadow-orange-500/20 hover:shadow-orange-500/30 transition-all active:scale-95 text-center text-sm"
            href="/tours"
          >
            {t("states.exploreOtherTours")}
          </Link>
        </div>
      </div>
    );
  }

  // ESTADO DE ERROR TÉCNICO
  if (error || !tour) {
    return (
      <div className="min-h-screen bg-purple-950/5 flex flex-col items-center justify-center p-6 text-center">
        <div className="bg-rose-50 border border-rose-200 p-8 rounded-3xl max-w-md w-full space-y-4">
          <div className="h-12 w-12 rounded-2xl bg-rose-500 text-white flex items-center justify-center mx-auto">
            <AlertTriangle className="h-6 w-6" />
          </div>
          <h1 className="text-lg font-bold text-rose-950">{t("states.errorTitle")}</h1>
          <p className="text-xs text-rose-700">{error}</p>
          <button
            onClick={refetch}
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-rose-600 hover:bg-rose-700 text-white text-xs font-bold rounded-xl transition shadow-md"
          >
            <RefreshCw className="h-4 w-4" />
            {t("states.retry")}
          </button>
        </div>
      </div>
    );
  }

  // Cálculo de subtotal dinámico
  const calculatedTotal = tour.price * people;

  return (
    <div className="min-h-screen bg-purple-50/30 text-slate-800 font-sans pb-24">

      {/* NAVEGACIÓN BREADCRUMB */}
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-4">
        <Link
          className="inline-flex items-center gap-2 text-xs font-bold text-purple-900 hover:text-orange-500 bg-white/80 backdrop-blur-md px-4 py-2 rounded-full border border-purple-100 shadow-sm transition-all hover:translate-x-1"
          href="/tours"
        >
          <ArrowLeft className="h-4 w-4 text-orange-500" />
          {t("breadcrumb.backToTours")}
        </Link>
      </nav>

      {/* HERO / PORTADA */}
      <header className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <div className="relative w-full h-[380px] sm:h-[460px] md:h-[520px] rounded-3xl overflow-hidden shadow-2xl shadow-purple-950/10 border border-purple-100 group">
          <Image
            src={tour.image}
            alt={tour.title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-purple-950/80 via-purple-950/20 to-transparent" />

          {tour.featured && (
            <div className="absolute top-6 left-6 inline-flex items-center gap-2 bg-gradient-to-r from-orange-500 to-amber-500 text-white text-xs font-extrabold px-4 py-2 rounded-full shadow-lg shadow-orange-500/30 backdrop-blur-md border border-white/20">
              <Sparkles className="h-4 w-4" />
              {t("hero.featuredBadge")}
            </div>
          )}

          {/* Información rápida sobrepuesta en Hero */}
          <div className="absolute bottom-6 left-6 right-6 text-white space-y-2">
            <div className="flex flex-wrap items-center gap-2 text-xs font-bold">
              <span className="bg-purple-900/80 backdrop-blur-md text-purple-200 px-3 py-1 rounded-full border border-purple-700/50">
                {tour.state}
              </span>
            </div>
            <h1 className="text-2xl sm:text-4xl md:text-5xl font-black text-white leading-tight drop-shadow-md">
              {tour.title}
            </h1>
          </div>
        </div>
      </header>

      {/* CONTENIDO PRINCIPAL */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">

          {/* COLUMNA IZQUIERDA: DETALLES */}
          <div className="lg:col-span-2 space-y-10">

            {/* Datos principales */}
            <section className="bg-white p-6 sm:p-8 rounded-3xl border border-purple-100 shadow-xl shadow-purple-950/5 space-y-6">
              <div className="flex flex-wrap items-center justify-between gap-4 border-b border-purple-50 pb-6">
                <div className="flex items-center gap-2 text-sm text-slate-600">
                  <div className="h-9 w-9 rounded-xl bg-purple-50 flex items-center justify-center text-purple-700">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase font-bold text-slate-400 block">{t("details.location")}</span>
                    <strong className="text-slate-900 font-bold">{tour.place}</strong>
                  </div>
                </div>

                <div className="flex items-center gap-2 text-sm text-slate-600">
                  <div className="h-9 w-9 rounded-xl bg-purple-50 flex items-center justify-center text-purple-700">
                    <Clock className="h-5 w-5" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase font-bold text-slate-400 block">{t("details.duration")}</span>
                    <strong className="text-slate-900 font-bold">{tour.durationHours} {t("details.hours")}</strong>
                  </div>
                </div>
              </div>

              {/* Lo que vivirás */}
              {tour.highlights && tour.highlights.length > 0 && (
                <div className="space-y-4">
                  <h2 className="text-xl font-extrabold text-purple-950 flex items-center gap-2">
                    <Sparkles className="h-5 w-5 text-orange-500" />
                    {t("details.highlightsTitle")}
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {tour.highlights.map((highlight, index) => (
                      <div
                        key={index}
                        className="flex items-start gap-3 p-4 rounded-2xl bg-purple-50/50 border border-purple-100/80 transition-all hover:bg-purple-50"
                      >
                        <div className="h-6 w-6 rounded-full bg-orange-500 text-white flex items-center justify-center shrink-0 mt-0.5 text-xs font-bold">
                          ✓
                        </div>
                        <span className="text-xs sm:text-sm font-semibold text-slate-700">{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </section>

            {/* Itinerario */}
            {tour.itinerary && tour.itinerary.length > 0 && (
              <section className="bg-white p-6 sm:p-8 rounded-3xl border border-purple-100 shadow-xl shadow-purple-950/5 space-y-6">
                <h2 className="text-xl font-extrabold text-purple-950 flex items-center gap-2">
                  <Compass className="h-5 w-5 text-orange-500" />
                  {t("itinerary.title")}
                </h2>

                <div className="relative border-l-2 border-purple-100 ml-4 pl-6 space-y-8">
                  {tour.itinerary.map((step, index) => (
                    <div key={index} className="relative group">
                      <div className="absolute -left-[33px] top-1.5 h-4 w-4 rounded-full bg-orange-500 border-4 border-white shadow-md group-hover:scale-125 transition-transform" />

                      <div className="bg-purple-50/30 p-5 rounded-2xl border border-purple-100/60 transition-all hover:bg-white hover:shadow-md">
                        <div className="flex flex-wrap justify-between items-start gap-2 mb-3">
                          <h3 className="text-base font-extrabold text-purple-950">{step.title}</h3>
                          <span className="inline-flex items-center gap-1 text-xs font-bold text-purple-900 bg-purple-100 px-3 py-1 rounded-full">
                            <Clock className="h-3 w-3" />
                            {step.time}
                          </span>
                        </div>

                        {step.details && step.details.length > 0 && (
                          <ul className="space-y-1.5 mb-3">
                            {step.details.map((detail, idx) => (
                              <li key={idx} className="text-xs sm:text-sm text-slate-600 flex items-start gap-2">
                                <span className="text-orange-500 font-bold">•</span>
                                {detail}
                              </li>
                            ))}
                          </ul>
                        )}

                        {step.note && (
                          <div className="flex items-start gap-2 text-xs text-purple-900 bg-purple-100/50 p-3 rounded-xl border border-purple-200/50">
                            <Info className="h-4 w-4 text-purple-700 shrink-0 mt-0.5" />
                            <span><strong>{t("itinerary.noteLabel")}:</strong> {step.note}</span>
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Incluye / No Incluye */}
            <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-3xl border border-emerald-100 shadow-xl shadow-emerald-950/5 space-y-4">
                <h3 className="text-base font-extrabold text-emerald-950 flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-emerald-500" />
                  {t("includesExcludes.includesTitle")}
                </h3>
                <ul className="space-y-2.5">
                  {tour.includes && tour.includes.length > 0 ? (
                    tour.includes.map((item, index) => (
                      <li key={index} className="text-xs sm:text-sm text-slate-700 flex items-start gap-2.5">
                        <div className="h-4 w-4 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0 mt-0.5 text-[10px] font-bold">✓</div>
                        <span>{item}</span>
                      </li>
                    ))
                  ) : (
                    <li className="text-xs text-slate-400 italic">{t("includesExcludes.notSpecified")}</li>
                  )}
                </ul>
              </div>

              <div className="bg-white p-6 rounded-3xl border border-rose-100 shadow-xl shadow-rose-950/5 space-y-4">
                <h3 className="text-base font-extrabold text-rose-950 flex items-center gap-2">
                  <XCircle className="h-5 w-5 text-rose-500" />
                  {t("includesExcludes.excludesTitle")}
                </h3>
                <ul className="space-y-2.5">
                  {tour.excludes && tour.excludes.length > 0 ? (
                    tour.excludes.map((item, index) => (
                      <li key={index} className="text-xs sm:text-sm text-slate-700 flex items-start gap-2.5">
                        <div className="h-4 w-4 rounded-full bg-rose-100 text-rose-600 flex items-center justify-center shrink-0 mt-0.5 text-[10px] font-bold">✕</div>
                        <span>{item}</span>
                      </li>
                    ))
                  ) : (
                    <li className="text-xs text-slate-400 italic">{t("includesExcludes.notSpecified")}</li>
                  )}
                </ul>
              </div>
            </section>
          </div>

          {/* COLUMNA DERECHA: SIDEBAR DE RESERVA */}
          <aside className="lg:col-span-1">
            <div className="sticky top-8 bg-white p-6 sm:p-8 rounded-3xl shadow-2xl shadow-purple-950/10 border border-purple-100 space-y-6">

              {/* Precio base */}
              <div className="space-y-1">
                <span className="text-[11px] font-extrabold uppercase tracking-wider text-purple-900/60">
                  {t("booking.pricePerPerson")}
                </span>
                <div className="flex items-baseline gap-1.5">
                  <span className="text-3xl sm:text-4xl font-black text-purple-950">
                    ${tour.price.toLocaleString(locale === "en" ? "en-US" : "es-MX")}
                  </span>
                  <span className="text-xs font-bold text-slate-500">MXN</span>
                </div>
              </div>

              <hr className="border-purple-50" />

              {/* FORMULARIO DE RESERVA */}
              <div className="space-y-5">
                {/* Selector de Fecha */}
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-700 flex items-center gap-1.5">
                    <Calendar className="h-4 w-4 text-orange-500" />
                    {t("booking.dateLabel")}
                  </label>
                  <input
                    type="date"
                    min={todayISO}
                    value={selectedDate}
                    onChange={(e) => setSelectedDate(e.target.value)}
                    className="w-full px-4 py-3 text-xs sm:text-sm font-semibold border border-purple-100 rounded-2xl focus:outline-none focus:border-orange-400 focus:ring-4 focus:ring-orange-400/10 bg-purple-50/50 text-slate-800 transition-all"
                  />
                </div>

                {/* Selector de Personas */}
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-700 flex items-center gap-1.5">
                    <Users className="h-4 w-4 text-orange-500" />
                    {t("booking.peopleLabel")}
                  </label>
                  <div className="flex items-center justify-between border border-purple-100 rounded-2xl p-1.5 bg-purple-50/50">
                    <button
                      type="button"
                      onClick={() => setPeople((prev) => Math.max(1, prev - 1))}
                      className="h-10 w-10 rounded-xl bg-white border border-purple-100 flex items-center justify-center font-bold text-purple-950 hover:bg-orange-500 hover:text-white transition-all active:scale-95 shadow-sm"
                    >
                      <Minus className="h-4 w-4" />
                    </button>
                    <span className="font-extrabold text-slate-900 text-sm">
                      {people} {people === 1 ? t("booking.personSingular") : t("booking.personPlural")}
                    </span>
                    <button
                      type="button"
                      onClick={() => setPeople((prev) => prev + 1)}
                      className="h-10 w-10 rounded-xl bg-white border border-purple-100 flex items-center justify-center font-bold text-purple-950 hover:bg-orange-500 hover:text-white transition-all active:scale-95 shadow-sm"
                    >
                      <Plus className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Total estimado */}
              <div className="bg-purple-950 p-5 rounded-2xl text-white space-y-1 relative overflow-hidden">
                <div className="absolute -right-6 -bottom-6 h-20 w-20 rounded-full bg-orange-500/20 blur-xl" />
                <span className="text-[11px] font-bold text-purple-200 uppercase tracking-wider block">{t("booking.estimatedTotal")}</span>
                <div className="flex items-baseline justify-between">
                  <span className="text-2xl sm:text-3xl font-black text-amber-300">
                    ${calculatedTotal.toLocaleString(locale === "en" ? "en-US" : "es-MX")}
                  </span>
                  <span className="text-xs font-bold text-purple-200">MXN</span>
                </div>
              </div>

              {/* Botón de Agregar al Carrito */}
              <button
                type="button"
                onClick={handleAddToCart}
                disabled={addedSuccess}
                className="w-full py-4 bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white font-extrabold rounded-2xl text-base shadow-lg shadow-orange-500/25 hover:shadow-orange-500/40 transition-all active:scale-95 flex items-center justify-center gap-2 disabled:opacity-80"
              >
                {addedSuccess ? (
                  <>
                    <Check className="h-5 w-5" strokeWidth={3} />
                    <span>{t("booking.addedSuccess")}</span>
                  </>
                ) : (
                  <>
                    <ShoppingCart className="h-5 w-5" />
                    <span>{t("booking.addToCart")}</span>
                  </>
                )}
              </button>

              {/* Info Logística rápida */}
              <div className="space-y-3 pt-2 text-xs text-slate-600 border-t border-purple-50">
                <div className="flex items-center gap-2.5">
                  <Clock className="h-4 w-4 text-purple-700 shrink-0" />
                  <span>{t("logistics.startTime")}: <strong className="text-slate-900">{tour.startTime}</strong></span>
                </div>
                <div className="flex items-center gap-2.5">
                  <MapPin className="h-4 w-4 text-purple-700 shrink-0" />
                  <span className="line-clamp-1" title={tour.meetingPoint}>
                    {t("logistics.meetingPoint")}: <strong className="text-slate-900">{tour.meetingPoint}</strong>
                  </span>
                </div>
              </div>
            </div>
          </aside>
        </div>

        {/* SECCIÓN DE TOURS RELACIONADOS */}
        {relatedTours.length > 0 && (
          <section className="mt-20 pt-12 border-t border-purple-100">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
              <div>
                <span className="text-xs font-extrabold uppercase tracking-widest text-orange-500">
                  {t("related.subheading")}
                </span>
                <h2 className="text-2xl md:text-3xl font-black text-purple-950 mt-1">
                  {t("related.heading")} {tour.state.toUpperCase()}
                </h2>
              </div>
              <Link
                href="/tours"
                className="inline-flex items-center gap-1 text-xs font-bold text-purple-900 hover:text-orange-500 transition-colors"
              >
                {t("related.viewAll")} <ChevronRight className="h-4 w-4 text-orange-500" />
              </Link>
            </div>

            {loadingRelated ? (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[1, 2, 3].map((n) => (
                  <div key={n} className="bg-white rounded-3xl h-80 animate-pulse border border-purple-100" />
                ))}
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {relatedTours.map((item) => (
                  <article
                    key={item.id}
                    className="group bg-white rounded-3xl overflow-hidden border border-purple-100 shadow-xl shadow-purple-950/5 hover:shadow-2xl hover:shadow-purple-950/10 transition-all duration-300 flex flex-col justify-between"
                  >
                    <div className="relative h-48 w-full bg-slate-100 overflow-hidden">
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                        sizes="(max-width: 768px) 100vw, 33vw"
                      />
                      <span className="absolute top-3 left-3 bg-purple-950/80 backdrop-blur-md text-amber-300 text-[10px] font-extrabold px-3 py-1 rounded-full border border-purple-700/50">
                        {item.state.toUpperCase()}
                      </span>
                    </div>

                    <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                      <div className="space-y-2">
                        <div className="flex justify-between items-center text-xs text-slate-500 font-semibold">
                          <span className="flex items-center gap-1">
                            <Clock className="h-3.5 w-3.5 text-purple-700" />
                            {item.durationHours} {t("details.hours")}
                          </span>
                        </div>
                        <h3 className="font-extrabold text-purple-950 text-base line-clamp-1 group-hover:text-orange-500 transition-colors">
                          {item.title}
                        </h3>
                        <p className="text-xs text-slate-500 line-clamp-1 flex items-center gap-1">
                          <MapPin className="h-3.5 w-3.5 text-purple-600 shrink-0" />
                          {item.place}
                        </p>
                      </div>

                      <div className="pt-3 border-t border-purple-50 flex items-center justify-between">
                        <div>
                          <span className="text-[10px] text-slate-400 font-bold block">{t("related.from")}</span>
                          <span className="text-base font-black text-purple-950">
                            ${item.price.toLocaleString(locale === "en" ? "en-US" : "es-MX")}{" "}
                            <small className="text-[10px] text-slate-500 font-normal">MXN</small>
                          </span>
                        </div>
                        <Link
                          href={`/tours/${item.slug}`}
                          className="px-3.5 py-2 bg-purple-50 text-purple-950 hover:bg-orange-500 hover:text-white text-xs font-bold rounded-xl transition-all shadow-sm"
                        >
                          {t("related.viewDetails")}
                        </Link>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            )}
          </section>
        )}
      </main>
    </div>
  );
}