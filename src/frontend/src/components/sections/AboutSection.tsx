import { Building2, Clock, Maximize2, Store, Users } from "lucide-react";

const STATS = [
  {
    icon: Clock,
    value: "2.5+",
    unit: "Years",
    label: "Years of Experience",
  },
  {
    icon: Building2,
    value: "50+",
    unit: "Projects",
    label: "Projects Delivered",
  },
  {
    icon: Maximize2,
    value: "1L+",
    unit: "Sq Ft",
    label: "Square Feet Delivered",
  },
  {
    icon: Users,
    value: "200+",
    unit: "Clients",
    label: "Satisfied Customers",
  },
  {
    icon: Store,
    value: "12+",
    unit: "Spaces",
    label: "Commercial Spaces",
  },
];

export default function AboutSection() {
  return (
    <section id="about" className="bg-brand-cream py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section label */}
        <div className="flex items-center gap-3 mb-6">
          <span className="w-8 h-px bg-charcoal/20" />
          <span className="font-sans-brand text-xs tracking-[0.3em] uppercase text-charcoal/50 font-semibold">
            About Us
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Left: Text */}
          <div>
            <h2 className="section-heading-xl text-charcoal mb-8">
              Delhi's Trusted Name in Premium Construction
            </h2>

            <div
              className="space-y-5 font-sans-brand text-base leading-relaxed"
              style={{ color: "oklch(0.42 0.005 280)" }}
            >
              <p>
                <strong className="text-charcoal font-semibold">
                  ROYALE PACKARD
                </strong>{" "}
                is a premier builder and developer based in Delhi, offering
                comprehensive end-to-end solutions in residential construction,
                commercial development, and premium interior design. With deep
                expertise, we have established ourselves as a trusted partner
                for homeowners, investors, and businesses across the capital.
              </p>
              <p>
                Our interior design division stands as a key differentiator — we
                bring together skilled artisans, internationally-trained
                designers, and cutting-edge technology to craft spaces that are
                as functional as they are beautiful. From modular kitchens to
                complete home transformations, our interior expertise is
                unmatched in Delhi.
              </p>
              <p>
                At Royale Packard, our commitment extends beyond construction.
                We believe in quality materials sourced from trusted suppliers,
                transparent pricing with no hidden charges, structured project
                execution, and delivering every project on schedule. Our clients
                don't just get a building — they get a promise kept.
              </p>
            </div>

            {/* Mission & Vision */}
            <div className="mt-10 space-y-6">
              <div className="pl-5 border-l-2 border-gold">
                <p className="font-sans-brand text-xs tracking-[0.25em] uppercase text-gold font-semibold mb-2">
                  Our Mission
                </p>
                <p className="font-serif text-lg font-medium text-charcoal italic leading-relaxed">
                  "To redefine construction and interior standards in Delhi
                  through quality, innovation, and integrity."
                </p>
              </div>
              <div className="pl-5 border-l border-charcoal/20">
                <p className="font-sans-brand text-xs tracking-[0.25em] uppercase text-charcoal/40 font-semibold mb-2">
                  Our Vision
                </p>
                <p
                  className="font-serif text-base font-medium italic leading-relaxed"
                  style={{ color: "oklch(0.52 0.005 280)" }}
                >
                  "To become one of Delhi's most trusted names in premium
                  residential and commercial development."
                </p>
              </div>
            </div>
          </div>

          {/* Right: Stats */}
          <div>
            <div className="grid grid-cols-2 gap-px bg-charcoal/10">
              {STATS.map((stat, i) => {
                const Icon = stat.icon;
                return (
                  <div
                    key={stat.label}
                    className={`bg-brand-cream p-7 group hover:bg-white transition-colors duration-250 ${
                      i === 4 ? "col-span-2 sm:col-span-1" : ""
                    }`}
                  >
                    {/* Icon */}
                    <div className="mb-3">
                      <Icon className="text-gold" size={20} strokeWidth={1.5} />
                    </div>
                    {/* Value */}
                    <div className="stat-number mb-1">{stat.value}</div>
                    {/* Unit */}
                    <div className="font-sans-brand text-xs font-semibold tracking-wider uppercase text-gold mb-1">
                      {stat.unit}
                    </div>
                    {/* Label */}
                    <div className="font-sans-brand text-xs font-medium tracking-wider uppercase text-charcoal/50 leading-tight">
                      {stat.label}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Decorative quote block */}
            <div className="mt-8 p-6 bg-brand-black">
              <p className="font-serif text-base lg:text-lg font-medium text-white italic leading-relaxed">
                "We don't just build structures. We build legacies."
              </p>
              <span className="mt-3 block font-sans-brand text-xs text-gold tracking-widest uppercase">
                — Royale Packard
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
