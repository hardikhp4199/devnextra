"use client";

import { useState } from "react";
import {
  SiReact, SiNextdotjs, SiTypescript, SiTailwindcss, SiJavascript, SiHtml5, SiRedux,
  SiNodedotjs, SiExpress, SiPython, SiPhp, SiLaravel, SiGraphql, SiNestjs, SiCss,
  SiDocker, SiKubernetes, SiVercel, SiGithubactions, SiNginx,
  SiPostgresql, SiMongodb, SiMysql, SiRedis, SiFigma, SiGit,SiGo, SiOpenjdk, SiDotnet
} from "react-icons/si";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAws } from '@fortawesome/free-brands-svg-icons';
import SectionHeading from "../ui/SectionHeading";

const categories = {
  Frontend: [
    { icon: SiReact, name: "React", color: "#61DAFB" },
    { icon: SiNextdotjs, name: "Next.js", color: "#000000" },
    { icon: SiTypescript, name: "TypeScript", color: "#3178C6" },
    { icon: SiTailwindcss, name: "Tailwind CSS", color: "#06B6D4" },
    { icon: SiJavascript, name: "JavaScript", color: "#F0DB4F" },
    { icon: SiHtml5, name: "HTML5", color: "#E34F26" },
    { icon: SiCss, name: "CSS3", color: "#1572B6" },
    { icon: SiRedux, name: "Redux", color: "#764ABC" },
  ],
  Backend: [
    { icon: SiNodedotjs, name: "Node.js", color: "#339933" },
    { icon: SiExpress, name: "Express", color: "#000000" },
    { icon: SiGo, name: "Go", color: "#00ADD8" },          // 👈 Added Go (Golang Official Cyan)
    { icon: SiOpenjdk, name: "Java", color: "#EA2D42" },    // 👈 Added Java (Using OpenJDK Red)
    { icon: SiDotnet, name: ".NET", color: "#512BD4" }, 
    { icon: SiPython, name: "Python", color: "#3776AB" },
    { icon: SiPhp, name: "PHP", color: "#777BB4" },
    { icon: SiLaravel, name: "Laravel", color: "#FF2D20" },
    { icon: SiGraphql, name: "GraphQL", color: "#E10098" },
    { icon: SiNestjs, name: "NestJS", color: "#E0234E" },
  ],
  DevOps: [
    { icon: SiDocker, name: "Docker", color: "#2496ED" },
    { icon: SiKubernetes, name: "Kubernetes", color: "#326CE5" },
    { icon: ({ size, color }: { size?: number; color?: string }) => <FontAwesomeIcon icon={faAws} style={{ fontSize: size, color }} />, name: "AWS", color: "#FF9900" },
    { icon: SiVercel, name: "Vercel", color: "#000000" },
    { icon: SiGithubactions, name: "GitHub Actions", color: "#2088FF" },
    { icon: SiNginx, name: "Nginx", color: "#009639" },
  ],
  Other: [
    { icon: SiPostgresql, name: "PostgreSQL", color: "#4169E1" },
    { icon: SiMongodb, name: "MongoDB", color: "#47A248" },
    { icon: SiMysql, name: "MySQL", color: "#4479A1" },
    { icon: SiRedis, name: "Redis", color: "#DC382D" },
    { icon: SiFigma, name: "Figma", color: "#F24E1E" },
    { icon: SiGit, name: "Git", color: "#F05032" },
  ],
};

type Category = keyof typeof categories;

export default function TechStack() {
  const [active, setActive] = useState<Category>("Frontend");

  return (
    <section className="border-y border-gray-100 bg-brand-offwhite py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* <div className="text-center">
          <span className="text-xs font-semibold uppercase tracking-wider text-brand-lime-dark">
            Our tech stack
          </span>
          <h2 className="mt-2 text-3xl font-bold text-brand-dark">
            Tools we build with
          </h2>
        </div> */}
        
              
        <SectionHeading
          eyebrow="Our tech stack"
          titleBefore="Tools we build with"
          highlight=""
          subtitle=""
        />

        <div className="mt-8 flex flex-wrap justify-center gap-2">
          {(Object.keys(categories) as Category[]).map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`rounded-full px-4 py-1.5 text-xs font-semibold transition-colors ${
                active === cat
                  ? "bg-brand-lime text-brand-dark"
                  : "bg-white text-gray-600 hover:text-brand-dark"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4 lg:grid-cols-8">
          {categories[active].map((tech) => {
            const Icon = tech.icon;
            return (
              <div
                key={tech.name}
                className="group flex flex-col items-center gap-3 rounded-2xl border border-transparent bg-white p-5 shadow-sm transition-all hover:-translate-y-1 hover:shadow-md"
                style={{ borderColor: `${tech.color}22` }}
              >
                <div
                  className="flex h-12 w-12 items-center justify-center rounded-xl transition-transform group-hover:scale-110"
                  style={{ backgroundColor: `${tech.color}18` }}
                >
                  <Icon size={26} color={tech.color} />
                </div>
                <span className="text-center text-xs font-medium text-brand-charcoal">
                  {tech.name}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}