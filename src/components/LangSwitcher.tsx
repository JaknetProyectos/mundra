"use client";

import { Loader2, Languages } from "lucide-react";
import { useLocaleContext } from "@/context/LangContext";

export default function LangSwitcher() {
  const { locale, switchLanguage, isPending } = useLocaleContext();

  const nextLang = locale === "es" ? "en" : "es";

  return (
    <button
      type="button"
      onClick={() => switchLanguage(nextLang)}
      disabled={isPending}
      aria-label="Cambiar idioma"
      className="
        group
        fixed
        bottom-6
        right-6
        z-50
        flex
        items-center
        gap-3
        rounded-full
        bg-gradient-to-r
        from-orange-600/90
        via-orange-500/90
        to-purple-600/90
        p-2.5
        pr-5
        text-white
        shadow-2xl
        shadow-orange-500/25
        border
        border-orange-400/40
        backdrop-blur-xl
        transition-all
        duration-300
        hover:scale-105
        hover:border-purple-400/60
        hover:shadow-purple-500/30
        active:scale-95
        disabled:cursor-not-allowed
        disabled:opacity-80
      "
    >
      {/* Círculo indicador grande con gradiente y efecto brillo */}
      <div className="relative flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-tr from-purple-700 via-orange-500 to-amber-400 text-white shadow-lg transition-transform duration-300 group-hover:rotate-12 group-hover:scale-110">
        {isPending ? (
          <Loader2 className="h-5 w-5 animate-spin text-white" />
        ) : (
          <Languages className="h-5 w-5 text-white" />
        )}
      </div>

      {/* Etiqueta de idioma más grande y colorida */}
      <div className="flex items-center gap-2 text-sm font-black tracking-widest">
        <span className="text-orange-200 transition-colors group-hover:text-white">
          {locale.toUpperCase()}
        </span>
        <span className="text-purple-300 font-light">/</span>
        <span className="text-purple-200 group-hover:text-purple-100">
          {nextLang.toUpperCase()}
        </span>
      </div>
    </button>
  );
}