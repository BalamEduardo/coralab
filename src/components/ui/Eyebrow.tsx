import type { ElementType, HTMLAttributes, ReactNode } from "react";

import type { EyebrowColor } from "@/lib/types";
import { cn } from "@/lib/utils";

const colorClasses: Record<EyebrowColor, string> = {
  coral: "text-accent",
  default: "text-muted",
  white: "text-white",
};

export type EyebrowProps = HTMLAttributes<HTMLElement> & {
  as?: ElementType;
  children: ReactNode;
  color?: EyebrowColor;
};

export function Eyebrow({
  as: Component = "p",
  children,
  className,
  color = "coral",
  ...props
}: EyebrowProps) {
  return (
    <Component
      className={cn(
        "text-[12px] font-bold uppercase leading-none tracking-[0.35em]",
        colorClasses[color],
        className,
      )}
      {...props}
    >
      {children}
    </Component>
  );
}
