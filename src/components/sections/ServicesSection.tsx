import Link from "next/link";
import { ArrowRight, Infinity } from "lucide-react";
import { memo, type ReactNode } from "react";
import { FadeInUp } from "@/components/animations/FadeInUp";
import { StaggeredGrid } from "@/components/animations/StaggeredGrid";

type Service = {
  description: string;
  id: string;
  imageAlt: string;
  imagePath: string;
  mediaTone: "browser" | "dashboard" | "mobile" | "system";
  title: ReactNode;
};

const services: Service[] = [
  {
    description: "Webs claras, rapidas y alineadas a la marca.",
    id: "sitios-web",
    imageAlt: "Preview de sitio web desarrollado por Coralab",
    imagePath: "/services/sitios-web.webp",
    mediaTone: "browser",
    title: "Sitios web",
  },
  {
    description: "Interfaces y herramientas para procesos reales.",
    id: "producto-digital",
    imageAlt: "Preview de dashboard de producto digital",
    imagePath: "/services/producto-digital.webp",
    mediaTone: "dashboard",
    title: "Producto digital",
  },
  {
    description: "Experiencias intuitivas y decisiones mas simples.",
    id: "ux-ui",
    imageAlt: "Preview de pantallas moviles de experiencia UX/UI",
    imagePath: "/services/ux-ui.webp",
    mediaTone: "mobile",
    title: "UX/UI",
  },
  {
    description: "Bases consistentes para escalar productos y equipos.",
    id: "sistemas-diseno",
    imageAlt: "Preview de sistema de diseno Coralab",
    imagePath: "/services/sistemas-diseno.webp",
    mediaTone: "system",
    title: <>Sistemas de dise&ntilde;o</>,
  },
];

function ServiceMediaSlot({
  imageAlt,
  imagePath,
  mediaTone,
}: Pick<Service, "imageAlt" | "imagePath" | "mediaTone">) {
  return (
    <div
      aria-label={imageAlt}
      className="relative mt-[1.05rem] min-h-[9rem] overflow-hidden rounded-[0.38rem] border border-border bg-surface/70 sm:min-h-[9.6rem] lg:min-h-[9.2rem] xl:min-h-[10.2rem]"
      data-expected-image={imagePath}
      role="img"
    >
      <div className="absolute inset-x-0 top-0 h-7 border-b border-border bg-[#f2efec]">
        <span className="absolute left-4 top-1/2 h-1.5 w-1.5 -translate-y-1/2 rounded-full bg-accent" />
        <span className="absolute left-7 top-1/2 h-1.5 w-1.5 -translate-y-1/2 rounded-full bg-[#e1ddd9]" />
        <span className="absolute left-10 top-1/2 h-1.5 w-1.5 -translate-y-1/2 rounded-full bg-[#e1ddd9]" />
      </div>

      <div className="absolute inset-x-0 bottom-0 top-7 bg-[linear-gradient(90deg,rgba(228,226,225,0.56)_1px,transparent_1px),linear-gradient(0deg,rgba(228,226,225,0.5)_1px,transparent_1px)] bg-[size:4.5rem_4.5rem]" />

      {mediaTone === "browser" ? (
        <div className="absolute left-[9%] top-[37%] h-[34%] w-[63%] rounded-[0.32rem] border border-border bg-background/85" />
      ) : null}

      {mediaTone === "dashboard" ? (
        <>
          <div className="absolute bottom-0 left-0 top-7 w-[25%] border-r border-border bg-background/80" />
          <div className="absolute left-[31%] top-[35%] h-[21%] w-[17%] rounded-[0.3rem] border border-border bg-background/85" />
          <div className="absolute left-[51%] top-[35%] h-[21%] w-[17%] rounded-[0.3rem] border border-border bg-background/85" />
          <div className="absolute left-[31%] right-[8%] top-[66%] h-px bg-accent" />
          <div className="absolute left-[31%] right-[8%] top-[75%] h-px bg-accent/70" />
        </>
      ) : null}

      {mediaTone === "mobile" ? (
        <>
          <div className="absolute bottom-[-1.05rem] left-[18%] h-[8.4rem] w-[5.5rem] rounded-[0.85rem] border border-border bg-background/90" />
          <div className="absolute bottom-[-0.7rem] right-[17%] h-[8.4rem] w-[5.5rem] rounded-[0.85rem] border border-border bg-background/90" />
        </>
      ) : null}

      {mediaTone === "system" ? (
        <>
          <div className="absolute left-[8%] top-[34%] h-[1.2rem] w-[44%] rounded-full bg-foreground/8" />
          <div className="absolute left-[8%] top-[51%] flex gap-1.5">
            <span className="h-5 w-5 rounded-[0.2rem] bg-accent" />
            <span className="h-5 w-5 rounded-[0.2rem] bg-foreground" />
            <span className="h-5 w-5 rounded-[0.2rem] bg-muted" />
            <span className="h-5 w-5 rounded-[0.2rem] bg-border" />
          </div>
          <div className="absolute right-[9%] top-[39%] h-6 w-[29%] rounded-[0.22rem] bg-accent" />
          <div className="absolute bottom-[18%] left-[8%] text-[1.55rem] leading-none text-foreground">
            Ag
          </div>
        </>
      ) : null}
    </div>
  );
}

const ServiceCard = memo(function ServiceCard({ service }: { service: Service }) {
  return (
    <article className="flex min-h-[18rem] flex-col overflow-hidden rounded-[0.45rem] border border-border bg-background/35 p-[1.2rem] transition-colors duration-200 hover:border-accent/45 sm:p-[1.35rem] lg:min-h-[19.4rem] xl:min-h-[20.2rem] xl:p-[1.55rem]">
      <Infinity
        aria-hidden="true"
        className="mb-[0.75rem] h-7 w-7 text-accent md:h-8 md:w-8"
        strokeWidth={1.9}
      />
      <h3 className="text-[21px] font-normal leading-[1.08] text-foreground md:text-[24px]">
        {service.title}
      </h3>
      <p className="mt-[0.55rem] max-w-[15rem] text-[14px] leading-[1.42] text-foreground md:text-[15px]">
        {service.description}
      </p>
      <ServiceMediaSlot
        imageAlt={service.imageAlt}
        imagePath={service.imagePath}
        mediaTone={service.mediaTone}
      />
    </article>
  );
});

export function ServicesSection() {
  return (
    <section
      id="servicios"
      className="relative isolate w-full scroll-mt-20 overflow-hidden bg-background px-5 py-12 sm:px-8 md:scroll-mt-[5.5rem] md:px-[4.75rem] lg:min-h-[calc(100svh-5.5rem)] lg:py-[3.2rem]"
    >
      <svg
        aria-hidden="true"
        className="pointer-events-none absolute bottom-[-15.5rem] left-[-12rem] z-0 hidden h-[37rem] w-[52rem] text-border opacity-85 md:block"
        viewBox="0 0 840 596"
        fill="none"
      >
        <circle cx="496" cy="470" r="214" stroke="currentColor" strokeWidth="1" />
        <circle cx="496" cy="470" r="154" stroke="currentColor" strokeWidth="1" />
        <path d="M0 596C108 506 183 413 224 318C270 212 230 153 104 142C63 138 28 124 0 99" stroke="currentColor" strokeWidth="1" />
        <path d="M0 558C144 408 263 302 358 240C494 150 612 135 710 195C774 234 817 289 840 358" stroke="currentColor" strokeWidth="1" />
      </svg>

      <div className="relative z-10 mx-auto grid w-full max-w-[82rem] gap-7 lg:grid-cols-[0.92fr_1.65fr] lg:gap-[2.6rem]">
        <div className="pt-0 lg:sticky lg:top-[5.5rem] lg:h-fit lg:pt-[1.45rem]">
          <FadeInUp delay={0.1}>
            <p className="mb-[1rem] text-[10px] font-semibold uppercase leading-none tracking-[0.4em] text-accent">
              SERVICIOS
            </p>
          </FadeInUp>

          <FadeInUp delay={0.2}>
            <h2 className="max-w-[33rem] text-[30px] font-normal leading-[1.03] text-foreground sm:text-[40px] md:text-[48px] lg:text-[48px] xl:text-[50px]">
              <span className="block">Dise&ntilde;o digital</span>
              <span className="block">con estructura</span>
              <span className="block">
                y precisi&oacute;n<span className="text-accent">.</span>
              </span>
            </h2>
          </FadeInUp>

          <FadeInUp delay={0.3}>
            <p className="mt-[1.15rem] max-w-[30rem] text-[16px] font-normal leading-[1.5] text-foreground md:text-[17px] lg:mt-[1.35rem]">
              Creamos entornos digitales pensados para comunicar mejor, funcionar
              mejor y crecer con m&aacute;s claridad.
            </p>
          </FadeInUp>

          <FadeInUp delay={0.4}>
            <Link
              href="/#contacto"
              className="group mt-[1.65rem] inline-flex w-fit items-center justify-center gap-[0.75rem] rounded-button py-2 text-[15px] font-medium leading-none text-accent transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background md:mt-[1.9rem] md:text-[16px]"
            >
              Ver servicios
              <ArrowRight
                aria-hidden="true"
                className="h-4.5 w-4.5 transition-transform duration-200 group-hover:translate-x-1"
                strokeWidth={1.6}
              />
            </Link>
          </FadeInUp>
        </div>

        <StaggeredGrid className="grid gap-4 sm:grid-cols-2 lg:gap-[1.05rem]" staggerDelay={0.15}>
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </StaggeredGrid>
      </div>
    </section>
  );
}
