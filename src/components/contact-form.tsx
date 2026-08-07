"use client";

import { Check, Loader2, Mail, Phone, AlertCircle, User, MessageSquare, Send } from "lucide-react";
import { useState, FormEvent } from "react";
import { useTranslations } from "next-intl";
import { useContact, ContactData } from "@/hooks/useContact";

export function ContactForm() {
  const t = useTranslations("contactForm");
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

    const data: ContactData = {
      nombre: formData.get("nombre") as string,
      email: formData.get("email") as string,
      telefono: formData.get("telefono") as string,
      mensaje: formData.get("mensaje") as string,
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
      }, 5000);
    } else {
      setFeedback({
        type: "error",
        message: result.error || t("feedback.errorDefault"),
      });
    }
  };

  return (
    <div className="grid items-stretch gap-8 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)]">
      {/* FORMULARIO DE CONTACTO */}
      <form
        onSubmit={handleSubmit}
        className="space-y-4 rounded-3xl border border-purple-100 bg-white p-6 md:p-8 shadow-xl shadow-purple-950/5 transition-all"
      >
        <Field
          name="nombre"
          label={t("fields.fullName")}
          icon={User}
          required
          disabled={isLoading}
        />
        <Field
          name="email"
          label={t("fields.email")}
          type="email"
          icon={Mail}
          required
          disabled={isLoading}
        />
        <Field
          name="telefono"
          label={t("fields.phone")}
          type="tel"
          icon={Phone}
          required
          disabled={isLoading}
        />

        <div className="relative">
          <label htmlFor="mensaje" className="sr-only">
            {t("fields.messageLabel")}
          </label>
          <div className="pointer-events-none absolute top-4 left-4 text-purple-600/60">
            <MessageSquare className="h-5 w-5" />
          </div>
          <textarea
            id="mensaje"
            name="mensaje"
            rows={4}
            required
            disabled={isLoading}
            placeholder={t("fields.messagePlaceholder")}
            className="w-full rounded-2xl border border-purple-100 bg-purple-50/50 pl-12 pr-4 py-3.5 text-sm font-medium text-slate-800 outline-none transition-all duration-300 placeholder:text-slate-400 focus:border-orange-400 focus:bg-white focus:ring-4 focus:ring-orange-400/10 disabled:opacity-60 resize-y"
          />
        </div>

        {/* FEEDBACK FEED/MESSAGES */}
        {feedback.type === "success" && (
          <div className="flex items-center gap-3 rounded-2xl bg-emerald-50 p-4 text-xs font-semibold text-emerald-900 border border-emerald-200/60 animate-fadeUp">
            <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-emerald-500 text-white">
              <Check className="h-4 w-4" strokeWidth={2.5} />
            </div>
            <span>{feedback.message}</span>
          </div>
        )}

        {feedback.type === "error" && (
          <div className="flex items-center gap-3 rounded-2xl bg-rose-50 p-4 text-xs font-semibold text-rose-900 border border-rose-200/60 animate-fadeUp">
            <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-rose-500 text-white">
              <AlertCircle className="h-4 w-4" strokeWidth={2.5} />
            </div>
            <span>{feedback.message}</span>
          </div>
        )}

        <div className="flex justify-end pt-2">
          <button
            type="submit"
            disabled={isLoading || feedback.type === "success"}
            className="group relative flex min-w-[150px] items-center justify-center gap-2.5 rounded-full bg-gradient-to-r from-orange-500 to-amber-500 px-7 py-3.5 text-sm font-bold text-white shadow-lg shadow-orange-500/25 transition-all duration-300 hover:-translate-y-0.5 hover:bg-gradient-to-r hover:from-orange-600 hover:to-amber-600 hover:shadow-orange-500/40 active:scale-95 disabled:opacity-60 disabled:cursor-not-allowed disabled:transform-none"
          >
            {isLoading ? (
              <>
                <Loader2 className="h-4 w-4 animate-spin" />
                <span>{t("buttons.sending")}</span>
              </>
            ) : feedback.type === "success" ? (
              <>
                <Check className="h-4 w-4" strokeWidth={2.5} />
                <span>{t("buttons.sent")}</span>
              </>
            ) : (
              <>
                <span>{t("buttons.send")}</span>
                <Send className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </>
            )}
          </button>
        </div>
      </form>

      {/* BLOQUE DE INFORMACIÓN DE CONTACTO */}
      <div className="flex flex-col justify-between rounded-3xl bg-purple-950 p-8 text-white shadow-xl shadow-purple-950/20 relative overflow-hidden group">
        {/* Adorno visual traslúcido */}
        <div className="absolute -right-12 -bottom-12 h-48 w-48 rounded-full bg-purple-600/20 blur-2xl transition-all duration-700 group-hover:bg-orange-500/20"></div>

        <div className="relative space-y-4">
          <span className="inline-flex items-center gap-2 rounded-full border border-orange-400/30 bg-orange-500/10 px-3.5 py-1 text-xs font-bold uppercase tracking-widest text-orange-300 backdrop-blur-md">
            {t("info.badge")}
          </span>
          <h2 className="text-3xl font-extrabold leading-tight tracking-tight text-white sm:text-4xl">
            {t("info.titleLine1")} <br />
            <span className="bg-gradient-to-r from-orange-400 to-amber-200 bg-clip-text text-transparent">
              {t("info.titleLine2")}
            </span>
          </h2>
          <p className="text-xs leading-relaxed text-purple-200 sm:text-sm">
            {t("info.description")}
          </p>
        </div>

        <div className="relative mt-8 space-y-4 border-t border-purple-800/60 pt-6">
          <a
            href="tel:5515836982"
            className="flex items-center gap-3.5 rounded-2xl border border-purple-800/40 bg-purple-900/40 p-3.5 text-base font-bold text-white transition-all duration-300 hover:border-orange-400/50 hover:bg-orange-500/10 hover:text-orange-300"
          >
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-orange-500 text-white shadow-md">
              <Phone className="h-5 w-5" strokeWidth={2} />
            </div>
            <span>55 1583 6982</span>
          </a>

          <a
            href="mailto:hello@mundra.com.mx"
            className="flex items-center gap-3.5 rounded-2xl border border-purple-800/40 bg-purple-900/40 p-3.5 text-base font-bold text-white transition-all duration-300 hover:border-orange-400/50 hover:bg-orange-500/10 hover:text-orange-300 break-all"
          >
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-purple-700 text-white shadow-md">
              <Mail className="h-5 w-5" strokeWidth={2} />
            </div>
            <span className="text-sm sm:text-base">hello@mundra.com.mx</span>
          </a>
        </div>
      </div>
    </div>
  );
}

function Field({
  name,
  label,
  type = "text",
  icon: Icon,
  required,
  disabled,
}: {
  name: string;
  label: string;
  type?: string;
  icon: React.ElementType;
  required?: boolean;
  disabled?: boolean;
}) {
  return (
    <div className="relative">
      <label htmlFor={name} className="sr-only">
        {label}
      </label>
      <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4 text-purple-600/60">
        <Icon className="h-5 w-5" />
      </div>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        disabled={disabled}
        placeholder={`${label}${required ? " *" : ""}`}
        className="w-full rounded-2xl border border-purple-100 bg-purple-50/50 pl-12 pr-4 py-3.5 text-sm font-medium text-slate-800 outline-none transition-all duration-300 placeholder:text-slate-400 focus:border-orange-400 focus:bg-white focus:ring-4 focus:ring-orange-400/10 disabled:opacity-60"
      />
    </div>
  );
}