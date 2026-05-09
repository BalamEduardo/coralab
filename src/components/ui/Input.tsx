import type { InputHTMLAttributes } from "react";

import { cn } from "@/lib/utils";

export type InputProps = InputHTMLAttributes<HTMLInputElement>;

export function Input({ className, type = "text", ...props }: InputProps) {
  return (
    <input
      className={cn(
        "min-h-12 w-full rounded-button border border-border bg-surface px-4 py-3 text-base text-foreground transition-colors duration-200 placeholder:text-muted/60 focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20 disabled:cursor-not-allowed disabled:opacity-60",
        className,
      )}
      type={type}
      {...props}
    />
  );
}
