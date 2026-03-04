import { Loader2, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { useState } from "react";
import { ProjectType } from "../../backend.d";
import { useSubmitInquiry } from "../../hooks/useQueries";

const PROJECT_TYPES = [
  { value: ProjectType.residential, label: "Residential Construction" },
  { value: ProjectType.commercial, label: "Commercial Development" },
  { value: ProjectType.interior, label: "Interior Design & Renovation" },
];

const BUDGET_RANGES = [
  "Under 10 Lakhs",
  "10-25 Lakhs",
  "25-50 Lakhs",
  "50 Lakhs - 1 Crore",
  "Above 1 Crore",
];

interface FormState {
  name: string;
  phone: string;
  email: string;
  projectType: ProjectType;
  budgetRange: string;
  message: string;
}

const INITIAL_FORM: FormState = {
  name: "",
  phone: "",
  email: "",
  projectType: ProjectType.residential,
  budgetRange: "",
  message: "",
};

export default function ContactSection() {
  const [form, setForm] = useState<FormState>(INITIAL_FORM);
  const [submitted, setSubmitted] = useState(false);
  const { mutate: submitInquiry, isPending, isError } = useSubmitInquiry();

  const handleChange = (field: keyof FormState, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    submitInquiry(
      {
        name: form.name,
        phone: form.phone,
        email: form.email,
        projectType: form.projectType,
        budgetRange: form.budgetRange || "Not specified",
        message: form.message,
      },
      {
        onSuccess: () => {
          setSubmitted(true);
          setForm(INITIAL_FORM);
        },
      },
    );
  };

  const inputClass =
    "w-full px-4 py-3 font-sans-brand text-sm bg-white border border-border text-charcoal placeholder:text-charcoal/40 focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold/30 transition-all duration-200";

  return (
    <section id="contact" className="bg-brand-cream py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="flex items-center justify-center gap-4 mb-4">
            <span className="inline-block w-8 h-px bg-charcoal/15" />
            <span className="font-sans-brand text-xs tracking-[0.3em] uppercase text-charcoal/40 font-semibold">
              Get In Touch
            </span>
            <span className="inline-block w-8 h-px bg-charcoal/15" />
          </div>
          <h2 className="section-heading text-charcoal mb-4">
            Start Your Project Today
          </h2>
          <p
            className="font-sans-brand text-base max-w-xl mx-auto leading-relaxed"
            style={{ color: "oklch(0.48 0.005 280)" }}
          >
            Share your vision with us. Our team will respond within 24 hours.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Form */}
          <div>
            {submitted ? (
              <div
                data-ocid="contact.success_state"
                className="bg-white p-10 shadow-card text-center"
              >
                <div className="w-14 h-14 rounded-full bg-green-50 flex items-center justify-center mx-auto mb-5">
                  <svg
                    className="w-7 h-7 text-green-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    role="img"
                    aria-label="Success"
                  >
                    <title>Success</title>
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <h3 className="font-serif text-xl font-semibold text-charcoal mb-3">
                  Inquiry Received
                </h3>
                <p
                  className="font-sans-brand text-sm leading-relaxed mb-6"
                  style={{ color: "oklch(0.48 0.005 280)" }}
                >
                  Thank you for reaching out to Royale Packard. Our team will
                  contact you within 24 hours.
                </p>
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="font-sans-brand text-sm font-semibold text-gold hover:text-gold-dark transition-colors"
                >
                  Submit Another Inquiry
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="bg-white p-8 shadow-card space-y-5"
              >
                {/* Name + Phone row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="contact-name"
                      className="block font-sans-brand text-xs font-semibold tracking-wide text-charcoal/70 uppercase mb-2"
                    >
                      Full Name *
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      required
                      placeholder="Your name"
                      value={form.name}
                      onChange={(e) => handleChange("name", e.target.value)}
                      data-ocid="contact.name_input"
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="contact-phone"
                      className="block font-sans-brand text-xs font-semibold tracking-wide text-charcoal/70 uppercase mb-2"
                    >
                      Phone *
                    </label>
                    <input
                      id="contact-phone"
                      type="tel"
                      required
                      placeholder="Your phone"
                      value={form.phone}
                      onChange={(e) => handleChange("phone", e.target.value)}
                      data-ocid="contact.phone_input"
                      className={inputClass}
                    />
                  </div>
                </div>

                {/* Email */}
                <div>
                  <label
                    htmlFor="contact-email"
                    className="block font-sans-brand text-xs font-semibold tracking-wide text-charcoal/70 uppercase mb-2"
                  >
                    Email Address
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    placeholder="Your email"
                    value={form.email}
                    onChange={(e) => handleChange("email", e.target.value)}
                    data-ocid="contact.email_input"
                    className={inputClass}
                  />
                </div>

                {/* Project Type */}
                <div>
                  <label
                    htmlFor="contact-project-type"
                    className="block font-sans-brand text-xs font-semibold tracking-wide text-charcoal/70 uppercase mb-2"
                  >
                    Project Type *
                  </label>
                  <select
                    id="contact-project-type"
                    required
                    value={form.projectType}
                    onChange={(e) =>
                      handleChange("projectType", e.target.value as ProjectType)
                    }
                    data-ocid="contact.projecttype_select"
                    className={inputClass}
                  >
                    {PROJECT_TYPES.map((pt) => (
                      <option key={pt.value} value={pt.value}>
                        {pt.label}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Budget Range */}
                <div>
                  <label
                    htmlFor="contact-budget"
                    className="block font-sans-brand text-xs font-semibold tracking-wide text-charcoal/70 uppercase mb-2"
                  >
                    Budget Range
                  </label>
                  <select
                    id="contact-budget"
                    value={form.budgetRange}
                    onChange={(e) =>
                      handleChange("budgetRange", e.target.value)
                    }
                    data-ocid="contact.budget_select"
                    className={inputClass}
                  >
                    <option value="">Select budget range</option>
                    {BUDGET_RANGES.map((b) => (
                      <option key={b} value={b}>
                        {b}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="contact-message"
                    className="block font-sans-brand text-xs font-semibold tracking-wide text-charcoal/70 uppercase mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="contact-message"
                    rows={4}
                    placeholder="Tell us about your project..."
                    value={form.message}
                    onChange={(e) => handleChange("message", e.target.value)}
                    data-ocid="contact.message_textarea"
                    className={`${inputClass} resize-none`}
                  />
                </div>

                {/* Error */}
                {isError && (
                  <div
                    data-ocid="contact.error_state"
                    className="bg-red-50 border border-red-200 px-4 py-3 font-sans-brand text-sm text-red-700"
                  >
                    Something went wrong. Please try again or call us directly.
                  </div>
                )}

                {/* Submit */}
                <button
                  type="submit"
                  disabled={isPending}
                  data-ocid="contact.submit_button"
                  className="w-full py-4 font-sans-brand text-sm font-semibold tracking-wider uppercase bg-gold text-brand-black hover:bg-gold-dark disabled:opacity-60 transition-all duration-250 flex items-center justify-center gap-2 shadow-gold"
                >
                  {isPending && <Loader2 className="w-4 h-4 animate-spin" />}
                  {isPending ? "Sending..." : "Send Inquiry"}
                </button>
              </form>
            )}
          </div>

          {/* Contact Info + Map */}
          <div className="space-y-8">
            {/* Contact details */}
            <div className="bg-brand-black p-8">
              <h3 className="font-serif text-lg font-semibold text-white mb-6">
                Contact Information
              </h3>
              <div className="space-y-5">
                <a
                  href="tel:+919990456786"
                  className="flex items-start gap-4 group"
                >
                  <div className="w-10 h-10 flex items-center justify-center bg-gold/10 shrink-0">
                    <Phone className="w-5 h-5 text-gold" strokeWidth={1.5} />
                  </div>
                  <div>
                    <p className="font-sans-brand text-xs text-gold tracking-wider uppercase mb-1">
                      Call Us
                    </p>
                    <p className="font-sans-brand text-sm font-semibold text-white group-hover:text-gold transition-colors">
                      9990456786
                    </p>
                  </div>
                </a>

                <a
                  href="https://wa.me/919990456786"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-4 group"
                >
                  <div className="w-10 h-10 flex items-center justify-center bg-green-500/10 shrink-0">
                    <MessageCircle
                      className="w-5 h-5 text-green-400"
                      strokeWidth={1.5}
                    />
                  </div>
                  <div>
                    <p className="font-sans-brand text-xs text-gold tracking-wider uppercase mb-1">
                      WhatsApp
                    </p>
                    <p className="font-sans-brand text-sm font-semibold text-white group-hover:text-green-400 transition-colors">
                      Chat on WhatsApp
                    </p>
                  </div>
                </a>

                <a
                  href="mailto:info@royalepackard.com"
                  className="flex items-start gap-4 group"
                >
                  <div className="w-10 h-10 flex items-center justify-center bg-gold/10 shrink-0">
                    <Mail className="w-5 h-5 text-gold" strokeWidth={1.5} />
                  </div>
                  <div>
                    <p className="font-sans-brand text-xs text-gold tracking-wider uppercase mb-1">
                      Email
                    </p>
                    <p className="font-sans-brand text-sm font-semibold text-white group-hover:text-gold transition-colors">
                      info@royalepackard.com
                    </p>
                  </div>
                </a>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 flex items-center justify-center bg-gold/10 shrink-0">
                    <MapPin className="w-5 h-5 text-gold" strokeWidth={1.5} />
                  </div>
                  <div>
                    <p className="font-sans-brand text-xs text-gold tracking-wider uppercase mb-1">
                      Location
                    </p>
                    <p className="font-sans-brand text-sm font-semibold text-white">
                      Delhi, India
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Google Map */}
            <div className="overflow-hidden shadow-card">
              <iframe
                data-ocid="contact.map_marker"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d224345.83923192955!2d77.06889754725782!3d28.52728034322888!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd5b347eb62d%3A0x37205b715389640!2sNew%20Delhi%2C%20Delhi!5e0!3m2!1sen!2sin!4v1699999999999!5m2!1sen!2sin"
                width="100%"
                height="280"
                style={{ border: 0, display: "block" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Royale Packard - Delhi Location"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
