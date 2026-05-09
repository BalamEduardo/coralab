import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import {
  ArrowRight,
  CirclePause,
  Database,
  Infinity,
  Workflow,
  type LucideIcon,
} from "lucide-react";

type FrictionCard = {
  description: ReactNode;
  Icon: LucideIcon;
  id: string;
  title: ReactNode;
};

const frictionCards: FrictionCard[] = [
  {
    description: <>Sitios que no representan la marca.</>,
    Icon: Infinity,
    id: "presencia",
    title: <>Presencia d&eacute;bil</>,
  },
  {
    description: <>Sistemas que frenan la operaci&oacute;n.</>,
    Icon: Database,
    id: "herramientas",
    title: <>Herramientas viejas</>,
  },
  {
    description: <>Flujos dif&iacute;ciles de entender y usar.</>,
    Icon: Workflow,
    id: "procesos",
    title: <>Procesos poco claros</>,
  },
  {
    description: <>Interfaces que no facilitan decisiones.</>,
    Icon: CirclePause,
    id: "experiencia",
    title: <>Experiencia confusa</>,
  },
];

export function FuncionSection() {
  return (
    <section
      id="funcion"
      className="relative isolate w-full scroll-mt-20 overflow-hidden bg-background px-5 py-12 sm:px-8 md:scroll-mt-[5.5rem] md:px-[4.75rem] lg:min-h-[calc(100svh-5.5rem)] lg:py-[3.2rem]"
    >
      <svg
        aria-hidden="true"
        className="pointer-events-none absolute bottom-[-8.5rem] left-[-2.5rem] z-0 h-[34rem] w-[61rem] text-border opacity-85"
        viewBox="0 0 980 560"
        fill="none"
      >
        <circle cx="245" cy="330" r="214" stroke="currentColor" strokeWidth="1" />
        <circle cx="245" cy="330" r="154" stroke="currentColor" strokeWidth="1" />
        <circle cx="670" cy="330" r="214" stroke="currentColor" strokeWidth="1" />
        <circle cx="670" cy="330" r="154" stroke="currentColor" strokeWidth="1" />
        <path d="M38 560C194 373 336 203 494 0" stroke="currentColor" strokeWidth="1" />
        <path d="M372 560C528 373 670 203 828 0" stroke="currentColor" strokeWidth="1" />
        <path d="M96 0L458 426" stroke="currentColor" strokeWidth="1" />
        <path d="M424 0L786 426" stroke="currentColor" strokeWidth="1" />
      </svg>

      <div className="relative z-10 mx-auto flex w-full max-w-[82rem] flex-col">
        <div className="grid gap-7 lg:grid-cols-[0.9fr_1fr] lg:gap-[2.5rem]">
          <div className="pt-0 lg:pt-[1.35rem]">
            <p className="mb-[1rem] text-[10px] font-semibold uppercase leading-none tracking-[0.4em] text-accent">
              CLARIDAD + FUNCI&Oacute;N
            </p>

            <h2 className="max-w-[33rem] text-[30px] font-normal leading-[1.03] text-foreground sm:text-[40px] md:text-[48px] lg:text-[48px] xl:text-[50px]">
              <span className="block">Lo digital debe</span>
              <span className="block">comunicar y</span>
              <span className="block">
                ayudar a operar<span className="text-accent">.</span>
              </span>
            </h2>

            <p className="mt-[1.25rem] max-w-[30rem] text-[16px] font-normal leading-[1.52] text-foreground md:text-[18px] lg:mt-[1.45rem]">
              Coralab trabaja con marcas y negocios que necesitan ordenar su
              presencia digital, actualizar herramientas y crear experiencias
              m&aacute;s claras y &uacute;tiles.
            </p>
          </div>

          <div className="grid gap-4 lg:gap-[1.05rem]">
            <div className="grid gap-4 sm:grid-cols-2 lg:gap-[1.05rem]">
              {frictionCards.map(({ description, Icon, id, title }) => (
                <article
                  key={id}
                  className="min-h-[11.3rem] rounded-[0.45rem] border border-border bg-background/35 p-[1.3rem] transition-colors hover:border-accent/45 md:p-[1.55rem]"
                >
                  <Icon
                    aria-hidden="true"
                    className="mb-[1rem] h-7 w-7 text-accent md:h-8 md:w-8"
                    strokeWidth={1.8}
                  />
                  <h3 className="text-[20px] font-semibold leading-tight text-foreground md:text-[23px]">
                    {title}
                  </h3>
                  <p className="mt-[0.75rem] max-w-[15rem] text-[15px] leading-[1.42] text-muted md:text-[16px]">
                    {description}
                  </p>
                </article>
              ))}
            </div>

            <div className="flex min-h-[4.7rem] items-center gap-[1.1rem] rounded-[0.45rem] border border-border bg-background/35 px-[1.1rem] py-3 md:px-[1.55rem]">
              <span className="flex h-[2.5rem] w-[2.5rem] shrink-0 items-center justify-center rounded-full bg-border/60">
                <Image
                  src="/brand/isotipo-coral.png"
                  alt=""
                  width={1016}
                  height={686}
                  className="h-auto w-[1.55rem]"
                />
              </span>
              <p className="text-[15px] font-normal leading-snug text-foreground md:text-[17px]">
                M&aacute;s claridad &middot; Mejor uso &middot; Mejor funcionamiento
              </p>
            </div>
          </div>
        </div>

        <div className="mt-7 border-t border-border pt-6 lg:mt-[2.4rem] lg:pt-[1.45rem]">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-[1.8rem]">
            <Link
              href="/#contacto"
              className="inline-flex min-h-[3rem] w-fit items-center justify-center gap-[0.95rem] rounded-[0.12rem] bg-accent px-[1.2rem] text-[15px] font-medium leading-none text-white transition-colors hover:bg-accent-light focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background md:min-w-[13.5rem] md:text-[16px]"
            >
              Agendar diagn&oacute;stico
              <ArrowRight aria-hidden="true" className="h-4.5 w-4.5" strokeWidth={1.6} />
            </Link>

            <Link
              href="/#servicios"
              className="inline-flex w-fit items-center justify-center gap-[0.75rem] rounded-button py-2 text-[15px] font-medium leading-none text-foreground transition-colors hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background md:text-[16px]"
            >
              Conocer enfoque
              <ArrowRight aria-hidden="true" className="h-4.5 w-4.5 text-accent" strokeWidth={1.6} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
