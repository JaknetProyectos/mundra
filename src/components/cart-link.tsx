import { useCart } from "@/hooks/use-cart";
import { Link } from "@/i18n/routing";
import { ShoppingCart } from "lucide-react";

export function CartLink({
    onNavigate,
}: {
    onNavigate?: () => void;
}) {

    const { itemCount } = useCart()
    return (
        <Link
            href="/carrito"
            onClick={onNavigate}
            aria-label="Carrito"
            className="relative flex h-10 w-10 items-center justify-center rounded-full bg-purple-100 text-purple-700 transition-all duration-300 hover:bg-orange-500 hover:text-white shadow-sm"
        >
            <ShoppingCart className="h-5 w-5" strokeWidth={2} />
            {itemCount > 0 && (
                <span className="absolute -right-1 -top-1 flex h-5 min-w-5 items-center justify-center rounded-full bg-orange-500 px-1 text-[10px] font-bold text-white ring-2 ring-white shadow-sm">
                    {itemCount}
                </span>
            )}
        </Link>
    );
}