"use client";

import { motion } from "framer-motion";

export function ContactSection() {
  return (
    <section
      id="contact"
      className="relative z-20 flex w-full  flex-col items-center justify-center overflow-hidden rounded-t-[3rem] rounded-b-[3rem] border-t border-foreground/5 bg-surface pt-32 pb-20 text-center md:rounded-t-[5rem] md:rounded-b-[5rem] md:pt-60 md:pb-40"
    >
      <div className="absolute top-1/2 left-0  z-0 flex w-full -translate-y-1/2 whitespace-nowrap opacity-[0.05] pointer-events-none overflow-hidden">
        <motion.div
          animate={{ x: ["0%", "-60%"] }}
          transition={{ repeat: Infinity, ease: "linear", duration: 30 }}
          className="flex items-center"
        >
          <span className="font-title font-black text-[25vw] leading-none tracking-tighter uppercase md:text-[20vw]">
            LET&apos;S WORK &middot; HABLEMOS &middot; LET&apos;S WORK
            &middot;&nbsp;
          </span>
          <span className="font-title font-black text-[25vw] leading-none tracking-tighter uppercase md:text-[20vw]">
            LET&apos;S WORK &middot; HABLEMOS &middot; LET&apos;S WORK
            &middot;&nbsp;
          </span>
        </motion.div>
      </div>

      <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-center px-6">
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="font-body mb-8 text-[10px] font-bold tracking-[0.4em] text-foreground/50 uppercase md:mb-12 md:text-sm"
        >
          Listo para evolucionar?
        </motion.p>

        <motion.a
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, delay: 0.2 }}
          className="inline-block group max-w-full"
          href="mailto:coralab.web@gmail.com  "
        >
          <span className="font-subtitle block w-full text-center cursor-pointer border-b-[3px] border-accent pb-2 text-[6.5vw] sm:text-5xl md:border-b-[6px] md:pb-6 md:text-7xl lg:text-[6rem] leading-none italic text-accent transition-colors duration-700 group-hover:border-foreground group-hover:text-foreground truncate">
            coralab.web@gmail.com
          </span>
        </motion.a>
      </div>
    </section>
  );
}
