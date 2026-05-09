import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative isolate flex min-h-[calc(100svh-5rem)] w-full overflow-hidden bg-background md:min-h-[calc(100svh-7rem)]"
    >
      <svg
        aria-hidden="true"
        className="pointer-events-none absolute right-[-7.5rem] top-[-5rem] z-0 hidden h-[36rem] w-[54rem] text-border opacity-80 md:block"
        viewBox="0 0 860 576"
        fill="none"
      >
        <circle cx="276" cy="194" r="180" stroke="currentColor" strokeWidth="1" />
        <circle cx="276" cy="194" r="118" stroke="currentColor" strokeWidth="1" />
        <path d="M0 576C170 383 346 232 528 128C648 60 754 20 860 0" stroke="currentColor" strokeWidth="1" />
        <path d="M492 0C560 76 637 141 724 194C774 225 819 245 860 254" stroke="currentColor" strokeWidth="1" />
        <path d="M772 286C810 267 840 273 860 300" stroke="currentColor" strokeWidth="1" />
      </svg>

      <div className="relative z-10 flex flex-1 px-5 pb-[8.5rem] pt-[5.25rem] sm:px-8 md:px-[4.75rem] md:pb-[9.5rem] md:pt-[5.4rem]">
        <div className="relative z-20 mt-[1.8rem] w-full max-w-[41rem] md:mt-[3.1rem] lg:mt-[3.65rem]">
          <p className="mb-[1.9rem] text-[12px] font-semibold uppercase leading-none tracking-[0.42em] text-accent">
            ESTUDIO DIGITAL
          </p>

          <h1 className="text-[44px] font-normal leading-[1.03] text-foreground sm:text-[56px] md:text-[62px] lg:text-[64px] xl:text-[66px]">
            <span className="block">Claridad digital</span>
            <span className="block">para marcas que</span>
            <span className="block">quieren funcionar</span>
            <span className="block">
              mejor<span className="text-accent">.</span>
            </span>
          </h1>

          <p className="mt-[1.8rem] max-w-[36rem] text-[19px] font-normal leading-[1.48] text-foreground md:text-[22px]">
            Dise&ntilde;amos webs, productos y sistemas digitales que comunican
            con precisi&oacute;n, mejoran la experiencia y ordenan la operaci&oacute;n.
          </p>

          <div className="mt-[2.45rem] flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-[2.65rem]">
            <Link
              href="#contacto"
              className="inline-flex min-h-[3.8rem] w-fit items-center justify-center gap-[1.35rem] rounded-[0.12rem] bg-accent px-[1.65rem] text-[18px] font-medium leading-none text-white transition-colors hover:bg-accent-light focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background md:min-w-[16.2rem] md:text-[19px]"
            >
              Agendar diagn&oacute;stico
              <ArrowRight aria-hidden="true" className="h-6 w-6" strokeWidth={1.6} />
            </Link>

            <Link
              href="#casos"
              className="inline-flex w-fit items-center justify-center gap-[1rem] rounded-button py-2 text-[18px] font-medium leading-none text-foreground transition-colors hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background md:text-[19px]"
            >
              Ver casos
              <ArrowRight aria-hidden="true" className="h-6 w-6 text-accent" strokeWidth={1.6} />
            </Link>
          </div>

          <div className="mt-[2.65rem] flex max-w-[34rem] items-center gap-[1.95rem] border-t border-border pt-[1.75rem]">
            <Image
              src="/brand/isotipo-coral.png"
              alt=""
              width={1016}
              height={686}
              className="h-auto w-[2.8rem] shrink-0"
            />
            <p className="text-[16px] font-normal leading-tight text-foreground md:text-[19px]">
              Web &middot; Producto digital &middot; UX/UI &middot; Sistemas de dise&ntilde;o
            </p>
          </div>
        </div>

        <Image
          src="/brand/hero-cora-devices.png"
          alt="Mockups de laptop y movil con una interfaz digital Coralab"
          width={1448}
          height={1086}
          priority
          sizes="(min-width: 1280px) 68vw, (min-width: 768px) 62vw, 100vw"
          className="pointer-events-none absolute bottom-0 right-[-8.5rem] z-10 hidden h-auto w-[59rem] max-w-none object-contain md:block lg:right-[-6.25rem] lg:w-[63rem] xl:right-[-4.25rem] xl:w-[66rem] 2xl:right-[-1rem] 2xl:w-[69rem]"
        />
      </div>
    </section>
  );
}
