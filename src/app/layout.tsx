import type { Metadata } from "next";
import { Catamaran, Manrope } from "next/font/google";
import ClientBody from "./[locale]/ClientBody";

import "./globals.css";


const catamaran = Catamaran({
  variable: "--font-catamaran",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});


export const metadata: Metadata = {
  title: "Mundra | Experiencias turísticas en México",
  description:
    "Planes turísticos integrales que combinan cultura, historia, naturaleza y gastronomía con la máxima calidad y seguridad.",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${catamaran.variable} ${manrope.variable}`}
    >
      <head>
      </head>
      <body suppressHydrationWarning className="antialiased">
        <ClientBody>
          {children}
        </ClientBody>
      </body>
    </html>
  );
}
