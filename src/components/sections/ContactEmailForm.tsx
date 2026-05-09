"use client";

import { useState } from "react";
import { ArrowRight } from "lucide-react";

type ContactEmailFormProps = {
  email: string;
};

function buildGmailComposeUrl(recipient: string, senderEmail: string) {
  const body = senderEmail
    ? `Hola Coralab, quiero hablar sobre mi proyecto.\n\nMi correo es: ${senderEmail}`
    : "Hola Coralab, quiero hablar sobre mi proyecto.";

  const params = new URLSearchParams({
    body,
    fs: "1",
    su: "Diagnostico Coralab",
    to: recipient,
    view: "cm",
  });

  return `https://mail.google.com/mail/?${params.toString()}`;
}

export function ContactEmailForm({ email }: ContactEmailFormProps) {
  const [senderEmail, setSenderEmail] = useState("");

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    window.open(buildGmailComposeUrl(email, senderEmail.trim()), "_blank", "noopener,noreferrer");
  }

  return (
    <form
      aria-label="Formulario de contacto"
      className="mt-[2rem] flex w-full max-w-[39rem] flex-col gap-3 sm:flex-row"
      onSubmit={handleSubmit}
    >
      <label className="sr-only" htmlFor="contact-email">
        Tu correo
      </label>
      <input
        id="contact-email"
        name="email"
        onChange={(event) => setSenderEmail(event.target.value)}
        placeholder="Tu correo"
        type="email"
        value={senderEmail}
        className="min-h-[3.25rem] flex-1 rounded-[0.22rem] border border-border bg-background/60 px-4 text-[16px] text-foreground outline-none transition-colors placeholder:text-muted/75 focus:border-accent focus:ring-2 focus:ring-accent/20 md:text-[18px]"
      />
      <button
        type="submit"
        className="inline-flex min-h-[3.25rem] items-center justify-center gap-[1.2rem] whitespace-nowrap rounded-[0.22rem] bg-accent px-[1.35rem] text-[15px] font-medium leading-none text-white transition-colors hover:bg-accent-light focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background md:min-w-[14rem] md:text-[16px]"
      >
        Escribir por correo
        <ArrowRight aria-hidden="true" className="h-4.5 w-4.5" strokeWidth={1.6} />
      </button>
    </form>
  );
}
