"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { MoveUpRight } from "lucide-react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
  type Variants,
} from "framer-motion";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1, ease: [0.16, 1, 0.3, 1] },
  },
};

function ParallaxCard({
  children,
  className,
  speed = 1,
}: {
  children: React.ReactNode;
  className: string;
  speed?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const shouldReduceMotion = Boolean(useReducedMotion());
  const [isCoarsePointer, setIsCoarsePointer] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const coarseMedia = window.matchMedia("(pointer: coarse)");
      const updatePointerMode = () => setIsCoarsePointer(coarseMedia.matches);
      updatePointerMode();

      coarseMedia.addEventListener("change", updatePointerMode);
      return () => coarseMedia.removeEventListener("change", updatePointerMode);
    }
  }, []);

  const disableParallax = shouldReduceMotion || isCoarsePointer;
  const y = useTransform(scrollYProgress, [0, 1], [120 * speed, -120 * speed]);

  return (
    <motion.div
      ref={ref}
      style={disableParallax ? undefined : { y }}
      className="relative h-full w-full"
    >
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeUp}
        className={className}
      >
        {children}
      </motion.div>
    </motion.div>
  );
}

function ProjectLink({ href }: { href: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="font-body group/btn relative inline-flex w-fit items-center gap-4 border-b border-foreground/20 pb-2 text-[10px] font-bold uppercase tracking-[0.3em] text-foreground transition-colors hover:border-accent hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
    >
      Explorar Proyecto
      <MoveUpRight className="h-4 w-4 transition-transform duration-300 group-hover/btn:-translate-y-1 group-hover/btn:translate-x-1" />
    </a>
  );
}

export function WorkSection() {
  return (
    <section
      id="trabajo"
      className="relative z-20 -mt-12 w-full rounded-t-[3rem] border-t border-stone-300/80 bg-[#f4f4f2] pt-12 md:rounded-t-[5rem]"
    >
      <div className="mx-auto max-w-7xl px-6 py-24 md:px-8 md:py-40">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
          className="mb-16 flex flex-col items-start justify-between gap-8 md:mb-24 md:flex-row md:items-end md:gap-4"
        >
          <h2 className="font-title text-5xl font-bold leading-[0.9] tracking-tight text-foreground sm:text-7xl md:text-8xl">
            Trabajo
            <br />
            <span className="font-subtitle font-light italic text-accent">
              Seleccionado
            </span>
          </h2>
          <p className="font-body max-w-sm text-xl leading-relaxed italic text-foreground/90 md:text-2xl">
            Proyectos reales, enfocados en resolver problemas.
          </p>
        </motion.div>

        <div className="space-y-12 md:space-y-32">
          <ParallaxCard
            speed={0.5}
            className="group relative flex flex-col items-center overflow-hidden rounded-3xl border border-foreground/5 bg-surface shadow-2xl transition-[box-shadow,border] duration-700 md:flex-row md:rounded-[3rem]"
          >
            <div className="relative h-64 w-full overflow-hidden bg-foreground/5 sm:h-80 md:h-136 md:w-3/5 lg:h-160">
              <Image
                src="/Project/momento.webp"
                alt="Proyecto Momento"
                fill
                sizes="(min-width: 768px) 60vw, 100vw"
                className="object-cover object-top transition-transform duration-1000 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-foreground/5 mix-blend-multiply transition-opacity duration-700 group-hover:opacity-0" />
            </div>
            <div className="relative z-10 flex w-full flex-col justify-center bg-surface p-8 md:w-2/5 md:p-12 lg:p-16">
              <div className="mb-6 flex space-x-2">
                <span className="font-body rounded-full border border-foreground/10 px-4 py-1.5 text-[10px] font-bold uppercase tracking-[0.3em] text-accent">
                  Web App
                </span>
                <span className="font-body rounded-full border border-foreground/10 px-4 py-1.5 text-[10px] font-bold uppercase tracking-[0.3em] text-foreground/40">
                  2026
                </span>
              </div>
              <h3 className="font-subtitle mb-4 text-4xl font-bold tracking-tighter text-foreground md:mb-6 md:text-5xl lg:text-6xl">
                Momento
              </h3>
              <p className="font-body mb-8 text-lg leading-relaxed italic text-foreground/60 md:mb-12 md:text-xl">
                Todas las fotos, en un solo lugar. Momento es una aplicación
                web que centraliza tus recuerdos visuales y se proyectan en
                tiempo real.
              </p>
              <ProjectLink href="https://momento-ten-sigma.vercel.app/" />
            </div>
          </ParallaxCard>

          <div className="grid grid-cols-1 items-start gap-8 md:grid-cols-2 md:gap-12 lg:gap-16">
            <ParallaxCard
              speed={0.4}
              className="group overflow-hidden rounded-3xl border border-foreground/5 bg-surface shadow-2xl transition-[box-shadow,border] duration-700 hover:shadow-2xl md:rounded-[3rem]"
            >
              <div className="relative h-64 overflow-hidden bg-foreground/5 sm:h-72 md:h-112 lg:h-128">
                <Image
                  src="/Project/Apex.webp"
                  alt="Proyecto Apex"
                  fill
                  loading="eager"
                  sizes="(min-width: 768px) 50vw, 100vw"
                  className="object-cover object-top transition-transform duration-1000 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-foreground/5 mix-blend-multiply transition-opacity duration-700 group-hover:opacity-0" />
              </div>
              <div className="p-8 md:p-10 lg:p-12">
                <div className="mb-6 flex space-x-2">
                  <span className="font-body rounded-full border border-foreground/10 px-4 py-1.5 text-[10px] font-bold uppercase tracking-[0.3em] text-accent">
                    Performance
                  </span>
                  <span className="font-body rounded-full border border-foreground/10 px-4 py-1.5 text-[10px] font-bold uppercase tracking-[0.3em] text-foreground/40">
                    2025
                  </span>
                </div>
                <h3 className="font-subtitle mb-4 text-3xl font-bold leading-none tracking-tighter text-foreground md:text-4xl lg:text-5xl">
                  Apex
                </h3>
                <p className="font-body text-base italic text-foreground/60 md:text-lg">
                  Página diseñada para mostrar servicios, generar confianza y
                  facilitar el contacto con nuevos clientes, con un diseño
                  moderno y profesional que refleja la identidad de la marca.
                </p>
                <div className="mt-8">
                  <ProjectLink href="https://apex-cora.vercel.app/" />
                </div>
              </div>
            </ParallaxCard>

            <ParallaxCard
              speed={-0.2}
              className="group overflow-hidden rounded-3xl border border-foreground/5 bg-surface shadow-2xl transition-[box-shadow,border] duration-700 hover:shadow-2xl md:mt-32 md:rounded-[3rem]"
            >
              <div className="relative h-64 overflow-hidden bg-foreground/5 sm:h-72 md:h-112 lg:h-128">
                <Image
                  src="/Project/streetware.webp"
                  alt="Proyecto Streetware"
                  fill
                  sizes="(min-width: 768px) 50vw, 100vw"
                  className="object-cover object-top transition-transform duration-1000 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-foreground/5 mix-blend-multiply transition-opacity duration-700 group-hover:opacity-0" />
              </div>
              <div className="p-8 md:p-10 lg:p-12">
                <div className="mb-6 flex space-x-2">
                  <span className="font-body rounded-full border border-foreground/10 px-4 py-1.5 text-[10px] font-bold uppercase tracking-[0.3em] text-accent">
                    Performance
                  </span>
                  <span className="font-body rounded-full border border-foreground/10 px-4 py-1.5 text-[10px] font-bold uppercase tracking-[0.3em] text-foreground/40">
                    2025
                  </span>
                </div>
                <h3 className="font-subtitle mb-4 text-3xl font-bold leading-none tracking-tighter text-foreground md:text-4xl lg:text-5xl">
                  Streetware
                </h3>
                <p className="font-body text-base italic text-foreground/60 md:text-lg">
                  Catálogo online para una marca de ropa urbana, con un diseño
                  audaz y moderno que refleja la identidad de la marca y atrae
                  a su público objetivo.
                </p>
              </div>
            </ParallaxCard>
          </div>
        </div>
      </div>
    </section>
  );
}
