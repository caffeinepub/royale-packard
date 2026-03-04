import {
  Award,
  CheckCircle,
  Clock,
  DollarSign,
  MapPin,
  Package,
} from "lucide-react";

const REASONS = [
  {
    icon: Award,
    title: "Premium Interior Expertise",
    description:
      "Our in-house interior design team brings world-class aesthetic sensibility and craftsmanship to every space we touch.",
  },
  {
    icon: Clock,
    title: "On-Time Delivery",
    description:
      "Structured timelines and a zero-delay policy mean your project is delivered exactly when promised.",
  },
  {
    icon: DollarSign,
    title: "Transparent Pricing",
    description:
      "No hidden charges. Our detailed quotes cover every cost so you can plan with complete confidence.",
  },
  {
    icon: Package,
    title: "High-Quality Materials",
    description:
      "We source only from trusted suppliers — ensuring every brick, fitting, and finish is built to last generations.",
  },
  {
    icon: CheckCircle,
    title: "End-to-End Solutions",
    description:
      "From architectural planning to interior finishing and handover — we manage everything under one roof.",
  },
  {
    icon: MapPin,
    title: "Delhi Market Experience",
    description:
      "Over 12 years in Delhi's real estate market gives us unmatched local knowledge and contractor networks.",
  },
];

export default function WhyChooseSection() {
  return (
    <section id="why-us" className="bg-brand-black py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="mb-16 lg:mb-20">
          <div className="flex items-center gap-3 mb-6">
            <span className="inline-block w-8 h-px bg-gold/50" />
            <span className="font-sans-brand text-xs tracking-[0.3em] uppercase text-gold/70 font-semibold">
              Why Us
            </span>
          </div>
          <div className="max-w-2xl">
            <h2
              className="section-heading-xl mb-4"
              style={{ color: "oklch(0.96 0.01 80)" }}
            >
              Why Choose{" "}
              <span style={{ color: "oklch(0.718 0.088 72)" }}>
                Royale Packard
              </span>
            </h2>
            <p
              className="font-sans-brand text-base leading-relaxed"
              style={{ color: "oklch(0.55 0 0)" }}
            >
              Delhi's most discerning homeowners and businesses trust us for six
              compelling reasons.
            </p>
          </div>
        </div>

        {/* Grid — genuine cells, no gap-px table trick */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {REASONS.map(({ icon: Icon, title, description }, idx) => (
            <div
              key={title}
              data-ocid={`why.card.${idx + 1}`}
              className="bg-dark-card p-8 lg:p-9 group hover:bg-[oklch(0.2_0_0)] transition-colors duration-250 border-l-2 border-gold/20 hover:border-gold/60"
            >
              {/* Icon */}
              <Icon
                className="w-6 h-6 mb-5"
                strokeWidth={1.5}
                style={{ color: "oklch(0.718 0.088 72)" }}
              />

              {/* Title */}
              <h3 className="font-serif text-lg font-semibold text-white mb-3 leading-snug">
                {title}
              </h3>

              {/* Description */}
              <p
                className="font-sans-brand text-sm leading-relaxed"
                style={{ color: "oklch(0.52 0 0)" }}
              >
                {description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
