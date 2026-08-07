import { Link } from "@/i18n/routing";
import { cn } from "@/lib/utils";

export function Logo({ className }: { className?: string }) {
    return (
        <Link
            href="/"
            className={cn("group flex items-center gap-3 transition-transform hover:scale-[1.02]", className)}
        >

            <img
                src={"/logo-title.png"}
                alt="Mundra"
                className="h-14 w-auto object-contain"
                onError={(e) => {
                    (e.currentTarget as HTMLImageElement).style.display = "none";
                }}
            />

        </Link>
    );
}