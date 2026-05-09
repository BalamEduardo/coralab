import type { ReactNode } from "react";

type SectionPlaceholderProps = {
  id: string;
  title: ReactNode;
  headingLevel?: 1 | 2;
};

export function SectionPlaceholder({
  id,
  title,
  headingLevel = 2,
}: SectionPlaceholderProps) {
  const Heading = headingLevel === 1 ? "h1" : "h2";

  return (
    <section
      id={id}
      className="flex min-h-[calc(100svh-5rem)] w-full items-center justify-center md:min-h-[calc(100svh-7rem)]"
    >
      <Heading className="text-4xl font-bold">{title}</Heading>
    </section>
  );
}
