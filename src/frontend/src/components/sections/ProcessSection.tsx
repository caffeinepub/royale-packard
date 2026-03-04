const STEPS = [
  {
    number: "01",
    title: "Consultation",
    description:
      "Understanding your vision, requirements, and budget through detailed discussions and site visits.",
  },
  {
    number: "02",
    title: "Planning",
    description:
      "Detailed architectural and structural planning with engineering drawings, BOQ, and project schedules.",
  },
  {
    number: "03",
    title: "Design",
    description:
      "Interior concept development, 3D visualizations, material selection, and layout finalization.",
  },
  {
    number: "04",
    title: "Execution",
    description:
      "Professional construction and installation with daily progress tracking and quality supervision.",
  },
  {
    number: "05",
    title: "Handover",
    description:
      "Final quality inspection, snag-list resolution, and smooth project delivery with complete documentation.",
  },
];

export default function ProcessSection() {
  return (
    <section id="process" className="bg-brand-cream py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="flex items-center justify-center gap-4 mb-4">
            <span className="inline-block w-8 h-px bg-charcoal/15" />
            <span className="font-sans-brand text-xs tracking-[0.3em] uppercase text-charcoal/40 font-semibold">
              How We Work
            </span>
            <span className="inline-block w-8 h-px bg-charcoal/15" />
          </div>
          <h2 className="section-heading text-charcoal mb-4">Our Process</h2>
          <p
            className="font-sans-brand text-base max-w-xl mx-auto leading-relaxed"
            style={{ color: "oklch(0.48 0.005 280)" }}
          >
            A structured, transparent, and client-centred journey from first
            meeting to final handover.
          </p>
        </div>

        {/* Desktop: horizontal timeline */}
        <div className="hidden lg:block">
          {/* Connector line */}
          <div className="relative">
            <div
              className="absolute top-10 left-0 right-0 h-px"
              style={{
                background:
                  "linear-gradient(90deg, transparent, oklch(0.718 0.088 72 / 0.4), transparent)",
              }}
            />
            <div className="grid grid-cols-5 gap-6">
              {STEPS.map((step, _idx) => (
                <div
                  key={step.number}
                  className="relative flex flex-col items-center text-center pt-0"
                >
                  {/* Step circle */}
                  <div
                    className="relative z-10 w-20 h-20 rounded-full flex items-center justify-center mb-6 border-2 border-gold/30"
                    style={{ background: "oklch(0.951 0.018 80)" }}
                  >
                    <span
                      className="font-serif font-bold text-xl"
                      style={{ color: "oklch(0.718 0.088 72)" }}
                    >
                      {step.number}
                    </span>
                  </div>

                  <h3 className="font-serif text-base font-semibold text-charcoal mb-2">
                    {step.title}
                  </h3>
                  <p
                    className="font-sans-brand text-sm leading-relaxed"
                    style={{ color: "oklch(0.48 0.005 280)" }}
                  >
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile: vertical timeline */}
        <div className="lg:hidden space-y-0">
          {STEPS.map((step, idx) => (
            <div key={step.number} className="flex gap-6 pb-8 last:pb-0">
              {/* Left: number + line */}
              <div className="flex flex-col items-center">
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center shrink-0 border border-gold/40"
                  style={{ background: "oklch(0.975 0.008 80)" }}
                >
                  <span
                    className="font-serif font-bold text-sm"
                    style={{ color: "oklch(0.718 0.088 72)" }}
                  >
                    {step.number}
                  </span>
                </div>
                {idx < STEPS.length - 1 && (
                  <div
                    className="flex-1 w-px mt-2"
                    style={{ background: "oklch(0.718 0.088 72 / 0.25)" }}
                  />
                )}
              </div>

              {/* Right: content */}
              <div className="pt-2 pb-8">
                <h3 className="font-serif text-base font-semibold text-charcoal mb-2">
                  {step.title}
                </h3>
                <p
                  className="font-sans-brand text-sm leading-relaxed"
                  style={{ color: "oklch(0.48 0.005 280)" }}
                >
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
