import Link from "next/link";
import { ArrowRight, Code2, ListChecks, PanelsTopLeft, Search } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import type { ReactNode } from "react";

type ProcessStep = {
  description: ReactNode;
  Icon: LucideIcon;
  id: string;
  number: string;
  title: ReactNode;
};

const processSteps: ProcessStep[] = [
  {
    description: <>Revisamos contexto, objetivos y puntos de fricci&oacute;n.</>,
    Icon: Search,
    id: "diagnostico",
    number: "01",
    title: <>Diagn&oacute;stico</>,
  },
  {
    description: <>Ordenamos estructura, alcance y prioridades.</>,
    Icon: ListChecks,
    id: "definicion",
    number: "02",
    title: <>Definici&oacute;n</>,
  },
  {
    description: <>Construimos interfaces y sistemas con claridad.</>,
    Icon: PanelsTopLeft,
    id: "diseno",
    number: "03",
    title: <>Dise&ntilde;o</>,
  },
  {
    description: <>Preparamos entregables listos para desarrollar.</>,
    Icon: Code2,
    id: "implementacion",
    number: "04",
    title: <>Implementaci&oacute;n</>,
  },
];

function ProcessStepCard({ step }: { step: ProcessStep }) {
  const { description, Icon, number, title } = step;

  return (
    <article className="relative z-10 border-l border-border pl-[1.2rem] pt-[5rem] sm:pt-[5.4rem] lg:pt-[7.2rem]">
      <div className="absolute left-[1.2rem] top-0 flex h-[4.4rem] w-[4.4rem] items-center justify-center rounded-[0.8rem] border border-border bg-background/90 shadow-card backdrop-blur-sm sm:h-[4.8rem] sm:w-[4.8rem] lg:left-[2rem] lg:h-[5.05rem] lg:w-[5.05rem]">
        <Icon
          aria-hidden="true"
          className="h-7 w-7 text-muted sm:h-8 sm:w-8"
          strokeWidth={1.65}
        />
      </div>

      <p className="text-[17px] font-normal leading-none text-accent md:text-[18px]">
        {number}
      </p>
      <h3 className="mt-[1rem] text-[21px] font-normal leading-[1.08] text-foreground md:text-[23px]">
        {title}
      </h3>
      <p className="mt-[0.75rem] max-w-[15rem] text-[15px] leading-[1.42] text-muted md:text-[16px]">
        {description}
      </p>
    </article>
  );
}

export function ProcesoSection() {
  return (
    <section
      id="proceso"
      className="relative isolate w-full scroll-mt-20 overflow-hidden bg-background px-5 py-12 sm:px-8 md:scroll-mt-[5.5rem] md:px-[4.75rem] lg:min-h-[calc(100svh-5.5rem)] lg:py-[3.4rem]"
    >
      <div className="relative z-10 mx-auto w-full max-w-[82rem]">
        <div className="max-w-[56rem]">
          <p className="mb-[1rem] text-[10px] font-semibold uppercase leading-none tracking-[0.4em] text-accent">
            PROCESO
          </p>

          <h2 className="text-[30px] font-normal leading-[1.03] text-foreground sm:text-[40px] md:text-[48px] lg:text-[48px] xl:text-[50px]">
            De la estrategia a la experiencia
            <span className="text-accent">.</span>
          </h2>

          <p className="mt-[1.15rem] max-w-[34rem] text-[16px] font-normal leading-[1.5] text-foreground md:text-[18px]">
            Un proceso claro para entender, definir, dise&ntilde;ar y aterrizar
            soluciones digitales &uacute;tiles.
          </p>
        </div>

        <div className="relative mt-[3.4rem] lg:mt-[4rem]">
          <svg
            aria-hidden="true"
            className="pointer-events-none absolute left-0 top-[1.7rem] z-0 hidden h-[9.2rem] w-full text-border lg:block"
            viewBox="0 0 1320 188"
            fill="none"
            preserveAspectRatio="none"
          >
            <path
              d="M2 180V87C2 51 38 36 86 36H157C218 36 239 155 315 155C391 155 412 36 488 36H573C649 36 670 155 746 155C822 155 843 36 919 36H1004C1080 36 1101 155 1177 155H1244C1285 155 1318 123 1318 82V72"
              stroke="currentColor"
              strokeWidth="1.15"
            />
            <circle cx="1318" cy="72" r="5" fill="currentColor" />
          </svg>

          <div className="relative grid gap-7 md:grid-cols-2 md:gap-x-7 md:gap-y-10 lg:grid-cols-4 lg:gap-x-7">
            {processSteps.map((step) => (
              <ProcessStepCard key={step.id} step={step} />
            ))}
          </div>
        </div>

        <Link
          href="/#contacto"
          className="group mt-[2.8rem] inline-flex w-fit items-center justify-center gap-[0.75rem] rounded-button py-2 text-[15px] font-medium leading-none text-foreground transition-colors hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background md:mt-[3.2rem] md:text-[16px]"
        >
          Ver proceso
          <ArrowRight
            aria-hidden="true"
            className="h-4.5 w-4.5 text-accent transition-transform duration-200 group-hover:translate-x-1"
            strokeWidth={1.6}
          />
        </Link>
      </div>
    </section>
  );
}
