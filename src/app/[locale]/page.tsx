"use client";

import {
  ArrowRight,
  Award,
  Ban,
  Calendar,
  Camera,
  Check,
  Compass,
  HeartHandshake,
  Info,
  Layers,
  MapPin,
  Sparkles,
  Sun,
  Zap,
} from "lucide-react";

import {
  Landmark,
  Trees,
  Pyramid,
  Waves,
  Utensils,
  Palette
} from "lucide-react";

import {
  MessageSquare,
  PencilRuler,
  SlidersHorizontal,
  Plane,
} from "lucide-react";

import {
  Headphones,
  ShieldCheck,
  Clock,
  Sliders
} from "lucide-react";

import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";
import { ContactForm } from "@/components/contact-form";
import { bgImg, img } from "@/lib/img";
import { getOptimizedUrl } from "@/lib/images";

export default function Home() {
  const t = useTranslations("home");

  const FEATURES = [
    {
      icon: Compass,
      title: t("features.items.strategicItineraries.title"),
      text: t("features.items.strategicItineraries.text")
    },
    {
      icon: Headphones,
      title: t("features.items.personalizedAttention.title"),
      text: t("features.items.personalizedAttention.text")
    },
    {
      icon: Sparkles,
      title: t("features.items.integralExperiences.title"),
      text: t("features.items.integralExperiences.text")
    },
    {
      icon: ShieldCheck,
      title: t("features.items.qualitySuppliers.title"),
      text: t("features.items.qualitySuppliers.text")
    },
    {
      icon: Clock,
      title: t("features.items.optimizedLogistics.title"),
      text: t("features.items.optimizedLogistics.text")
    },
    {
      icon: Sliders,
      title: t("features.items.adaptability.title"),
      text: t("features.items.adaptability.text")
    },
  ];

  const STEPS = [
    {
      icon: MessageSquare,
      title: t("steps.items.connection.title"),
      text: t("steps.items.connection.text"),
    },
    {
      icon: PencilRuler,
      title: t("steps.items.design.title"),
      text: t("steps.items.design.text"),
    },
    {
      icon: SlidersHorizontal,
      title: t("steps.items.adjustment.title"),
      text: t("steps.items.adjustment.text"),
    },
    {
      icon: Plane,
      title: t("steps.items.travel.title"),
      text: t("steps.items.travel.text"),
    },
  ];

  const CONDITIONS = [
    t("conditions.items.availability"),
    t("conditions.items.advanceBooking"),
    t("conditions.items.itineraryAdjustments"),
    t("conditions.items.priceVariations"),
    t("conditions.items.additionalCosts"),
  ];

  const NOT_INCLUDED = [
    t("conditions.notIncludedItems.transport"),
    t("conditions.notIncludedItems.foodAndDrinks"),
    t("conditions.notIncludedItems.tickets"),
    t("conditions.notIncludedItems.personalExpenses"),
    t("conditions.notIncludedItems.tips"),
    t("conditions.notIncludedItems.extraActivities"),
  ];

  const CATEGORIES = [
    {
      icon: Landmark,
      title: t("categories.items.heritage.title"),
      text: t("categories.items.heritage.text"),
      href: "/tienda?tipo=cultural",
    },
    {
      icon: Trees,
      title: t("categories.items.ecoAdventure.title"),
      text: t("categories.items.ecoAdventure.text"),
      href: "/tienda?tipo=naturaleza,aventura",
    },
    {
      icon: Pyramid,
      title: t("categories.items.pastTraces.title"),
      text: t("categories.items.pastTraces.text"),
      href: "/tienda?q=arqueol",
    },
    {
      icon: Waves,
      title: t("categories.items.horizons.title"),
      text: t("categories.items.horizons.text"),
      href: "/tienda?q=playa",
    },
    {
      icon: Utensils,
      title: t("categories.items.flavorRoutes.title"),
      text: t("categories.items.flavorRoutes.text"),
      href: "/tienda?tipo=gastronomia",
    },
    {
      icon: Palette,
      title: t("categories.items.urbanPulse.title"),
      text: t("categories.items.urbanPulse.text"),
      href: "/tienda?tipo=recreativo",
    },
  ];

  return (
    <div className="w-full bg-slate-50 text-slate-800 antialiased selection:bg-orange-500 selection:text-white">
      {/* SECCIÓN 1: HERO (Fondo Morado) */}
      <section className="relative overflow-hidden bg-purple-700 py-20 text-white lg:py-28">
        {/* Íconos Flotantes decorativos */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <Sparkles className="absolute top-12 left-[10%] h-8 w-8 text-orange-400 opacity-60 animate-bounce duration-1000" />
          <Compass className="absolute bottom-16 left-[5%] h-12 w-12 text-purple-400 opacity-30 animate-pulse" />
          <MapPin className="absolute top-20 right-[12%] h-10 w-10 text-orange-300 opacity-40 animate-bounce duration-700" />
          <Sun className="absolute bottom-10 right-[6%] h-16 w-16 text-amber-300 opacity-20 animate-spin-slow" />
        </div>

        <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)]">
            <div className="space-y-6 text-center lg:text-left">
              <span className="inline-flex items-center gap-2 rounded-full border border-purple-400/30 bg-purple-800/60 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-orange-300 backdrop-blur-md">
                <Sparkles className="h-4 w-4" /> {t("hero.badge")}
              </span>

              <h1 className="text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl md:text-6xl lg:leading-tight">
                {t("hero.title1")} <br />
                <span className="bg-gradient-to-r from-orange-300 to-amber-200 bg-clip-text text-transparent">
                  {t("hero.titleGradient")}
                </span>
              </h1>

              <p className="mx-auto max-w-lg text-base leading-relaxed text-purple-100 lg:mx-0 sm:text-lg">
                {t("hero.description")}
              </p>

              <div className="pt-2">
                <Link
                  href="/tienda"
                  className="inline-flex items-center justify-center gap-3 rounded-full bg-orange-500 px-8 py-4 text-base font-bold text-white shadow-lg shadow-orange-500/30 transition-all duration-300 hover:scale-105 hover:bg-orange-600 hover:shadow-orange-500/50 active:scale-95"
                >
                  <span>{t("hero.cta")}</span>
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </div>
            </div>

            <div className="relative mx-auto w-full max-w-lg lg:max-w-none">
              <div className="absolute -inset-1.5 rounded-3xl bg-gradient-to-r from-orange-400 to-purple-400 opacity-40 blur-lg transition duration-1000 group-hover:opacity-100"></div>
              <img
                src={getOptimizedUrl("https://images.unsplash.com/photo-1676381517063-dc644ff4406b?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")}
                alt={t("hero.imgAlt")}
                className="relative w-full rounded-2xl object-cover shadow-2xl border-4 border-white/20"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Divisor Blanco */}
      <div className="h-2 w-full bg-white"></div>

      {/* SECCIÓN 2: CREAMOS EXPERIENCIAS (Fondo Blanco) */}
      <section className="relative bg-white py-20 lg:py-28 text-slate-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 rounded-full bg-orange-100 px-3.5 py-1 text-xs font-bold text-orange-600">
                <HeartHandshake className="h-4 w-4" /> {t("about.badge")}
              </div>

              <h2 className="text-3xl font-extrabold tracking-tight text-purple-950 sm:text-4xl lg:text-5xl">
                {t("about.titleLine1")} <br className="hidden sm:inline" />
                <span className="text-orange-500">{t("about.titleHighlight")}</span>
              </h2>

              <div className="space-y-4 text-base leading-relaxed text-slate-600">
                <p className="rounded-xl border-l-4 border-purple-600 bg-purple-50/50 p-4">
                  {t("about.p1")}
                </p>
                <p>
                  {t("about.p2")}
                </p>
                <p className="font-medium text-purple-900">
                  {t("about.p3")}
                </p>
              </div>
            </div>

            <div className="grid gap-6 sm:grid-cols-2">
              <div
                className="group relative h-64 overflow-hidden rounded-3xl bg-cover bg-center shadow-xl transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl sm:mt-8 border-4 border-slate-100"
                style={{
                  backgroundImage: bgImg(
                    `https://images.unsplash.com/photo-1568430462989-44163eb1752f?q=80&w=1173&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`,
                    700,
                  ),
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-purple-900/60 via-transparent to-transparent transition-opacity group-hover:opacity-80" />
              </div>

              <div
                className="group relative h-64 overflow-hidden rounded-3xl bg-cover bg-center shadow-xl transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl border-4 border-slate-100"
                style={{ backgroundImage: bgImg(`https://images.unsplash.com/photo-1700067985806-e4cc11321031?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`, 700) }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-orange-900/60 via-transparent to-transparent transition-opacity group-hover:opacity-80" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Divisor Blanco */}
      <div className="h-2 w-full bg-white"></div>

      {/* SECCIÓN 3: FEATURES (Fondo Naranja Expressive) */}
      <section className="relative overflow-hidden bg-orange-500 py-20 text-white lg:py-28">
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <Camera className="absolute top-8 right-[8%] h-14 w-14 text-orange-300 opacity-30 animate-pulse" />
          <Zap className="absolute bottom-12 left-[10%] h-10 w-10 text-amber-200 opacity-40 animate-bounce duration-1000" />
        </div>

        <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl">
              {t("features.titleLine1")} <br />
              <span className="text-purple-900">{t("features.titleHighlight")}</span>
            </h2>
          </div>

          <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {FEATURES.map((f) => {
              const IconComponent = f.icon;

              return (
                <div
                  key={f.title}
                  className="group relative rounded-3xl border border-white/20 bg-white/10 p-8 backdrop-blur-md transition-all duration-500 hover:-translate-y-2 hover:bg-white hover:text-slate-800 hover:shadow-2xl"
                >
                  <div className="flex items-center gap-4">
                    <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-white/20 p-2 shadow-inner transition-colors group-hover:bg-purple-100">
                      {/* Renderizado dinámico del componente Icono */}
                      <IconComponent className="h-8 w-8 text-white transition-colors group-hover:text-purple-900" />
                    </div>
                    <h3 className="text-xl font-bold leading-snug text-white transition-colors group-hover:text-purple-900">
                      {f.title}
                    </h3>
                  </div>
                  <p className="mt-4 text-sm leading-relaxed text-orange-100 transition-colors group-hover:text-slate-600">
                    {f.text}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Divisor Blanco */}
      <div className="h-2 w-full bg-white"></div>

      {/* SECCIÓN 4: POR QUÉ CONFIAR (Fondo Blanco) */}
      <section className="relative bg-white py-20 lg:py-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="space-y-6">
              <span className="inline-flex items-center gap-2 rounded-full bg-purple-100 px-3.5 py-1 text-xs font-bold text-purple-700">
                <Award className="h-4 w-4" /> {t("whyTrust.badge")}
              </span>

              <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
                {t("whyTrust.titleLine1")} <br />
                <span className="text-purple-700">{t("whyTrust.titleHighlight")}</span>
              </h2>

              <p className="max-w-lg text-base leading-relaxed text-slate-600 sm:text-lg">
                {t("whyTrust.description")}
              </p>

              <div className="pt-4">
                <Link
                  href="/quienes-somos"
                  className="inline-flex items-center gap-2 rounded-full bg-purple-700 px-6 py-3.5 text-sm font-bold text-white transition-all hover:bg-orange-500 shadow-md"
                >
                  {t("whyTrust.cta")}
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-3xl bg-purple-50 p-6 shadow-xl border-4 border-slate-100">
              <img
                src={img(`https://images.unsplash.com/photo-1465256410760-10640339c72c?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`, 900)}
                alt={t("whyTrust.imgAlt")}
                className="w-full object-contain rounded-xl transition-transform duration-700 hover:scale-105"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Divisor Blanco */}
      <div className="h-2 w-full bg-white"></div>

      {/* SECCIÓN 5: PROCESO (Fondo Morado Profundo) */}
      <section className="relative overflow-hidden bg-purple-900 py-20 text-white lg:py-28">
        <div className="pointer-events-none absolute inset-0 opacity-20">
          <Layers className="absolute top-10 right-10 h-32 w-32 text-orange-400 animate-pulse" />
        </div>

        <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full bg-orange-500/20 px-3.5 py-1 text-xs font-bold text-orange-300">
              <Calendar className="h-4 w-4" /> {t("steps.badge")}
            </span>
            <h2 className="mt-4 text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl">
              {t("steps.titleLine1")} <span className="text-orange-400">{t("steps.titleHighlight")}</span>
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-purple-200 sm:text-base">
              {t("steps.description")}
            </p>
          </div>

          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {STEPS.map((s, i) => {
              const IconComponent = s.icon;

              return (
                <div
                  key={s.title}
                  className="group relative flex flex-col justify-between rounded-3xl border border-purple-700/50 bg-purple-800/40 p-6 backdrop-blur-md transition-all duration-500 hover:-translate-y-2 hover:border-orange-400 hover:bg-purple-800/80"
                >
                  <div>
                    <div className="flex items-center justify-between">
                      <span className="flex h-8 w-8 items-center justify-center rounded-full bg-orange-500 text-xs font-black text-white shadow-md">
                        0{i + 1}
                      </span>
                      <Sparkles className="h-4 w-4 text-purple-400 opacity-0 transition-opacity group-hover:opacity-100" />
                    </div>

                    {/* Icono renderizado dinámicamente con efecto zoom al hacer hover */}
                    <div className="my-6 flex h-24 items-center justify-center">
                      <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-purple-900/40 p-3 text-orange-300 transition-transform duration-300 group-hover:scale-110 group-hover:text-orange-400">
                        <IconComponent className="h-10 w-10" strokeWidth={1.75} />
                      </div>
                    </div>

                    <h3 className="text-center text-xl font-bold text-orange-300">{s.title}</h3>
                    <p className="mt-3 text-center text-xs leading-relaxed text-purple-100">
                      {s.text}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-14 text-center">
            <Link
              href="/cotiza-tu-experiencia"
              className="inline-flex items-center gap-3 rounded-full bg-orange-500 px-8 py-4 text-base font-bold text-white shadow-lg transition-all hover:bg-orange-600 hover:scale-105"
            >
              <span>{t("steps.cta")}</span>
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Divisor Blanco */}
      <div className="h-2 w-full bg-white"></div>

      {/* SECCIÓN 6: CONDICIONES (Fondo Blanco con Tarjetas Morado/Naranja) */}
      <section className="bg-white py-20 lg:py-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2">
            {/* Condiciones Positivas */}
            <div className="rounded-3xl border border-purple-100 bg-purple-50/60 p-8 shadow-sm">
              <h2 className="text-2xl font-extrabold tracking-tight text-purple-950 sm:text-3xl">
                {t("conditions.titleLine1")} <br />
                <span className="text-purple-600">{t("conditions.titleHighlight")}</span>
              </h2>
              <p className="mt-3 text-sm text-slate-600">
                {t("conditions.subtitle")}
              </p>

              <ul className="mt-6 space-y-4">
                {CONDITIONS.map((c) => (
                  <li key={c} className="flex items-start gap-3.5">
                    <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-purple-600 text-white shadow-sm">
                      <Check className="h-4 w-4" strokeWidth={3} />
                    </span>
                    <span className="text-sm font-medium leading-relaxed text-slate-700">{c}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* No Incluido */}
            <div className="rounded-3xl border border-orange-100 bg-orange-50/60 p-8 shadow-sm">
              <h2 className="text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl">
                {t("conditions.notIncludedTitleLine1")} <span className="text-orange-600">{t("conditions.notIncludedTitleHighlight")}</span>
              </h2>
              <p className="mt-3 text-sm text-slate-600">
                {t("conditions.notIncludedSubtitle")}
              </p>

              <ul className="mt-6 space-y-4">
                {NOT_INCLUDED.map((c) => (
                  <li key={c} className="flex items-start gap-3.5">
                    <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-orange-100 text-orange-600 border border-orange-300">
                      <Ban className="h-3.5 w-3.5" strokeWidth={2.8} />
                    </span>
                    <span className="text-sm font-medium leading-relaxed text-slate-700">{c}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Divisor Blanco */}
      <div className="h-2 w-full bg-white"></div>

      {/* SECCIÓN 7: CATEGORÍAS (Fondo Naranja Suave) */}
      <section className="relative bg-orange-50 py-20 lg:py-28 text-slate-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-extrabold tracking-tight text-purple-950 sm:text-4xl lg:text-5xl">
              {t("categories.titleLine1")} <span className="text-orange-600">{t("categories.titleHighlight")}</span>
            </h2>
            <p className="mt-4 text-base leading-relaxed text-slate-600">
              {t("categories.description")}
            </p>
          </div>

          <div className="mt-14 grid items-center gap-12 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)]">
            <div className="hidden rounded-3xl bg-white p-6 shadow-xl lg:block border border-orange-100">
              <img
                src={img(`https://images.unsplash.com/photo-1542835435-4fa357baa00b?q=80&w=791&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`, 680)}
                alt={t("categories.imgAlt")}
                className="w-full rounded-xl object-contain"
              />
            </div>

            <div className="grid gap-6 sm:grid-cols-2">
              {CATEGORIES.map((c) => {
                const IconComponent = c.icon;

                return (
                  <Link
                    key={c.title}
                    href={c.href}
                    className="group flex flex-col gap-4 rounded-2xl border border-orange-200/60 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-orange-400 hover:shadow-xl"
                  >
                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-purple-50 text-purple-700 transition-colors duration-300 group-hover:bg-orange-500 group-hover:text-white">
                      <IconComponent className="h-7 w-7 transition-transform duration-300 group-hover:scale-110" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-purple-950 transition-colors group-hover:text-orange-600">
                        {c.title}
                      </h3>
                      <p className="mt-2 text-xs leading-relaxed text-slate-600">{c.text}</p>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Divisor Blanco */}
      <div className="h-2 w-full bg-white"></div>

      {/* SECCIÓN 8: AVISO + CONTACTO (Fondo Blanco) */}
      <section className="bg-white py-20 lg:py-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl rounded-3xl border border-purple-200 bg-purple-50/80 p-8 text-center shadow-sm">
            <Info className="mx-auto h-8 w-8 text-purple-600" />
            <p className="mt-4 text-sm font-semibold leading-relaxed text-purple-950 sm:text-base">
              {t("notice.p1")}
            </p>
            <p className="mt-2 text-sm font-medium leading-relaxed text-slate-600">
              {t("notice.p2")}
            </p>
          </div>

          <div className="mt-16">
            <ContactForm />
          </div>
        </div>
      </section>
    </div>
  );
}