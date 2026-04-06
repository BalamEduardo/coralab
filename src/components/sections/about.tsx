"use client";

import Image from "next/image";
import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform, type Variants } from "framer-motion";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1, ease: [0.16, 1, 0.3, 1] },
  },
};

export function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const shouldReduceMotion = Boolean(useReducedMotion());

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const yImage1 = useTransform(scrollYProgress, [0, 1], ["0%", shouldReduceMotion ? "0%" : "8%"]);
  const yImage2 = useTransform(scrollYProgress, [0, 1], [shouldReduceMotion ? "0%" : "5%", shouldReduceMotion ? "0%" : "-5%"]);

  return (
    <section
      id="nosotros"
      ref={sectionRef}
      className="relative z-25 w-full bg-surface rounded-t-[3rem] md:rounded-t-[5rem] shadow-[0_-30px_60px_rgba(0,0,0,0.08)] border-t border-foreground/5 -mt-12 pt-32 pb-24 md:pt-48 md:pb-40 overflow-hidden"
    >
      <div className="max-w-360 mx-auto px-6 md:px-12 flex flex-col">
        {/* Editorial Typography Monument */}
        <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-end mb-32 md:mb-48">
          <div className="col-span-1 lg:col-span-8">
            <motion.h2
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeUp}
              className="font-title relative text-5xl sm:text-7xl md:text-8xl lg:text-8xl leading-[0.85] tracking-tighter text-foreground"
            >
              Diseñamos <br />
              <span className="font-subtitle italic font-light text-accent">
                soluciones
              </span>{" "}
              digitales <br />
              que resuelven <br />
              lo importante.
            </motion.h2>
          </div>
          <div className="col-span-1 lg:col-span-4 pl-0 lg:pl-12 flex flex-col justify-end pb-2">
            <motion.div
              className="relative"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeUp}
            >
              <p className="font-body text-foreground text-lg md:text-xl font-light italic leading-relaxed mb-8">
                En Coralab no buscamos hacer páginas por hacerlas.
                Estamos construyendo soluciones digitales simples, claras y funcionales para negocios reales.

                Cada proyecto es una forma de aprender, mejorar y crear algo que realmente sirva.
              </p>
              <p className="font-body text-foreground/90 font-medium uppercase tracking-[0.2em] text-[10px] flex items-center gap-4">
                — Coralab
              </p>
            </motion.div>
          </div>
        </div>

        {/* Split Parallax Gallery Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 relative w-full items-start">
          {/* Left Image (Tall) */}
          <div className="relative md:col-span-5 h-87.5 sm:h-112.5 md:h-auto md:aspect-3/4 overflow-hidden rounded-3xl md:rounded-4xl bg-foreground/5">
            <motion.div
              style={{ y: yImage1 }}
              className="relative h-full w-full scale-[1.15] transition-transform duration-[1.5s] hover:scale-100"
            >
              <Image
                src="/about/about-image.webp"
                alt="Editorial Texture"
                fill
                sizes="(min-width: 768px) 40vw, 100vw"
                className="object-cover"
              />
            </motion.div>
            <div className="absolute inset-0 bg-foreground/5 mix-blend-color pointer-events-none"></div>
          </div>

          {/* Right Column (Text + Landscape Image) */}
          <div className="relative md:col-span-7 flex flex-col gap-12 md:gap-24 md:pt-20">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeUp}
              className="relative max-w-xl md:pl-12 xl:pl-24"
            >
              <h3 className="font-subtitle text-3xl md:text-5xl lg:text-6xl tracking-tighter text-foreground mb-8">
                Nuestro
                <br />
                <span className="font-subtitle italic font-light text-accent">
                  Enfoque
                </span>
              </h3>
              <p className="font-body text-foreground/90 text-lg md:text-xl leading-relaxed font-light">
                Cada proyecto es distinto, entendemos el contexto, los objetivos y las necesidades de cada cliente para crear soluciones digitales a medida que realmente resuelvan lo importante. 
                Nuestro objetivo es crear experiencias digitales que no solo se vean bien, sino que también funcionen bien y generen resultados reales para nuestros clientes. 
                Estamos aquí para ayudarte a
                {" "}
                <span className="font-subtitle italic text-accent">
                  construir tu presencia digital
                </span>{" "}
                 de manera efectiva y auténtica.
              </p>
            </motion.div>

            {/* Right Lower Image (Landscape Parallax) */}
            <div className="relative w-full h-62.5 sm:h-87.5 md:h-125 overflow-hidden rounded-3xl md:rounded-4xl bg-foreground/5 mt-auto">
              <motion.div
                style={{ y: yImage2 }}
                className="relative h-full w-full scale-[1.15] opacity-90 transition-transform duration-[1.5s] hover:scale-100"
              >
                <Image
                  src="/about/about-image2.webp"
                  alt="Abstract Architecture"
                  fill
                  sizes="(min-width: 768px) 56vw, 100vw"
                  className="object-cover"
                />
              </motion.div>
              <div className="absolute inset-0 bg-accent/5 mix-blend-color pointer-events-none"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
