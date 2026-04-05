import type { Metadata } from "next";
import { Arvo, Lora, Molengo } from "next/font/google";
import { LenisProvider } from "@/components/LenisProvider";
import "./globals.css";

const arvo = Arvo({
  variable: "--font-arvo",
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

const lora = Lora({
  variable: "--font-lora",
  subsets: ["latin"],
  style: ["normal", "italic"],
  display: "swap",
});

const molengo = Molengo({
  variable: "--font-molengo",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Coralab | Presencia digital sin complicaciones",
  description:
    "Coralab es un espacio dedicado a crear sitios web y soluciones digitales sencillas para negocios que buscan una presencia profesional en internet, sin complicaciones ni promesas irreales.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${arvo.variable} ${lora.variable} ${molengo.variable}`}
    >
      <body className="min-h-screen bg-background font-sans text-foreground antialiased selection:bg-accent/25">
        <LenisProvider>{children}</LenisProvider>
      </body>
    </html>
  );
}
