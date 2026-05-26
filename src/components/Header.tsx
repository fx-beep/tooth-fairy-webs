import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/adh-logo.png";

const navItems = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/team", label: "Team" },
  { to: "/contact", label: "Contact" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/85 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link to="/" className="flex items-center gap-2" onClick={() => setOpen(false)}>
          <img src={logo} alt="ADH Dentistry logo" width={40} height={40} className="h-10 w-10" />
          <span className="font-display text-lg font-semibold tracking-tight text-primary">
            ADH Dentistry
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="text-sm font-medium text-foreground/80 transition-colors hover:text-primary"
              activeProps={{ className: "text-primary" }}
              activeOptions={{ exact: item.to === "/" }}
            >
              {item.label}
            </Link>
          ))}
          <Link
            to="/appointment"
            className="rounded-full bg-primary px-5 py-2 text-sm font-medium text-primary-foreground shadow-sm transition-all hover:bg-accent hover:text-accent-foreground"
          >
            Book Appointment
          </Link>
        </nav>

        <button
          aria-label="Toggle menu"
          className="md:hidden"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-border/60 bg-background md:hidden">
          <nav className="mx-auto flex max-w-6xl flex-col px-6 py-4">
            {navItems.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className="py-2 text-sm font-medium text-foreground/80"
                activeProps={{ className: "text-primary" }}
                activeOptions={{ exact: item.to === "/" }}
              >
                {item.label}
              </Link>
            ))}
            <Link
              to="/appointment"
              onClick={() => setOpen(false)}
              className="mt-3 rounded-full bg-primary px-5 py-2 text-center text-sm font-medium text-primary-foreground"
            >
              Book Appointment
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
