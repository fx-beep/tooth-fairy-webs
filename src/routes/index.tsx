import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight, Star, Sparkles, ShieldCheck, HeartPulse } from "lucide-react";
import { motion, type Variants } from "framer-motion";
import heroSmile from "@/assets/hero-smile.jpg";
import heroBrush from "@/assets/hero-brush.jpg";
import crystalTooth from "@/assets/crystal-tooth.jpg";
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
      {/* HERO */}
      <section className="relative">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-12 lg:grid-cols-12 lg:gap-8 lg:py-20">
          {/* LEFT */}
          <div className="relative z-10 lg:col-span-6 lg:pr-6">
            <motion.span
              initial="hidden"
              animate="show"
              variants={fadeUp}
              className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-3 py-1 text-xs font-medium"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-primary" />
              Welcoming new patients · Lahore, Pakistan
            </motion.span>

            <motion.h1
              initial="hidden"
              animate="show"
              custom={1}
              variants={fadeUp}
              className="mt-6 font-display text-5xl leading-[1.02] tracking-tight md:text-6xl lg:text-7xl"
            >
              Bringing <span className="relative inline-block">
                <span className="relative z-10">Care</span>
                <motion.span
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ delay: 0.6, duration: 0.7, ease: "easeOut" }}
                  className="absolute inset-x-0 bottom-1 -z-0 h-3 origin-left rounded-full bg-primary/30"
                />
              </span>
              <br />
              To Your <span className="text-primary">Smile.</span>
            </motion.h1>

            <motion.p
              initial="hidden"
              animate="show"
              custom={2}
              variants={fadeUp}
              className="mt-6 max-w-lg text-base text-muted-foreground md:text-lg"
            >
              Where every smile shines bright. Step into modern, gentle dental care
              with a team that treats you like family.
            </motion.p>

            <motion.div
              initial="hidden"
              animate="show"
              custom={3}
              variants={fadeUp}
              className="mt-8 flex flex-wrap items-center gap-3"
            >
              <Link
                to="/appointment"
                className="group inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/25 transition-all hover:-translate-y-0.5 hover:shadow-primary/40"
              >
                Book Appointment
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-6 py-3.5 text-sm font-semibold text-foreground hover:border-primary hover:text-primary"
              >
                Explore Services
              </Link>
            </motion.div>

            {/* Stat card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.7 }}
              className="mt-12 inline-flex w-full max-w-sm flex-col gap-3 rounded-2xl border border-border bg-card p-5 shadow-xl shadow-primary/5"
            >
              <div className="flex items-start justify-between">
                <div>
                  <div className="font-display text-4xl font-bold text-foreground">500+</div>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Happy patients <br /> at ADH Dentistry.
                  </p>
                </div>
                <div className="rounded-full bg-primary p-2 text-primary-foreground">
                  <ArrowUpRight className="h-4 w-4" />
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="flex -space-x-2">
                  {[heroSmile, heroBrush, heroSmile].map((src, i) => (
                    <img
                      key={i}
                      src={src}
                      alt=""
                      className="h-7 w-7 rounded-full border-2 border-card object-cover"
                    />
                  ))}
                </div>
                <div className="flex items-center gap-0.5">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-3.5 w-3.5 fill-primary text-primary" />
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          {/* RIGHT — image collage */}
          <div className="relative lg:col-span-6">
            {/* Big electric blue block */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.9, ease: "easeOut" }}
              className="absolute right-0 top-6 h-[420px] w-[78%] rounded-3xl bg-primary md:h-[520px]"
            />

            <div className="relative grid grid-cols-2 gap-4 pt-10">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.7 }}
                className="animate-float"
              >
                <img
                  src={heroSmile}
                  alt="Happy patient smiling"
                  width={768}
                  height={1024}
                  className="aspect-[3/4] w-full rounded-2xl object-cover shadow-2xl"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.35, duration: 0.7 }}
                className="mt-16"
                style={{ animation: "float-slow 7s ease-in-out infinite 1s" }}
              >
                <img
                  src={heroBrush}
                  alt="Healthy white teeth"
                  width={768}
                  height={1024}
                  className="aspect-[3/4] w-full rounded-2xl object-cover shadow-2xl"
                  loading="lazy"
                />
              </motion.div>
            </div>

            {/* Floating doctor card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.6 }}
              className="absolute -bottom-4 left-2 flex items-center gap-3 rounded-2xl border border-border bg-card p-3 pr-5 shadow-xl"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-primary/15 text-primary">
                <HeartPulse className="h-5 w-5" />
              </div>
              <div>
                <div className="text-sm font-semibold">Dr. Ayesha Khan</div>
                <div className="text-xs text-muted-foreground">Lead Dentist</div>
              </div>
              <span className="ml-2 inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-2.5 py-1 text-xs font-medium text-primary">
                <span className="h-1.5 w-1.5 rounded-full bg-primary" /> Available
              </span>
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
                "radial-gradient(ellipse at 30% 40%, #1e3a6e 0%, #0a1a3a 55%, #050d1f 100%)",
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

            <div className="relative grid grid-cols-1 items-center gap-6 px-8 pt-10 pb-16 md:grid-cols-12 md:px-12 md:pt-14 md:pb-20">
              {/* LEFT — headline */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative z-10 md:col-span-5"
              >
                <h2 className="font-display text-4xl leading-[1.05] tracking-tight text-white md:text-5xl lg:text-6xl">
                  A clearer path<br />to a confident<br /><em className="font-light italic text-white/95">smile</em>.
                </h2>
                <p className="mt-6 max-w-sm text-sm leading-relaxed text-white/70">
                  A premium dental and aesthetic studio crafting confident smiles
                  for those who settle for nothing ordinary.
                </p>
              </motion.div>

              {/* CENTER — crystal tooth overlay */}
              <div className="pointer-events-none absolute inset-0 z-10 flex items-center justify-center md:static md:col-span-4 md:items-center md:justify-center">
                <motion.img
                  src={crystalTooth}
                  alt="Crystal tooth"
                  width={1024}
                  height={1024}
                  loading="lazy"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.2, ease: "easeOut" }}
                  className="h-auto w-[260px] -translate-y-4 md:w-full md:max-w-[440px] md:translate-y-0"
                  style={{ filter: "drop-shadow(0 40px 80px rgba(60,140,255,0.55))" }}
                />
              </div>

              {/* RIGHT — luxury card */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="relative z-10 md:col-span-3 md:self-end"
              >
                <div className="rounded-2xl border border-white/15 bg-white/5 p-6 backdrop-blur-xl">
                  <h3 className="font-display text-2xl leading-tight text-white">
                    Luxury care<br />made personal
                  </h3>
                  <Link
                    to="/appointment"
                    className="mt-5 inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-xs font-semibold text-[#0a1a3a] transition-transform hover:-translate-y-0.5"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-[#0a1a3a]" />
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
