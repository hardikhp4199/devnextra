import Link from "next/link";
import SectionHeading from "../ui/SectionHeading";
import ProjectCard from "../ui/ProjectCard";
import { projects } from "../../lib/projects";

export default function FeaturedProjects() {
  const featured = projects.slice(0, 4);

  return (
    <section id="work" className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
      <SectionHeading eyebrow="Featured projects" titleBefore="Work we're" highlight="proud of" />

      <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {featured.map((project) => (
  <ProjectCard
    key={project.title}
    project={project}
    featured
  />
))}
      </div>

      <div className="mt-10 text-center">
        <Link
          href="/work"
          className="inline-flex items-center gap-2 rounded-full bg-brand-lime px-5 py-2.5 text-sm font-semibold text-brand-dark transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md"
        >
          View all projects
          <span aria-hidden="true" className="transition-transform group-hover:translate-x-0.5">
            →
          </span>
        </Link>
      </div>
    </section>
  );
}