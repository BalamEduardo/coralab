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
      className="relative isolate w-full scroll-mt-20 overflow-hidden bg-background px-5 py-16 sm:px-8 md:scroll-mt-28 md:px-[4.75rem] lg:min-h-[calc(100svh-7rem)] lg:py-[4.1rem]"
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

      <div className="relative z-10 mx-auto flex w-full max-w-[92rem] flex-col">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1fr] lg:gap-[3.75rem]">
          <div className="pt-0 lg:pt-[3rem]">
            <p className="mb-[1.55rem] text-[12px] font-semibold uppercase leading-none tracking-[0.42em] text-accent">
              CLARIDAD + FUNCI&Oacute;N
            </p>

            <h2 className="max-w-[41rem] text-[46px] font-normal leading-[1.02] text-foreground sm:text-[60px] md:text-[72px] lg:text-[73px] xl:text-[76px]">
              <span className="block">Lo digital debe</span>
              <span className="block">comunicar y</span>
              <span className="block">
                ayudar a operar<span className="text-accent">.</span>
              </span>
            </h2>

            <p className="mt-[2rem] max-w-[37rem] text-[19px] font-normal leading-[1.55] text-foreground md:text-[23px] lg:mt-[2.35rem]">
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
                  className="min-h-[15.1rem] rounded-[0.45rem] border border-border bg-background/35 p-[1.9rem] transition-colors hover:border-accent/45 md:p-[2.55rem]"
                >
                  <Icon
                    aria-hidden="true"
                    className="mb-[1.55rem] h-10 w-10 text-accent md:h-11 md:w-11"
                    strokeWidth={1.8}
                  />
                  <h3 className="text-[26px] font-semibold leading-tight text-foreground md:text-[29px]">
                    {title}
                  </h3>
                  <p className="mt-[1.2rem] max-w-[18rem] text-[19px] leading-[1.45] text-muted md:text-[21px]">
                    {description}
                  </p>
                </article>
              ))}
            </div>

            <div className="flex min-h-[6.15rem] items-center gap-[1.75rem] rounded-[0.45rem] border border-border bg-background/35 px-[1.45rem] py-4 md:px-[2.55rem]">
              <span className="flex h-[3.45rem] w-[3.45rem] shrink-0 items-center justify-center rounded-full bg-border/60">
                <Image
                  src="/brand/isotipo-coral.png"
                  alt=""
                  width={1016}
                  height={686}
                  className="h-auto w-[2.18rem]"
                />
              </span>
              <p className="text-[19px] font-normal leading-snug text-foreground md:text-[22px]">
                M&aacute;s claridad &middot; Mejor uso &middot; Mejor funcionamiento
              </p>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-border pt-8 lg:mt-[4.1rem] lg:pt-[2.05rem]">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:gap-[2.75rem]">
            <Link
              href="#contacto"
              className="inline-flex min-h-[3.8rem] w-fit items-center justify-center gap-[1.35rem] rounded-[0.12rem] bg-accent px-[1.65rem] text-[18px] font-medium leading-none text-white transition-colors hover:bg-accent-light focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background md:min-w-[16.8rem] md:text-[19px]"
            >
              Agendar diagn&oacute;stico
              <ArrowRight aria-hidden="true" className="h-6 w-6" strokeWidth={1.6} />
            </Link>

            <Link
              href="#servicios"
              className="inline-flex w-fit items-center justify-center gap-[1rem] rounded-button py-2 text-[18px] font-medium leading-none text-foreground transition-colors hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background md:text-[19px]"
            >
              Conocer enfoque
              <ArrowRight aria-hidden="true" className="h-6 w-6 text-accent" strokeWidth={1.6} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
