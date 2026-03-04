import {
  BedDouble,
  Building2,
  ChefHat,
  DoorClosed,
  Layers,
  Lightbulb,
  Ruler,
  ShoppingBag,
  Sofa,
  Wrench,
} from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";

const SERVICES = [
  { icon: ChefHat, label: "Modular Kitchen Design" },
  { icon: DoorClosed, label: "Luxury Wardrobes" },
  { icon: Layers, label: "False Ceiling Concepts" },
  { icon: Lightbulb, label: "Smart Lighting Solutions" },
  { icon: Sofa, label: "Living Room Styling" },
  { icon: BedDouble, label: "Bedroom Interiors" },
  { icon: Building2, label: "Office Interior Designing" },
  { icon: ShoppingBag, label: "Retail & Commercial Interiors" },
  { icon: Ruler, label: "Space Optimization Planning" },
  { icon: Wrench, label: "Turnkey Interior Solutions" },
];

function BeforeAfterSlider() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [sliderPos, setSliderPos] = useState(50);
  const isDragging = useRef(false);

  const updatePosition = useCallback((clientX: number) => {
    const container = containerRef.current;
    if (!container) return;
    const rect = container.getBoundingClientRect();
    const x = Math.min(Math.max(clientX - rect.left, 0), rect.width);
    setSliderPos((x / rect.width) * 100);
  }, []);

  const handleMouseDown = () => {
    isDragging.current = true;
  };
  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging.current) updatePosition(e.clientX);
  };
  const handleMouseUp = () => {
    isDragging.current = false;
  };
  const handleTouchMove = (e: React.TouchEvent) => {
    updatePosition(e.touches[0].clientX);
  };

  useEffect(() => {
    const handleGlobalMouseUp = () => {
      isDragging.current = false;
    };
    window.addEventListener("mouseup", handleGlobalMouseUp);
    return () => window.removeEventListener("mouseup", handleGlobalMouseUp);
  }, []);

  return (
    <div
      ref={containerRef}
      className="before-after-container rounded-sm overflow-hidden"
      style={{ height: "420px", maxWidth: "800px", margin: "0 auto" }}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onTouchMove={handleTouchMove}
    >
      {/* After image (full width, behind) */}
      <img
        src="/assets/generated/after-interior.dim_800x600.jpg"
        alt="After renovation"
        className="absolute inset-0 w-full h-full object-cover"
        draggable={false}
      />

      {/* Before image (clipped by slider) */}
      <div
        className="absolute inset-0 overflow-hidden"
        style={{ width: `${sliderPos}%` }}
      >
        <img
          src="/assets/generated/before-interior.dim_800x600.jpg"
          alt="Before renovation"
          className="absolute inset-0 h-full object-cover"
          style={{ width: `${100 / (sliderPos / 100)}%`, maxWidth: "none" }}
          draggable={false}
        />
      </div>

      {/* Labels */}
      <div className="absolute top-4 left-4 z-20 pointer-events-none">
        <span
          className="font-sans-brand text-xs font-semibold tracking-widest uppercase px-3 py-1.5"
          style={{ background: "rgba(0,0,0,0.6)", color: "white" }}
        >
          Before
        </span>
      </div>
      <div className="absolute top-4 right-4 z-20 pointer-events-none">
        <span className="font-sans-brand text-xs font-semibold tracking-widest uppercase px-3 py-1.5 bg-gold text-brand-black">
          After
        </span>
      </div>

      {/* Slider handle */}
      <div
        className="before-after-slider-handle"
        style={{ left: `${sliderPos}%`, transform: "translateX(-50%)" }}
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-gold flex items-center justify-center shadow-gold z-10">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            className="w-5 h-5"
            stroke="oklch(0.155 0 0)"
            strokeWidth={2.5}
            role="img"
            aria-label="Drag to compare"
          >
            <title>Drag to compare</title>
            <path
              d="M8 12H16M8 12L5 9M8 12L5 15M16 12L19 9M16 12L19 15"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}

export default function InteriorSection() {
  return (
    <section id="interiors" className="bg-brand-black py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="flex items-center justify-center gap-4 mb-5">
            <span className="inline-block w-8 h-px bg-gold/50" />
            <span className="font-sans-brand text-xs tracking-[0.3em] uppercase text-gold font-semibold">
              Interior Excellence
            </span>
            <span className="inline-block w-8 h-px bg-gold/50" />
          </div>

          <h2
            className="section-heading-xl mb-4"
            style={{ color: "oklch(0.718 0.088 72)" }}
          >
            Interior Design That Defines Luxury
          </h2>
          <p
            className="font-serif text-xl lg:text-2xl font-medium mb-5 tracking-wide"
            style={{ color: "oklch(0.88 0.005 80)" }}
          >
            Where functionality meets elegance.
          </p>
          <p
            className="font-sans-brand text-base max-w-2xl mx-auto leading-relaxed"
            style={{ color: "oklch(0.65 0 0)" }}
          >
            Royale Packard offers complete interior transformation services
            tailored to your lifestyle, taste, and budget. Every space we touch
            becomes a signature statement of refined living.
          </p>
        </div>

        {/* Services grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-16">
          {SERVICES.map(({ icon: Icon, label }) => (
            <div
              key={label}
              className="bg-dark-card p-5 group hover:bg-gold/10 transition-all duration-250 border border-white/5 hover:border-gold/30"
            >
              <Icon className="w-6 h-6 text-gold mb-3" strokeWidth={1.5} />
              <p
                className="font-sans-brand text-sm font-medium leading-tight"
                style={{ color: "oklch(0.82 0 0)" }}
              >
                {label}
              </p>
            </div>
          ))}
        </div>

        {/* Before/After slider */}
        <div className="mb-10">
          <div className="text-center mb-6">
            <h3 className="font-serif text-xl font-semibold text-white mb-2">
              Transformation Gallery
            </h3>
            <p
              className="font-sans-brand text-sm"
              style={{ color: "oklch(0.55 0 0)" }}
            >
              Drag the slider to see the transformation
            </p>
          </div>
          <BeforeAfterSlider />
        </div>

        {/* Bottom paragraph */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="gold-gradient-line mb-6" />
          <p
            className="font-serif text-base lg:text-lg italic font-medium leading-relaxed"
            style={{ color: "oklch(0.72 0 0)" }}
          >
            We specialize in creating interiors that feel premium yet practical,
            elegant yet affordable for Delhi homeowners.
          </p>
        </div>
      </div>
    </section>
  );
}
