"use client";

import { useState, FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslations } from "next-intl";
import {
  Check,
  Loader2,
  AlertCircle,
  Send,
  Compass,
  Calendar,
  Users,
  MapPin,
  User,
  Mail,
  Phone,
  FileText,
  Sparkles,
} from "lucide-react";
import { useContact, ContactData } from "@/hooks/useContact";

export function AdvancedContactForm() {
  const t = useTranslations("advancedContactForm");
  const { sendContactForm, isLoading } = useContact();

  const [feedback, setFeedback] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFeedback({ type: null, message: "" });

    const form = e.currentTarget;
    const formData = new FormData(form);

    const nombre = (formData.get("nombre") as string)?.trim() || "";
    const estadoCiudad = (formData.get("estadoCiudad") as string)?.trim() || "";
    const email = (formData.get("email") as string)?.trim() || "";
    const telefono = (formData.get("telefono") as string)?.trim() || "";
    const destino = (formData.get("destino") as string)?.trim() || "";
    const fecha = (formData.get("fecha") as string)?.trim() || "";
    const viajeros = (formData.get("viajeros") as string)?.trim() || "";
    const detalles = (formData.get("detalles") as string)?.trim() || "";

    const asunto = `${t("emailFormat.subjectPrefix")}: ${destino ? destino : t("emailFormat.defaultDestination")} - ${nombre}`;

    const mensajeEstructurado = `
========================================
${t("emailFormat.header")}
========================================

👤 ${t("emailFormat.clientData")}:
- ${t("emailFormat.name")}: ${nombre}
- ${t("emailFormat.origin")}: ${estadoCiudad || t("emailFormat.notSpecified")}
- ${t("emailFormat.email")}: ${email}
- ${t("emailFormat.phone")}: ${telefono}

✈️ ${t("emailFormat.tripDetails")}:
- ${t("emailFormat.destination")}: ${destino || t("emailFormat.notSpecified")}
- ${t("emailFormat.date")}: ${fecha || t("emailFormat.notSpecified")}
- ${t("emailFormat.travelers")}: ${viajeros || t("emailFormat.notSpecified")}

📝 ${t("emailFormat.additionalNotes")}:
${detalles || t("emailFormat.noDetails")}
========================================
`.trim();

    const data: ContactData = {
      nombre,
      email,
      telefono,
      asunto,
      mensaje: mensajeEstructurado,
      estadoCiudad,
      destino,
      fecha,
      viajeros,
      detallesOriginales: detalles,
      servicioDeseado: "Cotización de Viaje",
    };

    const result = await sendContactForm(data);

    if (result.success) {
      setFeedback({
        type: "success",
        message: t("feedback.success"),
      });
      form.reset();

      setTimeout(() => {
        setFeedback({ type: null, message: "" });
      }, 6000);
    } else {
      setFeedback({
        type: "error",
        message: result.error || t("feedback.errorDefault"),
      });
    }
  };

  return (
    <div className="relative w-full max-w-4xl mx-auto rounded-3xl border border-purple-500/20 bg-zinc-950/90 p-6 md:p-10 shadow-2xl backdrop-blur-xl selection:bg-purple-500/30 selection:text-orange-300">
      {/* Resplandor superior decorativo */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-1.5 rounded-t-3xl bg-gradient-to-r from-orange-500 via-amber-400 to-purple-600" />

      {/* Encabezado */}
      <div className="mb-8 pb-6 border-b border-zinc-800/80">
        <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-black uppercase tracking-widest text-orange-300 bg-gradient-to-r from-orange-500/20 to-purple-500/20 border border-orange-500/30 backdrop-blur-md">
          <Sparkles className="w-3.5 h-3.5 text-amber-400" />
          {t("badge")}
        </span>
        <h2 className="text-2xl md:text-4xl font-extrabold text-white mt-3 tracking-tight">
          {t("titleStart")}{" "}
          <span className="bg-gradient-to-r from-orange-400 via-amber-300 to-purple-400 bg-clip-text text-transparent">
            {t("titleHighlight")}
          </span>
        </h2>
        <p className="text-sm text-zinc-400 mt-2 leading-relaxed">
          {t("subtitle")}
        </p>
      </div>

      {/* Formulario Grid */}
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* FILA 1: Nombre + Estado/Ciudad */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <InputWithIcon
            id="nombre"
            name="nombre"
            label={t("fields.fullName.label")}
            icon={User}
            placeholder={t("fields.fullName.placeholder")}
            required
            disabled={isLoading}
          />
          <InputWithIcon
            id="estadoCiudad"
            name="estadoCiudad"
            label={t("fields.origin.label")}
            icon={MapPin}
            placeholder={t("fields.origin.placeholder")}
            disabled={isLoading}
          />
        </div>

        {/* FILA 2: Email + Teléfono */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <InputWithIcon
            id="email"
            name="email"
            type="email"
            label={t("fields.email.label")}
            icon={Mail}
            placeholder={t("fields.email.placeholder")}
            required
            disabled={isLoading}
          />
          <InputWithIcon
            id="telefono"
            name="telefono"
            type="tel"
            label={t("fields.phone.label")}
            icon={Phone}
            placeholder={t("fields.phone.placeholder")}
            required
            disabled={isLoading}
          />
        </div>

        {/* FILA 3: Destino + Fecha + Viajeros */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          <InputWithIcon
            id="destino"
            name="destino"
            label={t("fields.destination.label")}
            icon={Compass}
            placeholder={t("fields.destination.placeholder")}
            required
            disabled={isLoading}
          />
          <InputWithIcon
            id="fecha"
            name="fecha"
            type="date"
            label={t("fields.date.label")}
            icon={Calendar}
            required
            disabled={isLoading}
          />
          <InputWithIcon
            id="viajeros"
            name="viajeros"
            type="number"
            min="1"
            label={t("fields.travelers.label")}
            icon={Users}
            placeholder={t("fields.travelers.placeholder")}
            required
            disabled={isLoading}
          />
        </div>

        {/* FILA 4: Textarea */}
        <div className="space-y-2">
          <label htmlFor="detalles" className="text-xs font-bold uppercase tracking-wider text-zinc-300 flex items-center gap-2">
            <FileText className="w-3.5 h-3.5 text-orange-400" />
            {t("fields.details.label")}
          </label>
          <textarea
            id="detalles"
            name="detalles"
            rows={4}
            disabled={isLoading}
            placeholder={t("fields.details.placeholder")}
            className="w-full resize-y rounded-2xl border border-zinc-800 bg-zinc-900/90 px-4 py-3.5 text-sm text-white outline-none transition-all placeholder:text-zinc-600 focus:border-purple-500 focus:bg-zinc-900 focus:ring-2 focus:ring-purple-500/20 disabled:opacity-50"
          />
        </div>

        {/* Mensajes de feedback */}
        <AnimatePresence mode="wait">
          {feedback.type === "success" && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="flex items-center gap-3 rounded-2xl bg-gradient-to-r from-orange-500/10 to-purple-500/10 p-4 text-xs font-semibold text-orange-300 border border-orange-500/30 backdrop-blur-md"
            >
              <Check className="h-5 w-5 text-orange-400 shrink-0" />
              <span>{feedback.message}</span>
            </motion.div>
          )}

          {feedback.type === "error" && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="flex items-center gap-3 rounded-2xl bg-red-950/50 p-4 text-xs font-semibold text-red-300 border border-red-500/30 backdrop-blur-md"
            >
              <AlertCircle className="h-5 w-5 text-red-400 shrink-0" />
              <span>{feedback.message}</span>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Botón de Submit */}
        <div className="flex justify-end pt-2">
          <motion.button
            whileTap={!isLoading && feedback.type !== "success" ? { scale: 0.98 } : {}}
            whileHover={!isLoading && feedback.type !== "success" ? { scale: 1.01 } : {}}
            type="submit"
            disabled={isLoading || feedback.type === "success"}
            className="w-full sm:w-auto px-10 py-4 bg-gradient-to-r from-orange-500 via-amber-500 to-purple-600 hover:from-orange-600 hover:to-purple-700 text-white font-extrabold uppercase tracking-wider rounded-2xl text-xs shadow-xl shadow-orange-500/20 hover:shadow-purple-500/30 transition-all duration-300 flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
          >
            {isLoading ? (
              <>
                <Loader2 className="h-4 w-4 animate-spin" />
                {t("buttons.processing")}
              </>
            ) : feedback.type === "success" ? (
              <>
                <Check className="h-4 w-4" strokeWidth={2.6} />
                {t("buttons.sent")}
              </>
            ) : (
              <>
                <span>{t("buttons.send")}</span>
                <Send className="h-4 w-4" />
              </>
            )}
          </motion.button>
        </div>
      </form>
    </div>
  );
}

{/* Helper para Inputs con Icono */}
function InputWithIcon({
  id,
  name,
  label,
  type = "text",
  placeholder,
  required = false,
  disabled = false,
  min,
  icon: Icon,
}: {
  id: string;
  name: string;
  label: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
  disabled?: boolean;
  min?: string;
  icon: React.ElementType;
}) {
  return (
    <div className="space-y-2">
      <label htmlFor={id} className="text-xs font-bold uppercase tracking-wider text-zinc-300 flex items-center gap-2">
        <Icon className="w-3.5 h-3.5 text-orange-400" />
        {label} {required && <span className="text-purple-400">*</span>}
      </label>
      <div className="relative">
        <input
          id={id}
          name={name}
          type={type}
          min={min}
          required={required}
          disabled={disabled}
          placeholder={placeholder}
          className="w-full rounded-2xl border border-zinc-800 bg-zinc-900/90 px-4 py-3.5 text-sm text-white outline-none transition-all placeholder:text-zinc-600 focus:border-purple-500 focus:bg-zinc-900 focus:ring-2 focus:ring-purple-500/20 disabled:opacity-50"
        />
      </div>
    </div>
  );
}