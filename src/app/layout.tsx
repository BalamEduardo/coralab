import type { Metadata } from "next";
import { Arvo, Lora, Molengo } from "next/font/google";
import { LenisProvider } from "@/components/LenisProvider";
import "./globals.css";

const SITE_URL = "https://coralab.dev";
const SITE_NAME = "Coralab";
const SITE_EMAIL = "hola@coralab.dev";
const SITE_DESCRIPTION =
  "Coralab es un espacio dedicado a crear sitios web y soluciones digitales sencillas para negocios que buscan una presencia profesional en internet, sin complicaciones ni promesas irreales.";

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
  metadataBase: new URL(SITE_URL),
  icons: {
    icon: [
      { url: "/favicon-16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32.png", sizes: "32x32", type: "image/png" },
      { url: "/icon-48.png", sizes: "48x48", type: "image/png" },
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
    ],
    shortcut: ["/favicon-32.png"],
    apple: [
      {
        url: "/apple-touch-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
  },
  title: {
    default: `${SITE_NAME} | Presencia digital sin complicaciones`,
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  applicationName: SITE_NAME,
  keywords: [
    SITE_NAME,
    "desarrollo web",
    "diseño web",
    "presencia digital",
    "sitios web para negocios",
    "soluciones digitales",
    "landing pages",
    "web design mexico",
  ],
  authors: [{ name: SITE_NAME, url: SITE_URL }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
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
    url: SITE_URL,
    siteName: SITE_NAME,
    title: `${SITE_NAME} | Presencia digital sin complicaciones`,
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
    title: `${SITE_NAME} | Presencia digital sin complicaciones`,
    description:
      "Sitios web y soluciones digitales claras, funcionales y pensadas para negocios reales.",
    images: ["/twitter-image"],
  },
};

const structuredData = [
  {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE_NAME,
    url: SITE_URL,
    email: SITE_EMAIL,
    description: SITE_DESCRIPTION,
  },
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE_NAME,
    url: SITE_URL,
    description: SITE_DESCRIPTION,
  },
];

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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData).replace(/</g, "\\u003c"),
          }}
        />
        <LenisProvider>{children}</LenisProvider>
      </body>
    </html>
  );
}
