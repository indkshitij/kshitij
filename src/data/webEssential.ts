import { NavLink } from "@/types";

const NAV_LINK: NavLink[] = [
  { name: "Home", href: "/", tooltip: "Go to homepage" },

  { name: "Experience", href: "/experience", tooltip: "See my work experience" },

  { name: "Projects", href: "/project", tooltip: "Explore my projects" },

  { name: "Skills", href: "/skill", tooltip: "View my technical skills" },

  { name: "Education", href: "/education", tooltip: "See my academic background" },

  { name: "Contact", href: "/contact", tooltip: "Get in touch with me" },
];

export default NAV_LINK;

export const META_THEME_COLORS = {
  light: "#ffffff",
  dark: "#09090b",
}
