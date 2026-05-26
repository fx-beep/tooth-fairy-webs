import {
  Sparkles,
  Stethoscope,
  Smile,
  Wrench,
  Shield,
  AlignJustify,
  Baby,
  Gem,
  HeartPulse,
  Activity,
} from "lucide-react";

export type Service = {
  slug: string;
  title: string;
  short: string;
  description: string;
  icon: typeof Sparkles;
};

export const services: Service[] = [
  {
    slug: "checkups",
    title: "General Checkups",
    short: "Routine exams to keep your smile healthy.",
    description:
      "Comprehensive dental exams including digital X-rays, oral cancer screening, and personalized prevention advice.",
    icon: Stethoscope,
  },
  {
    slug: "cleaning",
    title: "Cleaning & Scaling",
    short: "Professional cleaning for fresh, healthy gums.",
    description:
      "Gentle ultrasonic scaling and polishing to remove plaque, tartar, and surface stains.",
    icon: Sparkles,
  },
  {
    slug: "whitening",
    title: "Teeth Whitening",
    short: "Brighter smiles in a single visit.",
    description:
      "Safe in-office whitening that lifts years of stains for a noticeably brighter, natural-looking smile.",
    icon: Smile,
  },
  {
    slug: "fillings",
    title: "Fillings & Restorations",
    short: "Tooth-coloured fillings that blend in.",
    description:
      "Durable composite restorations to repair cavities and chips while preserving your natural tooth.",
    icon: Wrench,
  },
  {
    slug: "root-canal",
    title: "Root Canal Treatment",
    short: "Pain-free care to save your tooth.",
    description:
      "Modern, gentle root canal therapy with rotary endodontics to relieve pain and preserve the natural tooth.",
    icon: Shield,
  },
  {
    slug: "braces",
    title: "Braces & Aligners",
    short: "Straight teeth, confident smile.",
    description:
      "Traditional braces and clear aligner options for teens and adults — guided by an experienced orthodontist.",
    icon: AlignJustify,
  },
  {
    slug: "implants",
    title: "Dental Implants",
    short: "Permanent replacements that feel natural.",
    description:
      "Titanium implants with custom crowns to restore missing teeth and full chewing function.",
    icon: Gem,
  },
  {
    slug: "pediatric",
    title: "Pediatric Dentistry",
    short: "Gentle dental care for little smiles.",
    description:
      "A friendly, calm environment designed to make kids feel safe — from first visits to growing-up checkups.",
    icon: Baby,
  },
  {
    slug: "cosmetic",
    title: "Cosmetic Dentistry",
    short: "Veneers, contouring & smile makeovers.",
    description:
      "Personalized cosmetic treatments — veneers, bonding, and shaping — to design the smile you want.",
    icon: HeartPulse,
  },
  {
    slug: "emergency",
    title: "Emergency Care",
    short: "Same-day appointments when you need them.",
    description:
      "Urgent dental care for broken teeth, severe pain, and trauma — call us anytime during clinic hours.",
    icon: Activity,
  },
];
