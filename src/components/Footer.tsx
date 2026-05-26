import { Link } from "@tanstack/react-router";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import logo from "@/assets/adh-logo.png";

export function Footer() {
  return (
    <footer className="mt-24 border-t border-border/60 bg-secondary/60">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-14 md:grid-cols-4">
        <div>
          <div className="flex items-center gap-2">
            <img src={logo} alt="ADH Dentistry" width={36} height={36} className="h-9 w-9" loading="lazy" />
            <span className="font-display text-lg font-semibold text-primary">ADH Dentistry</span>
          </div>
          <p className="mt-3 text-sm text-muted-foreground">
            Gentle, modern dental care for the whole family in Pakistan.
          </p>
        </div>

        <div>
          <h4 className="text-sm font-semibold text-primary">Visit</h4>
          <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
            <li className="flex gap-2"><MapPin className="mt-0.5 h-4 w-4 text-accent" /> Main Boulevard, Lahore, Pakistan</li>
            <li className="flex gap-2"><Phone className="mt-0.5 h-4 w-4 text-accent" /> +92 300 1234567</li>
            <li className="flex gap-2"><Mail className="mt-0.5 h-4 w-4 text-accent" /> hello@adhdentistry.pk</li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold text-primary">Hours</h4>
          <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
            <li className="flex gap-2"><Clock className="mt-0.5 h-4 w-4 text-accent" /> Mon – Sat: 10am – 9pm</li>
            <li className="pl-6">Sunday: 2pm – 8pm</li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold text-primary">Explore</h4>
          <ul className="mt-3 space-y-2 text-sm">
            <li><Link to="/about" className="text-muted-foreground hover:text-primary">About</Link></li>
            <li><Link to="/services" className="text-muted-foreground hover:text-primary">Services</Link></li>
            <li><Link to="/team" className="text-muted-foreground hover:text-primary">Team</Link></li>
            <li><Link to="/contact" className="text-muted-foreground hover:text-primary">Contact</Link></li>
            <li><Link to="/appointment" className="text-muted-foreground hover:text-primary">Book Appointment</Link></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border/60 py-5 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} ADH Dentistry. All rights reserved.
      </div>
    </footer>
  );
}
