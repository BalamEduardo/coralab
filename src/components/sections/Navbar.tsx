"use client";

import { useEffect, useId, useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";

import { cn } from "@/lib/utils";

type NavItem = {
  label: string;
  href: `#${string}`;
};

interface NavbarProps {
  items?: NavItem[];
  ctaHref?: `#${string}`;
  className?: string;
}

const defaultItems: NavItem[] = [
  { label: "Trabajo", href: "#trabajo" },
  { label: "Nosotros", href: "#nosotros" },
  { label: "Servicios", href: "#servicios" },
];

const MENU_EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

export function Navbar({
  items = defaultItems,
  ctaHref = "#contact",
  className,
}: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const shouldReduceMotion = Boolean(useReducedMotion());
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
    const handleHashChange = () => {
      closeMenu();
    };

    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
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
    <header className="pointer-events-none fixed inset-x-0 top-4 z-50 flex flex-col items-center px-4 sm:top-6">
      <motion.nav
        aria-label="Navegacion principal"
        initial={false}
        animate={{
          borderRadius: isOpen ? 32 : 999,
          y: isOpen ? 2 : 0,
        }}
        transition={{
          duration: shouldReduceMotion ? 0.01 : 0.28,
          ease: MENU_EASE,
        }}
        className={cn(
          "pointer-events-auto relative flex w-full max-w-76 flex-col items-center rounded-[999px] border border-foreground/5 bg-surface/75 shadow-[0_8px_10px_rgba(0,0,0,0.30)] backdrop-blur-2xl sm:max-w-max",
          className,
        )}
      >
        <div className="flex w-full items-center justify-between gap-4 p-1.5 pl-4 sm:pl-6 md:gap-10">
          <a
            href="#top"
            className="font-title shrink-0 rounded-full text-lg font-bold tracking-tight text-foreground transition-colors hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent sm:text-xl"
            onClick={closeMenu}
          >
            Coralab.
          </a>

          <ul className="hidden items-center md:flex">
            {items.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="font-body rounded-full px-4 py-2 text-[10px] font-bold uppercase tracking-[0.25em] text-foreground/60 transition-colors hover:text-foreground focus-visible:outline-none"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-2">
            <a
              href={ctaHref}
              onClick={closeMenu}
              className="font-body group flex min-h-10 items-center justify-center gap-2 rounded-full bg-foreground px-4 text-[10px] font-bold uppercase tracking-[0.22em] text-background transition-all hover:bg-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background sm:min-h-11 sm:px-6 sm:tracking-[0.25em]"
            >
              Hablemos
              <ArrowUpRight
                size={14}
                className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </a>

            <button
              type="button"
              onClick={toggleMenu}
              className="flex h-10 w-10 items-center justify-center rounded-full text-foreground transition-colors hover:bg-foreground/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent md:hidden"
              aria-controls={menuId}
              aria-expanded={isOpen}
              aria-haspopup="menu"
              aria-label={isOpen ? "Cerrar menu" : "Abrir menu"}
            >
              <motion.span
                animate={{ rotate: isOpen ? 180 : 0, scale: isOpen ? 0.92 : 1 }}
                transition={{
                  duration: shouldReduceMotion ? 0.01 : 0.22,
                  ease: MENU_EASE,
                }}
                className="flex items-center justify-center"
              >
                {isOpen ? <X size={20} /> : <Menu size={20} />}
              </motion.span>
            </button>
          </div>
        </div>

        <AnimatePresence initial={false}>
          {isOpen && (
            <motion.div
              id={menuId}
              role="menu"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{
                duration: shouldReduceMotion ? 0.01 : 0.24,
                ease: MENU_EASE,
              }}
              className="w-full overflow-hidden md:hidden"
            >
              <motion.ul
                initial="closed"
                animate="open"
                exit="closed"
                variants={{
                  open: {
                    transition: {
                      delayChildren: 0.03,
                      staggerChildren: 0.05,
                    },
                  },
                  closed: {
                    transition: {
                      staggerChildren: 0.03,
                      staggerDirection: -1,
                    },
                  },
                }}
                className="flex flex-col items-center gap-2 px-3 pb-4 pt-1"
              >
                {items.map((item) => (
                  <motion.li
                    key={item.href}
                    variants={{
                      closed: { opacity: 0, y: -4 },
                      open: { opacity: 1, y: 0 },
                    }}
                    transition={{
                      duration: shouldReduceMotion ? 0.01 : 0.2,
                      ease: MENU_EASE,
                    }}
                    className="w-full"
                  >
                    <a
                      href={item.href}
                      role="menuitem"
                      onClick={closeMenu}
                      className="font-body block w-full rounded-2xl px-4 py-3 text-center text-[11px] font-bold uppercase tracking-[0.25em] text-foreground/80 transition-colors hover:bg-foreground/5 hover:text-foreground active:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                    >
                      {item.label}
                    </a>
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </header>
  );
}

export type { NavItem, NavbarProps };
