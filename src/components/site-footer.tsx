"use client";

import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";
import { ShieldCheck, FileText, RefreshCw, Compass, Copyright } from "lucide-react";

export function SiteFooter() {
  const t = useTranslations("footer");

  const LINKS = [
    { 
      href: "/politica-privacidad", 
      label: t("links.privacyPolicy"),
      icon: ShieldCheck 
    },
    { 
      href: "/terminos-y-devoluciones", 
      label: t("links.termsAndReturns"),
      icon: FileText 
    },
    { 
      href: "/refund_returns", 
      label: t("links.refundPolicy"),
      icon: RefreshCw 
    },
  ];

  return (
    <footer className="relative overflow-hidden bg-purple-950 text-white border-t-2 border-orange-500">
      {/* Resplandor decorativo de fondo */}
      <div className="pointer-events-none absolute -left-20 -top-20 h-64 w-64 rounded-full bg-purple-700/20 blur-3xl"></div>
      <div className="pointer-events-none absolute -right-20 -bottom-20 h-64 w-64 rounded-full bg-orange-500/10 blur-3xl"></div>

      <div className="relative mx-auto w-full max-w-7xl px-6 py-12 lg:px-10">
        <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between border-b border-purple-800/60 pb-8">
          {/* Identidad de Marca Breve / Ícono */}
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-orange-500 to-amber-500 text-white shadow-md shadow-orange-500/20">
              <Compass className="h-6 w-6 animate-spin-slow" />
            </div>
            <span className="text-lg font-black tracking-tight bg-gradient-to-r from-orange-300 to-amber-100 bg-clip-text text-transparent">
              Mundra
            </span>
          </div>

          {/* Enlaces Legales con Íconos */}
          <ul className="flex flex-col flex-wrap gap-4 text-xs font-semibold sm:flex-row sm:items-center sm:gap-6 lg:gap-8">
            {LINKS.map((l) => {
              const Icon = l.icon;
              return (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="group flex items-center gap-2 text-purple-200 transition-colors duration-200 hover:text-orange-300"
                  >
                    <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-purple-900/60 text-orange-400 group-hover:bg-orange-500 group-hover:text-white transition-colors duration-200">
                      <Icon className="h-3.5 w-3.5" />
                    </div>
                    <span className="underline-offset-4 group-hover:underline">
                      {l.label}
                    </span>
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* Métodos de Pago */}
          <div className="flex items-center gap-3 rounded-2xl border border-purple-800/50 bg-purple-900/30 px-4 py-2.5 backdrop-blur-sm">
            <span className="text-[11px] font-bold uppercase tracking-wider text-purple-300/80">
              {t("securePayments")}
            </span>
            <div className="h-4 w-px bg-purple-800"></div>
            <img
              src={"/cards.png"}
              alt={t("paymentMethodsAlt")}
              className="h-6 w-auto object-contain brightness-110 contrast-125"
            />
          </div>
        </div>

        {/* Copyright y Leyenda Inferior */}
        <div className="mt-8 flex flex-col items-center justify-between gap-4 text-center text-xs font-medium text-purple-300/80 sm:flex-row sm:text-left">
          <div className="flex items-center gap-1.5">
            <Copyright className="h-3.5 w-3.5 text-orange-400" />
            <span>
              {t("copyright", { year: new Date().getFullYear() })}
            </span>
          </div>
          <p className="text-[11px] text-purple-400/70">
            {t("tagline")}
          </p>
        </div>
      </div>
    </footer>
  );
}