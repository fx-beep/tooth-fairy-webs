## ADH Dentistry — Marketing Website

A warm, friendly single-practice marketing site for ADH Dentistry (Pakistan), with a custom logo, Outfit + Figtree typography, and a sage/cream palette.

### Pages (separate routes for SEO)

- `/` Home — hero, intro, services preview, why-choose-us, testimonials, CTA
- `/about` — practice story, mission, certifications, clinic photos
- `/services` — full services list with descriptions
- `/team` — dentists & staff profiles
- `/contact` — address, phone, hours, contact form, embedded map placeholder
- `/appointment` — appointment request form (name, phone, preferred date, service, message)

Shared header (logo + nav + "Book Appointment" CTA) and footer (contact info, hours, social, quick links) via `__root.tsx`.

### Features included

- Custom ADH logo (generated, tooth + leaf motif in sage green)
- Hero image of a warm, modern dental clinic
- Services: General Checkups, Cleaning & Scaling, Teeth Whitening, Fillings & Restorations, Root Canal, Braces & Aligners, Dental Implants, Pediatric Dentistry, Cosmetic Dentistry, Emergency Care
- Testimonials/patient reviews section
- Why-choose-us highlights (experience, modern equipment, affordable, friendly staff)
- Office hours & location block
- WhatsApp / phone quick-contact (common in Pakistan)
- Appointment request form (frontend only — submissions log; backend can be added later)
- Per-route SEO metadata (title, description, OG tags)
- Responsive mobile layout

### Design system

- Palette (sage & cream): bg `#faf8f5`, surface `#f0ebe3`, accent sage `#87a878`, deep sage `#4a6741` — encoded as oklch tokens in `src/styles.css`
- Typography: Outfit (headings) + Figtree (body), loaded via Google Fonts
- Generous whitespace, soft rounded cards, subtle shadows, warm friendly tone

### Technical notes

- TanStack Start file-based routes under `src/routes/`
- Shared `Header` + `Footer` components in `src/components/`
- Logo + hero + clinic imagery generated to `src/assets/`
- Appointment form: client-side validation only; toast on submit. No backend in this scope.
- All colors via semantic tokens (no hardcoded hex in components)

### Out of scope (can add later)

- Real backend for appointment submissions (Lovable Cloud + email notification)
- Patient login / portal
- Online payments
- Blog / CMS
