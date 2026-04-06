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
  metadataBase: new URL("https://coralab.vercel.app"),
  title: {
    default: "Coralab | Presencia digital sin complicaciones",
    template: "%s | Coralab",
  },
  description:
    "Coralab es un espacio dedicado a crear sitios web y soluciones digitales sencillas para negocios que buscan una presencia profesional en internet, sin complicaciones ni promesas irreales.",
  applicationName: "Coralab",
  keywords: [
    "Coralab",
    "desarrollo web",
    "diseno web",
    "presencia digital",
    "sitios web para negocios",
    "soluciones digitales",
    "landing pages",
    "web design mexico",
  ],
  authors: [{ name: "Coralab", url: "https://coralab.vercel.app" }],
  creator: "Coralab",
  publisher: "Coralab",
  category: "technology",
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "es_MX",
    url: "https://coralab.vercel.app",
    siteName: "Coralab",
    title: "Coralab | Presencia digital sin complicaciones",
    description:
      "Creamos sitios web y soluciones digitales claras, funcionales y enfocadas en negocios reales que buscan una presencia profesional en internet.",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Coralab - Presencia digital sin complicaciones",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Coralab | Presencia digital sin complicaciones",
    description:
      "Sitios web y soluciones digitales claras, funcionales y pensadas para negocios reales.",
    images: ["/twitter-image"],
  },
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
