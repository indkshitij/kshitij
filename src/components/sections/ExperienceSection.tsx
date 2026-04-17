import { experience } from "@/data/experience";

export default function ExperienceSection() {
  return (
    <section className="py-16 px-6">
      <h2 className="text-2xl font-semibold mb-8">Experience</h2>

      <div className="space-y-6">
        {experience.map((exp) => (
          <div
            key={exp.company}
            className="border p-6 rounded-xl shadow-sm"
          >
            <h3 className="font-semibold">{exp.role}</h3>
            <p className="text-sm text-gray-500">
              {exp.company} • {exp.duration}
            </p>

            <ul className="mt-3 list-disc ml-5">
              {exp.points.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}