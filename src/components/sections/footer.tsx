import Image from "next/image";
import Link from "next/link";

const logo = {
  alt: "Coralab",
  height: 186,
  src: "/brand/logo-horizontal-dark.png",
  width: 820,
};

export function Footer() {
  return (
    <footer className="w-full border-t border-line-soft bg-background">
      <div className="mx-auto flex min-h-24 w-full flex-col items-center justify-between gap-6 px-3 py-8 sm:px-4 md:min-h-28 md:flex-row md:py-0 lg:px-4">
        <Link
          href="/"
          aria-label="Ir al inicio"
          className="mx-auto flex w-fit rounded-button focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background md:mx-0"
        >
          <Image
            src={logo.src}
            alt={logo.alt}
            width={logo.width}
            height={logo.height}
            className="h-auto w-[142px] md:w-[168px]"
          />
        </Link>

        <p className="text-center text-base font-medium text-muted md:text-right">
          Coralab &mdash; Estudio digital
        </p>
      </div>
    </footer>
  );
}
