import { Link } from "@tanstack/react-router";
import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { SiFacebook, SiInstagram, SiLinkedin } from "react-icons/si";

const currentYear = new Date().getFullYear();

export default function Footer() {
  return (
    <footer className="bg-brand-black text-cream">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12 mb-12">
          {/* Column 1: Logo + description */}
          <div className="lg:col-span-1">
            <div className="mb-4">
              <span className="font-serif font-bold text-2xl tracking-wider">
                ROYALE <span className="text-gold">PACKARD</span>
              </span>
            </div>
            <p className="font-sans-brand text-sm text-gold italic mb-4 tracking-wide">
              Plan Better. Design Better. Build Better.
            </p>
            <p
              className="font-sans-brand text-sm leading-relaxed"
              style={{ color: "oklch(0.65 0 0)" }}
            >
              Delhi's trusted name in premium residential construction,
              commercial development, and luxury interior design. Building
              timeless spaces since 2012.
            </p>
            {/* Social icons */}
            <div className="flex items-center gap-4 mt-6">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                data-ocid="footer.facebook_link"
                className="w-9 h-9 rounded-full border flex items-center justify-center border-gold/30 text-gold hover:bg-gold hover:text-brand-black transition-all duration-200"
              >
                <SiFacebook className="w-4 h-4" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                data-ocid="footer.instagram_link"
                className="w-9 h-9 rounded-full border flex items-center justify-center border-gold/30 text-gold hover:bg-gold hover:text-brand-black transition-all duration-200"
              >
                <SiInstagram className="w-4 h-4" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                data-ocid="footer.linkedin_link"
                className="w-9 h-9 rounded-full border flex items-center justify-center border-gold/30 text-gold hover:bg-gold hover:text-brand-black transition-all duration-200"
              >
                <SiLinkedin className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="font-serif font-semibold text-base text-gold mb-5 tracking-wide">
              Quick Links
            </h4>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/"
                  data-ocid="footer.quick_link.1"
                  className="font-sans-brand text-sm transition-colors duration-200 hover:text-gold"
                  style={{ color: "oklch(0.65 0 0)" }}
                >
                  Home
                </Link>
              </li>
              <li>
                <a
                  href="/#about"
                  data-ocid="footer.quick_link.2"
                  className="font-sans-brand text-sm transition-colors duration-200 hover:text-gold"
                  style={{ color: "oklch(0.65 0 0)" }}
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="/#services"
                  data-ocid="footer.quick_link.3"
                  className="font-sans-brand text-sm transition-colors duration-200 hover:text-gold"
                  style={{ color: "oklch(0.65 0 0)" }}
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="/#projects"
                  data-ocid="footer.quick_link.4"
                  className="font-sans-brand text-sm transition-colors duration-200 hover:text-gold"
                  style={{ color: "oklch(0.65 0 0)" }}
                >
                  Projects
                </a>
              </li>
              <li>
                <Link
                  to="/listings"
                  data-ocid="footer.quick_link.5"
                  className="font-sans-brand text-sm transition-colors duration-200 hover:text-gold"
                  style={{ color: "oklch(0.65 0 0)" }}
                >
                  Listings
                </Link>
              </li>
              <li>
                <a
                  href="/#contact"
                  data-ocid="footer.quick_link.6"
                  className="font-sans-brand text-sm transition-colors duration-200 hover:text-gold"
                  style={{ color: "oklch(0.65 0 0)" }}
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Services */}
          <div>
            <h4 className="font-serif font-semibold text-base text-gold mb-5 tracking-wide">
              Services
            </h4>
            <ul className="space-y-3">
              {[
                "Residential Construction",
                "Commercial Development",
                "Interior Design",
                "Home Renovation",
                "Modular Kitchens",
                "Luxury Wardrobes",
              ].map((service, i) => (
                <li key={service}>
                  <span
                    data-ocid={`footer.service_link.${i + 1}`}
                    className="font-sans-brand text-sm"
                    style={{ color: "oklch(0.65 0 0)" }}
                  >
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div>
            <h4 className="font-serif font-semibold text-base text-gold mb-5 tracking-wide">
              Contact Us
            </h4>
            <ul className="space-y-4">
              <li>
                <a
                  href="tel:+919990456786"
                  data-ocid="footer.phone_link"
                  className="flex items-start gap-3 font-sans-brand text-sm hover:text-gold transition-colors duration-200"
                  style={{ color: "oklch(0.65 0 0)" }}
                >
                  <Phone className="w-4 h-4 text-gold mt-0.5 shrink-0" />
                  9990456786
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/919990456786"
                  target="_blank"
                  rel="noopener noreferrer"
                  data-ocid="footer.whatsapp_link"
                  className="flex items-start gap-3 font-sans-brand text-sm hover:text-gold transition-colors duration-200"
                  style={{ color: "oklch(0.65 0 0)" }}
                >
                  <MessageCircle className="w-4 h-4 text-gold mt-0.5 shrink-0" />
                  WhatsApp Chat
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@royalepackard.com"
                  data-ocid="footer.email_link"
                  className="flex items-start gap-3 font-sans-brand text-sm hover:text-gold transition-colors duration-200"
                  style={{ color: "oklch(0.65 0 0)" }}
                >
                  <Mail className="w-4 h-4 text-gold mt-0.5 shrink-0" />
                  info@royalepackard.com
                </a>
              </li>
              <li>
                <div
                  className="flex items-start gap-3 font-sans-brand text-sm"
                  style={{ color: "oklch(0.65 0 0)" }}
                >
                  <MapPin className="w-4 h-4 text-gold mt-0.5 shrink-0" />
                  Delhi, India
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Gold gradient line */}
        <div className="gold-gradient-line mb-6" />

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p
            className="font-sans-brand text-xs"
            style={{ color: "oklch(0.5 0 0)" }}
          >
            © {currentYear} Royale Packard. All Rights Reserved.
          </p>
          <div className="flex items-center gap-6">
            <button
              type="button"
              data-ocid="footer.privacy_link"
              className="font-sans-brand text-xs hover:text-gold transition-colors duration-200 cursor-pointer bg-transparent border-0 p-0"
              style={{ color: "oklch(0.5 0 0)" }}
            >
              Privacy Policy
            </button>
            <button
              type="button"
              data-ocid="footer.terms_link"
              className="font-sans-brand text-xs hover:text-gold transition-colors duration-200 cursor-pointer bg-transparent border-0 p-0"
              style={{ color: "oklch(0.5 0 0)" }}
            >
              Terms of Service
            </button>
            <a
              href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(typeof window !== "undefined" ? window.location.hostname : "")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="font-sans-brand text-xs hover:text-gold transition-colors duration-200"
              style={{ color: "oklch(0.5 0 0)" }}
            >
              Built with ❤ using caffeine.ai
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
