import type { Metadata } from "next";
import { sans } from "@/lib/fonts";
import { LenisProvider } from "@/components/LenisProvider";
import "./globals.css";

const SITE_URL = "https://coralab.dev";
const SITE_NAME = "Coralab";
const SITE_EMAIL = "hola@coralab.dev";
const SITE_INSTAGRAM = "https://www.instagram.com/coralab.dev/";
const SITE_TITLE = `${SITE_NAME} | Claridad digital para marcas`;
const SITE_DESCRIPTION =
  "Diseñamos webs, productos y sistemas digitales que comunican con precisión, mejoran la experiencia y ordenan la operación.";

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
    default: SITE_TITLE,
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
    "web design México",
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
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    images: [
      {
        url: "/opengraph-image?v=2",
        width: 1200,
        height: 630,
        alt: "Coralab - Claridad digital para marcas",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    images: ["/twitter-image?v=2"],
  },
};

const structuredData = [
  {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE_NAME,
    url: SITE_URL,
    email: SITE_EMAIL,
    sameAs: [SITE_INSTAGRAM],
    description: SITE_DESCRIPTION,
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer support",
      email: SITE_EMAIL,
      availableLanguage: ["es"],
    },
  },
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE_NAME,
    url: SITE_URL,
    inLanguage: "es-MX",
    description: SITE_DESCRIPTION,
  },
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={sans.variable}>
      <body className="min-h-screen bg-background font-sans text-foreground antialiased selection:bg-accent/20 selection:text-foreground">
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
