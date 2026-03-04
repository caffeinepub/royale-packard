import { MapPin, MessageCircle, Ruler } from "lucide-react";
import { useState } from "react";
import { ProjectStatus, ProjectType, type PropertyListing } from "../backend.d";
import { useGetListings } from "../hooks/useQueries";

type FilterType =
  | "all"
  | ProjectType.residential
  | ProjectType.commercial
  | ProjectType.interior;
type FilterStatus = "all" | ProjectStatus.completed | ProjectStatus.ongoing;

const PROJECT_IMAGES: Record<string, string> = {
  [ProjectType.residential]: "/assets/generated/project-villa.dim_800x600.jpg",
  [ProjectType.commercial]:
    "/assets/generated/project-commercial.dim_800x600.jpg",
  [ProjectType.interior]: "/assets/generated/interior-bedroom.dim_800x600.jpg",
};

const FILTER_TABS = [
  { label: "All", value: "all" as FilterType, status: "all" as FilterStatus },
  {
    label: "Residential",
    value: ProjectType.residential as FilterType,
    status: "all" as FilterStatus,
  },
  {
    label: "Commercial",
    value: ProjectType.commercial as FilterType,
    status: "all" as FilterStatus,
  },
  {
    label: "Interior",
    value: ProjectType.interior as FilterType,
    status: "all" as FilterStatus,
  },
  {
    label: "Completed",
    value: "all" as FilterType,
    status: ProjectStatus.completed as FilterStatus,
  },
  {
    label: "Ongoing",
    value: "all" as FilterType,
    status: ProjectStatus.ongoing as FilterStatus,
  },
];

const FALLBACK_LISTINGS: PropertyListing[] = [
  {
    id: BigInt(1),
    name: "Meridian Villa — Vasant Kunj",
    location: "Vasant Kunj, New Delhi",
    area: BigInt(7200),
    priceRange: "₹4.5 Cr - ₹5.2 Cr",
    ptype: ProjectType.residential,
    status: ProjectStatus.completed,
    shortDescription:
      "Sprawling 5-bedroom luxury villa with premium marble finishes, home automation, bespoke interior design, private garden and rooftop.",
  },
  {
    id: BigInt(2),
    name: "Pinnacle Commercial Tower",
    location: "Connaught Place, New Delhi",
    area: BigInt(45000),
    priceRange: "₹2.8 Cr - ₹18 Cr",
    ptype: ProjectType.commercial,
    status: ProjectStatus.completed,
    shortDescription:
      "Grade-A commercial complex with 12 floors of premium office spaces, retail units, and state-of-the-art infrastructure.",
  },
  {
    id: BigInt(3),
    name: "The Residences — Dwarka",
    location: "Dwarka Sector 12, Delhi",
    area: BigInt(1450),
    priceRange: "₹95L - ₹1.4 Cr",
    ptype: ProjectType.residential,
    status: ProjectStatus.ongoing,
    shortDescription:
      "Premium 3BHK apartments with designer interiors, rooftop amenities, and landscaped gardens in Dwarka's prime location.",
  },
  {
    id: BigInt(4),
    name: "Maison Interior — GK2",
    location: "Greater Kailash II, Delhi",
    area: BigInt(2200),
    priceRange: "₹35L - ₹55L",
    ptype: ProjectType.interior,
    status: ProjectStatus.completed,
    shortDescription:
      "Complete luxury interior transformation with custom modular kitchen, Italian marble, false ceiling and designer furniture.",
  },
  {
    id: BigInt(5),
    name: "Arora Showroom Complex",
    location: "Wazirpur Industrial Area, Delhi",
    area: BigInt(8500),
    priceRange: "₹1.8 Cr - ₹3.2 Cr",
    ptype: ProjectType.commercial,
    status: ProjectStatus.ongoing,
    shortDescription:
      "Modern commercial showroom complex with high ceilings, glass facade, dedicated parking, and premium build quality.",
  },
  {
    id: BigInt(6),
    name: "Sunrise Apartments — Rohini",
    location: "Rohini Sector 7, Delhi",
    area: BigInt(950),
    priceRange: "₹55L - ₹75L",
    ptype: ProjectType.residential,
    status: ProjectStatus.completed,
    shortDescription:
      "Affordable luxury 2BHK apartments with quality construction, modern amenities, and thoughtful space planning.",
  },
];

function ListingCard({
  listing,
  index,
}: { listing: PropertyListing; index: number }) {
  const image =
    PROJECT_IMAGES[listing.ptype] || PROJECT_IMAGES[ProjectType.residential];
  const typeLabel =
    listing.ptype.charAt(0).toUpperCase() + listing.ptype.slice(1);
  const isCompleted = listing.status === ProjectStatus.completed;

  const whatsappMsg = encodeURIComponent(
    `Hi Royale Packard, I'm interested in the property: ${listing.name} (${listing.location}). Please share more details.`,
  );

  return (
    <div
      data-ocid={`listings.card.${index + 1}`}
      className="bg-white shadow-card card-hover overflow-hidden border border-transparent hover:border-gold/20"
    >
      {/* Image */}
      <div className="relative overflow-hidden h-52">
        <img
          src={image}
          alt={listing.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
        {/* Badges */}
        <div className="absolute top-3 left-3 flex gap-2">
          <span className="font-sans-brand text-xs font-semibold px-2.5 py-1 bg-gold text-brand-black tracking-wider uppercase">
            {typeLabel}
          </span>
          <span
            className={`font-sans-brand text-xs font-semibold px-2.5 py-1 tracking-wider uppercase ${
              isCompleted
                ? "bg-green-600 text-white"
                : "bg-amber-500 text-white"
            }`}
          >
            {isCompleted ? "Completed" : "Ongoing"}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="font-serif text-base lg:text-lg font-semibold text-charcoal mb-2 leading-tight">
          {listing.name}
        </h3>

        <div className="flex flex-wrap items-center gap-3 mb-3">
          <span
            className="flex items-center gap-1.5 font-sans-brand text-xs"
            style={{ color: "oklch(0.55 0 0)" }}
          >
            <MapPin className="w-3.5 h-3.5 text-gold shrink-0" />
            {listing.location}
          </span>
          <span
            className="flex items-center gap-1.5 font-sans-brand text-xs"
            style={{ color: "oklch(0.55 0 0)" }}
          >
            <Ruler className="w-3.5 h-3.5 text-gold shrink-0" />
            {Number(listing.area).toLocaleString()} sq ft
          </span>
        </div>

        {/* Price */}
        <div className="mb-3">
          <span className="font-serif text-lg font-bold text-gold">
            {listing.priceRange}
          </span>
        </div>

        {/* Description */}
        <p
          className="font-sans-brand text-sm leading-relaxed mb-5 line-clamp-2"
          style={{ color: "oklch(0.48 0.005 280)" }}
        >
          {listing.shortDescription}
        </p>

        {/* Inquire button */}
        <a
          href={`https://wa.me/919990456786?text=${whatsappMsg}`}
          target="_blank"
          rel="noopener noreferrer"
          data-ocid={`listings.card.inquire_button.${index + 1}`}
          className="inline-flex items-center gap-2 w-full justify-center py-3 font-sans-brand text-sm font-semibold tracking-wide uppercase border border-gold text-gold hover:bg-gold hover:text-brand-black transition-all duration-250"
        >
          <MessageCircle className="w-4 h-4" />
          Inquire Now
        </a>
      </div>
    </div>
  );
}

export default function ListingsPage() {
  const [activeFilter, setActiveFilter] = useState<FilterType>("all");
  const [activeStatus, setActiveStatus] = useState<FilterStatus>("all");

  const filterType =
    activeFilter !== "all" ? (activeFilter as ProjectType) : null;
  const filterStatus =
    activeStatus !== "all" ? (activeStatus as ProjectStatus) : null;

  const { data: listings, isLoading } = useGetListings(
    filterType,
    filterStatus,
  );

  const handleTabClick = (tab: (typeof FILTER_TABS)[0]) => {
    setActiveFilter(tab.value);
    setActiveStatus(tab.status);
  };

  const displayListings =
    listings && listings.length > 0
      ? listings
      : FALLBACK_LISTINGS.filter((l) => {
          const typeMatch = filterType ? l.ptype === filterType : true;
          const statusMatch = filterStatus ? l.status === filterStatus : true;
          return typeMatch && statusMatch;
        });

  return (
    <main className="min-h-screen bg-brand-cream pt-20">
      {/* Page hero */}
      <div className="bg-brand-black py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center gap-4 mb-4">
            <span className="inline-block w-8 h-px bg-gold/50" />
            <span className="font-sans-brand text-xs tracking-[0.3em] uppercase text-gold font-semibold">
              Our Properties
            </span>
            <span className="inline-block w-8 h-px bg-gold/50" />
          </div>
          <h1 className="section-heading text-white mb-3">Property Listings</h1>
          <p
            className="font-serif text-base italic font-medium"
            style={{ color: "oklch(0.6 0 0)" }}
          >
            Explore Our Premium Projects in Delhi
          </p>
        </div>
      </div>

      {/* Filters */}
      <div className="bg-white border-b border-border sticky top-16 lg:top-20 z-40">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center gap-1 overflow-x-auto py-3 scrollbar-hide">
            {FILTER_TABS.map((tab, idx) => {
              const isActive =
                activeFilter === tab.value && activeStatus === tab.status;
              return (
                <button
                  type="button"
                  key={`${tab.value}-${tab.status}`}
                  data-ocid={`listings.filter.tab.${idx + 1}`}
                  onClick={() => handleTabClick(tab)}
                  className={`px-5 py-2 font-sans-brand text-xs font-semibold tracking-wider uppercase whitespace-nowrap transition-all duration-200 ${
                    isActive
                      ? "bg-gold text-brand-black shadow-gold"
                      : "text-charcoal hover:text-gold"
                  }`}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
        {/* Loading */}
        {isLoading && (
          <div
            data-ocid="listings.loading_state"
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="bg-white shadow-card overflow-hidden">
                <div className="h-52 bg-cream-dark animate-pulse" />
                <div className="p-6 space-y-3">
                  <div className="h-4 bg-cream-dark animate-pulse rounded" />
                  <div className="h-3 bg-cream-dark animate-pulse rounded w-3/4" />
                  <div className="h-6 bg-cream-dark animate-pulse rounded w-1/2" />
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Empty state */}
        {!isLoading && displayListings.length === 0 && (
          <div data-ocid="listings.empty_state" className="text-center py-20">
            <div className="w-16 h-16 bg-cream-dark flex items-center justify-center mx-auto mb-5">
              <Ruler className="w-7 h-7 text-gold" strokeWidth={1.5} />
            </div>
            <h3 className="font-serif text-xl font-semibold text-charcoal mb-3">
              No listings found
            </h3>
            <p
              className="font-sans-brand text-sm max-w-sm mx-auto leading-relaxed"
              style={{ color: "oklch(0.55 0 0)" }}
            >
              No properties match your current filter. Try a different category
              or contact us directly.
            </p>
            <button
              type="button"
              onClick={() => {
                setActiveFilter("all");
                setActiveStatus("all");
              }}
              className="mt-6 px-6 py-3 font-sans-brand text-sm font-semibold text-gold border border-gold hover:bg-gold hover:text-brand-black transition-all duration-250"
            >
              View All Properties
            </button>
          </div>
        )}

        {/* Grid */}
        {!isLoading && displayListings.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {displayListings.map((listing, idx) => (
              <ListingCard
                key={listing.id.toString()}
                listing={listing}
                index={idx}
              />
            ))}
          </div>
        )}
      </div>
    </main>
  );
}
