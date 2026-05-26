import { createFileRoute } from "@tanstack/react-router";
import { Clock, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact ADH Dentistry — Get in Touch" },
      {
        name: "description",
        content: "Visit, call, or message ADH Dentistry in Lahore, Pakistan. We're here to help.",
      },
      { property: "og:title", content: "Contact ADH Dentistry" },
      {
        property: "og:description",
        content: "Visit, call, WhatsApp, or message us — we'd love to hear from you.",
      },
    ],
  }),
  component: Contact,
});

function Contact() {
  const [submitting, setSubmitting] = useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    const data = Object.fromEntries(new FormData(e.currentTarget));
    console.log("Contact submission:", data);
    setTimeout(() => {
      toast.success("Thanks! We'll get back to you within 24 hours.");
      (e.target as HTMLFormElement).reset();
      setSubmitting(false);
    }, 600);
  };

  return (
    <div>
      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="max-w-2xl">
          <span className="text-sm font-medium uppercase tracking-wide text-accent">Contact</span>
          <h1 className="mt-3 font-display text-4xl font-semibold text-primary md:text-5xl">
            We'd love to hear from you.
          </h1>
          <p className="mt-4 text-muted-foreground">
            Questions, feedback, or just want to say hello — reach us anytime
            through the form, phone, or WhatsApp.
          </p>
        </div>

        <div className="mt-12 grid gap-10 md:grid-cols-2">
          <div className="space-y-5">
            {[
              { Icon: MapPin, t: "Visit us", d: "Main Boulevard, Gulberg III, Lahore, Pakistan" },
              { Icon: Phone, t: "Call us", d: "+92 300 1234567" },
              { Icon: MessageCircle, t: "WhatsApp", d: "+92 300 1234567" },
              { Icon: Mail, t: "Email", d: "hello@adhdentistry.pk" },
              { Icon: Clock, t: "Hours", d: "Mon – Sat: 10am – 9pm · Sun: 2pm – 8pm" },
            ].map(({ Icon, t, d }) => (
              <div key={t} className="flex gap-4 rounded-2xl border border-border bg-card p-5">
                <div className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-accent/15 text-accent">
                  <Icon className="h-5 w-5" />
                </div>
                <div>
                  <div className="font-display font-semibold text-primary">{t}</div>
                  <div className="text-sm text-muted-foreground">{d}</div>
                </div>
              </div>
            ))}
          </div>

          <form
            onSubmit={onSubmit}
            className="rounded-2xl border border-border bg-card p-6 md:p-8"
          >
            <h2 className="font-display text-xl font-semibold text-primary">Send a message</h2>
            <div className="mt-5 grid gap-4">
              <div>
                <label className="text-sm font-medium" htmlFor="c-name">Name</label>
                <input
                  id="c-name" name="name" required
                  className="mt-1 w-full rounded-lg border border-input bg-background px-3 py-2 text-sm focus:border-accent focus:outline-none"
                />
              </div>
              <div>
                <label className="text-sm font-medium" htmlFor="c-email">Email</label>
                <input
                  id="c-email" name="email" type="email" required
                  className="mt-1 w-full rounded-lg border border-input bg-background px-3 py-2 text-sm focus:border-accent focus:outline-none"
                />
              </div>
              <div>
                <label className="text-sm font-medium" htmlFor="c-msg">Message</label>
                <textarea
                  id="c-msg" name="message" required rows={4}
                  className="mt-1 w-full rounded-lg border border-input bg-background px-3 py-2 text-sm focus:border-accent focus:outline-none"
                />
              </div>
              <button
                type="submit"
                disabled={submitting}
                className="mt-2 inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground hover:bg-accent hover:text-accent-foreground disabled:opacity-60"
              >
                {submitting ? "Sending…" : "Send message"}
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
}
