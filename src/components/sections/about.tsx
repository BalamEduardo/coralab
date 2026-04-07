"use client";

import Image from "next/image";
import { useRef } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
  type Variants,
} from "framer-motion";

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

  const yImage1 = useTransform(
    scrollYProgress,
    [0, 1],
    ["0%", shouldReduceMotion ? "0%" : "8%"],
  );
  const yImage2 = useTransform(
    scrollYProgress,
    [0, 1],
    [shouldReduceMotion ? "0%" : "5%", shouldReduceMotion ? "0%" : "-5%"],
  );

  return (
    <section
      id="nosotros"
      ref={sectionRef}
      className="relative z-25 w-full overflow-hidden rounded-t-[3rem] border-t border-foreground/5 bg-surface pt-32 pb-24 shadow-[0_-30px_60px_rgba(0,0,0,0.08)] md:rounded-t-[5rem] md:pt-48 md:pb-40 -mt-12"
    >
      <div className="mx-auto flex max-w-360 flex-col px-6 md:px-12">
        <div className="mb-32 grid w-full grid-cols-1 items-end gap-12 lg:grid-cols-12 lg:gap-8 md:mb-48">
          <div className="col-span-1 lg:col-span-8">
            <motion.h2
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeUp}
              className="font-title relative text-5xl leading-[0.85] tracking-tighter text-foreground sm:text-7xl md:text-8xl lg:text-8xl"
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
          <div className="col-span-1 flex flex-col justify-end pb-2 pl-0 lg:col-span-4 lg:pl-12">
            <motion.div
              className="relative"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeUp}
            >
              <p className="font-body mb-8 text-lg leading-relaxed font-light italic text-foreground md:text-xl">
                En Coralab no buscamos hacer páginas por hacerlas. Estamos
                construyendo soluciones digitales simples, claras y funcionales
                para negocios reales.
              </p>
              <p className="font-body mb-8 text-lg leading-relaxed font-light italic text-foreground md:text-xl">
                Cada proyecto es una forma de aprender, mejorar y crear algo
                que realmente sirva.
              </p>
              <p className="font-body flex items-center gap-4 text-[10px] font-medium uppercase tracking-[0.2em] text-foreground/90">
                — Coralab
              </p>
            </motion.div>
          </div>
        </div>

        <div className="relative grid w-full grid-cols-1 items-start gap-8 md:grid-cols-12 md:gap-12">
          <div className="relative h-[350px] overflow-hidden rounded-3xl bg-foreground/5 sm:h-[450px] md:col-span-5 md:h-auto md:aspect-3/4 md:rounded-4xl">
            <motion.div
              style={{ y: yImage1, willChange: "transform" }}
              className="relative h-full w-full scale-[1.15] transition-transform duration-[1.5s] md:hover:scale-100"
            >
              <Image
                src="/about/about-image.webp"
                alt="Editorial Texture"
                fill
                sizes="(min-width: 768px) 40vw, 100vw"
                className="object-cover"
              />
            </motion.div>
            <div className="pointer-events-none absolute inset-0 bg-foreground/5 mix-blend-color"></div>
          </div>

          <div className="relative flex flex-col gap-12 md:col-span-7 md:gap-24 md:pt-20">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeUp}
              className="relative max-w-xl md:pl-12 xl:pl-24"
            >
              <h3 className="font-subtitle mb-8 text-3xl tracking-tighter text-foreground md:text-5xl lg:text-6xl">
                Nuestro
                <br />
                <span className="font-subtitle italic font-light text-accent">
                  Enfoque
                </span>
              </h3>
              <p className="font-body text-lg leading-relaxed font-light text-foreground/90 md:text-xl">
                Cada proyecto es distinto. Entendemos el contexto, los
                objetivos y las necesidades de cada cliente para crear
                soluciones digitales a medida que realmente resuelvan lo
                importante. Nuestro objetivo es crear experiencias digitales que
                no solo se vean bien, sino que también funcionen bien y generen
                resultados reales para nuestros clientes. Estamos aquí para
                ayudarte a{" "}
                <span className="font-subtitle italic text-accent">
                  construir tu presencia digital
                </span>{" "}
                de manera efectiva y auténtica.
              </p>
            </motion.div>

            <div className="relative mt-auto h-[250px] w-full overflow-hidden rounded-3xl bg-foreground/5 sm:h-[350px] md:h-[500px] md:rounded-4xl">
              <motion.div
                style={{ y: yImage2, willChange: "transform" }}
                className="relative h-full w-full scale-[1.15] opacity-90 transition-transform duration-[1.5s] md:hover:scale-100"
              >
                <Image
                  src="/about/about-image2.webp"
                  alt="Abstract Architecture"
                  fill
                  sizes="(min-width: 768px) 56vw, 100vw"
                  className="object-cover"
                />
              </motion.div>
              <div className="pointer-events-none absolute inset-0 bg-accent/5 mix-blend-color"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
