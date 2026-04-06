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
      // Remove synchronous setState; initial state is fine, we update on mount by listening to changes or invoking function not synchronously at root.
      // Wait, setTimeout 0 is a workaround for set-state-in-effect if we need to set it, or just use a helper func.
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
      className="relative w-full h-full"
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

export function WorkSection() {
  return (
    <section
      id="trabajo"
      className="relative z-20 w-full bg-[#f4f4f2] rounded-t-[3rem] md:rounded-t-[5rem] border-t border-stone-300/80 -mt-12 pt-12"
    >
      <div className="px-6 md:px-8 max-w-7xl mx-auto py-24 md:py-40">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
          className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 md:mb-24 gap-8 md:gap-4"
        >
          <h2 className="font-title text-5xl sm:text-7xl md:text-8xl font-bold tracking-tight text-foreground leading-[0.9]">
            Trabajo
            <br />
            <span className="font-subtitle italic font-light text-accent">
              Seleccionado
            </span>
          </h2>
          <p className="font-body italic text-xl md:text-2xl text-foreground/90 max-w-sm leading-relaxed">
            Proyectos reales, enfocados en resolver problemas. 
          </p>
        </motion.div>

        <div className="space-y-12 md:space-y-32">
          {/* Proyecto 1: Momento (Full Width) */}
          <ParallaxCard
            speed={0.5}
            className="group relative bg-surface rounded-3xl sm:rounded-4xl md:rounded-[3rem] flex flex-col md:flex-row items-center shadow-2xl transition-[box-shadow,border] duration-700 border border-foreground/5 overflow-hidden"
          >
            <div className="w-full md:w-3/5 h-64 sm:h-80 md:h-136 lg:h-160 overflow-hidden relative bg-foreground/5">
              <Image
                src="/Project/momento.webp"
                alt="Proyecto Momento"
                fill
                sizes="(min-width: 768px) 60vw, 100vw"
                className="object-cover object-top transition-transform duration-1000 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-foreground/5 mix-blend-multiply transition-opacity duration-700 group-hover:opacity-0" />
            </div>
            <div className="w-full md:w-2/5 p-8 md:p-12 lg:p-16 flex flex-col justify-center bg-surface relative z-10">
              <div className="mb-6 flex space-x-2">
                <span className="font-body rounded-full border border-foreground/10 px-4 py-1.5 text-[10px] font-bold uppercase tracking-[0.3em] text-accent">
                  Web App
                </span>
                <span className="font-body rounded-full border border-foreground/10 px-4 py-1.5 text-[10px] font-bold uppercase tracking-[0.3em] text-foreground/40">
                  2026
                </span>
              </div>
              <h3 className="font-subtitle text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 tracking-tighter text-foreground">
                Momento
              </h3>
              <p className="font-body text-lg md:text-xl text-foreground/60 leading-relaxed mb-8 md:mb-12 italic">
                Todas las fotos, en un solo lugar. Momento es una aplicación web que centraliza tus recuerdos visuales y se proyectan en tiempo real.
              </p>
              <a className="font-body group/btn relative inline-flex w-fit items-center gap-4 border-b border-foreground/20 pb-2 text-[10px] font-bold uppercase tracking-[0.3em] text-foreground transition-colors hover:border-accent hover:text-accent cursor-pointer">
                Explorar Proyecto{" "}
                <MoveUpRight className="w-4 h-4 transition-transform duration-300 group-hover/btn:-translate-y-1 group-hover/btn:translate-x-1" />
              </a>
            </div>
          </ParallaxCard>

          {/* Fila Asimétrica */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-start">
            {/* Proyecto 2 */}
            <ParallaxCard
              speed={0.4}
              className="group bg-surface rounded-3xl sm:rounded-4xl shadow-2xl md:rounded-[3rem] border border-foreground/5 hover:shadow-2xl transition-[box-shadow,border] duration-700 overflow-hidden"
            >
              <div className="h-64 sm:h-72 md:h-112 lg:h-128 overflow-hidden relative bg-foreground/5">
                <Image
                  src="/Project/Apex.webp"
                  alt="Proyecto Apex"
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
                <h3 className="font-subtitle text-3xl md:text-4xl lg:text-5xl font-bold mb-4 tracking-tighter leading-none text-foreground">
                  Apex
                </h3>
                <p className="font-body text-base md:text-lg text-foreground/60 italic">
                  Pagina diseñada para mostrar servicios, generar confianza y facilitar el contacto con nuevos clientes, con un diseño moderno y profesional que refleja la identidad de la marca.
                </p>
              </div>
            </ParallaxCard>

            {/* Proyecto 3 */}
            <ParallaxCard
              speed={-0.2}
              className="group bg-surface rounded-3xl sm:rounded-4xl shadow-2xl md:rounded-[3rem] border border-foreground/5 hover:shadow-2xl transition-[box-shadow,border] duration-700 md:mt-32 overflow-hidden"
            >
              <div className="h-64 sm:h-72 md:h-112 lg:h-128 overflow-hidden relative bg-foreground/5">
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
                <h3 className="font-subtitle text-3xl md:text-4xl lg:text-5xl font-bold mb-4 tracking-tighter leading-none text-foreground">
                  Streetware
                </h3>
                <p className="font-body text-base md:text-lg text-foreground/60 italic">
                  Catalogo online para una marca de ropa urbana, con un diseño audaz y moderno que refleja la identidad de la marca y atrae a su público objetivo.
                </p>
              </div>
            </ParallaxCard>
          </div>
        </div>
      </div>
    </section>
  );
}
