import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight, Star, Sparkles, ShieldCheck, HeartPulse } from "lucide-react";
import { motion, type Variants } from "framer-motion";
import heroPortrait from "@/assets/hero-portrait.jpg";
import doctorPortrait from "@/assets/doctor-portrait.jpg";

import { services } from "@/lib/services";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "ADH Dentistry — Bringing Care to Your Smile" },
      {
        name: "description",
        content:
          "ADH Dentistry in Pakistan — modern dental care, gentle team, and a smile you'll love. Book your appointment today.",
      },
      { property: "og:title", content: "ADH Dentistry — Bringing Care to Your Smile" },
      {
        property: "og:description",
        content: "Modern dental care in Pakistan. Book your appointment today.",
      },
    ],
  }),
  component: Index,
});

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.08, ease: "easeOut" },
  }),
};

function Index() {
  const featured = services.slice(0, 6);

  return (
    <div className="overflow-hidden">
      {/* HERO — Tilted Glassmorphism (Warm Sand Editorial) */}
      <section className="relative overflow-hidden">
        {/* Ambient sand orbs */}
        <div className="pointer-events-none absolute -left-32 top-20 h-[420px] w-[420px] rounded-full bg-secondary/60 blur-3xl" />
        <div className="pointer-events-none absolute -right-32 bottom-0 h-[360px] w-[360px] rounded-full bg-primary/10 blur-3xl" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-6 py-16 lg:grid-cols-12 lg:gap-20 lg:py-24">
          {/* LEFT — Editorial copy */}
          <div className="relative z-10 lg:col-span-7">
            <motion.div
              initial="hidden"
              animate="show"
              variants={fadeUp}
              className="inline-flex items-center rounded-full border border-secondary bg-secondary/30 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-accent"
            >
              <span className="mr-2.5 h-2 w-2 rounded-full bg-primary" />
              Welcoming new patients · Lahore
            </motion.div>

            <motion.h1
              initial="hidden"
              animate="show"
              custom={1}
              variants={fadeUp}
              className="mt-8 font-display text-6xl font-extrabold leading-[0.9] tracking-tight text-accent md:text-7xl lg:text-8xl"
            >
              Bringing{" "}
              <span className="font-serif text-[1.05em] font-medium italic text-primary">
                Care
              </span>
              <br />
              To Your Smile
            </motion.h1>

            <motion.p
              initial="hidden"
              animate="show"
              custom={2}
              variants={fadeUp}
              className="mt-8 max-w-md text-lg font-light leading-relaxed text-accent/80 md:text-xl"
            >
              A sanctuary of dental excellence where modern precision meets a
              bespoke, luxury patient experience in Lahore.
            </motion.p>

            <motion.div
              initial="hidden"
              animate="show"
              custom={3}
              variants={fadeUp}
              className="mt-10 flex flex-wrap items-center gap-4"
            >
              <Link
                to="/appointment"
                className="rounded-full bg-primary px-9 py-4 text-sm font-bold text-primary-foreground shadow-xl shadow-primary/20 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-primary/30 active:scale-95"
              >
                Book Appointment
              </Link>
              <Link
                to="/services"
                className="group flex items-center gap-3 px-4 py-4 text-sm font-bold text-accent"
              >
                Explore Services
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1.5" />
              </Link>
            </motion.div>
          </div>

          {/* RIGHT — Tilted portrait + glass cards */}
          <div className="relative lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, rotate: 6 }}
              animate={{ opacity: 1, scale: 1, rotate: 2 }}
              transition={{ duration: 1, ease: "easeOut" }}
              whileHover={{ rotate: 0 }}
              className="relative z-10 aspect-[3/4] w-full overflow-hidden rounded-[3rem] shadow-2xl shadow-accent/20"
            >
              <img
                src={heroPortrait}
                alt="Smiling patient at ADH Dentistry"
                width={832}
                height={1088}
                className="h-full w-full object-cover"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-accent/15 to-transparent" />
            </motion.div>

            {/* Doctor glass card */}
            <motion.div
              initial={{ opacity: 0, x: -30, y: 20 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ delay: 0.5, duration: 0.7 }}
              className="glass-card animate-float absolute left-[-2rem] top-[22%] z-20 max-w-[240px] rounded-[2rem] p-5"
              style={{ animationDelay: "-2s" }}
            >
              <div className="mb-3 flex items-center gap-3">
                <div className="h-12 w-12 overflow-hidden rounded-full border-2 border-background shadow">
                  <img
                    src={doctorPortrait}
                    alt="Dr. Arslan"
                    width={48}
                    height={48}
                    loading="lazy"
                    className="h-full w-full object-cover"
                  />
                </div>
                <div>
                  <div className="text-sm font-bold text-accent">Dr. Arslan</div>
                  <div className="text-[10px] font-semibold uppercase tracking-tighter text-accent/60">
                    Lead Prosthodontist
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-2 rounded-xl bg-emerald-50 px-3 py-2 text-xs font-bold text-emerald-800">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
                </span>
                Available Today
              </div>
            </motion.div>

            {/* Rating glass card */}
            <motion.div
              initial={{ opacity: 0, x: 30, y: 20 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ delay: 0.65, duration: 0.7 }}
              className="glass-card animate-float absolute -bottom-6 -right-4 z-20 flex flex-col items-center rounded-[2rem] p-6 text-center"
              style={{ animationDelay: "-5s" }}
            >
              <div className="font-display text-3xl font-black text-primary">4.9/5</div>
              <div className="my-2 flex gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                ))}
              </div>
              <div className="text-[10px] font-bold uppercase tracking-widest text-accent/60">
                Patient Satisfaction
              </div>
            </motion.div>
          </div>
        </div>


        {/* Marquee */}
        <div className="mt-10 border-y border-border bg-secondary/60 py-4">
          <div className="flex gap-12 overflow-hidden whitespace-nowrap">
            <div className="flex shrink-0 animate-marquee gap-12 pr-12">
              {Array.from({ length: 2 }).map((_, k) => (
                <div key={k} className="flex shrink-0 gap-12 pr-12">
                  {["Gentle Care", "Modern Equipment", "Family Friendly", "Same-Week Slots", "Transparent Pricing", "Certified Dentists"].map(
                    (t) => (
                      <span key={t + k} className="flex items-center gap-3 text-sm font-medium text-foreground/80">
                        <Sparkles className="h-4 w-4 text-primary" /> {t}
                      </span>
                    ),
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-10 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="font-display text-4xl tracking-tight md:text-5xl"
              >
                Care that puts you <span className="text-primary">at ease.</span>
              </motion.h2>
              <p className="mt-5 max-w-md text-muted-foreground">
                Everything we do is designed around comfort — for first-timers,
                anxious patients, and little ones alike.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:col-span-7">
              {[
                { icon: ShieldCheck, t: "Experienced team", d: "Qualified dentists with 10+ years of practice." },
                { icon: Sparkles, t: "Modern equipment", d: "Digital X-rays, rotary endodontics, sterile workflows." },
                { icon: HeartPulse, t: "Gentle approach", d: "Calm, unhurried visits — especially for nervous patients." },
                { icon: Star, t: "Transparent pricing", d: "Family-friendly packages with no hidden fees." },
              ].map((item, i) => (
                <motion.div
                  key={item.t}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  whileHover={{ y: -4 }}
                  className="group rounded-2xl border border-border bg-card p-6 transition-colors hover:border-primary"
                >
                  <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-primary text-primary-foreground">
                    <item.icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-5 font-display text-lg">{item.t}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{item.d}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* EXCELLENCE SHOWCASE — luxury blue */}
      <section className="relative overflow-hidden py-24">
        <div className="mx-auto max-w-7xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className="relative overflow-hidden rounded-[2rem] shadow-2xl shadow-primary/30"
            style={{
              background:
                "radial-gradient(ellipse at 30% 40%, #3b5f50 0%, #2d4a3e 55%, #1d3328 100%)",
            }}
          >
            {/* top nav row */}
            <div className="relative z-20 flex items-center justify-between px-8 pt-7 md:px-12">
              <span className="font-display text-lg tracking-tight text-white">ADH Dentistry</span>
              <nav className="hidden gap-7 text-xs font-medium uppercase tracking-[0.2em] text-white/70 md:flex">
                <Link to="/about" className="hover:text-white">About</Link>
                <Link to="/services" className="hover:text-white">Services</Link>
                <Link to="/team" className="hover:text-white">Specialists</Link>
                <Link to="/contact" className="hover:text-white">Contact</Link>
              </nav>
            </div>

            <div className="relative grid grid-cols-1 items-center gap-10 px-6 pt-10 pb-14 sm:px-8 md:grid-cols-12 md:gap-6 md:px-12 md:pt-14 md:pb-20">
              {/* LEFT — headline */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative z-10 min-w-0 md:col-span-5"
              >
                <h2 className="font-display text-[clamp(2rem,8vw,3.75rem)] leading-[1.05] tracking-tight text-white lg:text-6xl">
                  A clearer path to a confident <em className="font-light italic text-white/95">smile</em>.
                </h2>
                <p className="mt-5 max-w-sm text-sm leading-relaxed text-white/70">
                  A premium dental and aesthetic studio crafting confident smiles
                  for those who settle for nothing ordinary.
                </p>
              </motion.div>

              {/* CENTER — editorial typography */}
              <div className="relative col-span-12 flex min-w-0 items-center justify-center md:col-span-4">
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(201,130,74,0.35),transparent_65%)] blur-3xl" />
                <motion.div
                  initial={{ opacity: 0, scale: 0.92 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.1, ease: "easeOut" }}
                  className="relative flex w-full flex-col items-center text-center"
                >
                  <span
                    className="font-serif font-light italic leading-none text-[#c9824a] text-[clamp(5rem,22vw,16rem)]"
                    style={{ textShadow: "0 20px 60px rgba(201,130,74,0.45)" }}
                  >
                    ADH
                  </span>
                  <span className="mt-2 font-display text-[10px] font-bold uppercase tracking-[0.45em] text-white/70 md:text-xs md:tracking-[0.55em]">
                    Est. Lahore
                  </span>
                </motion.div>
              </div>

              {/* RIGHT — luxury card */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="relative z-10 min-w-0 md:col-span-3 md:self-end"
              >
                <div className="rounded-2xl border border-white/15 bg-white/5 p-6 backdrop-blur-xl">
                  <h3 className="font-display text-2xl leading-tight text-white">
                    Luxury care made personal
                  </h3>
                  <Link
                    to="/appointment"
                    className="mt-5 inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-xs font-semibold text-[#2d4a3e] transition-transform hover:-translate-y-0.5"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-[#c9824a]" />
                    Schedule a visit
                  </Link>
                </div>
              </motion.div>
            </div>

            {/* stats strip */}
            <div className="relative z-10 grid grid-cols-2 gap-px border-t border-white/10 bg-white/5 md:grid-cols-4">
              {[
                { n: "15+", l: "Years of excellence" },
                { n: "98%", l: "Patient satisfaction" },
                { n: "5000+", l: "Smiles transformed" },
                { n: "17", l: "Certified experts" },
              ].map((s, i) => (
                <motion.div
                  key={s.l}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                  className="px-6 py-7 backdrop-blur-sm"
                >
                  <div className="font-display text-3xl font-bold text-white md:text-4xl">{s.n}</div>
                  <div className="mt-1.5 text-xs uppercase tracking-[0.15em] text-white/60">{s.l}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>


      {/* SERVICES */}
      <section className="bg-secondary/60 py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                Our Services
              </span>
              <h2 className="mt-3 font-display text-4xl tracking-tight md:text-5xl">
                Everything for a <br className="hidden md:block" /> healthier smile.
              </h2>
            </div>
            <Link
              to="/services"
              className="group inline-flex items-center gap-1 text-sm font-semibold text-primary"
            >
              View all <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {featured.map((s, i) => (
              <motion.div
                key={s.slug}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.06 }}
                whileHover={{ y: -6 }}
                className="group relative overflow-hidden rounded-2xl border border-border bg-card p-6 transition-all hover:border-primary hover:shadow-xl hover:shadow-primary/10"
              >
                <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-primary/5 transition-transform group-hover:scale-150" />
                <div className="relative inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary text-primary-foreground">
                  <s.icon className="h-5 w-5" />
                </div>
                <h3 className="relative mt-5 font-display text-lg">{s.title}</h3>
                <p className="relative mt-2 text-sm text-muted-foreground">{s.short}</p>
                <div className="relative mt-5 inline-flex items-center gap-1 text-sm font-medium text-primary opacity-0 transition-opacity group-hover:opacity-100">
                  Learn more <ArrowRight className="h-3.5 w-3.5" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-display text-4xl tracking-tight md:text-5xl"
          >
            Clients love <span className="text-primary">our smiles.</span>
          </motion.h2>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {[
              { q: "The most relaxed I've ever been at a dental clinic. Everyone is so kind and gentle.", n: "Ayesha K.", r: "Patient" },
              { q: "My kids actually look forward to their checkups now. Bright, warm, and welcoming.", n: "Hamza S.", r: "Parent" },
              { q: "Got my whitening done in one visit. Clear pricing, no surprises. Highly recommend.", n: "Sana M.", r: "Patient" },
            ].map((t, i) => (
              <motion.figure
                key={t.n}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="rounded-2xl border border-border bg-card p-6"
              >
                <div className="flex gap-0.5">
                  {Array.from({ length: 5 }).map((_, j) => (
                    <Star key={j} className="h-4 w-4 fill-primary text-primary" />
                  ))}
                </div>
                <blockquote className="mt-4 text-sm leading-relaxed">"{t.q}"</blockquote>
                <figcaption className="mt-5 text-sm">
                  <span className="font-semibold">{t.n}</span>
                  <span className="text-muted-foreground"> · {t.r}</span>
                </figcaption>
              </motion.figure>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="pb-24">
        <div className="mx-auto max-w-7xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative overflow-hidden rounded-3xl bg-primary px-8 py-16 text-primary-foreground md:px-16 md:py-20"
          >
            <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-white/10 blur-2xl" />
            <div className="absolute -bottom-24 -left-10 h-72 w-72 rounded-full bg-white/10 blur-2xl" />
            <div className="relative max-w-2xl">
              <h2 className="font-display text-4xl tracking-tight md:text-5xl">
                Ready for a brighter, healthier smile?
              </h2>
              <p className="mt-4 text-primary-foreground/85">
                Book an appointment today — same-week slots usually available.
              </p>
              <Link
                to="/appointment"
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-background px-6 py-3.5 text-sm font-semibold text-primary shadow-lg transition-transform hover:-translate-y-0.5"
              >
                Book Appointment <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
