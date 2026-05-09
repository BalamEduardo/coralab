import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

type CaseStudy = {
  cardClassName: string;
  contentClassName: string;
  description: string;
  id: string;
  imageAlt: string;
  imageClassName: string;
  imageSrc: string;
  number: string;
  tag: string;
  title: string;
};

const caseStudies: CaseStudy[] = [
  {
    cardClassName:
      "min-h-[35rem] md:min-h-[39rem] lg:min-h-[43.5rem]",
    contentClassName: "max-w-[19rem]",
    description: "Plataforma digital para ordenar eventos y experiencias.",
    id: "momento",
    imageAlt: "Captura del sitio Momento en una interfaz web",
    imageClassName:
      "object-cover object-[51%_0%] opacity-100 scale-100",
    imageSrc: "/momento-mu.png",
    number: "01",
    tag: "Sistema",
    title: "Momento",
  },
  {
    cardClassName:
      "min-h-[21rem] md:min-h-[21.25rem] lg:min-h-[21.25rem]",
    contentClassName: "max-w-[15rem]",
    description: "Sitio de alto impacto para una marca de bienestar.",
    id: "apex",
    imageAlt: "Captura del sitio Apex con una experiencia web inmersiva",
    imageClassName:
      "object-cover object-[74%_52%] opacity-100 scale-100",
    imageSrc: "/apex-mu.png",
    number: "02",
    tag: "Web",
    title: "Apex",
  },
  {
    cardClassName:
      "min-h-[21rem] md:min-h-[21.25rem] lg:min-h-[21.25rem]",
    contentClassName: "max-w-[11.75rem]",
    description: "Experiencia enfocada en bienestar y movimiento consciente.",
    id: "lumina",
    imageAlt: "Captura del proyecto Lúmina con una interfaz de pilates",
    imageClassName:
      "object-cover object-[0%_54%] opacity-100 scale-100",
    imageSrc: "/pilates-mu.png",
    number: "03",
    tag: "Pilates",
    title: "Lúmina",
  },
];

function CaseBadge({ children }: { children: string }) {
  return (
    <span className="inline-flex min-h-8 items-center rounded-full border border-accent/65 bg-surface/45 px-4 text-[12px] font-medium leading-none text-accent">
      {children}
    </span>
  );
}

function CaseCard({
  priority = false,
  study,
  variant = "compact",
}: {
  priority?: boolean;
  study: CaseStudy;
  variant?: "featured" | "compact";
}) {
  const isFeatured = variant === "featured";

  return (
    <article
      className={`relative isolate overflow-hidden rounded-[0.75rem] bg-surface ring-1 ring-border/55 ${study.cardClassName}`}
    >
      <Image
        src={study.imageSrc}
        alt={study.imageAlt}
        fill
        priority={priority}
        quality={100}
        unoptimized
        sizes={
          isFeatured
            ? "(min-width: 1024px) 36vw, (min-width: 768px) 70vw, 100vw"
            : "(min-width: 1024px) 31vw, (min-width: 768px) 48vw, 100vw"
        }
        className={`absolute inset-0 ${study.imageClassName}`}
      />

      <div
        className={
          isFeatured
            ? "relative z-10 px-6 pt-7 sm:px-8 md:px-10 md:pt-10"
            : "relative z-10 px-6 pt-7 sm:px-8"
        }
      >
        <div className={study.contentClassName}>
          <p className="text-[13px] font-medium leading-none text-accent">
            {study.number}
          </p>
          <h3
            className={
              isFeatured
                ? "mt-6 text-[42px] font-normal leading-none text-foreground md:text-[48px]"
                : "mt-5 text-[34px] font-normal leading-none text-foreground md:text-[38px]"
            }
          >
            {study.title}
          </h3>
          <p
            className={
              isFeatured
                ? "mt-4 text-[16px] leading-[1.38] text-muted md:text-[17px]"
                : "mt-4 text-[14px] leading-[1.32] text-muted md:text-[15px]"
            }
          >
            {study.description}
          </p>
          <div className="mt-5">
            <CaseBadge>{study.tag}</CaseBadge>
          </div>
        </div>
      </div>
    </article>
  );
}

export function WorkSection() {
  const [featuredCase, ...secondaryCases] = caseStudies;

  return (
    <section
      id="casos"
      className="relative isolate w-full scroll-mt-20 overflow-hidden bg-background px-5 py-12 sm:px-8 md:scroll-mt-[5.5rem] md:px-[4.75rem] lg:min-h-[calc(100svh-5.5rem)] lg:py-[3.4rem]"
    >
      <div className="relative z-10 mx-auto grid w-full max-w-[92rem] gap-6 lg:grid-cols-[0.82fr_0.95fr_0.9fr] lg:items-start lg:gap-3">
        <div className="relative flex flex-col pb-10 pt-2 lg:min-h-[43.5rem] lg:pb-0 lg:pt-8">
          <p className="mb-[1.45rem] text-[13px] font-medium uppercase leading-none text-accent">
            CASOS DESTACADOS
          </p>

          <h2 className="max-w-[28rem] text-[42px] font-normal leading-[1.02] text-foreground sm:text-[54px] md:text-[60px] lg:text-[58px] xl:text-[64px]">
            <span className="block">Proyectos</span>
            <span className="block">pensados para</span>
            <span className="block">funcionar y</span>
            <span className="block">
              distinguirse<span className="text-accent">.</span>
            </span>
          </h2>

          <p className="mt-8 max-w-[25rem] text-[16px] font-normal leading-[1.55] text-muted md:text-[17px]">
            Cada soluci&oacute;n responde a un contexto distinto, pero todas
            comparten un mismo criterio: claridad, utilidad y una ejecuci&oacute;n
            cuidada.
          </p>

          <Link
            href="/#contacto"
            className="group mt-9 inline-flex w-fit items-center gap-9 border-b border-accent pb-2 text-[15px] font-medium leading-none text-foreground transition-colors hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          >
            Ver todos los casos
            <ArrowRight
              aria-hidden="true"
              className="h-4 w-4 text-accent transition-transform duration-200 group-hover:translate-x-1"
              strokeWidth={1.7}
            />
          </Link>

          
        </div>

        <CaseCard priority study={featuredCase} variant="featured" />

        <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-1">
          {secondaryCases.map((study) => (
            <CaseCard key={study.id} study={study} />
          ))}
        </div>
      </div>
    </section>
  );
}
