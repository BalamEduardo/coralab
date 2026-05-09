"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useId, useState } from "react";
import { ArrowRight, Menu, X } from "lucide-react";

import { cn } from "@/lib/utils";

type NavItem = {
  label: string;
  href: `/#${string}`;
};

interface NavbarProps {
  items?: NavItem[];
  ctaHref?: `/#${string}`;
  className?: string;
}

const defaultItems: NavItem[] = [
  { label: "Nosotros", href: "/#funcion" },
  { label: "Servicios", href: "/#servicios" },
  { label: "Proceso", href: "/#proceso" },
  { label: "Casos", href: "/#casos" },
];

const logo = {
  alt: "Coralab",
  height: 186,
  src: "/brand/logo-horizontal-blue.svg",
  width: 820,
};

export function Navbar({
  items = defaultItems,
  ctaHref = "/#contacto",
  className,
}: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const menuId = useId();

  const closeMenu = () => setIsOpen(false);
  const toggleMenu = () => setIsOpen((open) => !open);

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeMenu();
      }
    };

    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, []);

  useEffect(() => {
    const desktopMedia = window.matchMedia("(min-width: 768px)");
    const handleViewportChange = (event: MediaQueryListEvent) => {
      if (event.matches) {
        closeMenu();
      }
    };

    desktopMedia.addEventListener("change", handleViewportChange);
    return () => desktopMedia.removeEventListener("change", handleViewportChange);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full border-b border-line-soft bg-background",
        className,
      )}
    >
      <nav
        aria-label="Navegacion principal"
        className="mx-auto grid min-h-[4.5rem] w-full grid-cols-[1fr_auto] items-center gap-5 px-4 sm:px-5 md:min-h-[5.5rem] md:grid-cols-[1fr_auto_1fr] lg:px-[76px]"
      >
        <Link
          href="/"
          aria-label="Ir al inicio"
          className="flex w-fit rounded-button focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          onClick={closeMenu}
        >
          <Image
            src={logo.src}
            alt={logo.alt}
            width={logo.width}
            height={logo.height}
            priority
            className="h-auto w-[132px] md:w-[150px]"
          />
        </Link>

        <ul className="hidden items-center justify-center gap-9 md:flex lg:gap-12">
          {items.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="rounded-button px-1 py-2 text-[15px] font-medium leading-none text-foreground transition-colors hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden justify-end md:flex">
          <Link
            href={ctaHref}
            className="group inline-flex min-h-11 items-center justify-center gap-4 rounded-button bg-accent px-5 text-[15px] font-semibold leading-none text-white transition-colors hover:bg-accent-light focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background lg:px-6"
          >
            Agendar diagn&oacute;stico
            <ArrowRight
              aria-hidden="true"
              className="h-4.5 w-4.5 transition-transform group-hover:translate-x-1"
              strokeWidth={1.8}
            />
          </Link>
        </div>

        <button
          type="button"
          onClick={toggleMenu}
          className="flex h-10 w-10 items-center justify-center justify-self-end rounded-button border border-border bg-surface text-foreground transition-colors hover:border-accent hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background md:hidden"
          aria-controls={menuId}
          aria-expanded={isOpen}
          aria-label={isOpen ? "Cerrar menu" : "Abrir menu"}
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      <div
        id={menuId}
        className={cn(
          "absolute inset-x-0 top-full grid border-b border-t border-line-soft bg-background shadow-card transition-[grid-template-rows] duration-200 md:hidden",
          isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
        )}
      >
        <div className="overflow-hidden">
          <div className="mx-auto flex w-full flex-col gap-1.5 px-3 py-4 sm:px-4 lg:px-4">
            {items.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={closeMenu}
                className="rounded-button px-1 py-2.5 text-lg font-medium text-foreground transition-colors hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href={ctaHref}
              onClick={closeMenu}
              className="mt-2 inline-flex min-h-11 items-center justify-center gap-3 rounded-button bg-accent px-5 text-[15px] font-semibold text-white transition-colors hover:bg-accent-light focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            >
              Agendar diagn&oacute;stico
              <ArrowRight aria-hidden="true" className="h-5 w-5" strokeWidth={1.8} />
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}

export type { NavItem, NavbarProps };
