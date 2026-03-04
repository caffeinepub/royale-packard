import { useNavigate } from "@tanstack/react-router";
import {
  type FeaturedProject,
  ProjectStatus,
  ProjectType,
} from "../../backend.d";
import { useGetAllProjects } from "../../hooks/useQueries";

const PROJECT_IMAGES: Record<string, string> = {
  [ProjectType.residential]: "/assets/generated/project-villa.dim_800x600.jpg",
  [ProjectType.commercial]:
    "/assets/generated/project-commercial.dim_800x600.jpg",
  [ProjectType.interior]: "/assets/generated/interior-bedroom.dim_800x600.jpg",
};

const FALLBACK_PROJECTS: FeaturedProject[] = [
  {
    id: BigInt(1),
    name: "Meridian Villa — Vasant Kunj",
    location: "Vasant Kunj, Delhi",
    ptype: ProjectType.residential,
    status: ProjectStatus.completed,
    shortDescription:
      "A sprawling 5-bedroom luxury villa with premium marble finishes, home automation, and bespoke interior design across 7,200 sq ft.",
  },
  {
    id: BigInt(2),
    name: "Pinnacle Tower — Connaught Place",
    location: "Connaught Place, Delhi",
    ptype: ProjectType.commercial,
    status: ProjectStatus.completed,
    shortDescription:
      "A 12-floor commercial complex featuring grade-A office spaces, retail units, and state-of-the-art structural engineering.",
  },
  {
    id: BigInt(3),
    name: "The Residences — Dwarka",
    location: "Dwarka, Delhi",
    ptype: ProjectType.residential,
    status: ProjectStatus.ongoing,
    shortDescription:
      "Premium residential complex with 120 luxury apartments, rooftop amenities, and professionally designed interiors.",
  },
  {
    id: BigInt(4),
    name: "Maison Interior — South Delhi",
    location: "Greater Kailash, Delhi",
    ptype: ProjectType.interior,
    status: ProjectStatus.completed,
    shortDescription:
      "Complete luxury transformation of a 3BHK apartment featuring custom modular kitchen, false ceilings, and bespoke furniture.",
  },
  {
    id: BigInt(5),
    name: "Arora Commercial Complex",
    location: "Wazirpur, Delhi",
    ptype: ProjectType.commercial,
    status: ProjectStatus.ongoing,
    shortDescription:
      "Modern commercial showroom complex with high ceilings, glass facade, and premium build quality.",
  },
  {
    id: BigInt(6),
    name: "Sunrise Residency — Rohini",
    location: "Rohini, Delhi",
    ptype: ProjectType.residential,
    status: ProjectStatus.completed,
    shortDescription:
      "Affordable luxury 2BHK apartments with quality construction, modern amenities, and thoughtful space planning.",
  },
];

function ProjectCard({
  project,
  index,
}: { project: FeaturedProject; index: number }) {
  const image =
    PROJECT_IMAGES[project.ptype] || PROJECT_IMAGES[ProjectType.residential];
  const typeLabel =
    project.ptype.charAt(0).toUpperCase() + project.ptype.slice(1);
  const isCompleted = project.status === ProjectStatus.completed;

  return (
    <div
      data-ocid={`projects.card.${index + 1}`}
      className="project-card relative overflow-hidden shadow-card group cursor-pointer"
    >
      <img
        src={image}
        alt={project.name}
        className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
        loading="lazy"
      />
      <div className="project-card-overlay">
        {/* Type + Status badges */}
        <div className="flex items-center gap-2 mb-2">
          <span className="font-sans-brand text-xs font-semibold px-2.5 py-1 bg-gold text-brand-black tracking-wider uppercase">
            {typeLabel}
          </span>
          <span
            className={`font-sans-brand text-xs font-semibold px-2.5 py-1 tracking-wider uppercase ${
              isCompleted
                ? "bg-green-600/90 text-white"
                : "bg-amber-500/90 text-white"
            }`}
          >
            {isCompleted ? "Completed" : "Ongoing"}
          </span>
        </div>

        {/* Name + Location */}
        <h3 className="font-serif text-base lg:text-lg font-semibold text-white leading-tight mb-1">
          {project.name}
        </h3>
        <p className="font-sans-brand text-xs text-white/70 mb-2">
          📍 {project.location}
        </p>

        {/* Description on hover */}
        <p
          className="project-card-desc font-sans-brand text-xs leading-relaxed"
          style={{ color: "oklch(0.78 0 0)" }}
        >
          {project.shortDescription}
        </p>
      </div>
    </div>
  );
}

export default function ProjectsSection() {
  const navigate = useNavigate();
  const { data: projects, isLoading } = useGetAllProjects();
  const displayProjects =
    projects && projects.length > 0 ? projects : FALLBACK_PROJECTS;

  return (
    <section id="projects" className="bg-brand-cream py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="flex items-center justify-center gap-4 mb-4">
            <span className="inline-block w-8 h-px bg-charcoal/15" />
            <span className="font-sans-brand text-xs tracking-[0.3em] uppercase text-charcoal/40 font-semibold">
              Portfolio
            </span>
            <span className="inline-block w-8 h-px bg-charcoal/15" />
          </div>
          <h2 className="section-heading text-charcoal mb-4">
            Our Signature Projects
          </h2>
          <p
            className="font-sans-brand text-base max-w-xl mx-auto leading-relaxed"
            style={{ color: "oklch(0.48 0.005 280)" }}
          >
            A curated selection of our finest work across Delhi's most
            prestigious addresses.
          </p>
        </div>

        {/* Loading skeleton */}
        {isLoading && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
            {[1, 2, 3].map((i) => (
              <div key={i} className="h-64 bg-white/60 animate-pulse" />
            ))}
          </div>
        )}

        {/* Projects grid */}
        {!isLoading && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {displayProjects.slice(0, 6).map((project, idx) => (
              <ProjectCard
                key={project.id.toString()}
                project={project}
                index={idx}
              />
            ))}
          </div>
        )}

        {/* CTA button */}
        <div className="text-center">
          <button
            type="button"
            data-ocid="projects.listings_button"
            onClick={() => navigate({ to: "/listings" })}
            className="inline-flex items-center gap-3 px-8 py-4 font-sans-brand text-sm font-semibold tracking-wider uppercase border-2 border-charcoal text-charcoal hover:bg-charcoal hover:text-white transition-all duration-250"
          >
            Explore Property Listings
            <span>→</span>
          </button>
        </div>
      </div>
    </section>
  );
}
