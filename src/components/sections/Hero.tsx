import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { FadeInUp } from "@/components/animations/FadeInUp";

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative isolate flex w-full overflow-hidden bg-background md:min-h-[calc(100svh-5.5rem)]"
    >
      <svg
        aria-hidden="true"
        className="pointer-events-none absolute right-[-7rem] top-[-5rem] z-0 hidden h-[32rem] w-[48rem] text-border opacity-80 md:block"
        viewBox="0 0 860 576"
        fill="none"
      >
        <circle cx="276" cy="194" r="180" stroke="currentColor" strokeWidth="1" />
        <circle cx="276" cy="194" r="118" stroke="currentColor" strokeWidth="1" />
        <path d="M0 576C170 383 346 232 528 128C648 60 754 20 860 0" stroke="currentColor" strokeWidth="1" />
        <path d="M492 0C560 76 637 141 724 194C774 225 819 245 860 254" stroke="currentColor" strokeWidth="1" />
        <path d="M772 286C810 267 840 273 860 300" stroke="currentColor" strokeWidth="1" />
      </svg>

      <div className="relative z-10 flex flex-1 flex-col px-5 pb-0 pt-[3.25rem] sm:px-8 md:px-[4.75rem] md:pb-[4.5rem] md:pt-[3.2rem]">
        <div className="relative z-20 mt-[0.8rem] w-full max-w-[34rem] md:mt-[1.35rem] lg:mt-[1.65rem]">
          <FadeInUp delay={0.1} mobileDelay={0}>
            <p className="mb-[1.15rem] text-[10px] font-semibold uppercase leading-none tracking-[0.4em] text-accent">
              ESTUDIO DIGITAL
            </p>
          </FadeInUp>

          <FadeInUp delay={0.2} mobileDelay={0.04}>
            <h1 className="text-[36px] font-normal leading-[1.03] text-foreground sm:text-[44px] md:text-[48px] lg:text-[50px] xl:text-[52px]">
              <span className="block">Claridad digital</span>
              <span className="block">para marcas que</span>
              <span className="block">quieren funcionar</span>
              <span className="block">
                mejor<span className="text-accent">.</span>
              </span>
            </h1>
          </FadeInUp>

          <FadeInUp delay={0.3} mobileDelay={0.08}>
            <p className="mt-[1.2rem] max-w-[30rem] text-[16px] font-normal leading-[1.48] text-foreground md:text-[17px]">
              Dise&ntilde;amos webs, productos y sistemas digitales que comunican
              con precisi&oacute;n, mejoran la experiencia y ordenan la operaci&oacute;n.
            </p>
          </FadeInUp>

          <FadeInUp delay={0.4} mobileDelay={0.12}>
            <div className="mt-[1.55rem] flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-[1.8rem]">
              <Link
                href="/#contacto"
                className="group inline-flex min-h-[3rem] w-fit items-center justify-center gap-[0.95rem] rounded-[0.12rem] bg-accent px-[1.2rem] text-[15px] font-medium leading-none text-white transition-all hover:bg-accent-light focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background md:min-w-[13.4rem] md:text-[16px]"
              >
                Agendar diagn&oacute;stico
                <ArrowRight aria-hidden="true" className="h-4.5 w-4.5 transition-transform group-hover:translate-x-1" strokeWidth={1.6} />
              </Link>

              <Link
                href="/#casos"
                className="group inline-flex w-fit items-center justify-center gap-[0.75rem] rounded-button py-2 text-[15px] font-medium leading-none text-foreground transition-all hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background md:text-[16px]"
              >
                Ver casos
                <ArrowRight aria-hidden="true" className="h-4.5 w-4.5 text-accent transition-transform group-hover:translate-x-1" strokeWidth={1.6} />
              </Link>
            </div>
          </FadeInUp>

          <FadeInUp delay={0.5} mobileDelay={0.16}>
            <div className="mt-[1.85rem] flex max-w-[28rem] items-center gap-[1.2rem] border-t border-border pt-[1.15rem]">
              <Image
                src="/brand/isotipo-coral.png"
                alt=""
                width={1016}
                height={686}
                className="h-auto w-[2rem] shrink-0"
              />
              <p className="min-w-0 text-[14px] font-normal leading-tight text-foreground md:text-[15px]">
                Web &middot; Producto digital &middot; UX/UI &middot; Sistemas de dise&ntilde;o
              </p>
            </div>
          </FadeInUp>
        </div>

        <FadeInUp delay={0.6} mobileDelay={0.14} className="pointer-events-none relative left-8 z-10 mt-7 h-auto max-h-[24rem] w-full max-w-[36rem] self-center sm:left-10 md:absolute md:bottom-0 md:left-auto md:right-[-6.75rem] md:mt-0 md:block md:max-h-none md:w-[45rem] md:max-w-none lg:right-[-5.2rem] lg:w-[49rem] xl:right-[-3.5rem] xl:w-[51rem] 2xl:right-[-1rem] 2xl:w-[53rem]">
          <Image
            src="/brand/hero-cora-devices.png"
            alt="Mockups de laptop y movil con una interfaz digital Coralab"
            width={1448}
            height={1086}
            priority
            sizes="(min-width: 1280px) 68vw, (min-width: 768px) 62vw, 115vw"
            className="h-full w-full object-contain object-bottom"
          />
        </FadeInUp>
      </div>
    </section>
  );
}
