"use client";

import {
  Compass,
  Home,
  Menu,
  ShoppingBag,
  Users,
  X,
} from "lucide-react";
import { Link } from "@/i18n/routing";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import { useCart } from "@/hooks/use-cart";
import { cn } from "@/lib/utils";
import { Logo } from "./logo";
import { CartLink } from "./cart-link";

function NavLinks({
  pathname,
  onNavigate,
  isMobile = false,
}: {
  pathname: string;
  onNavigate?: () => void;
  isMobile?: boolean;
}) {
  const t = useTranslations("header.nav");

  const NAV = [
    { href: "/", label: t("home"), icon: Home },
    { href: "/quienes-somos", label: t("about"), icon: Users },
    { href: "/tienda", label: t("store"), icon: ShoppingBag },
    { href: "/cotiza-tu-experiencia", label: t("quote"), icon: Compass },
  ];

  return (
    <nav className={cn("flex", isMobile ? "flex-col gap-2" : "flex-row items-center gap-1.5")}>
      {NAV.map((item) => {
        const Icon = item.icon;
        const active =
          item.href === "/"
            ? pathname === "/"
            : pathname === item.href || pathname.startsWith(`${item.href}/`);
        const isShop =
          item.href === "/tienda" && pathname.startsWith("/producto");
        const isActive = active || isShop;

        return (
          <Link
            key={item.href}
            href={item.href}
            onClick={onNavigate}
            className={cn(
              "group flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold transition-all duration-300",
              isActive
                ? "bg-purple-600 text-white shadow-md shadow-purple-600/20"
                : isMobile
                  ? "text-white hover:bg-orange-500 hover:text-white"
                  : "text-slate-700 hover:bg-orange-500 hover:text-white"
            )}
          >
            <Icon
              className={cn(
                "h-4 w-4 transition-transform group-hover:scale-110",
                isActive
                  ? "text-white"
                  : isMobile
                    ? "text-orange-300 group-hover:text-white"
                    : "text-purple-600 group-hover:text-white"
              )}
            />
            <span>{item.label}</span>
          </Link>
        );
      })}
    </nav>
  );
}

export function Header() {
  const t = useTranslations("header");
  const pathname = usePathname();
  const { itemCount } = useCart();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-purple-100 bg-white/95 backdrop-blur-md shadow-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <Logo />

        {/* Navegación escritorio */}
        <div className="hidden lg:flex lg:items-center lg:gap-2 bg-purple-50/80 p-1.5 rounded-full border border-purple-100">
          <NavLinks pathname={pathname} />
        </div>

        {/* Acciones de la derecha */}
        <div className="flex items-center gap-3">
          <CartLink />

          {/* Botón Menú Móvil */}
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? t("aria.closeMenu") : t("aria.openMenu")}
            className="flex h-10 w-10 items-center justify-center rounded-full bg-purple-50 text-purple-700 transition-colors hover:bg-purple-100 lg:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Menú móvil */}
      {open && (
        <div className="border-t border-purple-100 bg-purple-600 p-6 shadow-xl lg:hidden">
          <NavLinks pathname={pathname} onNavigate={() => setOpen(false)} isMobile />

          <div className="mt-6 border-t border-white/20 pt-4 flex items-center justify-between text-white">
            <span className="text-xs uppercase tracking-wider opacity-80">{t("reservations")}</span>
            <a
              href="tel:5515836982"
              className="text-sm font-bold hover:text-orange-300 transition-colors"
              style={{ fontFamily: "var(--font-display)" }}
            >
              55 1583 6982
            </a>
          </div>
        </div>
      )}
    </header>
  );
}