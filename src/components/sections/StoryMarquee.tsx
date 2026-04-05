"use client";

import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";

export function StoryMarquee() {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const shouldReduceMotion = Boolean(useReducedMotion());

  // Track scroll only when the section is entering/leaving the viewport
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // Movimiento horizontal continuo pero natural hacia lados opuestos (velocidad reducida)
  const marqueeX1 = useTransform(scrollYProgress, [0, 1], ["41%", "15%"]);
  const marqueeX2 = useTransform(scrollYProgress, [0, 1], ["-18%", "5%"]);

  return (
    <section
      ref={sectionRef}
      aria-label="Storytelling"
      className="relative flex flex-col items-center justify-center overflow-hidden bg-background py-16 sm:py-32 md:py-40"
    >
      <div className="flex w-max flex-col gap-4 md:gap-6 lg:gap-8">
        {/* Primera línea: moviéndose hacia la izquierda */}
        <motion.div
          className="font-title flex whitespace-nowrap font-black text-[3rem] sm:text-[9vw] md:text-[8vw] lg:text-[7vw] leading-none tracking-tight"
          style={{ x: shouldReduceMotion ? "0%" : marqueeX1 }}
        >
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={`row1-${i}`} className="flex items-center">
              <span className="mx-3 sm:mx-6 text-foreground uppercase">PRESENCIA DIGITAL</span>
              <span className="mx-3 sm:mx-6 text-foreground/20 text-xl sm:text-3xl md:text-5xl">•</span>
              <span className="font-subtitle mx-3 sm:mx-6 font-light italic text-accent uppercase">
                SOLUCIONES REALES
              </span>
              <span className="mx-3 sm:mx-6 text-foreground/20 text-xl sm:text-3xl md:text-5xl">•</span>
              <span className="mx-3 sm:mx-6 text-foreground uppercase">HECHO A LA MEDIDA</span>
              <span className="mx-3 sm:mx-6 text-foreground/20 text-xl sm:text-3xl md:text-5xl">•</span>
            </div>
          ))}
        </motion.div>

        {/* Segunda línea: moviéndose hacia la derecha */}
        <motion.div
          className="font-title flex whitespace-nowrap font-black text-[3rem] sm:text-[9vw] md:text-[8vw] lg:text-[7vw] leading-none tracking-tight"
          style={{ x: shouldReduceMotion ? "-10%" : marqueeX2 }}
        >
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={`row2-${i}`} className="flex items-center">
              <span className="font-subtitle mx-3 sm:mx-6 font-light italic text-accent uppercase">
                con ideas reales
              </span>
              <span className="mx-3 sm:mx-6 text-foreground/20 text-xl sm:text-3xl md:text-5xl">•</span>
              <span className="mx-3 sm:mx-6 text-foreground uppercase">HECHA A LA MEDIDA</span>
              <span className="mx-3 sm:mx-6 text-foreground/20 text-xl sm:text-3xl md:text-5xl">•</span>
              <span className="mx-3 sm:mx-6 text-foreground uppercase">PRESENCIA DIGITAL</span>
              <span className="mx-3 sm:mx-6 text-foreground/20 text-xl sm:text-3xl md:text-5xl">•</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
