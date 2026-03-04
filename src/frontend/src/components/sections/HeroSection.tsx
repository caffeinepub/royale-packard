import { Phone } from "lucide-react";

export default function HeroSection() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      className="relative w-full min-h-screen flex items-center justify-center overflow-hidden"
      aria-label="Hero"
    >
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/assets/generated/hero-interior.dim_1920x1080.jpg')`,
        }}
      />
      {/* Dark overlay */}
      <div
        className="absolute inset-0"
        style={{ background: "rgba(0,0,0,0.5)" }}
      />

      {/* Top-left brand name */}
      <div className="absolute top-24 left-6 lg:left-10 z-10">
        <span className="font-serif text-xs tracking-[0.35em] font-medium text-gold uppercase opacity-90">
          Royale Packard
        </span>
      </div>

      {/* Center content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        {/* Gold accent line */}
        <div className="flex justify-center mb-8">
          <span className="inline-block w-16 h-px bg-gold" />
        </div>

        <h1
          className="hero-heading text-white mb-7"
          style={{ textShadow: "0 2px 24px rgba(0,0,0,0.4)" }}
        >
          Plan Better.{" "}
          <em className="not-italic" style={{ color: "oklch(0.718 0.088 72)" }}>
            Design Better.
          </em>{" "}
          Build Better.
        </h1>

        <p
          className="font-serif font-medium text-xl lg:text-2xl mb-5 tracking-wide"
          style={{ color: "oklch(0.88 0.012 80)" }}
        >
          Premium Construction &amp; Interior Excellence in Delhi.
        </p>

        <p
          className="font-sans-brand text-base mb-10 max-w-xl mx-auto leading-relaxed"
          style={{ color: "oklch(0.7 0.008 80)" }}
        >
          Building timeless spaces with precision, craftsmanship, and
          intelligent design.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
          <button
            type="button"
            onClick={() => scrollTo("projects")}
            data-ocid="hero.primary_button"
            className="w-full sm:w-auto px-8 py-4 font-sans-brand text-sm font-semibold tracking-wider uppercase bg-gold text-brand-black hover:bg-gold-dark transition-all duration-250 shadow-gold"
          >
            View Projects
          </button>
          <button
            type="button"
            onClick={() => scrollTo("contact")}
            data-ocid="hero.secondary_button"
            className="w-full sm:w-auto px-8 py-4 font-sans-brand text-sm font-semibold tracking-wider uppercase border border-gold text-white hover:bg-gold/10 transition-all duration-250"
          >
            Get Free Consultation
          </button>
        </div>

        {/* Phone */}
        <a
          href="tel:+919990456786"
          data-ocid="hero.phone_link"
          className="inline-flex items-center gap-2 font-sans-brand text-sm font-medium text-white hover:text-gold transition-colors duration-200"
        >
          <Phone className="w-4 h-4 text-gold" />
          Call Now: 9990456786
        </a>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2">
        <span
          className="font-sans-brand text-xs tracking-widest uppercase"
          style={{ color: "oklch(0.65 0 0)" }}
        >
          Scroll
        </span>
        <div
          className="w-px h-12 animate-pulse"
          style={{
            background:
              "linear-gradient(to bottom, oklch(0.718 0.088 72), transparent)",
          }}
        />
      </div>
    </section>
  );
}
