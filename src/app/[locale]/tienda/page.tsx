"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useTranslations, useLocale } from "next-intl";
import { UseToursFilters, useTours } from "@/hooks/use-tours";
import { STATES } from "@/data/tours";
import {
  Search,
  Filter,
  RotateCcw,
  Clock,
  Star,
  MapPin,
  ChevronLeft,
  ChevronRight,
  Compass,
  Sparkles,
  AlertCircle,
  ArrowUpDown,
  DollarSign,
  CalendarCheck,
  Zap,
} from "lucide-react";
import { getOptimizedUrl } from "@/lib/images";

export default function ToursPage() {
  const t = useTranslations("toursPage");
  const locale = useLocale();

  // Estados para paginación y filtros
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");
  const [selectedState, setSelectedState] = useState("");
  const [minPrice, setMinPrice] = useState<number | undefined>(undefined);
  const [sortBy, setSortBy] = useState<"newest" | "price" | "duration" | "title">("newest");
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("desc");

  const limit = 10; // Tours por página

  // Objeto de filtros memoizado para el hook
  const filters: UseToursFilters = {
    search: search || undefined,
    state: selectedState || undefined,
    minPrice: minPrice !== undefined && minPrice > 0 ? minPrice : undefined,
    sortBy,
    sortOrder,
  };

  // Consumo del Hook useTours enlazado dinámicamente con el idioma actual (es/en)
  const { tours, loading, error, totalCount, refetch } = useTours({
    lang: locale as "es" | "en",
    page,
    limit,
    filters,
  });

  const totalPages = Math.ceil(totalCount / limit);

  // Manejador para reiniciar filtros
  const handleResetFilters = () => {
    setSearch("");
    setSelectedState("");
    setMinPrice(undefined);
    setSortBy("title");
    setSortOrder("desc");
    setPage(1);
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 antialiased selection:bg-orange-500 selection:text-white">
      {/* HEADER HERO CON MORADO PROFUNDO E ÍCONOS FLOTANTES */}
      <header className="relative overflow-hidden bg-purple-950 py-16 lg:py-24 text-white">
        {/* Íconos Flotantes Animados */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <Compass className="absolute top-10 left-[8%] h-12 w-12 text-orange-400 opacity-30 animate-spin-slow" />
          <Sparkles className="absolute top-1/3 right-[10%] h-10 w-10 text-amber-300 opacity-40 animate-pulse" />
          <MapPin className="absolute bottom-8 left-[18%] h-8 w-8 text-purple-400 opacity-30 animate-bounce duration-1000" />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <span className="inline-flex items-center gap-2 rounded-full border border-orange-400/30 bg-orange-500/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-orange-300 backdrop-blur-md">
            <Sparkles className="h-4 w-4" /> {t("hero.badge")}
          </span>

          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl text-white">
            {t("hero.titleStart")}{" "}
            <span className="bg-gradient-to-r from-orange-400 to-amber-200 bg-clip-text text-transparent">
              {t("hero.titleHighlight")}
            </span>
          </h1>

          <p className="mx-auto max-w-2xl text-sm sm:text-base leading-relaxed text-purple-200">
            {t("hero.description")}
          </p>

          {/* BANNER DE ADVERTENCIA REESTILIZADO */}
          <div className="mx-auto mt-6 max-w-3xl rounded-2xl border border-orange-400/40 bg-orange-500/10 p-4 text-left backdrop-blur-md sm:flex sm:items-center sm:gap-4">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-orange-500 text-white shadow-md mb-2 sm:mb-0">
              <CalendarCheck className="h-5 w-5" />
            </div>
            <p className="text-xs leading-relaxed text-orange-100">
              <strong>{t("hero.noticeTitle")}:</strong> {t("hero.noticeText")}{" "}
              <strong>{t("hero.noticeHighlight")}</strong>. {t("hero.noticeAction")}
            </p>
          </div>
        </div>
      </header>

      {/* DIVISOR NARANJA DE LÍNEA NÍTIDA */}
      <div className="h-1.5 w-full bg-gradient-to-r from-orange-500 via-amber-400 to-purple-600"></div>

      {/* CONTENIDO PRINCIPAL */}
      <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* BARRA LATERAL DE FILTROS */}
          <aside className="lg:col-span-1 bg-white p-6 rounded-3xl shadow-xl shadow-purple-950/5 border border-purple-100 h-fit space-y-6">
            <div className="flex items-center justify-between pb-4 border-b border-slate-100">
              <div className="flex items-center gap-2 text-purple-950 font-extrabold text-lg">
                <Filter className="h-5 w-5 text-orange-500" />
                <span>{t("filters.title")}</span>
              </div>
              <button
                onClick={handleResetFilters}
                className="inline-flex items-center gap-1 text-xs text-purple-600 hover:text-orange-600 font-bold transition-colors"
              >
                <RotateCcw className="h-3.5 w-3.5" /> {t("filters.reset")}
              </button>
            </div>

            {/* Búsqueda por palabra clave */}
            <div className="space-y-1.5">
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-500">
                {t("filters.searchLabel")}
              </label>
              <div className="relative">
                <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                <input
                  type="text"
                  placeholder={t("filters.searchPlaceholder")}
                  value={search}
                  onChange={(e) => {
                    setSearch(e.target.value);
                    setPage(1);
                  }}
                  className="w-full pl-10 pr-3 py-2.5 text-sm font-medium border border-purple-100 rounded-xl bg-purple-50/40 text-slate-800 outline-none transition-all focus:border-orange-400 focus:bg-white focus:ring-4 focus:ring-orange-400/10"
                />
              </div>
            </div>

            {/* Filtro por Estado */}
            <div className="space-y-1.5">
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-500">
                {t("filters.stateLabel")}
              </label>
              <div className="relative">
                <MapPin className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400 pointer-events-none" />
                <select
                  value={selectedState}
                  onChange={(e) => {
                    setSelectedState(e.target.value);
                    setPage(1);
                  }}
                  className="w-full pl-10 pr-4 py-2.5 text-sm font-medium border border-purple-100 rounded-xl bg-purple-50/40 text-slate-800 outline-none transition-all focus:border-orange-400 focus:bg-white focus:ring-4 focus:ring-orange-400/10 appearance-none cursor-pointer"
                >
                  <option value="">{t("filters.allStates")}</option>
                  {STATES.map((st) => (
                    <option key={st.slug} value={st.slug}>
                      {st.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Filtro por Precio Mínimo */}
            <div className="space-y-1.5">
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-500">
                {t("filters.minPriceLabel")}
              </label>
              <div className="relative">
                <DollarSign className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                <input
                  type="number"
                  min="0"
                  placeholder={t("filters.minPricePlaceholder")}
                  value={minPrice ?? ""}
                  onChange={(e) => {
                    const val = e.target.value ? Number(e.target.value) : undefined;
                    setMinPrice(val);
                    setPage(1);
                  }}
                  className="w-full pl-10 pr-3 py-2.5 text-sm font-medium border border-purple-100 rounded-xl bg-purple-50/40 text-slate-800 outline-none transition-all focus:border-orange-400 focus:bg-white focus:ring-4 focus:ring-orange-400/10"
                />
              </div>
            </div>

            {/* Ordenamiento */}
            <div className="space-y-1.5">
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-500">
                {t("filters.sortLabel")}
              </label>
              <div className="relative">
                <ArrowUpDown className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400 pointer-events-none" />
                <select
                  value={`${sortBy}-${sortOrder}`}
                  onChange={(e) => {
                    const [field, order] = e.target.value.split("-") as [
                      "newest" | "price" | "duration" | "title",
                      "asc" | "desc"
                    ];
                    setSortBy(field);
                    setSortOrder(order);
                    setPage(1);
                  }}
                  className="w-full pl-10 pr-4 py-2.5 text-sm font-medium border border-purple-100 rounded-xl bg-purple-50/40 text-slate-800 outline-none transition-all focus:border-orange-400 focus:bg-white focus:ring-4 focus:ring-orange-400/10 appearance-none cursor-pointer"
                >
                  <option value="newest-desc">{t("filters.sortOptions.newest")}</option>
                  <option value="price-asc">{t("filters.sortOptions.priceAsc")}</option>
                  <option value="price-desc">{t("filters.sortOptions.priceDesc")}</option>
                  <option value="duration-asc">{t("filters.sortOptions.durationAsc")}</option>
                  <option value="duration-desc">{t("filters.sortOptions.durationDesc")}</option>
                  <option value="title-asc">{t("filters.sortOptions.titleAsc")}</option>
                  <option value="title-desc">{t("filters.sortOptions.titleDesc")}</option>
                </select>
              </div>
            </div>
          </aside>

          {/* LISTA DE TOURS Y RESULTADOS */}
          <section className="lg:col-span-3 space-y-6">
            {/* BARRA SUPERIOR DE RESULTADOS */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 bg-white px-6 py-4 rounded-2xl border border-purple-100 shadow-sm">
              <span className="text-sm font-medium text-slate-600">
                {t("results.showing")}{" "}
                <strong className="text-purple-950 font-bold">{tours.length}</strong> {t("results.of")}{" "}
                <strong className="text-purple-950 font-bold">{totalCount}</strong> {t("results.experiences")}
              </span>
              <span className="text-xs bg-purple-100 text-purple-800 font-bold px-3 py-1.5 rounded-full">
                {t("results.page")} {page} {t("results.ofPage")} {totalPages || 1}
              </span>
            </div>

            {/* ESTADO DE CARGA (SKELETON) */}
            {loading && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[1, 2, 3, 4].map((n) => (
                  <div
                    key={n}
                    className="bg-white rounded-3xl h-96 animate-pulse border border-purple-100 shadow-sm"
                  />
                ))}
              </div>
            )}

            {/* ESTADO DE ERROR */}
            {!loading && error && (
              <div className="bg-rose-50 border border-rose-200 text-rose-900 p-8 rounded-3xl text-center space-y-4 shadow-sm">
                <AlertCircle className="h-10 w-10 text-rose-500 mx-auto" />
                <div className="space-y-1">
                  <p className="font-bold text-lg">{t("states.errorTitle")}</p>
                  <p className="text-sm text-rose-700">{error}</p>
                </div>
                <button
                  onClick={refetch}
                  className="px-6 py-2.5 bg-rose-600 text-white text-xs font-bold uppercase tracking-wider rounded-full hover:bg-rose-700 transition-colors shadow-md"
                >
                  {t("states.retry")}
                </button>
              </div>
            )}

            {/* RESULTADOS VACÍOS */}
            {!loading && !error && tours.length === 0 && (
              <div className="bg-white border border-purple-100 rounded-3xl p-12 text-center space-y-4 shadow-sm">
                <div className="w-16 h-16 bg-orange-100 text-orange-600 rounded-2xl flex items-center justify-center mx-auto text-2xl">
                  <Search className="h-8 w-8" />
                </div>
                <div className="space-y-1">
                  <h3 className="text-xl font-extrabold text-purple-950">{t("states.emptyTitle")}</h3>
                  <p className="text-sm text-slate-500">{t("states.emptySubtitle")}</p>
                </div>
                <button
                  onClick={handleResetFilters}
                  className="px-6 py-2.5 bg-purple-700 text-white text-xs font-bold uppercase tracking-wider rounded-full hover:bg-orange-500 transition-colors shadow-md"
                >
                  {t("filters.reset")}
                </button>
              </div>
            )}

            {/* GRILLA DE TARJETAS DE TOURS */}
            {!loading && !error && tours.length > 0 && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {tours.map((tour) => (
                  <article
                    key={tour.id}
                    className="group relative bg-white rounded-3xl overflow-hidden border border-purple-100 shadow-md hover:shadow-2xl hover:shadow-purple-950/10 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
                  >
                    {/* IMAGEN DEL TOUR */}
                    <div className="relative h-56 w-full bg-slate-100 overflow-hidden">
                      <Image
                        src={getOptimizedUrl(tour.image)}
                        alt={tour.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-700"
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-purple-950/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                      {tour.state.toUpperCase() != "SIN-CATEGORIZAR" &&
                        <span className="absolute top-4 left-4 bg-white/95 backdrop-blur-md text-purple-950 text-xs font-extrabold px-3 py-1 rounded-full border border-purple-100 shadow-sm flex items-center gap-1">
                          <MapPin className="h-3.5 w-3.5 text-orange-500" />
                          {tour.state.toUpperCase()}
                        </span>
                      }

                      {tour.featured && (
                        <span className="absolute top-4 right-4 bg-gradient-to-r from-orange-500 to-amber-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-md flex items-center gap-1">
                          <Zap className="h-3.5 w-3.5" />
                          {t("card.featured")}
                        </span>
                      )}
                    </div>

                    {/* DETALLES DE LA TARJETA */}
                    <div className="p-6 flex-1 flex flex-col justify-between space-y-5">
                      <div className="space-y-2">
                        <div className="flex items-center justify-between text-xs font-semibold text-slate-500">
                          {tour.durationHours > 0 &&
                            <span className="flex items-center gap-1">
                              <Clock className="h-3.5 w-3.5 text-purple-600" />
                              {tour.durationHours} {t("card.hours")}
                            </span>
                          }
                        </div>

                        <h3 className="text-xl font-bold text-purple-950 group-hover:text-orange-600 transition-colors line-clamp-1">
                          {tour.title}
                        </h3>

                        <p className="text-xs font-medium text-slate-500 line-clamp-1 flex items-center gap-1">
                          <MapPin className="h-3 w-3 text-slate-400" />
                          {tour.place}
                        </p>
                      </div>

                      {/* PRECIO Y ACCIÓN */}
                      <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                        <div>

                          {
                            tour.price > 0 &&

                            <>
                              <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">
                                {t("card.from")}
                              </span>

                              <span className="text-2xl font-black text-purple-950">
                                ${tour.price.toLocaleString(locale === "en" ? "en-US" : "es-MX")}{" "}
                                <small className="text-xs font-semibold text-slate-500">MXN</small>
                              </span>
                            </>
                          }
                        </div>
                        <Link
                          href={`/producto/${tour.slug}`}
                          className="px-5 py-2.5 bg-orange-500 hover:bg-orange-600 text-white text-xs font-bold rounded-full shadow-md shadow-orange-500/20 hover:shadow-lg hover:shadow-orange-500/30 transition-all duration-200"
                        >
                          {t("card.viewDetails")}
                        </Link>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            )}

            {/* CONTROLES DE PAGINACIÓN */}
            {!loading && totalPages > 1 && (
              <div className="flex items-center justify-center gap-2 pt-8">
                <button
                  disabled={page === 1}
                  onClick={() => setPage((p) => Math.max(1, p - 1))}
                  className="p-2.5 rounded-full bg-white border border-purple-100 text-purple-950 hover:bg-purple-700 hover:text-white transition-all disabled:opacity-30 disabled:hover:bg-white disabled:hover:text-purple-950 shadow-sm"
                  aria-label={t("pagination.prev")}
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>

                <div className="flex items-center gap-1.5 px-2">
                  {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNum) => (
                    <button
                      key={pageNum}
                      onClick={() => setPage(pageNum)}
                      className={`w-10 h-10 text-xs rounded-full font-bold transition-all ${page === pageNum
                        ? "bg-purple-950 text-white shadow-md shadow-purple-950/20 scale-105"
                        : "bg-white text-slate-700 border border-purple-100 hover:bg-orange-50"
                        }`}
                    >
                      {pageNum}
                    </button>
                  ))}
                </div>

                <button
                  disabled={page === totalPages}
                  onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
                  className="p-2.5 rounded-full bg-white border border-purple-100 text-purple-950 hover:bg-purple-700 hover:text-white transition-all disabled:opacity-30 disabled:hover:bg-white disabled:hover:text-purple-950 shadow-sm"
                  aria-label={t("pagination.next")}
                >
                  <ChevronRight className="h-5 w-5" />
                </button>
              </div>
            )}
          </section>
        </div>
      </main>
    </div>
  );
}