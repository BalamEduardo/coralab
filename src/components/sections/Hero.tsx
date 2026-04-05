"use client";

import { useRef } from "react";
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
  ...(line.accent ? [{ text: ` ${line.accent}`, accent: true }] : []),
  ...(line.end ? [{ text: ` ${line.end}`, accent: false }] : []),
]);

const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];
const NOISE_TEXTURE =
  "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E\")";

function HeroGlyph({
  char,
  accent,
  glyphIndex,
  scrollYProgress,
  shouldReduceMotion,
}: {
  char: string;
  accent: boolean;
  glyphIndex: number;
  scrollYProgress: MotionValue<number>;
  shouldReduceMotion: boolean;
}) {
  const exitStart = 0.05 + glyphIndex * 0.012;
  const exitEnd = exitStart + 0.35;

  const glyphOpacity = useTransform(scrollYProgress, [exitStart, exitEnd], [1, 0]);
  const glyphY = useTransform(scrollYProgress, [exitStart, exitEnd], [0, -96]);
  const glyphScale = useTransform(scrollYProgress, [exitStart, exitEnd], [1, 0.85]);
  const glyphBlur = useTransform(scrollYProgress, [exitStart, exitEnd], ["blur(0px)", "blur(8px)"]);

  return (
    <motion.span
      className={accent ? "font-subtitle inline-block font-light italic text-accent" : "inline-block"}
      style={{
        opacity: shouldReduceMotion ? 1 : glyphOpacity,
        y: shouldReduceMotion ? 0 : glyphY,
        scale: shouldReduceMotion ? 1 : glyphScale,
        filter: shouldReduceMotion ? "none" : glyphBlur,
      }}
    >
      {char === " " ? "\u00A0" : char}
    </motion.span>
  );
}

function HeroTitleLine({
  index,
  glyphOffset,
  scrollYProgress,
  shouldReduceMotion,
}: {
  index: number;
  glyphOffset: number;
  scrollYProgress: MotionValue<number>;
  shouldReduceMotion: boolean;
}) {
  const lineSegments = HERO_SEGMENTS[index];
  const glyphs = lineSegments.reduce<
    Array<{
      accent: boolean;
      char: string;
      glyphIndex: number;
    }>
  >((allGlyphs, segment) => {
    const segmentStart = glyphOffset + allGlyphs.length;

    return [
      ...allGlyphs,
      ...segment.text.split("").map((char, charIndex) => ({
        accent: segment.accent,
        char,
        glyphIndex: segmentStart + charIndex,
      })),
    ];
  }, []);

  return (
    <motion.span
      className="flex justify-center overflow-visible py-3 -my-3 sm:py-4 sm:-my-4"
      initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: shouldReduceMotion ? 0.35 : 0.9,
        ease: EASE,
        delay: shouldReduceMotion ? 0 : index * 0.12,
      }}
    >
      <span className="flex whitespace-nowrap">
        {glyphs.map((glyph) => (
          <HeroGlyph
            key={`${index}-${glyph.glyphIndex}-${glyph.char}`}
            char={glyph.char}
            accent={glyph.accent}
            glyphIndex={glyph.glyphIndex}
            scrollYProgress={scrollYProgress}
            shouldReduceMotion={shouldReduceMotion}
          />
        ))}
      </span>
    </motion.span>
  );
}

export function Hero() {
  const shouldReduceMotion = Boolean(useReducedMotion());

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
        className="pointer-events-none absolute inset-0 z-1 opacity-[0.05]"
        style={{ backgroundImage: NOISE_TEXTURE }}
      />

      <motion.div
        className="hero-parallax-text relative z-10 flex w-full flex-col items-center"
        initial={shouldReduceMotion ? false : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: shouldReduceMotion ? 0.01 : 0.4, ease: EASE }}
      >
        <motion.h1
          className="font-title w-full max-w-6xl text-[clamp(1.75rem,7.5vw,3.75rem)] leading-[0.9] tracking-[-0.035em] text-foreground sm:text-[clamp(4.6rem,10vw,7rem)] sm:leading-[0.86] sm:tracking-[-0.05em] lg:text-[clamp(5.2rem,6vw,7.4rem)]"
        >
          {HERO_LINES.map((line, index) => (
            <HeroTitleLine
              key={`${line.start}-${line.end}-${line.accent}`}
              index={index}
              glyphOffset={HERO_SEGMENTS
                .slice(0, index)
                .reduce(
                  (total, currentLine) =>
                    total + currentLine.reduce((lineTotal, segment) => lineTotal + segment.text.length, 0),
                  0,
                )}
              scrollYProgress={scrollYProgress}
              shouldReduceMotion={shouldReduceMotion}
            />
          ))}
        </motion.h1>
      </motion.div>
    </section>
  );
}
