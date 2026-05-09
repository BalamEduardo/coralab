import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Mail } from "lucide-react";

type FooterLink = {
  href: `/#${string}` | `mailto:${string}` | "https://www.instagram.com/coralab.dev/";
  label: string;
};

const logo = {
  alt: "Coralab",
  height: 186,
  src: "/brand/logo-horizontal-dark.png",
  width: 820,
};

const footerGroups: Array<{
  links: FooterLink[];
  title: string;
}> = [
  {
    title: "Explorar",
    links: [
      { label: "Nosotros", href: "/#funcion" },
      { label: "Servicios", href: "/#servicios" },
      { label: "Proceso", href: "/#proceso" },
      { label: "Casos", href: "/#casos" },
    ],
  },
  {
    title: "Servicios",
    links: [
      { label: "Web", href: "/#servicios" },
      { label: "Producto digital", href: "/#servicios" },
      { label: "UX/UI", href: "/#servicios" },
      { label: "Sistemas de diseño", href: "/#servicios" },
    ],
  },
  {
    title: "Social",
    links: [{ label: "Instagram", href: "https://www.instagram.com/coralab.dev/" }],
  },
];

function InstagramIcon() {
  return (
    <svg
      aria-hidden="true"
      className="h-4 w-4"
      fill="none"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        height="17"
        rx="5"
        stroke="currentColor"
        strokeWidth="1.7"
        width="17"
        x="3.5"
        y="3.5"
      />
      <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.7" />
      <circle cx="17" cy="7" fill="currentColor" r="1.1" />
    </svg>
  );
}

export function Footer() {
  return (
    <footer className="w-full bg-background px-5 pb-5 sm:px-8 md:px-[4.75rem]">
      <div className="mx-auto w-full max-w-[92rem] overflow-hidden rounded-[0.65rem] border border-border bg-background/35 shadow-[0_0_0_1px_rgba(255,255,255,0.45)_inset]">
        <div className="grid gap-9 px-5 py-8 sm:px-8 md:grid-cols-[1.15fr_1fr] md:px-[3.2rem] md:py-10 lg:grid-cols-[1.25fr_0.75fr_0.75fr_1fr] lg:gap-10">
          <div>
            <Link
              href="/"
              aria-label="Ir al inicio"
              className="flex w-fit rounded-button focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            >
              <Image
                src={logo.src}
                alt={logo.alt}
                width={logo.width}
                height={logo.height}
                className="h-auto w-[132px] md:w-[150px]"
              />
            </Link>

            <p className="mt-5 max-w-[21rem] text-[15px] leading-[1.5] text-muted md:text-[16px]">
              Claridad digital para marcas que necesitan comunicar mejor,
              ordenar sistemas y construir experiencias funcionales.
            </p>
          </div>

          {footerGroups.map((group) => (
            <nav key={group.title} aria-label={group.title}>
              <p className="text-[10px] font-semibold uppercase leading-none tracking-[0.34em] text-accent">
                {group.title}
              </p>
              <ul className="mt-4 space-y-3">
                {group.links.map((link) => (
                  <li key={`${group.title}-${link.label}`}>
                    {link.href.startsWith("https://") ? (
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 rounded-button text-[15px] leading-none text-foreground transition-colors hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                      >
                        <InstagramIcon />
                        {link.label}
                      </a>
                    ) : (
                      <Link
                        href={link.href}
                        className="inline-flex rounded-button text-[15px] leading-none text-foreground transition-colors hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                      >
                        {link.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </nav>
          ))}

          <div className="rounded-[0.45rem] border border-border bg-surface/45 p-4">
            <p className="text-[10px] font-semibold uppercase leading-none tracking-[0.34em] text-accent">
              Contacto
            </p>
            <p className="mt-4 text-[22px] font-normal leading-[1.08] text-foreground">
              Empecemos con un diagn&oacute;stico claro.
            </p>
            <a
              href="mailto:hola@coralab.dev"
              className="mt-5 inline-flex min-h-10 items-center justify-center gap-3 rounded-[0.22rem] bg-accent px-4 text-[14px] font-medium leading-none text-white transition-colors hover:bg-accent-light focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            >
              <Mail aria-hidden="true" className="h-4 w-4" strokeWidth={1.7} />
              Escribir ahora
              <ArrowRight aria-hidden="true" className="h-4 w-4" strokeWidth={1.7} />
            </a>
          </div>
        </div>

        <div className="flex flex-col gap-3 border-t border-border px-5 py-4 text-[13px] leading-none text-muted sm:px-8 md:flex-row md:items-center md:justify-between md:px-[3.2rem]">
          <p>Coralab &middot; Estudio digital</p>
          <p>Web &middot; Producto digital &middot; UX/UI &middot; Sistemas de dise&ntilde;o</p>
        </div>
      </div>
    </footer>
  );
}
