"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";

import {
  ArrowRight,
  AlertCircle,
  Loader2,
  DollarSign,
  Check,
  FileText,
  Compass,
  MapPin,
  Sparkles,
  Ticket,
  Calendar,
  Plane,
  Receipt,
  ShieldCheck,
} from "lucide-react";

import { useCart } from "@/hooks/use-cart";
import { useTour } from "@/hooks/use-tour";

// Configuración de los íconos flotantes de fondo
const FLOATING_ICONS = [
  { Icon: Compass, top: "10%", left: "8%", size: 42, duration: 6, delay: 0 },
  { Icon: MapPin, top: "22%", right: "12%", size: 36, duration: 7, delay: 1 },
  { Icon: Sparkles, top: "45%", left: "5%", size: 48, duration: 8, delay: 0.5 },
  { Icon: Ticket, top: "65%", right: "8%", size: 40, duration: 6.5, delay: 1.5 },
  { Icon: Calendar, top: "80%", left: "12%", size: 38, duration: 7.5, delay: 2 },
  { Icon: Plane, top: "15%", right: "35%", size: 44, duration: 9, delay: 0.8 },
  { Icon: Receipt, top: "85%", right: "25%", size: 36, duration: 7, delay: 1.2 },
  { Icon: ShieldCheck, top: "50%", right: "3%", size: 32, duration: 6, delay: 2.2 },
];

export default function CustomProductPage() {
  const t = useTranslations("customPlan");
  const router = useRouter();
  const { addItem } = useCart();

  const [quoteNumber, setQuoteNumber] = useState("");
  const [totalPrice, setTotalPrice] = useState<number | "">("");
  const { loading, tour } = useTour("tour-personalizado");

  const [isAdding, setIsAdding] = useState(false);
  const [error, setError] = useState("");

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-orange-600">
        <Loader2 className="h-10 w-10 animate-spin text-white" />
      </div>
    );
  }

  if (!tour) {
    return null;
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    const finalPrice = Number(totalPrice) || 0;

    if (!quoteNumber.trim()) {
      setError(t("errors.quoteRequired"));
      return;
    }

    if (finalPrice <= 0) {
      setError(t("errors.invalidAmount"));
      return;
    }

    setIsAdding(true);

    const folioUpper = quoteNumber.trim().toUpperCase();

    // Nombre del producto concatenado con todos los datos
    const customProductName = `Custom - ${folioUpper}`;
    const customProductDescription = `Custom - ${folioUpper}`;

    addItem(
      {
        ...tour,
        price: Number(finalPrice),
        image: "/logo.png",
        title: customProductName,
        includes: [customProductDescription],
      },
      new Date(),
      1
    );

    setTimeout(() => {
      setIsAdding(false);
      router.push("/carrito");
    }, 1000);
  };

  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-orange-500 via-orange-600 to-amber-600 pb-32 text-white selection:bg-black/30 selection:text-white">
      {/* Halos radiales decorativos de fondo */}
      <div className="pointer-events-none absolute -left-20 -top-20 h-[500px] w-[500px] rounded-full bg-white/10 blur-[120px]" />
      <div className="pointer-events-none absolute -bottom-20 -right-20 h-[600px] w-[600px] rounded-full bg-amber-400/20 blur-[150px]" />
      <div className="pointer-events-none absolute left-1/2 top-1/3 h-[400px] w-[400px] -translate-x-1/2 rounded-full bg-orange-400/20 blur-[100px]" />

      {/* Íconos Flotantes Animados */}
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
        {FLOATING_ICONS.map((item, index) => {
          const IconComponent = item.Icon;
          return (
            <motion.div
              key={index}
              className="absolute text-white/20"
              style={{
                top: item.top,
                left: item.left,
                right: item.right,
              }}
              animate={{
                y: [0, -20, 0],
                rotate: [0, 8, -8, 0],
                scale: [1, 1.05, 1],
              }}
              transition={{
                duration: item.duration,
                repeat: Infinity,
                ease: "easeInOut",
                delay: item.delay,
              }}
            >
              <IconComponent size={item.size} strokeWidth={1.5} />
            </motion.div>
          );
        })}
      </div>

      <main className="relative z-10 mx-auto max-w-4xl px-4 pt-28 lg:pt-36">
        {/* Hero Section */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="relative overflow-hidden rounded-3xl border border-white/20 bg-white/10 p-8 shadow-2xl backdrop-blur-md lg:p-12"
        >
          <div className="relative z-10 mx-auto max-w-3xl text-center">
            <div className="space-y-4">
   
              <h1 className="font-display text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl drop-shadow-sm">
                {t("hero.titleHighlight")}{" "}
                <span className="text-amber-200">{t("hero.titleMain")}</span>
              </h1>

              <h2 className="pt-2 font-display text-lg font-medium text-orange-100 sm:text-xl">
                {t("hero.subtitle")}
              </h2>

              <p className="mx-auto max-w-xl text-sm leading-relaxed text-orange-100/90 sm:text-base">
                {t("hero.description")}
              </p>
            </div>
          </div>
        </motion.section>

        {/* Sección del Formulario */}
        <motion.section 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="mt-8"
        >
          <div className="relative overflow-hidden rounded-3xl border border-white/20 bg-zinc-950/90 p-6 shadow-2xl backdrop-blur-xl sm:p-10 lg:p-12">
            {/* Línea decorativa superior */}
            <div className="pointer-events-none absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r from-orange-400 via-amber-300 to-orange-500" />

            <div className="relative z-10 w-full">
              <div className="mb-8 text-center sm:text-left">
                <span className="mb-2 block text-xs font-extrabold uppercase tracking-widest text-orange-400">
                  {t("form.badge")}
                </span>

                <h2 className="font-display text-2xl font-extrabold tracking-tight text-white sm:text-3xl">
                  {t("form.title")}
                </h2>

                <p className="mt-2 text-sm leading-relaxed text-zinc-400">
                  {t("authorized.description")}
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                {error && (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex items-center gap-3 rounded-2xl border border-red-500/30 bg-red-950/50 p-4 text-sm font-medium text-red-300 backdrop-blur-md"
                  >
                    <AlertCircle className="h-5 w-5 shrink-0 text-red-400" />
                    <span>{error}</span>
                  </motion.div>
                )}

                {/* Input Folio/Cotización */}
                <div className="space-y-2">
                  <label
                    htmlFor="quoteNumber"
                    className="flex items-center gap-2 pl-1 text-[11px] font-bold uppercase tracking-widest text-zinc-300"
                  >
                    <FileText className="h-3.5 w-3.5 text-orange-400" />
                    {t("form.quoteLabel")}
                  </label>
                  <input
                    id="quoteNumber"
                    type="text"
                    required
                    placeholder={t("form.quotePlaceholder")}
                    value={quoteNumber}
                    onChange={(e) => setQuoteNumber(e.target.value)}
                    className="h-14 w-full rounded-2xl border border-zinc-800 bg-zinc-900/90 px-5 text-sm font-mono uppercase tracking-widest text-white outline-none transition-all placeholder:text-zinc-600 focus:border-orange-500 focus:bg-zinc-900 focus:ring-2 focus:ring-orange-500/20"
                  />
                </div>

                {/* Input Monto total */}
                <div className="space-y-2">
                  <label
                    htmlFor="totalPrice"
                    className="flex items-center gap-2 pl-1 text-[11px] font-bold uppercase tracking-widest text-zinc-300"
                  >
                    <DollarSign className="h-3.5 w-3.5 text-orange-400" />
                    {t("form.amountLabel")}
                  </label>

                  <div className="relative">
                    <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-5 text-orange-400">
                      <DollarSign className="h-5 w-5" />
                    </div>

                    <input
                      id="totalPrice"
                      type="number"
                      required
                      step="0.01"
                      min="0.01"
                      placeholder={t("form.amountPlaceholder")}
                      value={totalPrice}
                      onChange={(e) =>
                        setTotalPrice(
                          e.target.value !== "" ? Number(e.target.value) : ""
                        )
                      }
                      className="h-14 w-full rounded-2xl border border-zinc-800 bg-zinc-900/90 pl-12 pr-16 text-base font-semibold text-white outline-none transition-all placeholder:text-zinc-600 focus:border-orange-500 focus:bg-zinc-900 focus:ring-2 focus:ring-orange-500/20"
                    />

                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-5">
                      <span className="text-xs font-bold tracking-wider text-zinc-400">
                        MXN
                      </span>
                    </div>
                  </div>

                  <p className="pl-1 text-[11px] text-zinc-400">
                    {t("form.taxNote")}
                  </p>
                </div>

                {/* Botón de envío */}
                <div className="pt-4">
                  <motion.button
                    whileTap={!isAdding ? { scale: 0.98 } : {}}
                    whileHover={!isAdding ? { scale: 1.01 } : {}}
                    type="submit"
                    disabled={isAdding}
                    className={[
                      "group flex h-14 w-full items-center justify-center gap-2 rounded-2xl text-xs font-bold uppercase tracking-wider text-white transition-all duration-300 shadow-xl",
                      isAdding
                        ? "cursor-not-allowed bg-zinc-800 text-zinc-500 border border-zinc-700"
                        : "bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 shadow-orange-500/25 hover:shadow-orange-500/40",
                    ].join(" ")}
                  >
                    {isAdding ? (
                      <>
                        <Loader2 className="h-4 w-4 animate-spin text-zinc-400" />
                        <span>{t("buttons.adding")}</span>
                      </>
                    ) : (
                      <>
                        <span>{t("buttons.addToCart")}</span>
                        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </>
                    )}
                  </motion.button>
                </div>
              </form>
            </div>
          </div>
        </motion.section>
      </main>
    </div>
  );
}