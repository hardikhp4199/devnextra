import { IconDefinition } from "@fortawesome/fontawesome-svg-core";

import {
  faUtensils,
  faCartShopping,
  faHeartPulse,
  faBuilding,
  faGraduationCap,
  faDumbbell,
  faServer,
} from "@fortawesome/free-solid-svg-icons";

import {
  SiWordpress,
  SiLaravel,
  SiGo,
  SiVuedotjs,
  SiAngular,
  SiReact,
} from "react-icons/si";

import { IconType } from "react-icons";

export const categories = [
  "All",
  "Healthcare",
  "Real Estate",
  "Education",
  "Enterprise Systems",
  "Food & Beverage",
  "Retail & E-commerce",
  "Fitness & Wellness",
];

export type Project = {
  title: string;
  category: string;
  type: string;
  description: string;
  icon: IconDefinition;
  accent: string;
  tech: { icon: IconType; name: string }[];
  real: boolean;
};

export const projects: Project[] = [
  {
    title: "NHS Physio Referral Integration",
    category: "Healthcare",
    type: "System Integration",
    description: "RIO & e-Referral Service (ERS) system merge",
    icon: faHeartPulse,
    accent: "#EF4444",
    tech: [{ icon: SiReact, name: "React" }],
    real: true,
  },

  {
    title: "Society & Housing Management",
    category: "Real Estate",
    type: "Property Management Platform",
    description:
      "Resident, billing and maintenance management platform",
    icon: faBuilding,
    accent: "#8B5CF6",
    tech: [
      { icon: SiVuedotjs, name: "Vue.js" },
      { icon: SiAngular, name: "Angular" },
    ],
    real: true,
  },

  {
    title: "School Management System",
    category: "Education",
    type: "Education Management Platform",
    description:
      "Student, staff and fee management platform",
    icon: faGraduationCap,
    accent: "#06B6D4",
    tech: [{ icon: SiLaravel, name: "Laravel" }],
    real: true,
  },

  {
    title: "Warehouse IoT Platform",
    category: "Enterprise Systems",
    type: "IoT & Inventory Platform",
    description:
      "Real-time inventory synchronisation through IoT sensors",
    icon: faServer,
    accent: "#0EA5E9",
    tech: [{ icon: SiGo, name: "Go" }],
    real: true,
  },

  {
    title: "Corporate Business Website",
    category: "Enterprise Systems",
    type: "Business Website",
    description:
      "Custom WordPress business platform",
    icon: faServer,
    accent: "#64748B",
    tech: [{ icon: SiWordpress, name: "WordPress" }],
    real: true,
  },

  {
    title: "TableReady",
    category: "Food & Beverage",
    type: "Online Ordering Platform",
    description:
      "Online ordering platform for restaurants and food businesses",
    icon: faUtensils,
    accent: "#F97316",
    tech: [{ icon: SiReact, name: "React" }],
    real: false,
  },

  {
    title: "ShopFlow",
    category: "Retail & E-commerce",
    type: "E-commerce Platform",
    description:
      "Modern e-commerce experience for online retail businesses",
    icon: faCartShopping,
    accent: "#3B82F6",
    tech: [{ icon: SiReact, name: "React" }],
    real: false,
  },

  {
    title: "FitTrack",
    category: "Fitness & Wellness",
    type: "Fitness Booking Platform",
    description:
      "Class discovery and booking experience for fitness businesses",
    icon: faDumbbell,
    accent: "#22C55E",
    tech: [{ icon: SiReact, name: "React" }],
    real: false,
  },
];