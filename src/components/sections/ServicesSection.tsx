"use client";

import { motion, type Variants } from "framer-motion";
import { Terminal, Wand2, Layers, Brush } from "lucide-react";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: "var(--y-offset, 50px)" },
  visible: {
    opacity: 1,
    y: "0px",
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
  },
};

export function ServicesSection() {
  return (
    <section
      id="servicios"
      className="relative z-30 w-full bg-background rounded-t-[3rem] md:rounded-t-[5rem]  border-t border-foreground/5 -mt-12 pt-12 pb-24 md:pb-32"
    >
      <div className="px-6 md:px-8 max-w-7xl mx-auto pt-12 md:pt-20">
        <div className="relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp}
            style={{ willChange: "transform, opacity" }}
            className="max-w-4xl mb-16 md:mb-28 [--y-offset:0px] md:[--y-offset:50px]"
          >
            <h2 className="font-title text-5xl sm:text-7xl md:text-8xl lg:text-8xl font-bold tracking-tight mb-6 md:mb-8 text-foreground leading-[0.9]">
              Lo que usamos <br />
              <span className="font-subtitle italic font-light text-accent">
               para construir.
              </span>
            </h2>
            <p className="font-subtitle italic text-xl md:text-3xl text-foreground/60 leading-relaxed font-light">
              Herramientas y soluciones que utilizamos para llevar ideas a digital.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 auto-rows-auto lg:auto-rows-[420px]">
            {/* Engineering */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeUp}
              style={{ willChange: "transform, opacity" }}
              className="md:col-span-2 bg-surface p-8 md:p-12 lg:p-16 rounded-3xl md:rounded-[3rem] flex flex-col justify-between group overflow-hidden relative border border-foreground/5 md:hover:border-foreground/10 md:hover:shadow-xl transition-all duration-700 [--y-offset:0px] md:[--y-offset:50px]"
            >
              <div className="flex justify-between items-start relative z-10">
                <div className="w-14 h-14 bg-background rounded-full flex items-center justify-center border border-foreground/5 transition-transform duration-500 md:group-hover:scale-110">
                  <Terminal className="w-6 h-6 text-accent" />
                </div>
                <span className="font-body px-4 py-1.5 border border-foreground/10 rounded-full text-[10px] uppercase tracking-[0.3em] text-foreground/60 font-bold">
                  Engineering
                </span>
              </div>
              <div className="relative z-10 mt-32 md:mt-0">
                <h4 className="font-subtitle text-4xl md:text-5xl lg:text-6xl font-bold mb-4 tracking-tighter text-foreground">
                  Páginas web rápidas
                </h4>
                <p className="font-body text-lg md:text-xl text-foreground/60 max-w-md italic">
                  Sitios simples y claros pensados para mostrar tu negocio y generar clientes.
                </p>
              </div>
              <Terminal className="w-64 h-64 sm:w-72 sm:h-72 md:w-[450px] md:h-[450px] absolute right-[-5%] bottom-[-10%] text-foreground opacity-[0.02] md:group-hover:opacity-[0.04] md:group-hover:scale-110 transition-all duration-700 -rotate-12" />
            </motion.div>

            {/* UI/UX */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeUp}
              style={{ willChange: "transform, opacity" }}
              className="bg-accent p-8 md:p-12 lg:p-16 rounded-3xl md:rounded-[3rem] flex flex-col justify-between text-background group relative overflow-hidden transition-transform duration-500 md:hover:-translate-y-2 md:hover:shadow-2xl [--y-offset:0px] md:[--y-offset:50px]"
            >
              <div className="flex justify-between items-start relative z-10">
                <Wand2 className="w-10 h-10 lg:w-12 lg:h-12 opacity-80 md:group-hover:rotate-12 md:group-hover:scale-110 transition-transform duration-700" />
                <span className="font-body px-4 py-1.5 border border-background/20 rounded-full text-[10px] uppercase tracking-[0.3em] text-background/80 font-bold">
                  Design
                </span>
              </div>
              <div className="mt-32 md:mt-0 relative z-10">
                <h4 className="font-subtitle text-4xl md:text-5xl font-bold mb-4 tracking-tighter leading-none">
                  Diseño <br />
                  web
                </h4>
                <p className="font-body text-background/80 italic text-lg md:text-xl">
                  Interfaces limpias y funcionales que hacen fácil entender tu negocio.
                </p>
              </div>
              <div className="absolute inset-0 bg-linear-to-t from-foreground/10 to-transparent opacity-0 md:group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
            </motion.div>

            {/* Strategy */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              style={{ willChange: "transform, opacity" }}
              variants={fadeUp}
              className="bg-surface p-8 md:p-12 lg:p-16 rounded-3xl md:rounded-[3rem] flex flex-col justify-between border border-foreground/5 md:hover:border-foreground/10 md:hover:shadow-xl transition-all duration-700 relative overflow-hidden group [--y-offset:0px] md:[--y-offset:50px]"
            >
              <div className="flex justify-between items-start relative z-10">
                <Layers className="w-10 h-10 lg:w-12 lg:h-12 text-accent md:group-hover:scale-110 transition-transform duration-700" />
                <span className="font-body px-4 py-1.5 border border-foreground/10 rounded-full text-[10px] uppercase tracking-[0.3em] text-foreground/60 font-bold">
                  Strategy
                </span>
              </div>
              <div className="mt-32 md:mt-0 relative z-10">
                <h4 className="font-subtitle text-4xl md:text-5xl font-bold mb-4 tracking-tighter text-foreground">
                  Estructura digital
                </h4>
                <p className="font-body text-lg md:text-xl text-foreground/60 italic">
                  Organización clara de tu información para que tus clientes entiendan qué haces.
                </p>
              </div>
            </motion.div>

            {/* Branding */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              style={{ willChange: "transform, opacity" }}
              variants={fadeUp}
              className="md:col-span-2 bg-surface text-foreground p-8 md:p-12 lg:p-16 rounded-3xl md:rounded-[3rem] flex flex-col md:flex-row items-start md:items-center justify-between border border-foreground/5 md:hover:border-foreground/10 md:hover:shadow-xl transition-all duration-700 overflow-hidden relative group [--y-offset:0px] md:[--y-offset:50px]"
            >
              <div className="relative z-10">
                <div className="mb-8 md:mb-12 inline-block">
                  <span className="font-body px-4 py-1.5 border border-foreground/10 rounded-full text-[10px] uppercase tracking-[0.3em] text-foreground/60 font-bold">
                    Branding
                  </span>
                </div>
                <h4 className="font-subtitle text-4xl md:text-5xl lg:text-7xl font-bold mb-4 md:mb-6 tracking-tighter text-foreground">
                  Automatización básica
                </h4>
                <p className="font-body text-lg md:text-xl text-foreground/60 max-w-md italic relative z-10">
                  Soluciones simples para ahorrar tiempo en procesos como contacto o citas.
                </p>
              </div>
              <div className="absolute right-[-20%] bottom-[-20%] md:right-[0%] md:top-[-20%] h-full w-64 md:w-1/2 flex items-center justify-center opacity-[0.02] md:group-hover:opacity-[0.04] md:group-hover:scale-110 transition-all duration-1000 pointer-events-none">
                <Brush className="w-80 h-80 md:w-[500px] md:h-[500px] -rotate-12" />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
