import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { AnchorHTMLAttributes, ReactNode } from "react";

import { cn } from "@/lib/utils";

export type TextLinkProps = Omit<
  AnchorHTMLAttributes<HTMLAnchorElement>,
  "className" | "href"
> & {
  arrow?: boolean;
  children: ReactNode;
  className?: string;
  external?: boolean;
  href: string;
};

const textLinkClasses =
  "group inline-flex w-fit items-center gap-2 font-semibold text-accent transition-colors duration-200 hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background";

export function TextLink({
  arrow = true,
  children,
  className,
  external,
  href,
  rel,
  target,
  ...props
}: TextLinkProps) {
  const content = (
    <>
      <span>{children}</span>
      {arrow ? (
        <ArrowRight
          aria-hidden="true"
          className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
          strokeWidth={1.8}
        />
      ) : null}
    </>
  );
  const linkClassName = cn(textLinkClasses, className);
  const isExternal = external ?? /^https?:\/\//.test(href);

  if (isExternal) {
    return (
      <a
        className={linkClassName}
        href={href}
        rel={rel ?? "noreferrer"}
        target={target ?? "_blank"}
        {...props}
      >
        {content}
      </a>
    );
  }

  return (
    <Link className={linkClassName} href={href} {...props}>
      {content}
    </Link>
  );
}
