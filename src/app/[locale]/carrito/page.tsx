"use client";

import {
  useState,
  type ChangeEvent,
  type FormEvent,
  type ReactNode,
} from "react";
import Image from "next/image";
import { Link } from "@/i18n/routing";
import {
  Minus,
  Plus,
  Trash2,
  ShoppingBag,
  ArrowRight,
  ChevronLeft,
  CreditCard,
  User,
  MapPin,
  CheckCircle2,
  AlertTriangle,
  Loader2,
  Plane,
  Map as MapIcon,
  Camera,
  Compass,
  Palmtree,
  Ticket,
} from "lucide-react";
import { useLocale, useTranslations } from "next-intl";

import { useCart } from "@/hooks/use-cart";
import { processEtominPayment } from "@/lib/payment";
import { formatPrice } from "@/lib/format";
import { useTours } from "@/hooks/use-tours";

const VALID_COUPONS = [
  { code: "VEX10", discount: 0.1 },
  { code: "VEX15", discount: 0.15 },
  { code: "VEXPRO20", discount: 0.2 },
];

const BACK_CATALOG_LINK = "/tienda";

type Step = 1 | 2 | 3;

// --- ESTILOS DE ANIMACIÓN INYECTADOS ---
const customStyles = `
  @keyframes float-slow {
    0%, 100% { transform: translateY(0) rotate(0deg); }
    50% { transform: translateY(-20px) rotate(5deg); }
  }
  @keyframes float-medium {
    0%, 100% { transform: translateY(0) rotate(0deg); }
    50% { transform: translateY(-15px) rotate(-5deg); }
  }
  @keyframes float-fast {
    0%, 100% { transform: translateY(0) rotate(0deg); }
    50% { transform: translateY(-10px) rotate(10deg); }
  }
  .animate-float-slow { animation: float-slow 8s ease-in-out infinite; }
  .animate-float-medium { animation: float-medium 6s ease-in-out infinite; }
  .animate-float-fast { animation: float-fast 4s ease-in-out infinite; }
`;

function FloatingIconsBackground() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0 flex justify-center items-center bg-purple-950">
      <div className="absolute inset-0 bg-gradient-to-b from-purple-950 via-purple-900 to-purple-950 opacity-90"></div>
      
      {/* Íconos Flotantes */}
      <Plane className="absolute top-[10%] left-[10%] text-white/5 h-24 w-24 animate-float-slow" />
      <MapIcon className="absolute top-[20%] right-[15%] text-white/5 h-32 w-32 animate-float-medium" />
      <Camera className="absolute bottom-[20%] left-[15%] text-white/5 h-20 w-20 animate-float-fast" />
      <Compass className="absolute top-[50%] left-[5%] text-white/5 h-28 w-28 animate-spin-slow" />
      <Ticket className="absolute bottom-[30%] right-[10%] text-white/5 h-24 w-24 animate-float-slow" />
      <Palmtree className="absolute top-[40%] right-[5%] text-white/5 h-40 w-40 animate-float-medium" />
    </div>
  );
}

function CardShell({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={[
        "relative overflow-hidden rounded-3xl border border-purple-100/50",
        "bg-white shadow-2xl shadow-purple-950/20 transition-all duration-300",
        className,
      ].join(" ")}
    >
      <div className="relative">{children}</div>
    </div>
  );
}

function SectionTitle({
  icon: Icon,
  title,
}: {
  icon: React.ElementType;
  title: string;
}) {
  return (
    <div className="flex items-center gap-3">
      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-purple-100 text-purple-700 shadow-inner">
        <Icon className="h-5 w-5" />
      </div>
      <h3 className="text-sm font-extrabold uppercase tracking-widest text-slate-900">
        {title}
      </h3>
    </div>
  );
}

function Field({
  label,
  name,
  value,
  onChange,
  type = "text",
  required = false,
  placeholder,
  className = "",
  maxLength,
  mono = false,
  inputClassName = "",
}: {
  label: string;
  name: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
  type?: string;
  required?: boolean;
  placeholder?: string;
  className?: string;
  maxLength?: number;
  mono?: boolean;
  inputClassName?: string;
}) {
  return (
    <div className={className}>
      <label className="mb-1.5 block text-[11px] font-bold uppercase tracking-wider text-slate-600">
        {label}
      </label>
      <input
        type={type}
        name={name}
        required={required}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        maxLength={maxLength}
        className={[
          "w-full rounded-2xl border border-purple-100 bg-purple-50/50 px-4 py-3",
          "text-xs font-semibold text-slate-900 outline-none transition-all placeholder:text-slate-400",
          "focus:border-orange-400 focus:bg-white focus:ring-4 focus:ring-orange-400/10",
          mono ? "font-mono tracking-widest" : "",
          inputClassName,
        ].join(" ")}
      />
    </div>
  );
}

export default function CarritoCheckoutPage() {
  const t = useTranslations("cartPage");
  const locale = useLocale();
  const { tours, loading } = useTours();

  const { items, total, updateQuantity, removeItem, clearCart } = useCart();

  const [step, setStep] = useState<Step>(1);
  const [isProcessing, setIsProcessing] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [successData, setSuccessData] = useState<any>(null);

  const [couponInput, setCouponInput] = useState("");
  const [appliedCoupon, setAppliedCoupon] = useState<{
    code: string;
    discount: number;
  } | null>(null);
  const [couponError, setCouponError] = useState("");

  const [formData, setFormData] = useState({
    nombre: "",
    apellido: "",
    email: "",
    telefono: "",
    empresa: "",
    direccion: "",
    direccion2: "",
    ciudad: "",
    estado: "",
    cp: "",
    pais: "MX",
    cardNumber: "",
    cardName: "",
    cardMonth: "",
    cardYear: "",
    cardCvv: "",
  });

  const discountAmount = appliedCoupon ? total * appliedCoupon.discount : 0;
  const totalWithDiscount = total - discountAmount;
  const iva = totalWithDiscount * 0.16;
  const grandTotal = totalWithDiscount + iva;

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleApplyCoupon = (e: FormEvent) => {
    e.preventDefault();
    setCouponError("");

    const found = VALID_COUPONS.find(
      (c) => c.code === couponInput.trim().toUpperCase()
    );

    if (found) {
      setAppliedCoupon(found);
      setCouponInput("");
      return;
    }

    setCouponError(t("financial.couponInvalid"));
  };

  const handleCheckoutSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);
    setErrorMessage("");

    const uniqueOrderId = `MC-${Date.now()}`;

    const paymentPayload = {
      amount: Number(grandTotal.toFixed(2)),
      orderId: uniqueOrderId,
      cardData: {
        number: formData.cardNumber.replace(/\s/g, ""),
        name: formData.cardName.trim(),
        month: formData.cardMonth.padStart(2, "0"),
        year: formData.cardYear.trim(),
        cvv: formData.cardCvv.trim(),
      },
      customer: {
        nombre: formData.nombre.trim(),
        apellido: formData.apellido.trim(),
        email: formData.email.trim(),
        telefono: formData.telefono.trim(),
        direccion: formData.direccion.trim(),
        direccion2: formData.direccion2.trim() || undefined,
        ciudad: formData.ciudad.trim(),
        estado: formData.estado.trim(),
        pais: formData.pais,
        cp: formData.cp.trim(),
        empresa: formData.empresa.trim() || undefined,
      },
      metadata: {
        notes: appliedCoupon
          ? `${t("metadata.couponApplied")}: ${appliedCoupon.code}`
          : t("metadata.standardSale"),
      },
    };

    try {
      const response = await processEtominPayment(paymentPayload);

      if (response.success) {
        setSuccessData(response.data);

        try {
          await fetch("/api/checkout", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              orderId: uniqueOrderId,
              amount: paymentPayload.amount,
              customer: paymentPayload.customer,
              items,
              metadata: paymentPayload.metadata,
              locale,
            }),
          });
        } catch (emailError) {
          console.error(
            "⚠️ Falló el despacho de correos informativos:",
            emailError
          );
        }

        clearCart();
        setStep(3);
      } else {
        setErrorMessage(response.error || t("errors.declined"));
      }
    } catch (err) {
      console.error(err);
      setErrorMessage(t("errors.connection"));
    } finally {
      setIsProcessing(false);
    }
  };

  // PANTALLA DE ÉXITO (Paso 3)
  if (step === 3) {
    return (
      <div className="min-h-screen relative overflow-hidden bg-purple-950 text-slate-800">
        <style dangerouslySetInnerHTML={{ __html: customStyles }} />
        <FloatingIconsBackground />
        
        <main className="relative z-10 mx-auto flex min-h-screen w-full max-w-7xl flex-col justify-center px-4 pb-14 pt-32 md:px-6">
          <section className="relative mx-auto w-full max-w-xl">
            <CardShell className="p-8 text-center sm:p-10 border-t-4 border-t-emerald-500">
              <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-emerald-100 text-emerald-500 shadow-xl shadow-emerald-500/20">
                <CheckCircle2 className="h-10 w-10" />
              </div>

              <h1 className="text-3xl font-black tracking-tight text-slate-900">
                {t("success.title")}
              </h1>

              <p className="mx-auto mt-3 max-w-sm text-sm font-medium leading-relaxed text-slate-600">
                {t("success.description")}
              </p>

              <div className="mt-8 rounded-2xl border border-purple-100 bg-purple-50/50 p-5 text-left shadow-inner">
                <div className="flex items-center justify-between gap-4 border-b border-purple-100 pb-3">
                  <span className="text-xs font-bold text-slate-600">
                    {t("success.transactionStatus")}
                  </span>
                  <span className="inline-flex items-center gap-1 text-xs font-extrabold text-emerald-600 bg-emerald-100 px-3 py-1 rounded-full">
                    <CheckCircle2 className="h-3.5 w-3.5" />
                    {t("success.approved")}
                  </span>
                </div>
              </div>

              <Link href={BACK_CATALOG_LINK} className="mt-8 block">
                <button className="w-full flex justify-center items-center gap-2 rounded-2xl bg-gradient-to-r from-orange-500 to-amber-500 py-4 text-sm font-bold text-white shadow-lg shadow-orange-500/25 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-orange-500/40 active:scale-95">
                  {t("success.backToCatalog")}
                  <ArrowRight className="h-4 w-4" />
                </button>
              </Link>
            </CardShell>
          </section>
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen relative overflow-hidden bg-purple-950 text-slate-800 selection:bg-orange-500 selection:text-white pb-24">
      <style dangerouslySetInnerHTML={{ __html: customStyles }} />
      <FloatingIconsBackground />
      
      <div className="h-4 relative z-10" />

      {/* Header Sticky / Breadcrumbs */}
      <div className="sticky top-0 z-40 border-b border-purple-800/50 bg-purple-950/80 backdrop-blur-md shadow-sm">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4 md:px-6">
          <nav className="flex items-center gap-2 text-xs font-semibold text-purple-300">
            <Link href="/" className="transition hover:text-white">
              {t("breadcrumb.home")}
            </Link>
            <span className="text-purple-600">/</span>
            <span
              className={
                step === 1 ? "font-bold text-white" : "text-purple-300 hover:text-white transition-colors"
              }
            >
              {t("breadcrumb.summary")}
            </span>
            <span className="text-purple-600">/</span>
            <span
              className={
                step === 2 ? "font-bold text-white" : "text-purple-400"
              }
            >
              {t("breadcrumb.shippingPayment")}
            </span>
          </nav>

          {/* Indicador visual de pasos */}
          <div className="flex items-center gap-3">
            <div
              className={`h-2.5 w-2.5 rounded-full transition-colors duration-500 ${step >= 1 ? "bg-orange-500 shadow-[0_0_8px_rgba(249,115,22,0.6)]" : "bg-purple-800"}`}
            />
            <div
              className={`h-0.5 w-10 rounded-full transition-colors duration-500 ${step >= 2 ? "bg-orange-500" : "bg-purple-800"}`}
            />
            <div
              className={`h-2.5 w-2.5 rounded-full transition-colors duration-500 ${step >= 2 ? "bg-orange-500 shadow-[0_0_8px_rgba(249,115,22,0.6)]" : "bg-purple-800"}`}
            />
          </div>
        </div>
      </div>

      <main className="relative z-10 py-8 md:py-12">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          {items.length === 0 ? (
            <CardShell className="mx-auto max-w-lg p-8 text-center sm:p-12">
              <div className="mx-auto mb-6 flex h-24 w-24 items-center justify-center rounded-full bg-orange-50 text-orange-500 shadow-inner">
                <ShoppingBag className="h-12 w-12" />
              </div>
              <h2 className="text-2xl font-black text-slate-900">
                {t("empty.title")}
              </h2>
              <p className="mx-auto mt-3 max-w-xs text-sm font-medium leading-relaxed text-slate-500">
                {t("empty.description")}
              </p>
              <Link href={BACK_CATALOG_LINK} className="mt-8 inline-block w-full sm:w-auto">
                <button className="w-full rounded-2xl bg-gradient-to-r from-orange-500 to-amber-500 px-8 py-4 text-sm font-bold text-white shadow-lg shadow-orange-500/25 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-orange-500/40 active:scale-95">
                  {t("empty.goToStore")}
                </button>
              </Link>
            </CardShell>
          ) : (
            <div className="space-y-6">
              {errorMessage && (
                <div className="flex items-center gap-3 rounded-2xl border border-rose-200 bg-rose-50 p-4 text-sm font-bold text-rose-700 shadow-lg animate-fade-in">
                  <AlertTriangle className="h-5 w-5 flex-shrink-0 text-rose-500" />
                  <span>{errorMessage}</span>
                </div>
              )}

              {/* PASO 1: Resumen de Carrito */}
              {step === 1 && (
                <div className="grid gap-8 xl:grid-cols-[minmax(0,1.2fr)_minmax(340px,0.8fr)]">
                  <CardShell className="p-6 sm:p-8">
                    <div className="flex items-center justify-between gap-4 border-b border-purple-100 pb-5">
                      <h2 className="text-sm font-extrabold uppercase tracking-widest text-slate-900">
                        {t("order.title")}
                      </h2>

                      <button
                        type="button"
                        onClick={clearCart}
                        className="flex items-center gap-1.5 text-xs font-bold text-rose-500 transition-colors hover:text-rose-700 bg-rose-50 px-3 py-1.5 rounded-lg"
                      >
                        <Trash2 className="h-3.5 w-3.5" />
                        {t("order.clear")}
                      </button>
                    </div>

                    <div className="mt-6 space-y-4">
                      {!loading &&
                        items.map((item) => {
                          const matchingSolution = tours.find(
                            (product) => product.id === item.product.id
                          );
                          const displayProduct = matchingSolution || item.product;

                          return (
                            <div
                              key={displayProduct.id}
                              className="group rounded-2xl border border-purple-100 bg-purple-50/40 p-4 transition-all duration-300 hover:border-orange-300 hover:bg-white hover:shadow-md"
                            >
                              <div className="grid grid-cols-[88px_minmax(0,1fr)] gap-5 sm:grid-cols-[100px_minmax(0,1fr)]">
                                <div className="relative flex aspect-square items-center justify-center overflow-hidden rounded-2xl bg-white p-2 border border-purple-100 shadow-sm">
                                  <Link
                                    href={`/tienda/${displayProduct.id}`}
                                    className="absolute inset-0 z-10"
                                  />
                                  <Image
                                    src={displayProduct.image || "/logo.png"}
                                    alt={displayProduct.title}
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                                  />
                                </div>

                                <div className="flex min-w-0 flex-col justify-between gap-3">
                                  <div className="flex items-start justify-between gap-3">
                                    <div className="min-w-0">
                                      <p className="mb-1 inline-block font-mono text-[10px] font-bold text-slate-400 bg-white px-2 py-0.5 rounded-md border border-purple-50">
                                        ID: {displayProduct.id}
                                      </p>
                                      <h3 className="line-clamp-2 text-sm font-extrabold text-slate-900 group-hover:text-orange-600 transition-colors">
                                        {displayProduct.title}
                                      </h3>
                                    </div>

                                    <button
                                      type="button"
                                      onClick={() => removeItem(displayProduct.id)}
                                      className="rounded-xl p-2 text-slate-400 transition hover:bg-rose-100 hover:text-rose-600 active:scale-95"
                                      aria-label="Eliminar artículo"
                                    >
                                      <Trash2 className="h-4 w-4" />
                                    </button>
                                  </div>

                                  <div className="flex items-end justify-between gap-4">
                                    <div className="flex items-center rounded-xl border border-purple-200 bg-white p-1 shadow-sm">
                                      <button
                                        type="button"
                                        onClick={() => updateQuantity(displayProduct.id, item.quantity - 1)}
                                        className="rounded-lg p-1.5 text-slate-500 transition hover:bg-purple-50 hover:text-orange-600 active:scale-95"
                                      >
                                        <Minus className="h-3.5 w-3.5" />
                                      </button>

                                      <span className="w-8 text-center font-mono text-sm font-bold text-slate-900">
                                        {item.quantity}
                                      </span>

                                      <button
                                        type="button"
                                        onClick={() => updateQuantity(displayProduct.id, item.quantity + 1)}
                                        className="rounded-lg p-1.5 text-slate-500 transition hover:bg-purple-50 hover:text-orange-600 active:scale-95"
                                      >
                                        <Plus className="h-3.5 w-3.5" />
                                      </button>
                                    </div>

                                    <span className="text-base font-black text-slate-900">
                                      {formatPrice(displayProduct.price * item.quantity)}
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          );
                        })}
                    </div>
                  </CardShell>

                  {/* Sidebar Financiero Paso 1 */}
                  <CardShell className="p-6 sm:p-8 h-fit lg:sticky lg:top-24">
                    <div className="flex h-full flex-col">
                      <h2 className="text-sm font-extrabold uppercase tracking-widest text-slate-900 border-b border-purple-100 pb-5">
                        {t("financial.title")}
                      </h2>

                      <div className="mt-6 flex items-center justify-center rounded-2xl border border-purple-100 bg-purple-50/50 p-4">
                        <Image
                          src="/etomin.png"
                          alt={t("images.securePaymentAlt")}
                          width={140}
                          height={20}
                          className="object-contain"
                        />
                      </div>

                      <div className="mt-6 space-y-4">
                        {!appliedCoupon ? (
                          <form
                            onSubmit={handleApplyCoupon}
                            className="grid gap-3 rounded-2xl border border-purple-100 bg-white p-4 shadow-sm"
                          >
                            <div>
                              <p className="text-xs font-extrabold uppercase tracking-wider text-slate-800">
                                {t("financial.applyCoupon")}
                              </p>
                              <p className="mt-1 text-[11px] font-medium text-slate-500">
                                {t("financial.couponPlaceholder")}
                              </p>
                            </div>

                            <div className="flex gap-2">
                              <input
                                type="text"
                                placeholder={t("financial.couponPlaceholder")}
                                value={couponInput}
                                onChange={(e) => setCouponInput(e.target.value)}
                                className="min-w-0 flex-1 rounded-xl border border-purple-200 bg-purple-50/50 px-4 py-2 text-sm font-semibold text-slate-900 outline-none transition-all placeholder:text-slate-400 focus:border-orange-400 focus:bg-white focus:ring-4 focus:ring-orange-400/10 uppercase"
                              />
                              <button
                                type="submit"
                                className="shrink-0 rounded-xl bg-purple-950 px-5 text-xs font-bold text-white transition hover:bg-orange-500 active:scale-95"
                              >
                                Aplicar
                              </button>
                            </div>
                          </form>
                        ) : (
                          <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-4 shadow-sm">
                            <div className="flex items-start justify-between gap-3">
                              <div className="min-w-0">
                                <p className="text-[11px] font-extrabold uppercase tracking-wider text-emerald-700">
                                  {t("financial.appliedCoupon", {
                                    code: appliedCoupon.code,
                                    discount: appliedCoupon.discount * 100,
                                  })}
                                </p>
                              </div>
                              <button
                                type="button"
                                onClick={() => setAppliedCoupon(null)}
                                className="shrink-0 rounded-lg bg-white px-3 py-1.5 text-[10px] font-bold text-rose-600 transition hover:bg-rose-50 shadow-sm"
                              >
                                {t("financial.remove")}
                              </button>
                            </div>
                          </div>
                        )}

                        {couponError && (
                          <p className="text-[11px] font-bold text-rose-500 bg-rose-50 p-2 rounded-lg border border-rose-100">
                            ⚠️ {couponError}
                          </p>
                        )}
                      </div>

                      <div className="mt-6 space-y-3 rounded-2xl border border-purple-100 bg-purple-50/50 p-5 text-sm font-medium text-slate-600">
                        <div className="flex justify-between gap-4">
                          <span>{t("financial.subtotal")}</span>
                          <span className="font-mono font-bold text-slate-900">
                            {formatPrice(total)}
                          </span>
                        </div>

                        {appliedCoupon && (
                          <div className="flex justify-between gap-4 text-emerald-600">
                            <span>{t("financial.discount")}</span>
                            <span className="font-mono font-bold">
                              -{formatPrice(discountAmount)}
                            </span>
                          </div>
                        )}
                      </div>

                      {/* Total Destacado */}
                      <div className="mt-6 rounded-2xl border border-purple-900 bg-purple-950 p-6 text-white relative overflow-hidden shadow-lg">
                        <div className="absolute -right-8 -bottom-8 h-24 w-24 rounded-full bg-orange-500/20 blur-2xl"></div>
                        <div className="flex items-baseline justify-between gap-4 relative z-10">
                          <span className="text-xs font-extrabold uppercase tracking-widest text-purple-200">
                            {t("financial.netTotal")}
                          </span>
                          <span className="text-3xl font-black text-amber-400">
                            {formatPrice(grandTotal)}
                          </span>
                        </div>
                        <p className="mt-2 text-right text-[11px] font-semibold text-purple-300/70 relative z-10">
                          {t("financial.tax", { tax: formatPrice(iva) })}
                        </p>
                      </div>

                      <button
                        onClick={() => setStep(2)}
                        className="mt-6 flex w-full items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-orange-500 to-amber-500 py-4 text-sm font-bold text-white shadow-lg shadow-orange-500/25 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-orange-500/40 active:scale-95"
                      >
                        {t("actions.proceedToPayment")}
                        <ArrowRight className="h-5 w-5" />
                      </button>

                      <div className="mt-6 border-t border-purple-100 pt-5 text-center">
                        <p className="text-[11px] font-semibold text-slate-400">
                          {t("security.note")}
                        </p>
                        <div className="mt-3 flex items-center justify-center opacity-70 hover:opacity-100 transition-opacity">
                          <Image
                            src="/secure-payment.png"
                            alt={t("images.securePaymentAlt")}
                            width={100}
                            height={20}
                            className="object-contain"
                          />
                        </div>
                      </div>
                    </div>
                  </CardShell>
                </div>
              )}

              {/* PASO 2: Checkout Form */}
              {step === 2 && (
                <form
                  id="etomin-payment-form"
                  onSubmit={handleCheckoutSubmit}
                  className="grid gap-8 xl:grid-cols-[minmax(0,1.2fr)_minmax(340px,0.8fr)]"
                >
                  <div className="space-y-8">
                    {/* Formulario 1: Datos del Comprador */}
                    <CardShell className="p-6 sm:p-8">
                      <SectionTitle icon={User} title={t("form.buyerTitle")} />
                      <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2">
                        <Field label={t("form.firstName")} name="nombre" value={formData.nombre} onChange={handleInputChange} required />
                        <Field label={t("form.lastName")} name="apellido" value={formData.apellido} onChange={handleInputChange} required />
                        <Field label={t("form.email")} name="email" type="email" value={formData.email} onChange={handleInputChange} required />
                        <Field label={t("form.phone")} name="telefono" type="tel" value={formData.telefono} onChange={handleInputChange} required />
                        <Field label={t("form.company")} name="empresa" value={formData.empresa} onChange={handleInputChange} className="sm:col-span-2" />
                      </div>
                    </CardShell>

                    {/* Formulario 2: Dirección de Envío */}
                    <CardShell className="p-6 sm:p-8">
                      <SectionTitle icon={MapPin} title={t("form.addressTitle")} />
                      <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2">
                        <Field label={t("form.streetAddress")} name="direccion" value={formData.direccion} onChange={handleInputChange} required placeholder={t("form.streetAddressPlaceholder")} className="sm:col-span-2" />
                        <Field label={t("form.neighborhood")} name="direccion2" value={formData.direccion2} onChange={handleInputChange} placeholder={t("form.neighborhoodPlaceholder")} className="sm:col-span-2" />
                        <Field label={t("form.city")} name="ciudad" value={formData.ciudad} onChange={handleInputChange} required />
                        <Field label={t("form.state")} name="estado" value={formData.estado} onChange={handleInputChange} required placeholder={t("form.statePlaceholder")} />
                        <Field label={t("form.postalCode")} name="cp" value={formData.cp} onChange={handleInputChange} required />
                        <div>
                          <label className="mb-1.5 block text-[11px] font-bold uppercase tracking-wider text-slate-600">
                            {t("form.country")}
                          </label>
                          <select
                            name="pais"
                            value={formData.pais}
                            onChange={handleInputChange}
                            className="w-full appearance-none rounded-2xl border border-purple-100 bg-purple-50/50 px-4 py-3 text-xs font-semibold text-slate-900 outline-none transition-all focus:border-orange-400 focus:bg-white focus:ring-4 focus:ring-orange-400/10 cursor-pointer"
                          >
                            <option value="MX">{t("form.mexico")}</option>
                          </select>
                        </div>
                      </div>
                    </CardShell>

                    {/* Formulario 3: Datos de Tarjeta */}
                    <CardShell className="p-6 sm:p-8">
                      <SectionTitle icon={CreditCard} title={t("form.paymentTitle")} />
                      <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-6">
                        <Field label={t("form.cardNumber")} name="cardNumber" value={formData.cardNumber} onChange={handleInputChange} required maxLength={16} placeholder={t("form.cardNumberPlaceholder")} className="sm:col-span-6" mono />
                        <Field label={t("form.cardHolderName")} name="cardName" value={formData.cardName} onChange={handleInputChange} required placeholder={t("form.cardHolderPlaceholder")} className="sm:col-span-6" />
                        <Field label={t("form.expiryMonth")} name="cardMonth" value={formData.cardMonth} onChange={handleInputChange} required maxLength={2} placeholder={t("form.expiryMonthPlaceholder")} mono inputClassName="text-center" className="sm:col-span-2" />
                        <Field label={t("form.expiryYear")} name="cardYear" value={formData.cardYear} onChange={handleInputChange} required maxLength={4} placeholder={t("form.expiryYearPlaceholder")} mono inputClassName="text-center" className="sm:col-span-2" />
                        <Field label={t("form.cvv")} name="cardCvv" type="password" value={formData.cardCvv} onChange={handleInputChange} required maxLength={4} placeholder={t("form.cvvPlaceholder")} mono inputClassName="text-center" className="sm:col-span-2" />
                      </div>
                    </CardShell>
                  </div>

                  {/* Columna Derecha: Card Fija de Pago */}
                  <div className="lg:sticky lg:top-24 h-fit">
                    <CardShell className="p-6 sm:p-8">
                      <h2 className="text-sm font-extrabold uppercase tracking-widest text-slate-900 border-b border-purple-100 pb-5">
                        {t("financial.title")}
                      </h2>

                      <div className="mt-6 flex items-center justify-center rounded-2xl border border-purple-100 bg-purple-50/50 p-4">
                        <Image src="/etomin.png" alt={t("images.securePaymentAlt")} width={140} height={20} className="object-contain" />
                      </div>

                      <div className="mt-6 space-y-3 rounded-2xl border border-purple-100 bg-purple-50/50 p-5 text-sm font-medium text-slate-600">
                        <div className="flex justify-between gap-4">
                          <span>{t("financial.subtotal")}</span>
                          <span className="font-mono font-bold text-slate-900">{formatPrice(total)}</span>
                        </div>

                        {appliedCoupon && (
                          <div className="flex justify-between gap-4 text-emerald-600">
                            <span>{t("financial.discount")}</span>
                            <span className="font-mono font-bold">-{formatPrice(discountAmount)}</span>
                          </div>
                        )}

                        <div className="border-t border-purple-200 pt-4 mt-4">
                          <div className="flex items-baseline justify-between gap-4">
                            <span className="text-xs font-extrabold text-slate-900 uppercase tracking-wider">
                              {t("financial.netTotal")}
                            </span>
                            <span className="text-2xl font-black text-slate-900">
                              {formatPrice(grandTotal)}
                            </span>
                          </div>
                          <p className="mt-1 text-right text-[11px] font-semibold text-slate-400">
                            {t("financial.tax", { tax: formatPrice(iva) })}
                          </p>
                        </div>
                      </div>

                      <div className="mt-8 space-y-4">
                        <button
                          type="submit"
                          form="etomin-payment-form"
                          disabled={isProcessing}
                          className={[
                            "flex w-full items-center justify-center gap-2 rounded-2xl py-4 text-sm font-bold uppercase tracking-wider text-white transition-all shadow-lg",
                            isProcessing
                              ? "cursor-wait bg-slate-400"
                              : "bg-gradient-to-r from-orange-500 to-amber-500 hover:shadow-orange-500/40 hover:-translate-y-0.5 active:scale-95 shadow-orange-500/25",
                          ].join(" ")}
                        >
                          {isProcessing ? (
                            <span className="flex items-center gap-2">
                              <Loader2 className="h-5 w-5 animate-spin" />
                              <span>{t("actions.processing")}</span>
                            </span>
                          ) : (
                            t("actions.payAmount", { amount: formatPrice(grandTotal) })
                          )}
                        </button>

                        <button
                          type="button"
                          disabled={isProcessing}
                          onClick={() => setStep(1)}
                          className="flex w-full items-center justify-center gap-1.5 py-3 text-xs font-bold text-slate-500 transition hover:text-slate-900 rounded-xl hover:bg-slate-50"
                        >
                          <ChevronLeft className="h-4 w-4" />
                          {t("actions.backToCart")}
                        </button>
                      </div>

                      <div className="mt-6 border-t border-purple-100 pt-5 text-center">
                        <p className="text-[11px] font-semibold text-slate-400">
                          {t("security.note")}
                        </p>
                        <div className="mt-3 flex items-center justify-center opacity-70">
                          <Image src="/secure-payment.png" alt={t("images.securePaymentAlt")} width={100} height={20} className="object-contain" />
                        </div>
                      </div>
                    </CardShell>
                  </div>
                </form>
              )}
            </div>
          )}
        </div>
      </main>
    </div>
  );
}