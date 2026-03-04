import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { useState } from "react";

const TESTIMONIALS = [
  {
    text: "Royale Packard transformed our apartment beyond expectations. The attention to detail in their interior work is extraordinary — every corner tells a story of craftsmanship.",
    author: "Rahul Sharma",
    location: "South Delhi",
    project: "3BHK Interior Renovation",
  },
  {
    text: "Professional, punctual, and precise. Our home was delivered on time and within budget. Truly a premium experience. The team was communicative and transparent throughout.",
    author: "Priya Mehta",
    location: "Dwarka, Delhi",
    project: "Independent House Construction",
  },
  {
    text: "Their commercial space design for our showroom brought in more customers. The design sensibility is top class. Royale Packard understands that space is a business asset.",
    author: "Vikram Kapoor",
    location: "Connaught Place, Delhi",
    project: "Retail Showroom Design",
  },
  {
    text: "We trusted Royale Packard with our villa construction. The quality of materials and craftsmanship exceeded our expectations. I would recommend them without hesitation.",
    author: "Anjali Singh",
    location: "Greater Noida",
    project: "Luxury Villa Construction",
  },
];

export default function TestimonialsSection() {
  const [active, setActive] = useState(0);

  const prev = () =>
    setActive((a) => (a - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  const next = () => setActive((a) => (a + 1) % TESTIMONIALS.length);

  const t = TESTIMONIALS[active];

  return (
    <section id="testimonials" className="bg-brand-cream py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="flex items-center justify-center gap-4 mb-4">
            <span className="inline-block w-8 h-px bg-charcoal/15" />
            <span className="font-sans-brand text-xs tracking-[0.3em] uppercase text-charcoal/40 font-semibold">
              Client Stories
            </span>
            <span className="inline-block w-8 h-px bg-charcoal/15" />
          </div>
          <h2 className="section-heading text-charcoal">
            What Our Clients Say
          </h2>
        </div>

        {/* Testimonial */}
        <div
          data-ocid="testimonials.panel"
          className="max-w-3xl mx-auto text-center"
        >
          {/* Large quote icon */}
          <Quote
            className="w-12 h-12 mx-auto mb-8 opacity-20 text-gold"
            strokeWidth={1}
          />

          {/* Testimonial text */}
          <blockquote
            key={active}
            className="font-serif font-medium leading-relaxed text-charcoal mb-8"
            style={{
              fontStyle: "italic",
              fontSize: "clamp(1.15rem, 2.2vw, 1.5rem)",
            }}
          >
            "{t.text}"
          </blockquote>

          {/* Author */}
          <div className="flex flex-col items-center gap-1 mb-10">
            <div className="w-12 h-px bg-gold mb-4" />
            <p className="font-sans-brand text-base font-semibold text-charcoal">
              {t.author}
            </p>
            <p
              className="font-sans-brand text-sm"
              style={{ color: "oklch(0.55 0 0)" }}
            >
              {t.location}
            </p>
            <p className="font-sans-brand text-xs text-gold tracking-wide mt-1">
              {t.project}
            </p>
          </div>

          {/* Controls */}
          <div className="flex items-center justify-center gap-6">
            <button
              type="button"
              data-ocid="testimonials.prev_button"
              onClick={prev}
              aria-label="Previous testimonial"
              className="w-10 h-10 border border-charcoal/20 flex items-center justify-center text-charcoal hover:border-gold hover:text-gold transition-all duration-200"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            {/* Dots */}
            <div className="testimonial-dots flex items-center gap-2">
              {TESTIMONIALS.map((t, i) => (
                <button
                  type="button"
                  key={t.author}
                  onClick={() => setActive(i)}
                  aria-label={`Testimonial ${i + 1}`}
                  className={`dot ${i === active ? "active" : ""}`}
                />
              ))}
            </div>

            <button
              type="button"
              data-ocid="testimonials.next_button"
              onClick={next}
              aria-label="Next testimonial"
              className="w-10 h-10 border border-charcoal/20 flex items-center justify-center text-charcoal hover:border-gold hover:text-gold transition-all duration-200"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
