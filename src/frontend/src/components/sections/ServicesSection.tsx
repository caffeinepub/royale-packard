import { Building2, Home, Paintbrush } from "lucide-react";

const SERVICES = [
  {
    icon: Home,
    title: "Residential Construction",
    description:
      "From independent houses to luxury villas and affordable middle-class homes — we build with precision and care. Every project benefits from our end-to-end project management, structural quality assurance, and commitment to using the finest materials.",
    features: [
      "Custom Homes",
      "Independent Houses",
      "Luxury Villas",
      "Affordable Housing",
      "Structural Quality",
      "End-to-End Management",
    ],
  },
  {
    icon: Building2,
    title: "Commercial Development",
    description:
      "We design and build commercial spaces that drive business growth. From office buildings and retail showrooms to large commercial complexes — our team ensures efficient space utilization, compliance with safety norms, and exceptional build quality.",
    features: [
      "Office Buildings",
      "Retail Spaces",
      "Showrooms",
      "Commercial Complexes",
      "Space Utilization",
      "Compliance & Safety",
    ],
  },
  {
    icon: Paintbrush,
    title: "Interior Design & Renovation",
    description:
      "Transform any space into a masterpiece. We offer complete home renovations, apartment makeovers, corporate interior setups, and modern space redesigns. Our designers bring international sensibility to Delhi's diverse aesthetic tastes.",
    features: [
      "Home Renovation",
      "Apartment Makeovers",
      "Corporate Interiors",
      "Modern Redesign",
      "Turnkey Solutions",
      "Budget Planning",
    ],
  },
];

export default function ServicesSection() {
  const scrollToContact = () => {
    const el = document.getElementById("contact");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="services" className="bg-brand-cream py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="flex items-center justify-center gap-4 mb-4">
            <span className="inline-block w-8 h-px bg-charcoal/15" />
            <span className="font-sans-brand text-xs tracking-[0.3em] uppercase text-charcoal/40 font-semibold">
              What We Do
            </span>
            <span className="inline-block w-8 h-px bg-charcoal/15" />
          </div>
          <h2 className="section-heading text-charcoal mb-4">Our Services</h2>
          <p
            className="font-sans-brand text-base max-w-xl mx-auto leading-relaxed"
            style={{ color: "oklch(0.48 0.005 280)" }}
          >
            Comprehensive construction and design solutions under one trusted
            roof.
          </p>
        </div>

        {/* Service cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {SERVICES.map((service, idx) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                data-ocid={`services.card.${idx + 1}`}
                className="bg-white p-8 shadow-card card-hover group border border-transparent hover:border-gold/20"
              >
                {/* Icon */}
                <div
                  className="w-12 h-12 flex items-center justify-center mb-6"
                  style={{ background: "oklch(0.951 0.018 80)" }}
                >
                  <Icon className="w-6 h-6 text-gold" strokeWidth={1.5} />
                </div>

                {/* Title */}
                <h3 className="font-serif text-xl font-semibold text-charcoal mb-4">
                  {service.title}
                </h3>

                {/* Description */}
                <p
                  className="font-sans-brand text-sm leading-relaxed mb-6"
                  style={{ color: "oklch(0.48 0.005 280)" }}
                >
                  {service.description}
                </p>

                {/* Feature tags */}
                <ul className="space-y-1.5 mb-7">
                  {service.features.map((f) => (
                    <li
                      key={f}
                      className="flex items-center gap-2 font-sans-brand text-sm"
                      style={{ color: "oklch(0.42 0.005 280)" }}
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-gold shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>

                {/* Gold line + button */}
                <div className="gold-line mb-5 group-hover:w-full transition-all duration-500" />
                <button
                  type="button"
                  data-ocid={`services.learn_more_button.${idx + 1}`}
                  onClick={scrollToContact}
                  className="font-sans-brand text-sm font-semibold text-gold hover:text-gold-dark tracking-wide transition-colors duration-200 flex items-center gap-2 group/btn"
                >
                  Learn More
                  <span className="group-hover/btn:translate-x-1 transition-transform duration-200">
                    →
                  </span>
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
