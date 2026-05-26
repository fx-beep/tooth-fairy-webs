import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { services } from "@/lib/services";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — ADH Dentistry" },
      {
        name: "description",
        content:
          "Our full range of dental services — checkups, cleaning, whitening, braces, implants, cosmetic and emergency care.",
      },
      { property: "og:title", content: "Dental Services — ADH Dentistry" },
      {
        property: "og:description",
        content: "Modern dental services for families in Pakistan.",
      },
    ],
  }),
  component: Services,
});

function Services() {
  return (
    <div>
      <section className="mx-auto max-w-6xl px-6 py-20 text-center">
        <span className="text-sm font-medium uppercase tracking-wide text-accent">Services</span>
        <h1 className="mx-auto mt-3 max-w-3xl font-display text-4xl font-semibold text-primary md:text-5xl">
          Everything your smile needs, in one place.
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
          From routine prevention to advanced cosmetic and restorative work — our team
          provides comprehensive dental care for every stage of life.
        </p>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-20">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <article
              key={s.slug}
              className="group rounded-2xl border border-border bg-card p-7 transition-all hover:-translate-y-0.5 hover:border-accent hover:shadow-md"
            >
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-accent/15 text-accent">
                <s.icon className="h-6 w-6" />
              </div>
              <h2 className="mt-5 font-display text-xl font-semibold text-primary">
                {s.title}
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {s.description}
              </p>
            </article>
          ))}
        </div>

        <div className="mt-14 rounded-3xl bg-secondary/60 px-8 py-12 text-center">
          <h2 className="font-display text-2xl font-semibold text-primary md:text-3xl">
            Not sure what you need?
          </h2>
          <p className="mx-auto mt-2 max-w-xl text-muted-foreground">
            Book a consultation — we'll examine, discuss options, and recommend the
            right plan for you. No pressure, ever.
          </p>
          <Link
            to="/appointment"
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground hover:bg-accent hover:text-accent-foreground"
          >
            Book a consultation <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
