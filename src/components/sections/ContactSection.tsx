import Image from "next/image";
import {
  ArrowRight,
  ChartNoAxesColumnIncreasing,
  CircleUserRound,
  ClipboardList,
  Home,
  Menu,
  Settings,
} from "lucide-react";
import type { ReactNode } from "react";

import { ContactEmailForm } from "./ContactEmailForm";

type ContactService = {
  id: string;
  label: ReactNode;
};

const contact = {
  email: "hola@coralab.dev",
  eyebrow: "HABLEMOS",
  heading: (
    <>
      Si tu entorno digital necesita m&aacute;s claridad, empecemos
      <span className="text-accent">.</span>
    </>
  ),
  services: [
    { id: "web", label: "Web" },
    { id: "producto", label: "Producto digital" },
    { id: "ux-ui", label: "UX/UI" },
    { id: "sistemas", label: <>Sistemas de dise&ntilde;o</> },
  ] satisfies ContactService[],
  text: (
    <>
      Podemos ayudarte a construir, actualizar o mejorar tu experiencia digital
      para que refleje mejor lo que eres y funcione mejor para tu equipo y tus
      usuarios.
    </>
  ),
};

const sidebarItems = [
  { Icon: Home, label: "Resumen", active: true },
  { Icon: ChartNoAxesColumnIncreasing, label: "Proyectos" },
  { Icon: ClipboardList, label: "Tareas" },
  { Icon: CircleUserRound, label: "Clientes" },
  { Icon: Home, label: "Reportes" },
  { Icon: Settings, label: "Ajustes" },
];

const metrics = [
  { label: "Ingresos", value: "$24.580", trend: "12,5%" },
  { label: "Proyectos", value: "32", trend: "8,3%" },
  { label: "Tareas completadas", value: "78%", trend: "15,4%" },
];

function ContactDashboardPreview() {
  return (
    <div
      aria-label="Preview de dashboard Coralab"
      className="relative overflow-hidden rounded-[0.62rem] border border-border bg-surface/90 shadow-[0_16px_38px_rgba(40,35,30,0.14)]"
      role="img"
    >
      <div className="flex min-h-[4.25rem] items-center justify-between border-b border-border px-[1.35rem]">
        <Image
          src="/brand/logo-horizontal-dark.png"
          alt=""
          width={820}
          height={186}
          className="h-auto w-[5.9rem]"
        />
        <Menu aria-hidden="true" className="h-4 w-4 text-foreground" strokeWidth={1.6} />
      </div>

      <div className="grid min-h-[20rem] grid-cols-[27%_1fr]">
        <aside className="border-r border-border bg-background/65 p-[1.15rem]">
          <div className="space-y-[0.7rem]">
            {sidebarItems.map(({ Icon, active, label }) => (
              <div
                key={label}
                className={
                  active
                    ? "flex items-center gap-3 rounded-[0.42rem] bg-border/45 px-3 py-2.5 text-[12px] text-foreground"
                    : "flex items-center gap-3 px-3 py-2.5 text-[12px] text-foreground"
                }
              >
                <Icon aria-hidden="true" className="h-4 w-4" strokeWidth={1.65} />
                <span>{label}</span>
              </div>
            ))}
          </div>
        </aside>

        <div className="p-[1.45rem]">
          <h3 className="text-[20px] font-normal leading-none text-foreground">
            Resumen
          </h3>

          <div className="mt-[1.25rem] grid grid-cols-3 gap-3">
            {metrics.map((metric) => (
              <div
                key={metric.label}
                className="rounded-[0.45rem] border border-border bg-background/70 p-4"
              >
                <p className="text-[10px] leading-none text-muted">{metric.label}</p>
                <p className="mt-3 text-[19px] leading-none text-foreground">
                  {metric.value}
                </p>
                <p className="mt-2 text-[10px] leading-none text-muted">
                  &uarr; {metric.trend}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-4 rounded-[0.45rem] border border-border bg-background/70 p-4">
            <p className="text-[11px] leading-none text-foreground">Actividad</p>
            <div className="relative mt-4 h-[9rem]">
              <div className="absolute inset-x-0 top-1/4 h-px bg-border/70" />
              <div className="absolute inset-x-0 top-1/2 h-px bg-border/70" />
              <div className="absolute inset-x-0 top-3/4 h-px bg-border/70" />
              <div className="absolute bottom-0 left-0 text-[9px] text-muted">0</div>
              <div className="absolute left-0 top-1/2 text-[9px] text-muted">10K</div>
              <div className="absolute left-0 top-1/4 text-[9px] text-muted">20K</div>
              <div className="absolute left-0 top-0 text-[9px] text-muted">30K</div>
              <svg aria-hidden="true" className="absolute inset-0 h-full w-full" viewBox="0 0 520 150" fill="none">
                <path
                  d="M42 118C72 119 78 116 106 96C132 77 147 68 176 86C202 103 217 112 243 88C267 66 284 80 309 73C337 65 343 42 370 52C393 60 399 80 426 66C451 53 459 21 488 31C505 37 509 50 520 48"
                  stroke="#4a4745"
                  strokeWidth="2"
                  fill="none"
                />
                <path
                  d="M398 79C421 65 425 36 449 45C468 52 470 21 492 30C507 36 508 50 520 48"
                  stroke="#fd4f21"
                  strokeWidth="2"
                  fill="none"
                />
              </svg>
              <div className="absolute inset-x-8 bottom-[-0.15rem] flex justify-between text-[8px] text-muted">
                {["Ene", "Feb", "Mar", "Abr", "May", "Jun", "Jul", "Ago", "Sep", "Oct", "Nov", "Dic"].map((month) => (
                  <span key={month}>{month}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function ContactSection() {
  return (
    <section
      id="contacto"
      className="relative isolate w-full scroll-mt-20 overflow-hidden bg-background px-5 py-12 sm:px-8 md:scroll-mt-[5.5rem] md:px-[4.75rem] lg:py-[3.4rem]"
    >
      <div className="relative mx-auto w-full max-w-[92rem] overflow-hidden rounded-[0.9rem] border border-border bg-background/35 px-5 py-10 sm:px-8 md:px-[3.7rem] md:py-[4.3rem]">
        <svg
          aria-hidden="true"
          className="pointer-events-none absolute right-[-3.5rem] top-[2rem] z-0 hidden h-[22rem] w-[42rem] text-border opacity-70 lg:block"
          viewBox="0 0 680 360"
          fill="none"
        >
          <path
            d="M0 218C21 106 82 56 183 66C252 73 275 136 316 137C352 138 345 96 381 70C436 30 509 51 552 97C604 153 604 231 562 292"
            stroke="currentColor"
            strokeWidth="1"
          />
          <path
            d="M52 230C66 142 112 104 190 112C252 119 276 184 316 184C358 184 358 116 405 92C457 66 519 90 552 137C589 189 585 255 542 316"
            stroke="currentColor"
            strokeWidth="1"
          />
        </svg>

        <div className="relative z-10 grid gap-10 lg:grid-cols-[0.9fr_1fr] lg:items-center lg:gap-[4.2rem]">
          <div>
            <p className="mb-[1rem] text-[10px] font-semibold uppercase leading-none tracking-[0.4em] text-accent">
              {contact.eyebrow}
            </p>

            <h2 className="max-w-[39rem] text-[34px] font-normal leading-[1.04] text-foreground sm:text-[46px] md:text-[54px] lg:text-[55px] xl:text-[56px]">
              {contact.heading}
            </h2>

            <p className="mt-[1.35rem] max-w-[39rem] text-[16px] font-normal leading-[1.5] text-foreground md:text-[18px]">
              {contact.text}
            </p>

            <ContactEmailForm email={contact.email} />

            <a
              href={`mailto:${contact.email}`}
              className="mt-[1.55rem] inline-flex w-fit items-center justify-center gap-[0.85rem] rounded-button py-2 text-[15px] font-medium leading-none text-foreground transition-colors hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background md:text-[16px]"
            >
              Escribir a Coralab
              <ArrowRight aria-hidden="true" className="h-4.5 w-4.5 text-accent" strokeWidth={1.6} />
            </a>
          </div>

          <div className="relative hidden md:block">
            <ContactDashboardPreview />
          </div>
        </div>

        <div className="relative z-10 mt-[3.4rem] flex flex-col gap-4 border-t border-transparent pt-0 sm:flex-row sm:items-center sm:gap-[1.8rem] lg:mt-[4.6rem]">
          <Image
            src="/brand/isotipo-coral.png"
            alt=""
            width={1016}
            height={686}
            className="h-auto w-[2.15rem] shrink-0"
          />
          <p className="text-[15px] leading-tight text-foreground md:text-[16px]">
            {contact.services.map((service, index) => (
              <span key={service.id}>
                {index > 0 ? " · " : ""}
                {service.label}
              </span>
            ))}
          </p>
        </div>
      </div>
    </section>
  );
}
