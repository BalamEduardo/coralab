"use client";

import { motion } from "framer-motion";

export function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 150 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "100px" }}
      transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
      className="relative z-10 mt-6 w-full bg-foreground text-background rounded-t-[3rem] md:mt-8 md:rounded-t-[5rem] shadow-[0_-20px_40px_rgba(0,0,0,0.2)] pt-24 pb-8 px-6 md:px-12 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        {/* Top section: Editorial grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 md:gap-8 mb-16 md:mb-24">
          {/* Brand statement / Logo */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="md:col-span-6 flex flex-col items-start"
          >
            <h2 className="font-title text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[0.9] mb-6">
              Potenciando 
              <br />
              <span className="font-subtitle italic font-light text-accent">
                tu presencia digital 
              </span>
            </h2>
            <p className="font-subtitle text-background/60 max-w-sm text-base md:text-xl font-light italic">
              Coralab. Construyendo ideas que trascienden.
            </p>
          </motion.div>

          {/* Links columns */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="md:col-span-6 grid grid-cols-2 sm:grid-cols-3 gap-10 md:pt-4 text-sm md:text-base"
          >
            <div className="flex flex-col space-y-4">
              <h4 className="font-subtitle text-[10px] uppercase tracking-[0.3em] text-accent font-bold mb-4 border-b border-background/10 pb-4">
                Social
              </h4>
              <a
                href="#"
                className="font-body hover:text-accent hover:italic transition-all duration-300"
              >
                Facebook
              </a>
              
            </div>
            <div className="flex flex-col space-y-4">
              <h4 className="font-subtitle text-[10px] uppercase tracking-[0.3em] text-accent font-bold mb-4 border-b border-background/10 pb-4">
                Contacto
              </h4>
              <a
                href="mailto:hola@coralab.mx"
                className="font-body hover:text-accent transition-colors duration-300"
              >
                Email
              </a>
              <a
                href="#"
                className="font-body hover:text-accent transition-colors duration-300"
              >
                WhatsApp
              </a>
            </div>
            <div className="flex flex-col space-y-4 col-span-2 sm:col-span-1">
              <h4 className="font-subtitle text-[10px] uppercase tracking-[0.3em] text-accent font-bold mb-4 border-b border-background/10 pb-4">
                Legal
              </h4>
              <a
                href="#"
                className="font-body text-background/60 hover:text-background transition-colors duration-300"
              >
                Privacidad
              </a>
              <a
                href="#"
                className="font-body text-background/60 hover:text-background transition-colors duration-300"
              >
                Términos
              </a>
            </div>
          </motion.div>
        </div>

        {/* Bottom section: Huge Editorial Logotype + Copyright */}
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 1, delay: 0.4 }}
           className="flex flex-col pt-8 mt-16 md:mt-24 border-t border-background/10"
        >
          <div className="font-body flex flex-col md:flex-row justify-between items-center text-center gap-4 mb-16 text-[10px] md:text-xs uppercase tracking-[0.4em] text-background/40 font-bold">
            <p> {new Date().getFullYear()} CORALAB </p>
            <p>HECHO EN VERACRUZ</p>
          </div>

          <div className="w-full flex justify-center pb-4">
            <span className="font-title font-bold text-[16vw] leading-[0.80] tracking-tighter text-background block select-none">
              CORALAB
            </span>
          </div>
        </motion.div>
      </div>
    </motion.footer>
  );
}
