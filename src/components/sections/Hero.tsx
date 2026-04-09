"use client";

import { useEffect, useRef, useState } from "react";
import {
  type MotionValue,
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";

const HERO_LINES = [
  { start: "Transformamos", accent: "ideas", end: "en" },
  { start: "soluciones", accent: "digitales", end: "" },
  { start: "reales.", accent: "", end: "" },
] as const;
const HERO_SEGMENTS = HERO_LINES.map((line) => [
  { text: line.start, accent: false },
  ...(line.accent ? [{ text: line.accent, accent: true }] : []),
  ...(line.end ? [{ text: line.end, accent: false }] : []),
]);

const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];
const NOISE_TEXTURE =
  "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E\")";

function HeroTitleLine({
  index,
  scrollYProgress,
  isMobile,
  disableScrollParallax,
  shouldReduceMotion,
}: {
  index: number;
  scrollYProgress: MotionValue<number>;
  isMobile: boolean;
  disableScrollParallax: boolean;
  shouldReduceMotion: boolean;
}) {
  const lineSegments = HERO_SEGMENTS[index];

  const exitStart = 0.05 + index * 0.15;
  const exitEnd = exitStart + 0.35;

  const lineOpacity = useTransform(scrollYProgress, [exitStart, exitEnd], [1, 0]);
  const lineY = useTransform(scrollYProgress, [exitStart, exitEnd], [0, -48]);

  return (
    <motion.span
      className="flex justify-center overflow-visible py-3 -my-3 sm:py-4 sm:-my-4"
      style={
        disableScrollParallax
          ? undefined
          : {
              opacity: lineOpacity,
              y: lineY,
            }
      }
    >
      <motion.span
        className={`flex whitespace-nowrap ${isMobile ? "animate-[hero-fade-up_0.8s_cubic-bezier(0.16,1,0.3,1)_both]" : ""}`}
        style={isMobile ? { animationDelay: `${index * 0.15}s` } : undefined}
        initial={
          isMobile
            ? false
            : shouldReduceMotion
              ? { opacity: 1 }
              : { opacity: 0, y: 40 }
        }
        animate={isMobile ? undefined : { opacity: 1, y: 0 }}
        transition={
          isMobile
            ? undefined
            : {
                duration: shouldReduceMotion ? 0.35 : 1.2,
                ease: EASE,
                delay: shouldReduceMotion ? 0 : index * 0.4,
              }
        }
      >
        {lineSegments.map((segment, segIndex) => (
          <span
            key={`${index}-${segIndex}`}
            className={
              segIndex === 0
                ? "inline-flex items-baseline"
                : "inline-flex items-baseline ml-[0.18em] sm:ml-[0.40em]"
            }
          >
            <span
              className={
                segment.accent
                  ? "font-subtitle inline-block font-light italic text-accent"
                  : "inline-block"
              }
            >
              {segment.text}
            </span>
          </span>
        ))}
      </motion.span>
    </span>
  );
}

export function Hero() {
  const shouldReduceMotion = Boolean(useReducedMotion());
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    
    // Detect mobile using media query to match other components
    const mobileMedia = window.matchMedia("(max-width: 767px)");
    setIsMobile(mobileMedia.matches);
    
    const handler = (e: MediaQueryListEvent) => setIsMobile(e.matches);
    mobileMedia.addEventListener("change", handler);
    return () => mobileMedia.removeEventListener("change", handler);
  }, []);

  // Standardize scroll parallax disabled state based on viewport width
  const disableScrollParallax = shouldReduceMotion || isMobile;

  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end 55%"],
  });

  return (
    <section
      id="inicio"
      ref={heroRef}
      className="relative mx-auto flex min-h-svh w-full max-w-7xl items-center justify-center overflow-hidden px-4 pb-14 pt-24 text-center sm:pb-16 sm:pt-28"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-1 hidden opacity-[0.05] sm:block"
        style={{ backgroundImage: NOISE_TEXTURE }}
      />

      <motion.div
        className="hero-parallax-text relative z-10 flex w-full flex-col items-center"
        initial={shouldReduceMotion || isMobile ? false : { opacity: 0 }}
        animate={isMobile ? undefined : { opacity: 1 }}
        transition={
          isMobile
            ? undefined
            : {
                duration: shouldReduceMotion ? 0.01 : 0.85,
                ease: EASE,
              }
        }
      >
        <motion.h1
          className="font-title w-full max-w-6xl text-[clamp(1.75rem,7.5vw,3.75rem)] leading-[0.9] tracking-[-0.015em] text-foreground sm:text-[clamp(4.6rem,10vw,7rem)] sm:leading-[0.86] sm:tracking-[-0.04em] lg:text-[clamp(5.2rem,6vw,7.4rem)] lg:tracking-[-0.05em]"
        >
          {HERO_LINES.map((line, index) => (
            <HeroTitleLine
              key={`${line.start}-${line.end}-${line.accent}`}
              index={index}
              scrollYProgress={scrollYProgress}
              isMobile={isMobile}
              disableScrollParallax={disableScrollParallax}
              shouldReduceMotion={shouldReduceMotion}
            />
          ))}
        </motion.h1>
      </motion.div>
    </section>
  );
}
