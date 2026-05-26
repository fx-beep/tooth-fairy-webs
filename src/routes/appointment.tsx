import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { toast } from "sonner";
import { CalendarCheck } from "lucide-react";
import { services } from "@/lib/services";

export const Route = createFileRoute("/appointment")({
  head: () => ({
    meta: [
      { title: "Book an Appointment — ADH Dentistry" },
      {
        name: "description",
        content: "Request a dental appointment at ADH Dentistry. Same-week slots usually available.",
      },
      { property: "og:title", content: "Book an Appointment — ADH Dentistry" },
      {
        property: "og:description",
        content: "Request a dental appointment online. We'll confirm within 24 hours.",
      },
    ],
  }),
  component: Appointment,
});

function Appointment() {
  const [submitting, setSubmitting] = useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    const data = Object.fromEntries(new FormData(e.currentTarget));
    console.log("Appointment request:", data);
    setTimeout(() => {
      toast.success("Request received! We'll confirm your appointment within 24 hours.");
      (e.target as HTMLFormElement).reset();
      setSubmitting(false);
    }, 700);
  };

  return (
    <section className="mx-auto max-w-3xl px-6 py-20">
      <div className="text-center">
        <div className="mx-auto inline-flex h-14 w-14 items-center justify-center rounded-full bg-accent/15 text-accent">
          <CalendarCheck className="h-7 w-7" />
        </div>
        <h1 className="mt-5 font-display text-4xl font-semibold text-primary md:text-5xl">
          Book your appointment
        </h1>
        <p className="mt-3 text-muted-foreground">
          Fill in your details and we'll confirm your slot within 24 hours.
        </p>
      </div>

      <form
        onSubmit={onSubmit}
        className="mt-10 rounded-2xl border border-border bg-card p-6 md:p-8"
      >
        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <label className="text-sm font-medium" htmlFor="a-name">Full name</label>
            <input
              id="a-name" name="name" required
              className="mt-1 w-full rounded-lg border border-input bg-background px-3 py-2 text-sm focus:border-accent focus:outline-none"
            />
          </div>
          <div>
            <label className="text-sm font-medium" htmlFor="a-phone">Phone / WhatsApp</label>
            <input
              id="a-phone" name="phone" type="tel" required placeholder="+92 …"
              className="mt-1 w-full rounded-lg border border-input bg-background px-3 py-2 text-sm focus:border-accent focus:outline-none"
            />
          </div>
          <div>
            <label className="text-sm font-medium" htmlFor="a-email">Email (optional)</label>
            <input
              id="a-email" name="email" type="email"
              className="mt-1 w-full rounded-lg border border-input bg-background px-3 py-2 text-sm focus:border-accent focus:outline-none"
            />
          </div>
          <div>
            <label className="text-sm font-medium" htmlFor="a-date">Preferred date</label>
            <input
              id="a-date" name="date" type="date" required
              className="mt-1 w-full rounded-lg border border-input bg-background px-3 py-2 text-sm focus:border-accent focus:outline-none"
            />
          </div>
          <div className="sm:col-span-2">
            <label className="text-sm font-medium" htmlFor="a-service">Service</label>
            <select
              id="a-service" name="service" required
              className="mt-1 w-full rounded-lg border border-input bg-background px-3 py-2 text-sm focus:border-accent focus:outline-none"
            >
              <option value="">Select a service…</option>
              {services.map((s) => (
                <option key={s.slug} value={s.title}>{s.title}</option>
              ))}
              <option value="Not sure">Not sure — please advise</option>
            </select>
          </div>
          <div className="sm:col-span-2">
            <label className="text-sm font-medium" htmlFor="a-msg">Notes (optional)</label>
            <textarea
              id="a-msg" name="notes" rows={4}
              placeholder="Anything we should know — pain, anxiety, preferred time of day…"
              className="mt-1 w-full rounded-lg border border-input bg-background px-3 py-2 text-sm focus:border-accent focus:outline-none"
            />
          </div>
        </div>

        <button
          type="submit"
          disabled={submitting}
          className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground hover:bg-accent hover:text-accent-foreground disabled:opacity-60 sm:w-auto"
        >
          {submitting ? "Sending…" : "Request appointment"}
        </button>

        <p className="mt-4 text-xs text-muted-foreground">
          By submitting, you agree we may contact you to confirm your appointment.
        </p>
      </form>
    </section>
  );
}
