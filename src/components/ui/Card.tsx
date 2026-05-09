import type { HTMLAttributes, ReactNode } from "react";

import type { CardVariant } from "@/lib/types";
import { cn } from "@/lib/utils";

const variantClasses: Record<CardVariant, string> = {
  default: "border-border bg-surface",
  bordered: "border-border bg-transparent",
  elevated: "border-border bg-surface shadow-card",
};

export type CardProps = HTMLAttributes<HTMLDivElement> & {
  children: ReactNode;
  variant?: CardVariant;
};

export function Card({
  children,
  className,
  variant = "default",
  ...props
}: CardProps) {
  return (
    <div
      className={cn(
        "rounded-card border p-6 transition-colors duration-200 hover:border-accent",
        variantClasses[variant],
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}
