import type { Metadata } from "next";
import { useTranslations } from "next-intl";
import { getTranslations } from "next-intl/server";
import { ContactForm } from "@/components/contact-form";
import { Link } from "@/i18n/routing";
import { AdvancedContactForm } from "@/components/contact-form-full";
import {
  Compass,
  MapPin,
  Sparkles,
  Zap,
  ShieldCheck,
  CreditCard,
  Send,
  Plane,
  Luggage,
  CalendarCheck,
  ArrowRight,
} from "lucide-react";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("cotizaPage.metadata");

  return {
    title: t("title"),
    description: t("description"),
  };
}

export default function CotizaPage() {
  const t = useTranslations("cotizaPage");

  return (
    <div className="w-full bg-slate-50 text-slate-800 antialiased selection:bg-purple-700 selection:text-white overflow-hidden">
      {/* SECCIÓN 1: HERO PRINCIPAL (Fondo Naranja Vivos con Íconos Flotantes) */}
      <section className="relative overflow-hidden bg-gradient-to-br from-orange-500 via-orange-600 to-amber-600 py-24 text-white lg:py-32">
        {/* Íconos Flotantes Animados */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <Plane className="absolute top-12 left-[8%] h-12 w-12 text-amber-200/40 animate-bounce duration-1000" />
          <Compass className="absolute top-1/3 right-[10%] h-16 w-16 text-white/30 animate-spin-slow" />
          <MapPin className="absolute bottom-12 left-[15%] h-10 w-10 text-purple-900/40 animate-pulse" />
          <Sparkles className="absolute top-16 right-[25%] h-8 w-8 text-amber-100/50 animate-pulse" />
          <Luggage className="absolute bottom-16 right-[18%] h-14 w-14 text-white/20 animate-bounce duration-700" />
        </div>

        {/* Círculos con gradiente decorativos */}
        <div className="pointer-events-none absolute -top-24 -left-24 h-96 w-96 rounded-full bg-purple-900/20 blur-3xl"></div>
        <div className="pointer-events-none absolute -bottom-24 -right-24 h-96 w-96 rounded-full bg-amber-300/20 blur-3xl"></div>

        <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl space-y-6 text-center animate-fadeUp">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-white backdrop-blur-md shadow-sm">
              <Sparkles className="h-4 w-4 text-purple-900" /> {t("hero.badge")}
            </span>

            <h1 className="text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl md:text-6xl text-white drop-shadow-sm">
              {t("hero.titleLine1")} <br className="hidden sm:inline" />
              <span className="bg-gradient-to-r from-purple-900 via-purple-950 to-purple-900 bg-clip-text text-transparent drop-shadow-none">
                {t("hero.titleLine2")}
              </span>
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-orange-50 sm:text-lg">
              {t("hero.description")}
            </p>
          </div>
        </div>
      </section>

      {/* Divisor Púrpura Nítido */}
      <div className="h-2 w-full bg-purple-950"></div>

      {/* SECCIÓN 2: FILOSOFÍA DE DISEÑO (Fondo Blanco con Acentos Naranjas y Púrpuras) */}
      <section className="relative bg-white py-20 text-slate-800 lg:py-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[1fr,minmax(0,0.9fr)] lg:items-center">
            <div className="space-y-6 animate-fadeRight">
              <div className="inline-flex items-center gap-2 rounded-full bg-orange-100 px-3.5 py-1.5 text-xs font-bold text-orange-600">
                <Zap className="h-4 w-4" /> {t("philosophy.badge")}
              </div>

              <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
                {t("philosophy.titleLine1")}{" "}
                <span className="bg-gradient-to-r from-orange-500 to-amber-500 bg-clip-text text-transparent">
                  {t("philosophy.titleLine2")}
                </span>
              </h2>

              <p className="text-base leading-relaxed text-slate-600">
                {t("philosophy.description")}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="flex items-start gap-3 rounded-2xl border border-orange-100 bg-orange-50/50 p-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-orange-500 text-white shadow-md">
                    <ShieldCheck className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">{t("philosophy.features.securityTitle")}</h4>
                    <p className="text-xs text-slate-500 mt-0.5">{t("philosophy.features.securityDesc")}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 rounded-2xl border border-purple-100 bg-purple-50/50 p-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-purple-900 text-white shadow-md">
                    <CalendarCheck className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">{t("philosophy.features.flexibilityTitle")}</h4>
                    <p className="text-xs text-slate-500 mt-0.5">{t("philosophy.features.flexibilityDesc")}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Tarjeta Visual Destacada en la Derecha */}
            <div className="relative animate-fadeUp">
              <div className="absolute -inset-2 rounded-3xl bg-gradient-to-tr from-orange-500 to-amber-400 opacity-30 blur-xl"></div>
              <div className="relative rounded-3xl border border-orange-200 bg-gradient-to-br from-orange-500 to-orange-600 p-8 text-white shadow-2xl">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/20 backdrop-blur-md text-white mb-6">
                  <Send className="h-7 w-7" />
                </div>
                <h3 className="text-2xl font-extrabold text-white">{t("howItWorks.title")}</h3>
                <ul className="mt-6 space-y-4 text-sm text-orange-50">
                  <li className="flex items-start gap-3">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-purple-950 text-xs font-bold text-white">1</span>
                    <span>{t("howItWorks.step1")}</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-purple-950 text-xs font-bold text-white">2</span>
                    <span>{t("howItWorks.step2")}</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-purple-950 text-xs font-bold text-white">3</span>
                    <span>{t("howItWorks.step3")}</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Divisor Naranja */}
      <div className="h-2 w-full bg-orange-500"></div>

      {/* SECCIÓN 3: FORMULARIO AVANZADO (AdvancedContactForm) */}
      <section className="relative bg-orange-500 py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AdvancedContactForm />
        </div>
      </section>

      {/* SECCIÓN 4: FINALIZACIÓN DE RESERVA (Fondo Morado Oscuro para Contraste Potente) */}
      <section className="relative overflow-hidden bg-purple-950 py-20 text-white lg:py-28">
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <CreditCard className="absolute top-10 right-10 h-24 w-24 text-orange-500/10 animate-pulse" />
          <Sparkles className="absolute bottom-10 left-10 h-20 w-20 text-purple-400/20 animate-spin-slow" />
        </div>

        <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl rounded-3xl border border-purple-800/60 bg-purple-900/40 p-8 md:p-12 backdrop-blur-md shadow-2xl text-center space-y-8 animate-fadeUp">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-tr from-orange-500 to-amber-500 text-white shadow-lg shadow-orange-500/30">
              <CreditCard className="h-8 w-8" />
            </div>

            <div className="space-y-4">
              <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl text-white">
                {t("checkout.titleLine1")}{" "}
                <span className="bg-gradient-to-r from-orange-400 to-amber-200 bg-clip-text text-transparent">
                  {t("checkout.titleLine2")}
                </span>
              </h2>

              <p className="mx-auto max-w-2xl text-sm leading-relaxed text-purple-200 sm:text-base">
                {t("checkout.description")}
              </p>
            </div>

            <div className="pt-2">
              <Link
                href="/producto/tour-personalizado"
                className="inline-flex items-center justify-center gap-3 rounded-full bg-gradient-to-r from-orange-500 to-amber-500 px-8 py-4 text-base font-bold text-white shadow-xl shadow-orange-500/30 transition-all duration-300 hover:scale-105 hover:bg-gradient-to-r hover:from-orange-600 hover:to-amber-600 hover:shadow-orange-500/50 active:scale-95"
              >
                <span>{t("checkout.button")}</span>
                <ArrowRight className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Divisor Naranja */}
      <div className="h-2 w-full bg-orange-500"></div>

      {/* SECCIÓN 5: FORMULARIO BASE (ContactForm) */}
      <section className="bg-white py-20 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <ContactForm />
        </div>
      </section>
    </div>
  );
}