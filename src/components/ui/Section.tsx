import type { HTMLAttributes, ReactNode } from "react";

import type { SectionBackground } from "@/lib/types";
import { cn } from "@/lib/utils";

const backgroundClasses: Record<SectionBackground, string> = {
  default: "bg-background text-foreground",
  surface: "bg-surface text-foreground",
  coral: "bg-accent text-white",
};

export type SectionProps = HTMLAttributes<HTMLElement> & {
  background?: SectionBackground;
  children: ReactNode;
};

export function Section({
  background = "default",
  children,
  className,
  ...props
}: SectionProps) {
  return (
    <section
      className={cn(
        "py-[60px] md:py-20 lg:py-[120px]",
        backgroundClasses[background],
        className,
      )}
      {...props}
    >
      {children}
    </section>
  );
}
