"use client";

import { motion } from "framer-motion";

export function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 150 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "100px" }}
      transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
      className="relative z-10 mt-6 w-full overflow-hidden rounded-t-[3rem] bg-foreground px-6 pt-24 pb-8 text-background shadow-[0_-20px_40px_rgba(0,0,0,0.2)] md:mt-8 md:rounded-t-[5rem] md:px-12"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 grid grid-cols-1 gap-16 md:mb-24 md:grid-cols-12 md:gap-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="md:col-span-6 flex flex-col items-start"
          >
            <h2 className="font-title mb-6 text-4xl leading-[0.9] font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
              Potenciando
              <br />
              <span className="font-subtitle italic font-light text-accent">
                tu presencia digital
              </span>
            </h2>
            <p className="font-subtitle max-w-sm text-base font-light italic text-background/60 md:text-xl">
              Coralab. Construyendo ideas que trascienden.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid grid-cols-2 gap-10 text-sm md:col-span-6 md:pt-4 md:text-base sm:grid-cols-3"
          >
            <div className="flex flex-col space-y-4">
              <h4 className="font-subtitle mb-4 border-b border-background/10 pb-4 text-[10px] font-bold tracking-[0.3em] text-accent uppercase">
                Social
              </h4>
              <a
                href="#"
                className="font-body transition-all duration-300 hover:text-accent hover:italic"
              >
                Facebook
              </a>
            </div>
            <div className="flex flex-col space-y-4">
              <h4 className="font-subtitle mb-4 border-b border-background/10 pb-4 text-[10px] font-bold tracking-[0.3em] text-accent uppercase">
                Contacto
              </h4>
              <a
                href="mailto:hola@coralab.dev"
                className="font-body transition-colors duration-300 hover:text-accent"
              >
                hola@coralab.dev
              </a>
              <a
                href="#"
                className="font-body transition-colors duration-300 hover:text-accent"
              >
                WhatsApp
              </a>
            </div>
            <div className="col-span-2 flex flex-col space-y-4 sm:col-span-1">
              <h4 className="font-subtitle mb-4 border-b border-background/10 pb-4 text-[10px] font-bold tracking-[0.3em] text-accent uppercase">
                Legal
              </h4>
              <a
                href="#"
                className="font-body text-background/60 transition-colors duration-300 hover:text-background"
              >
                Privacidad
              </a>
              <a
                href="#"
                className="font-body text-background/60 transition-colors duration-300 hover:text-background"
              >
                Términos
              </a>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.4 }}
          className="mt-16 flex flex-col border-t border-background/10 pt-8 md:mt-24"
        >
          <div className="font-body mb-16 flex flex-col items-center justify-between gap-4 text-center text-[10px] font-bold tracking-[0.4em] text-background/40 uppercase md:flex-row md:text-xs">
            <p>{new Date().getFullYear()} CORALAB</p>
            <p>HECHO EN VERACRUZ</p>
          </div>

          <div className="flex w-full justify-center pb-4">
            <span className="font-title block select-none text-[16vw] leading-[0.80] font-bold tracking-tighter text-background">
              CORALAB
            </span>
          </div>
        </motion.div>
      </div>
    </motion.footer>
  );
}
