import React from "react";
import { education } from "@/data/education";

const EducationSection = () => {
  return (
    <section className="py-16 px-6">
      <h2 className="text-2xl font-semibold mb-8">Education</h2>

      <div className="space-y-6">
        {education.map((edu, index) => (
          <div
            key={index}
            className="border p-6 rounded-xl shadow-sm"
          >
            <h3 className="font-semibold">{edu.degree}</h3>

            <p className="text-sm text-gray-500 mt-1">
              {edu.institution}
            </p>

            <p className="text-sm text-gray-400">
              {edu.duration}
            </p>

            <p className="mt-2 text-sm font-medium">
              {edu.score}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default EducationSection;