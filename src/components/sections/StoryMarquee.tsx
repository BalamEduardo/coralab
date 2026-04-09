"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";

export function StoryMarquee() {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const shouldReduceMotion = Boolean(useReducedMotion());
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = window.matchMedia("(max-width: 767px)");
    setIsMobile(checkMobile.matches);
    
    const handler = (e: MediaQueryListEvent) => setIsMobile(e.matches);
    checkMobile.addEventListener("change", handler);
    return () => checkMobile.removeEventListener("change", handler);
  }, []);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const marqueeX1 = useTransform(scrollYProgress, [0, 1], ["41%", "15%"]);
  const marqueeX2 = useTransform(scrollYProgress, [0, 1], ["-18%", "5%"]);

  return (
    <section
      ref={sectionRef}
      aria-label="Storytelling"
      className="relative flex flex-col items-center justify-center overflow-hidden bg-background py-16 sm:py-32 md:py-40"
    >
      <div className="flex w-max flex-col gap-4 md:gap-6 lg:gap-8">
        {/* Primera linea: moviendose hacia la izquierda */}
        <motion.div
          className={`font-title flex whitespace-nowrap text-[3rem] leading-none font-black tracking-tight sm:text-[9vw] md:text-[8vw] lg:text-[7vw] ${
            isMobile && !shouldReduceMotion ? "animate-marquee-left" : ""
          }`}
          style={isMobile ? undefined : { x: shouldReduceMotion ? "0%" : marqueeX1 }}
        >
          {Array.from({ length: 10 }).map((_, i) => (
            <div key={`row1-${i}`} className="flex items-center">
              <span className="mx-3 text-foreground uppercase sm:mx-6">
                PRESENCIA DIGITAL
              </span>
              <span className="mx-3 text-xl text-foreground/20 sm:mx-6 sm:text-3xl md:text-5xl">
                •
              </span>
              <span className="font-subtitle mx-3 font-light italic text-accent uppercase sm:mx-6">
                SOLUCIONES REALES
              </span>
              <span className="mx-3 text-xl text-foreground/20 sm:mx-6 sm:text-3xl md:text-5xl">
                •
              </span>
              <span className="mx-3 text-foreground uppercase sm:mx-6">
                HECHO A LA MEDIDA
              </span>
              <span className="mx-3 text-xl text-foreground/20 sm:mx-6 sm:text-3xl md:text-5xl">
                •
              </span>
            </div>
          ))}
        </motion.div>

        {/* Segunda linea: moviendose hacia la derecha */}
        <motion.div
          className={`font-title flex whitespace-nowrap text-[3rem] leading-none font-black tracking-tight sm:text-[9vw] md:text-[8vw] lg:text-[7vw] ${
            isMobile && !shouldReduceMotion ? "animate-marquee-right" : ""
          }`}
          style={isMobile ? undefined : { x: shouldReduceMotion ? "-10%" : marqueeX2 }}
        >
          {Array.from({ length: 10 }).map((_, i) => (
            <div key={`row2-${i}`} className="flex items-center">
              <span className="font-subtitle mx-3 font-light italic text-accent uppercase sm:mx-6">
                con ideas reales
              </span>
              <span className="mx-3 text-xl text-foreground/20 sm:mx-6 sm:text-3xl md:text-5xl">
                •
              </span>
              <span className="mx-3 text-foreground uppercase sm:mx-6">
                HECHA A LA MEDIDA
              </span>
              <span className="mx-3 text-xl text-foreground/20 sm:mx-6 sm:text-3xl md:text-5xl">
                •
              </span>
              <span className="mx-3 text-foreground uppercase sm:mx-6">
                PRESENCIA DIGITAL
              </span>
              <span className="mx-3 text-xl text-foreground/20 sm:mx-6 sm:text-3xl md:text-5xl">
                •
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
