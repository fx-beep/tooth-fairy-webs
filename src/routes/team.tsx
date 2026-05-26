import { createFileRoute } from "@tanstack/react-router";
import d1 from "@/assets/dentist-1.jpg";
import d2 from "@/assets/dentist-2.jpg";
import d3 from "@/assets/dentist-3.jpg";

export const Route = createFileRoute("/team")({
  head: () => ({
    meta: [
      { title: "Our Team — ADH Dentistry" },
      {
        name: "description",
        content: "Meet the dentists and hygienists at ADH Dentistry — a caring, qualified team.",
      },
      { property: "og:title", content: "Meet the Team — ADH Dentistry" },
      {
        property: "og:description",
        content: "Qualified, compassionate dental professionals dedicated to your smile.",
      },
    ],
  }),
  component: Team,
});

const team = [
  {
    name: "Dr. Ahmed Hassan",
    role: "Founder & Principal Dentist",
    bio: "BDS, FCPS. 12 years of experience in restorative and cosmetic dentistry.",
    img: d1,
  },
  {
    name: "Dr. Hina Raza",
    role: "Orthodontist",
    bio: "Specialist in braces and clear aligners for teens and adults.",
    img: d2,
  },
  {
    name: "Sadia Khan",
    role: "Lead Dental Hygienist",
    bio: "Gentle cleanings, scaling, and preventive care for the whole family.",
    img: d3,
  },
];

function Team() {
  return (
    <div>
      <section className="mx-auto max-w-6xl px-6 py-20 text-center">
        <span className="text-sm font-medium uppercase tracking-wide text-accent">Our team</span>
        <h1 className="mx-auto mt-3 max-w-3xl font-display text-4xl font-semibold text-primary md:text-5xl">
          Meet the people behind your smile.
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
          Qualified, kind, and genuinely passionate about gentle dental care.
        </p>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-20">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {team.map((m) => (
            <article key={m.name} className="overflow-hidden rounded-2xl border border-border bg-card">
              <img
                src={m.img}
                alt={`${m.name}, ${m.role}`}
                width={800}
                height={1000}
                loading="lazy"
                className="aspect-[4/5] w-full object-cover"
              />
              <div className="p-6">
                <h2 className="font-display text-lg font-semibold text-primary">{m.name}</h2>
                <p className="text-sm text-accent">{m.role}</p>
                <p className="mt-3 text-sm text-muted-foreground">{m.bio}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
