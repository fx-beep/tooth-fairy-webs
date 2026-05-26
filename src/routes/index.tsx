import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Check, Star } from "lucide-react";
import hero from "@/assets/hero-clinic.jpg";
import { services } from "@/lib/services";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "ADH Dentistry — Gentle, Modern Dental Care in Pakistan" },
      {
        name: "description",
        content:
          "Family-friendly dental clinic in Pakistan. Checkups, whitening, braces, implants and emergency care from a caring team.",
      },
      { property: "og:title", content: "ADH Dentistry — Modern Dental Care" },
      {
        property: "og:description",
        content: "Family-friendly dental care in Pakistan. Book your appointment today.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  const featured = services.slice(0, 6);

  return (
    <div>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 py-16 md:grid-cols-2 md:py-24">
          <div className="flex flex-col justify-center">
            <span className="inline-flex w-fit items-center gap-2 rounded-full bg-secondary px-3 py-1 text-xs font-medium text-primary">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              Welcoming new patients
            </span>
            <h1 className="mt-5 font-display text-4xl font-semibold leading-tight text-primary md:text-6xl">
              Gentle dental care for the whole family.
            </h1>
            <p className="mt-5 max-w-lg text-base text-muted-foreground md:text-lg">
              At ADH Dentistry we combine modern technology with a warm, unhurried
              approach — so every visit feels easy, comfortable, and reassuring.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/appointment"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow-sm transition-all hover:bg-accent hover:text-accent-foreground"
              >
                Book Appointment <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-6 py-3 text-sm font-medium text-foreground hover:bg-secondary"
              >
                Explore Services
              </Link>
            </div>

            <div className="mt-10 flex items-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                ))}
              </div>
              <span>500+ happy smiles · Lahore, Pakistan</span>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 -z-10 rounded-3xl bg-accent/15 blur-2xl" />
            <img
              src={hero}
              alt="Warm, modern reception area at ADH Dentistry"
              width={1600}
              height={1100}
              className="aspect-[4/3] w-full rounded-3xl object-cover shadow-xl"
            />
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section className="bg-secondary/50 py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="max-w-2xl">
            <h2 className="font-display text-3xl font-semibold text-primary md:text-4xl">
              Care that puts you at ease
            </h2>
            <p className="mt-3 text-muted-foreground">
              Everything we do is designed around comfort — for first-timers,
              anxious patients, and little ones alike.
            </p>
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { t: "Experienced team", d: "Qualified dentists with 10+ years of practice." },
              { t: "Modern equipment", d: "Digital X-rays, rotary endodontics, sterile workflows." },
              { t: "Affordable plans", d: "Transparent pricing with family-friendly packages." },
              { t: "Friendly staff", d: "Warm, patient care from check-in to follow-up." },
            ].map((item) => (
              <div key={item.t} className="rounded-2xl bg-card p-6 shadow-sm">
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-accent/15 text-accent">
                  <Check className="h-5 w-5" />
                </div>
                <h3 className="mt-4 font-display text-lg font-semibold">{item.t}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{item.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES PREVIEW */}
      <section className="py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <h2 className="font-display text-3xl font-semibold text-primary md:text-4xl">
                What we offer
              </h2>
              <p className="mt-2 max-w-xl text-muted-foreground">
                From routine cleanings to full smile makeovers — all under one calm, modern roof.
              </p>
            </div>
            <Link
              to="/services"
              className="inline-flex items-center gap-1 text-sm font-medium text-primary hover:text-accent"
            >
              View all <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {featured.map((s) => (
              <div
                key={s.slug}
                className="group rounded-2xl border border-border bg-card p-6 transition-all hover:-translate-y-0.5 hover:border-accent hover:shadow-md"
              >
                <div className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-accent/15 text-accent">
                  <s.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-4 font-display text-lg font-semibold text-primary">
                  {s.title}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">{s.short}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="bg-secondary/50 py-20">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="font-display text-3xl font-semibold text-primary md:text-4xl">
            Loved by our patients
          </h2>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {[
              {
                quote:
                  "The most relaxed I've ever been at a dental clinic. The whole team is so kind and gentle.",
                name: "Ayesha K.",
                role: "Patient",
              },
              {
                quote:
                  "My kids actually look forward to their checkups now. The clinic is bright, warm, and welcoming.",
                name: "Hamza S.",
                role: "Parent",
              },
              {
                quote:
                  "Got my whitening done in one visit. Clear pricing, no surprises. Highly recommend.",
                name: "Sana M.",
                role: "Patient",
              },
            ].map((t) => (
              <figure key={t.name} className="rounded-2xl bg-card p-6 shadow-sm">
                <div className="flex gap-0.5">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                  ))}
                </div>
                <blockquote className="mt-4 text-sm leading-relaxed text-foreground/90">
                  "{t.quote}"
                </blockquote>
                <figcaption className="mt-5 text-sm">
                  <span className="font-medium text-primary">{t.name}</span>
                  <span className="text-muted-foreground"> · {t.role}</span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="mx-auto max-w-4xl px-6">
          <div className="rounded-3xl bg-primary px-8 py-14 text-center text-primary-foreground md:px-16">
            <h2 className="font-display text-3xl font-semibold md:text-4xl">
              Ready for a brighter, healthier smile?
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-primary-foreground/85">
              Book an appointment today — same-week slots usually available.
            </p>
            <Link
              to="/appointment"
              className="mt-7 inline-flex items-center gap-2 rounded-full bg-background px-6 py-3 text-sm font-medium text-primary hover:bg-accent hover:text-accent-foreground"
            >
              Book Appointment <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
