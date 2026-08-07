"use client";

import Link from "next/link";
import { ASSETS, bgImg, img } from "@/lib/img";
import React, { useState } from "react";
import { useTranslations } from "next-intl";
import {
  ChevronLeft,
  ChevronRight,
  Compass,
  Target,
  Award,
  BookOpenText,
  MapPin,
  Microscope,
  Palette,
  ShieldCheck,
  Sparkles,
  Zap,
  Map,
} from "lucide-react";
import { ContactForm } from "@/components/contact-form";

export default function QuienesSomosPage() {
  const t = useTranslations("aboutUs");
  const [currentSlide, setCurrentSlide] = useState(0);

  // Mapeo dinámico de Íconos para la sección de Misión, Visión y Objetivos
  const slideIcons = [Compass, Target, Award];
  const objectiveIcons = [Zap, Map, ShieldCheck, BookOpenText, MapPin, Sparkles];

  // Recuperación de la lista de Objetivos desde las traducciones
  const objectivesListTranslated = t.raw("slides.objectives.list") as string[];

  const SLIDES = [
    {
      id: "mision",
      category: t("slides.mission.category"),
      icon: slideIcons[0],
      quote: t("slides.mission.quote"),
      description: t("slides.mission.description"),
    },
    {
      id: "vision",
      category: t("slides.vision.category"),
      icon: slideIcons[1],
      quote: t("slides.vision.quote"),
      description: t("slides.vision.description"),
    },
    {
      id: "objetivos",
      category: t("slides.objectives.category"),
      icon: slideIcons[2],
      quote: t("slides.objectives.quote"),
      objectivesList: objectivesListTranslated.map((text, idx) => ({
        text,
        icon: objectiveIcons[idx % objectiveIcons.length],
      })),
    },
  ];

  // Mapeo dinámico de Valores/Pilares desde las traducciones
  const valueIcons = [Microscope, Map, Zap, Sparkles, ShieldCheck];
  const rawValues = t.raw("values.items") as Array<{ title: string; text: string }>;

  const VALUES = rawValues.map((v, idx) => ({
    icon: valueIcons[idx % valueIcons.length],
    title: v.title,
    text: v.text,
  }));

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? SLIDES.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === SLIDES.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="w-full bg-white text-slate-800 antialiased selection:bg-orange-500 selection:text-white">
      {/* SECCIÓN 1: HERO */}
      <section className="relative overflow-hidden bg-purple-700 py-24 text-white lg:py-32">
        <div
          className="absolute inset-0 opacity-[0.25] mix-blend-overlay bg-cover bg-center transition-transform duration-10000 hover:scale-110"
          style={{
            backgroundImage: bgImg(
              `https://images.unsplash.com/photo-1605216663980-b7ca6e9f2451?q=80&w=807&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`,
              1500
            ),
          }}
        />

        {/* Íconos Flotantes decorativos */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <Compass className="absolute top-12 left-[10%] h-10 w-10 text-orange-300 opacity-50 animate-pulse" />
          <MapPin className="absolute bottom-16 right-[15%] h-14 w-14 text-purple-300 opacity-40 animate-bounce duration-1000" />
          <Palette className="absolute top-1/4 right-[5%] h-12 w-12 text-amber-200 opacity-30 animate-spin-slow" />
        </div>

        <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl space-y-6 text-center animate-fadeUp">
            <span className="inline-flex items-center gap-2 rounded-full border border-purple-400/30 bg-purple-800/60 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-orange-300 backdrop-blur-md">
              <Award className="h-4 w-4" /> {t("hero.badge")}
            </span>

            <h1 className="text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl md:text-6xl">
              <span className="bg-gradient-to-r from-orange-300 to-amber-100 bg-clip-text text-transparent">
                {t("hero.titleHighlight")}
              </span>{" "}
              <br className="hidden sm:inline" />
              {t("hero.titleRest")}
            </h1>

            <p className="mx-auto mt-7 max-w-2xl text-base leading-relaxed text-purple-100 sm:text-lg">
              {t("hero.description")}
            </p>
          </div>
        </div>
      </section>

      {/* Divisor Blanco */}
      <div className="h-2 w-full bg-white"></div>

      {/* SECCIÓN 2: ARQUITECTOS */}
      <section className="relative bg-white py-20 lg:py-28 text-slate-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[1fr,minmax(0,1fr)] lg:items-center">
            <div className="space-y-6 animate-fadeRight">
              <div className="inline-flex items-center gap-2 rounded-full bg-orange-100 px-3.5 py-1 text-xs font-bold text-orange-600">
                <MapPin className="h-4 w-4" /> {t("architects.badge")}
              </div>

              <h2 className="text-3xl font-extrabold tracking-tight text-purple-950 sm:text-4xl lg:text-5xl">
                {t("architects.titleStart")}{" "}
                <br className="hidden sm:inline" />
                <span className="text-orange-500">{t("architects.titleHighlight")}</span>
              </h2>

              <div className="space-y-4 text-base leading-relaxed text-slate-600">
                <p className="rounded-xl border-l-4 border-purple-600 bg-purple-50/50 p-4">
                  {t("architects.paragraph1")}
                </p>
                <p>{t("architects.paragraph2")}</p>
                <p className="font-medium text-purple-900">
                  {t("architects.paragraph3")}
                </p>
              </div>
            </div>

            <div className="relative animate-fadeUp">
              <div className="absolute -inset-1.5 rounded-3xl bg-gradient-to-r from-orange-400 to-purple-400 opacity-40 blur-lg transition duration-1000 group-hover:opacity-100"></div>
              <img
                src={img(
                  `https://images.unsplash.com/photo-1585464231875-d9ef1f5ad396?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`,
                  900
                )}
                alt={t("architects.imageAlt")}
                className="relative w-full rounded-2xl border-4 border-white/20 object-cover shadow-2xl shadow-purple-950/10"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Divisor Morado */}
      <div className="h-2 w-full bg-purple-600"></div>

      {/* SECCIÓN 3: LO QUE NOS DEFINE */}
      <section className="relative overflow-hidden bg-purple-600 py-20 text-white lg:py-28">
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <Zap className="absolute top-10 right-10 h-16 w-16 text-orange-400 opacity-40 animate-pulse" />
          <Microscope className="absolute bottom-10 left-10 h-20 w-20 text-purple-300 opacity-30 animate-spin-slow" />
        </div>

        <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center mb-16 animate-fadeUp">
            <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl">
              {t("values.titleStart")}{" "}
              <span className="text-orange-400">{t("values.titleHighlight")}</span>
            </h2>
            <p className="mt-4 text-base leading-relaxed text-purple-100 max-w-xl mx-auto">
              {t("values.subtitle")}
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {VALUES.map((v, i) => {
              const ValueIcon = v.icon;
              return (
                <div
                  key={v.title}
                  className="group relative rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-md transition-all duration-500 hover:-translate-y-2 hover:bg-orange-500 hover:text-white hover:shadow-2xl hover:shadow-orange-950/30"
                >
                  <div className="flex items-center gap-4">
                    <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-orange-500 p-3 shadow-inner group-hover:bg-white/20 transition-colors">
                      <ValueIcon className="h-full w-full object-contain text-white" />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-sm font-bold tracking-widest text-orange-300 group-hover:text-amber-100 transition-colors">
                        0{i + 1}
                      </span>
                      <h3 className="text-xl font-bold leading-tight group-hover:text-purple-950 text-white transition-colors">
                        {v.title}
                      </h3>
                    </div>
                  </div>
                  <p className="mt-6 text-sm leading-relaxed text-purple-100 group-hover:text-white/90 transition-colors">
                    {v.text}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Divisor Naranja */}
      <div className="h-2 w-full bg-orange-500"></div>

      {/* SECCIÓN 4: FILOSOFÍA */}
      <section className="relative overflow-hidden bg-orange-50 py-20 text-slate-900 lg:py-28">
        <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header del Carrusel */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6 animate-fadeLeft">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-purple-100 px-3.5 py-1 text-xs font-bold text-purple-700">
                <Compass className="h-4 w-4" /> {t("philosophy.badge")}
              </div>
              <h2 className="text-3xl md:text-5xl font-extrabold text-purple-950 mt-3 tracking-tight">
                {t("philosophy.title")}
              </h2>
            </div>

            {/* Controles del Slider */}
            <div className="flex items-center gap-3">
              <span className="text-sm font-semibold text-slate-600 mr-2">
                0{currentSlide + 1} / 0{SLIDES.length}
              </span>
              <button
                onClick={prevSlide}
                aria-label={t("philosophy.prevSlide")}
                className="p-3.5 rounded-full border border-purple-200 bg-white text-purple-700 hover:bg-purple-700 hover:text-white transition-all shadow-md active:scale-95 hover:shadow-purple-700/20"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={nextSlide}
                aria-label={t("philosophy.nextSlide")}
                className="p-3.5 rounded-full border border-purple-200 bg-white text-purple-700 hover:bg-purple-700 hover:text-white transition-all shadow-md active:scale-95 hover:shadow-purple-700/20"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Ventana Viewport del Carrusel */}
          <div className="relative overflow-hidden rounded-3xl border border-purple-100 bg-white shadow-xl shadow-purple-950/5 animate-fadeUp">
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {SLIDES.map((slide) => {
                const IconComponent = slide.icon;
                return (
                  <div
                    key={slide.id}
                    className="w-full shrink-0 p-8 md:p-12 lg:p-16 min-h-[400px] flex flex-col justify-between"
                  >
                    <div className="space-y-6">
                      <div className="flex items-center gap-4">
                        <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-purple-50 p-3 text-purple-700 border-2 border-purple-100">
                          <IconComponent className="w-full h-full object-contain" strokeWidth={2} />
                        </div>
                        <h3 className="text-2xl md:text-3xl font-extrabold text-purple-950 tracking-tight">
                          {slide.category}
                        </h3>
                      </div>

                      <blockquote
                        className="text-lg md:text-xl font-semibold italic text-slate-800 leading-relaxed border-l-4 border-orange-400 pl-6 bg-orange-50/60 p-5 rounded-r-xl"
                        style={{ fontFamily: "var(--font-display)" }}
                      >
                        {slide.quote}
                      </blockquote>

                      {slide.description && (
                        <p className="text-sm md:text-base text-slate-600 leading-relaxed max-w-4xl">
                          {slide.description}
                        </p>
                      )}

                      {slide.objectivesList && (
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 pt-4">
                          {slide.objectivesList.map((item, idx) => {
                            const ItemIcon = item.icon;
                            return (
                              <div
                                key={idx}
                                className="flex items-center gap-3.5 p-4 rounded-xl border border-purple-100 bg-purple-50 shadow-inner group transition-colors hover:border-orange-200 hover:bg-orange-50"
                              >
                                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-white text-purple-600 border border-purple-200 group-hover:border-orange-300 group-hover:text-orange-600 transition-colors shadow-sm">
                                  <ItemIcon className="h-5 w-5" />
                                </div>
                                <span className="text-sm font-semibold text-purple-950 group-hover:text-orange-950 transition-colors">
                                  {item.text}
                                </span>
                              </div>
                            );
                          })}
                        </div>
                      )}
                    </div>

                    {/* Barra de Progreso Inferior */}
                    <div className="w-full bg-slate-100 h-1 rounded-full mt-12 overflow-hidden shadow-inner">
                      <div
                        className="bg-purple-600 h-full transition-all duration-300 rounded-full"
                        style={{
                          width: `${((currentSlide + 1) / SLIDES.length) * 100}%`,
                        }}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Divisor Blanco */}
      <div className="h-2 w-full bg-white"></div>

      {/* SECCIÓN 5: FORMULARIO */}
      <section className="bg-white py-20 lg:py-28 text-slate-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto rounded-3xl border border-orange-200 bg-white p-8 md:p-12 shadow-2xl shadow-orange-950/10 relative animate-fadeUp">
            <Zap className="absolute -top-7 -left-7 h-14 w-14 text-purple-600 animate-bounce duration-1000" />

            <div className="text-center mb-10">
              <h2 className="text-3xl font-extrabold tracking-tight text-purple-950 sm:text-4xl">
                {t("contactSection.titleStart")}{" "}
                <span className="text-orange-500">{t("contactSection.titleHighlight")}</span>?
              </h2>
              <p className="mt-4 text-sm font-medium leading-relaxed text-slate-600 max-w-lg mx-auto">
                {t("contactSection.subtitle")}
              </p>
            </div>

            <div className="pt-2">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}