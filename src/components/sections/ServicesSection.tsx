"use client";

import { useEffect, useState, type ReactNode } from "react";
import { motion, useReducedMotion, type Variants } from "framer-motion";
import { Brush, Layers, Terminal, Wand2 } from "lucide-react";

const desktopFadeUp: Variants = {
  hidden: { opacity: 0, y: "var(--y-offset, 50px)" },
  visible: {
    opacity: 1,
    y: "0px",
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
  },
};

const gentleFadeUp: Variants = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
};

const reducedFadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.28, ease: "easeOut" },
  },
};

const desktopViewport = { once: true, margin: "-96px 0px -12% 0px" } as const;
const gentleViewport = { once: true, margin: "0px 0px -16% 0px" } as const;

type AnimatedServiceCardProps = {
  children: ReactNode;
  contentClassName: string;
  decoration?: ReactNode;
  shellClassName: string;
  useGentleMotion: boolean;
  useReducedMotionPath: boolean;
};

function AnimatedServiceCard({
  children,
  contentClassName,
  decoration,
  shellClassName,
  useGentleMotion,
  useReducedMotionPath,
}: AnimatedServiceCardProps) {
  const contentVariants = useReducedMotionPath ? reducedFadeIn : gentleFadeUp;

  if (useGentleMotion) {
    return (
      <div className={shellClassName}>
        {decoration}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={gentleViewport}
          variants={contentVariants}
          style={{
            willChange: useReducedMotionPath ? "opacity" : "transform, opacity",
          }}
          className={contentClassName}
        >
          {children}
        </motion.div>
      </div>
    );
  }

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={desktopViewport}
      variants={desktopFadeUp}
      style={{ willChange: "transform, opacity" }}
      className={shellClassName}
    >
      <div className={contentClassName}>{children}</div>
      {decoration}
    </motion.div>
  );
}

function subscribeToMediaQuery(
  query: MediaQueryList,
  listener: () => void,
) {
  if (typeof query.addEventListener === "function") {
    query.addEventListener("change", listener);
    return () => query.removeEventListener("change", listener);
  }

  query.addListener(listener);
  return () => query.removeListener(listener);
}

export function ServicesSection() {
  const shouldReduceMotion = Boolean(useReducedMotion());
  const [preferGentleMobileMotion, setPreferGentleMobileMotion] =
    useState(true);

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    const coarsePointerQuery = window.matchMedia("(pointer: coarse)");
    const smallViewportQuery = window.matchMedia("(max-width: 767px)");

    const updateMotionMode = () => {
      setPreferGentleMobileMotion(
        coarsePointerQuery.matches || smallViewportQuery.matches,
      );
    };

    updateMotionMode();

    const unsubscribeCoarse = subscribeToMediaQuery(
      coarsePointerQuery,
      updateMotionMode,
    );
    const unsubscribeViewport = subscribeToMediaQuery(
      smallViewportQuery,
      updateMotionMode,
    );

    return () => {
      unsubscribeCoarse();
      unsubscribeViewport();
    };
  }, []);

  const useGentleMotion = shouldReduceMotion || preferGentleMobileMotion;
  const sectionReveal = shouldReduceMotion
    ? reducedFadeIn
    : useGentleMotion
      ? gentleFadeUp
      : desktopFadeUp;

  return (
    <section
      id="servicios"
      className="relative z-30 w-full rounded-t-[3rem] border-t border-foreground/5 bg-background pt-12 pb-24 md:rounded-t-[5rem] md:pb-32 -mt-12"
    >
      <div className="mx-auto max-w-7xl px-6 pt-12 md:px-8 md:pt-20">
        <div className="relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={useGentleMotion ? gentleViewport : desktopViewport}
            variants={sectionReveal}
            style={{
              willChange:
                shouldReduceMotion || useGentleMotion
                  ? "opacity"
                  : "transform, opacity",
            }}
            className="mb-16 max-w-4xl [--y-offset:0px] md:mb-28 md:[--y-offset:50px]"
          >
            <h2 className="mb-6 font-title text-5xl leading-[0.9] font-bold tracking-tight text-foreground sm:text-7xl md:mb-8 md:text-8xl lg:text-8xl">
              Lo que usamos <br />
              <span className="font-subtitle font-light italic text-accent">
                para construir.
              </span>
            </h2>
            <p className="font-subtitle text-xl leading-relaxed font-light italic text-foreground/60 md:text-3xl">
              Herramientas y soluciones que utilizamos para llevar ideas a
              digital.
            </p>
          </motion.div>

          <div className="grid auto-rows-auto grid-cols-1 gap-6 md:grid-cols-3 md:gap-8 lg:auto-rows-[420px]">
            <AnimatedServiceCard
              useGentleMotion={useGentleMotion}
              useReducedMotionPath={shouldReduceMotion}
              shellClassName="relative flex flex-col justify-between overflow-hidden rounded-3xl border border-foreground/5 bg-surface p-8 transition-all duration-700 group md:col-span-2 md:rounded-[3rem] md:p-12 md:hover:border-foreground/10 md:hover:shadow-xl lg:p-16 [--y-offset:0px] md:[--y-offset:50px]"
              contentClassName="relative z-10 flex h-full flex-col justify-between"
              decoration={
                <Terminal className="absolute right-[-5%] bottom-[-10%] h-64 w-64 -rotate-12 text-foreground opacity-[0.02] transition-all duration-700 sm:h-72 sm:w-72 md:h-[450px] md:w-[450px] md:group-hover:scale-110 md:group-hover:opacity-[0.04]" />
              }
            >
              <div className="flex items-start justify-between">
                <div className="flex h-14 w-14 items-center justify-center rounded-full border border-foreground/5 bg-background transition-transform duration-500 md:group-hover:scale-110">
                  <Terminal className="h-6 w-6 text-accent" />
                </div>
                <span className="font-body rounded-full border border-foreground/10 px-4 py-1.5 text-[10px] font-bold tracking-[0.3em] text-foreground/60 uppercase">
                  Engineering
                </span>
              </div>
              <div className="mt-32 md:mt-0">
                <h4 className="mb-4 font-subtitle text-4xl font-bold tracking-tighter text-foreground md:text-5xl lg:text-6xl">
                  Páginas web rápidas
                </h4>
                <p className="font-body max-w-md text-lg italic text-foreground/60 md:text-xl">
                  Sitios simples y claros pensados para mostrar tu negocio y
                  generar clientes.
                </p>
              </div>
            </AnimatedServiceCard>

            <AnimatedServiceCard
              useGentleMotion={useGentleMotion}
              useReducedMotionPath={shouldReduceMotion}
              shellClassName="group relative flex flex-col justify-between overflow-hidden rounded-3xl bg-accent p-8 text-background transition-transform duration-500 md:rounded-[3rem] md:p-12 md:hover:-translate-y-2 md:hover:shadow-2xl lg:p-16 [--y-offset:0px] md:[--y-offset:50px]"
              contentClassName="relative z-10 flex h-full flex-col justify-between"
              decoration={
                <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-foreground/10 to-transparent opacity-0 transition-opacity duration-700 md:group-hover:opacity-100" />
              }
            >
              <div className="flex items-start justify-between">
                <Wand2 className="h-10 w-10 opacity-80 transition-transform duration-700 md:h-12 md:w-12 md:group-hover:scale-110 md:group-hover:rotate-12 lg:h-12 lg:w-12" />
                <span className="font-body rounded-full border border-background/20 px-4 py-1.5 text-[10px] font-bold tracking-[0.3em] text-background/80 uppercase">
                  Design
                </span>
              </div>
              <div className="mt-32 md:mt-0">
                <h4 className="mb-4 font-subtitle text-4xl leading-none font-bold tracking-tighter md:text-5xl">
                  Diseño <br />
                  web
                </h4>
                <p className="font-body text-lg italic text-background/80 md:text-xl">
                  Interfaces limpias y funcionales que hacen fácil entender tu
                  negocio.
                </p>
              </div>
            </AnimatedServiceCard>

            <AnimatedServiceCard
              useGentleMotion={useGentleMotion}
              useReducedMotionPath={shouldReduceMotion}
              shellClassName="group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-foreground/5 bg-surface p-8 transition-all duration-700 md:rounded-[3rem] md:p-12 md:hover:border-foreground/10 md:hover:shadow-xl lg:p-16 [--y-offset:0px] md:[--y-offset:50px]"
              contentClassName="relative z-10 flex h-full flex-col justify-between"
            >
              <div className="flex items-start justify-between">
                <Layers className="h-10 w-10 text-accent transition-transform duration-700 md:h-12 md:w-12 md:group-hover:scale-110 lg:h-12 lg:w-12" />
                <span className="font-body rounded-full border border-foreground/10 px-4 py-1.5 text-[10px] font-bold tracking-[0.3em] text-foreground/60 uppercase">
                  Strategy
                </span>
              </div>
              <div className="mt-32 md:mt-0">
                <h4 className="mb-4 font-subtitle text-4xl font-bold tracking-tighter text-foreground md:text-5xl">
                  Estructura digital
                </h4>
                <p className="font-body text-lg italic text-foreground/60 md:text-xl">
                  Organización clara de tu información para que tus clientes
                  entiendan qué haces.
                </p>
              </div>
            </AnimatedServiceCard>

            <AnimatedServiceCard
              useGentleMotion={useGentleMotion}
              useReducedMotionPath={shouldReduceMotion}
              shellClassName="group relative flex flex-col items-start justify-between overflow-hidden rounded-3xl border border-foreground/5 bg-surface p-8 text-foreground transition-all duration-700 md:col-span-2 md:flex-row md:items-center md:rounded-[3rem] md:p-12 md:hover:border-foreground/10 md:hover:shadow-xl lg:p-16 [--y-offset:0px] md:[--y-offset:50px]"
              contentClassName="relative z-10"
              decoration={
                <div className="pointer-events-none absolute right-[-20%] bottom-[-20%] flex h-full w-64 items-center justify-center opacity-[0.02] transition-all duration-1000 md:right-[0%] md:top-[-20%] md:w-1/2 md:group-hover:scale-110 md:group-hover:opacity-[0.04]">
                  <Brush className="h-80 w-80 -rotate-12 md:h-[500px] md:w-[500px]" />
                </div>
              }
            >
              <div>
                <div className="mb-8 inline-block md:mb-12">
                  <span className="font-body rounded-full border border-foreground/10 px-4 py-1.5 text-[10px] font-bold tracking-[0.3em] text-foreground/60 uppercase">
                    Branding
                  </span>
                </div>
                <h4 className="mb-4 font-subtitle text-4xl font-bold tracking-tighter text-foreground md:mb-6 md:text-5xl lg:text-7xl">
                  Automatización básica
                </h4>
                <p className="font-body relative z-10 max-w-md text-lg italic text-foreground/60 md:text-xl">
                  Soluciones simples para ahorrar tiempo en procesos como
                  contacto o citas.
                </p>
              </div>
            </AnimatedServiceCard>
          </div>
        </div>
      </div>
    </section>
  );
}
