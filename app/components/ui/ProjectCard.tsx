// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { Project } from "../../lib/projects";

// export default function ProjectCard({ project }: { project: Project }) {
//   return (
//     <div className="overflow-hidden rounded-2xl border border-gray-100 transition-shadow hover:shadow-lg">
//       <div
//         className="relative flex h-40 items-center justify-center overflow-hidden"
//         style={{ backgroundColor: `${project.accent}12` }}
//       >
//         <div className="absolute left-4 top-4 h-2 w-16 rounded-full" style={{ backgroundColor: `${project.accent}30` }} />
//         <div className="absolute left-4 top-8 h-2 w-10 rounded-full" style={{ backgroundColor: `${project.accent}20` }} />
//         <div className="absolute bottom-4 right-4 h-8 w-8 rounded-lg" style={{ backgroundColor: `${project.accent}25` }} />
//         <div className="absolute bottom-4 right-16 h-8 w-8 rounded-lg" style={{ backgroundColor: `${project.accent}15` }} />
//         <div className="flex h-14 w-14 items-center justify-center rounded-2xl shadow-sm" style={{ backgroundColor: project.accent }}>
//           <FontAwesomeIcon icon={project.icon} className="text-[22px] text-white" />
//         </div>
//       </div>

//       <div className="p-4">
//         <div className="flex items-center justify-between">
//           <h3 className="text-sm font-semibold text-brand-dark">{project.title}</h3>
//           {!project.real && (
//             <span className="rounded-full bg-gray-100 px-2 py-0.5 text-[10px] font-medium text-gray-500">
//               Example
//             </span>
//           )}
//         </div>
//         <p className="mt-1 text-xs text-gray-500">{project.type}</p>
//         <div className="mt-3 flex gap-2">
//           {project.tech.map((t) => {
//             const TechIcon = t.icon;
//             return (
//               <span key={t.name} title={t.name} className="flex h-6 w-6 items-center justify-center rounded-md bg-brand-offwhite text-gray-500">
//                 <TechIcon size={13} />
//               </span>
//             );
//           })}
//         </div>
//       </div>
//     </div>
//   );
// }

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Project } from "../../lib/projects";

type ProjectCardProps = {
  project: Project;
  featured?: boolean;
};

export default function ProjectCard({
  project,
  featured = false,
}: ProjectCardProps) {
  const visibleTech = featured ? project.tech.slice(0, 3) : project.tech;

  return (
    <article className="group overflow-hidden rounded-2xl border border-gray-100 bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      {/* Project visual */}
      <div
        className="relative flex h-40 items-center justify-center overflow-hidden"
        style={{ backgroundColor: `${project.accent}12` }}
      >
        {/* Decorative lines */}
        <div
          className="absolute left-4 top-4 h-2 w-16 rounded-full"
          style={{ backgroundColor: `${project.accent}30` }}
        />

        <div
          className="absolute left-4 top-8 h-2 w-10 rounded-full"
          style={{ backgroundColor: `${project.accent}20` }}
        />

        {/* Decorative squares */}
        <div
          className="absolute bottom-4 right-4 h-8 w-8 rounded-lg"
          style={{ backgroundColor: `${project.accent}25` }}
        />

        <div
          className="absolute bottom-4 right-16 h-8 w-8 rounded-lg"
          style={{ backgroundColor: `${project.accent}15` }}
        />

        {/* Main project icon */}
        <div
          className="flex h-14 w-14 items-center justify-center rounded-2xl shadow-sm transition-transform duration-300 group-hover:scale-105"
          style={{ backgroundColor: project.accent }}
        >
          <FontAwesomeIcon
            icon={project.icon}
            className="text-[22px] text-white"
          />
        </div>
      </div>

      {/* Project information */}
      <div className="p-4">
        {/* Category + Example */}
        <div className="flex items-center justify-between gap-2">
          <span className="text-[10px] font-semibold uppercase tracking-wide text-gray-400">
            {project.category}
          </span>

          {!project.real && (
            <span className="rounded-full bg-gray-100 px-2 py-0.5 text-[10px] font-medium text-gray-500">
              Example
            </span>
          )}
        </div>

        {/* Project title */}
        <h3 className="mt-1.5 text-sm font-semibold leading-5 text-brand-dark">
          {project.title}
        </h3>

        {/* Project type / description */}
        <p className="mt-1.5 min-h-[32px] text-xs leading-4 text-gray-500">
          {project.type}
        </p>

        {/* Technology */}
        <div className="mt-4 border-t border-gray-100 pt-3">
          <p className="mb-2 text-[9px] font-semibold uppercase tracking-[0.12em] text-gray-400">
            Technology
          </p>

          <div className="flex flex-wrap gap-1.5">
            {visibleTech.map((t) => {
              const TechIcon = t.icon;

              return (
                <span
                  key={t.name}
                  title={t.name}
                  className="inline-flex items-center gap-1.5 rounded-md border border-gray-100 bg-brand-offwhite px-2 py-1 text-[10px] font-medium text-gray-600"
                >
                  <TechIcon size={12} />
                  <span>{t.name}</span>
                </span>
              );
            })}

            {featured && project.tech.length > 3 && (
              <span className="inline-flex items-center rounded-md bg-gray-50 px-2 py-1 text-[10px] font-medium text-gray-400">
                +{project.tech.length - 3}
              </span>
            )}
          </div>
        </div>
      </div>
    </article>
  );
}