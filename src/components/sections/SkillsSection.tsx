import { skills } from "@/data/skills";

export default function SkillsSection() {
  return (
    <section className="py-16 px-6">
      <h2 className="text-2xl font-semibold mb-8">Skills</h2>

      <div className="grid md:grid-cols-2 gap-6">
        {skills.map((category) => (
          <div key={category.title}>
            <h3 className="font-medium mb-3">{category.title}</h3>
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1 text-sm border rounded-full"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}