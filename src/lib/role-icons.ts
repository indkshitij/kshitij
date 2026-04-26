import {
  Code2,
  Server,
  Layers,
  Smartphone,
  Database,
  Cloud,
  Palette,
  Shield,
  Cpu,
  Terminal,
  GitBranch,
  Briefcase,
  LineChart,
  Globe,
  Settings,
  GraduationCap,
} from "lucide-react";

import type { ComponentType } from "react";

export type RoleCategory =
  | "frontend"
  | "backend"
  | "fullstack"
  | "mobile"
  | "data"
  | "devops"
  | "design"
  | "security"
  | "ai"
  | "cli"
  | "opensource"
  | "product"
  | "analytics"
  | "web"
  | "system"
  | "general"
  | "education";

export const roleIconMap: Record<
  RoleCategory,
  ComponentType<{ className?: string }>
> = {
  frontend: Code2,
  backend: Server,
  fullstack: Layers,
  mobile: Smartphone,
  data: Database,
  devops: Cloud,
  design: Palette,
  security: Shield,
  ai: Cpu,
  cli: Terminal,
  opensource: GitBranch,
  product: Briefcase,
  analytics: LineChart,
  web: Globe,
  system: Settings,
  general: Briefcase,
  education: GraduationCap,
};

export function getRoleCategory(role: string): RoleCategory {
  const r = role.toLowerCase();

  if (r.includes("frontend")) return "frontend";
  if (r.includes("backend")) return "backend";
  if (r.includes("full")) return "fullstack";
  if (r.includes("mobile")) return "mobile";
  if (r.includes("data")) return "data";
  if (r.includes("devops")) return "devops";
  if (r.includes("design") || r.includes("ui") || r.includes("ux"))
    return "design";
  if (r.includes("security")) return "security";
  if (r.includes("ai") || r.includes("ml")) return "ai";
  if (r.includes("cli")) return "cli";
  if (r.includes("open source")) return "opensource";
  if (r.includes("product")) return "product";
  if (r.includes("analytics")) return "analytics";
  if (r.includes("web")) return "web";
  if (r.includes("system")) return "system";
  if (r.includes("education")) return "education";

  return "general";
}
