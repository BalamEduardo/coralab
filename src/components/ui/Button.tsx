import Link from "next/link";
import type {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  ReactNode,
} from "react";

import type { ButtonSize, ButtonVariant } from "@/lib/types";
import { cn } from "@/lib/utils";

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "border-accent bg-accent text-white shadow-card hover:border-accent-light hover:bg-accent-light",
  secondary:
    "border-accent bg-transparent text-accent hover:bg-accent hover:text-white",
  ghost:
    "border-transparent bg-transparent text-accent hover:bg-accent/10 hover:text-foreground",
};

const sizeClasses: Record<ButtonSize, string> = {
  sm: "min-h-9 px-4 text-sm",
  md: "min-h-11 px-5 text-base",
  lg: "min-h-12 px-6 text-base md:min-h-13 md:px-7",
};

const baseClasses =
  "inline-flex items-center justify-center gap-2 rounded-button border font-semibold leading-none transition duration-200 ease-out hover:scale-[1.02] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background active:scale-[0.99] disabled:pointer-events-none disabled:opacity-50";

type SharedButtonProps = {
  children: ReactNode;
  className?: string;
  size?: ButtonSize;
  variant?: ButtonVariant;
};

type ButtonAsLinkProps = SharedButtonProps &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "className" | "href"> & {
    external?: boolean;
    href: string;
  };

type ButtonAsButtonProps = SharedButtonProps &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    external?: never;
    href?: never;
  };

export type ButtonProps = ButtonAsLinkProps | ButtonAsButtonProps;

function getButtonClassName({
  className,
  size = "md",
  variant = "primary",
}: Pick<SharedButtonProps, "className" | "size" | "variant">) {
  return cn(baseClasses, variantClasses[variant], sizeClasses[size], className);
}

export function Button(props: ButtonProps) {
  const {
    children,
    className,
    size = "md",
    variant = "primary",
    ...rest
  } = props;
  const buttonClassName = getButtonClassName({ className, size, variant });

  if ("href" in rest && rest.href) {
    const { external, href, rel, target, ...anchorProps } = rest;
    const isExternal = external ?? /^https?:\/\//.test(href);

    if (isExternal) {
      return (
        <a
          className={buttonClassName}
          href={href}
          rel={rel ?? "noreferrer"}
          target={target ?? "_blank"}
          {...anchorProps}
        >
          {children}
        </a>
      );
    }

    return (
      <Link className={buttonClassName} href={href} {...anchorProps}>
        {children}
      </Link>
    );
  }

  const buttonProps = rest as ButtonHTMLAttributes<HTMLButtonElement>;

  return (
    <button
      {...buttonProps}
      className={buttonClassName}
      type={buttonProps.type ?? "button"}
    >
      {children}
    </button>
  );
}
