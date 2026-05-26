import { createFileRoute } from "@tanstack/react-router";
import { Award, Heart, Leaf, Users } from "lucide-react";
import about from "@/assets/about-patient.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About ADH Dentistry — Our Story & Mission" },
      {
        name: "description",
        content:
          "Learn about ADH Dentistry — a family-run dental clinic in Pakistan dedicated to gentle, modern care.",
      },
      { property: "og:title", content: "About ADH Dentistry" },
      {
        property: "og:description",
        content: "A family-run dental clinic in Pakistan focused on gentle, modern care.",
      },
    ],
  }),
  component: About,
});

function About() {
  return (
    <div>
      <section className="mx-auto grid max-w-6xl gap-12 px-6 py-20 md:grid-cols-2">
        <div className="flex flex-col justify-center">
          <span className="text-sm font-medium uppercase tracking-wide text-accent">About us</span>
          <h1 className="mt-3 font-display text-4xl font-semibold text-primary md:text-5xl">
            Built around patient comfort.
          </h1>
          <p className="mt-5 text-muted-foreground">
            ADH Dentistry was founded with a simple belief: dental care should feel calm,
            personal, and never rushed. Our team combines years of training with a
            genuine love for what they do — and it shows in every smile that walks
            out of our door.
          </p>
          <p className="mt-4 text-muted-foreground">
            From your very first visit, you'll notice the difference. We take the time
            to explain every step, answer every question, and design treatment plans
            that fit your life — not the other way around.
          </p>
        </div>
        <div className="relative">
          <div className="absolute -inset-4 -z-10 rounded-3xl bg-accent/15 blur-2xl" />
          <img
            src={about}
            alt="Smiling patient at ADH Dentistry"
            width={1200}
            height={1400}
            loading="lazy"
            className="aspect-[4/5] w-full rounded-3xl object-cover shadow-xl"
          />
        </div>
      </section>

      <section className="bg-secondary/50 py-20">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="font-display text-3xl font-semibold text-primary md:text-4xl">
            What we stand for
          </h2>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { Icon: Heart, t: "Compassion", d: "We treat every patient like family." },
              { Icon: Leaf, t: "Gentle care", d: "Pain-free techniques, calm environment." },
              { Icon: Award, t: "Excellence", d: "Certified, continually-trained clinicians." },
              { Icon: Users, t: "Community", d: "Affordable plans for every family." },
            ].map(({ Icon, t, d }) => (
              <div key={t} className="rounded-2xl bg-card p-6 shadow-sm">
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-accent/15 text-accent">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-4 font-display text-lg font-semibold">{t}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 md:grid-cols-3">
          {[
            { n: "10+", l: "Years of practice" },
            { n: "500+", l: "Patients served" },
            { n: "98%", l: "Would recommend" },
          ].map((s) => (
            <div key={s.l} className="rounded-2xl border border-border bg-card p-8 text-center">
              <div className="font-display text-5xl font-semibold text-primary">{s.n}</div>
              <div className="mt-2 text-sm text-muted-foreground">{s.l}</div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
