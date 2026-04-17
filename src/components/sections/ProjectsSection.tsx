import { projects } from "@/data/projects";

export default function ProjectsSection() {
  return (
    <section className="py-16 px-6">
      <h2 className="text-2xl font-semibold mb-8">Projects</h2>

      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((project) => (
          <div key={project.title} className="border p-6 rounded-xl">
            <h3 className="font-semibold">{project.title}</h3>

            <div className="flex flex-wrap gap-2 my-3">
              {project.tech.map((tech) => (
                <span key={tech} className="text-xs border px-2 py-1 rounded">
                  {tech}
                </span>
              ))}
            </div>

            <ul className="list-disc ml-5 text-sm">
              {project.description.map((d, i) => (
                <li key={i}>{d}</li>
              ))}
            </ul>

            <a
              href={project.github}
              className="text-blue-500 mt-3 inline-block"
            >
              View Code →
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
