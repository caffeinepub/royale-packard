import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, Phone, X } from "lucide-react";
import { useEffect, useState } from "react";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/#about" },
  { label: "Services", href: "/#services" },
  { label: "Projects", href: "/#projects" },
  { label: "Listings", href: "/listings" },
  { label: "Contact", href: "/#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const routerState = useRouterState();
  const isHome = routerState.location.pathname === "/";

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    if (href.startsWith("/#") && isHome) {
      const id = href.replace("/#", "");
      const el = document.getElementById(id);
      if (el) {
        setTimeout(() => el.scrollIntoView({ behavior: "smooth" }), 50);
      }
    } else if (href.startsWith("/#")) {
      // Navigate to home first, then scroll
      setTimeout(() => {
        const id = href.replace("/#", "");
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: "smooth" });
      }, 200);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-cream shadow-card backdrop-blur-sm" : "bg-cream/95"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 lg:px-8 flex items-center justify-between h-16 lg:h-20">
        {/* Logo */}
        <Link
          to="/"
          className="flex-shrink-0"
          data-ocid="nav.link.1"
          onClick={() => setMobileOpen(false)}
        >
          <span className="font-serif font-bold text-lg lg:text-xl tracking-wider text-brand-black hover:text-gold transition-colors duration-200">
            ROYALE <span className="text-gold">PACKARD</span>
          </span>
        </Link>

        {/* Desktop nav */}
        <ul className="hidden lg:flex items-center gap-8">
          {NAV_LINKS.map((link, idx) => (
            <li key={link.href}>
              {link.href.startsWith("/#") ? (
                <a
                  href={link.href}
                  data-ocid={`nav.link.${idx + 1}`}
                  onClick={(e) => {
                    if (isHome) {
                      e.preventDefault();
                      handleNavClick(link.href);
                    }
                  }}
                  className="nav-link font-sans-brand text-sm font-medium text-charcoal hover:text-gold transition-colors duration-200 py-1"
                >
                  {link.label}
                </a>
              ) : (
                <Link
                  to={link.href as "/listings"}
                  data-ocid={`nav.link.${idx + 1}`}
                  className="nav-link font-sans-brand text-sm font-medium text-charcoal hover:text-gold transition-colors duration-200 py-1"
                >
                  {link.label}
                </Link>
              )}
            </li>
          ))}
        </ul>

        {/* Phone number */}
        <a
          href="tel:+919990456786"
          data-ocid="nav.phone_link"
          className="hidden lg:flex items-center gap-2 font-sans-brand text-sm font-semibold text-charcoal hover:text-gold transition-colors duration-200"
        >
          <Phone className="w-4 h-4 text-gold" />
          9990456786
        </a>

        {/* Mobile menu toggle */}
        <button
          type="button"
          className="lg:hidden p-2 text-charcoal hover:text-gold transition-colors"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
          data-ocid="nav.toggle"
        >
          {mobileOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-cream border-t border-border shadow-card-hover">
          <ul className="flex flex-col py-4">
            {NAV_LINKS.map((link, idx) => (
              <li key={link.href}>
                {link.href.startsWith("/#") ? (
                  <a
                    href={link.href}
                    data-ocid={`nav.link.${idx + 1}`}
                    onClick={(e) => {
                      if (isHome) {
                        e.preventDefault();
                        handleNavClick(link.href);
                      } else {
                        setMobileOpen(false);
                      }
                    }}
                    className="block px-6 py-3 font-sans-brand text-sm font-medium text-charcoal hover:text-gold hover:bg-cream-dark transition-colors"
                  >
                    {link.label}
                  </a>
                ) : (
                  <Link
                    to={link.href as "/listings"}
                    data-ocid={`nav.link.${idx + 1}`}
                    onClick={() => setMobileOpen(false)}
                    className="block px-6 py-3 font-sans-brand text-sm font-medium text-charcoal hover:text-gold hover:bg-cream-dark transition-colors"
                  >
                    {link.label}
                  </Link>
                )}
              </li>
            ))}
            <li className="px-6 py-3">
              <a
                href="tel:+919990456786"
                className="flex items-center gap-2 font-sans-brand text-sm font-semibold text-gold"
              >
                <Phone className="w-4 h-4" />
                9990456786
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
