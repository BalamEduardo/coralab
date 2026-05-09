import type { HTMLAttributes, ReactNode } from "react";

import type { ContainerSize } from "@/lib/types";
import { cn } from "@/lib/utils";

const sizeClasses: Record<ContainerSize, string> = {
  sm: "max-w-3xl",
  md: "max-w-5xl",
  lg: "max-w-[92rem]",
  full: "max-w-none",
};

export type ContainerProps = HTMLAttributes<HTMLDivElement> & {
  children: ReactNode;
  size?: ContainerSize;
};

export function Container({
  children,
  className,
  size = "lg",
  ...props
}: ContainerProps) {
  return (
    <div
      className={cn(
        "mx-auto w-full px-3 sm:px-4",
        sizeClasses[size],
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}
