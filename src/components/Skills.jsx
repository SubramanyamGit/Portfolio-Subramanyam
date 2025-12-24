import { motion } from "framer-motion";

const skills = [
  { title: "Frontend", items: ["React", "Next.js", "TypeScript", "Redux", "React Query", "Tailwind"] },
  { title: "Backend", items: ["Node.js", "Express", "Java", "Spring Boot", "REST APIs", "GraphQL"] },
  { title: "DevOps & Cloud", items: ["Docker", "GitHub Actions", "Azure DevOps", "Terraform", "Azure"] },
  { title: "Databases & Tools", items: ["MySQL", "PostgreSQL", "Git", "Jira", "Jest"] },
];

const Skills = () => {
  return (
    <section id="skills" className="py-24 px-6 bg-dark text-slateLight">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-12">
          Skills & <span className="text-primary">Tools</span>
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((group, idx) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ delay: idx * 0.1 }}
              className="bg-cardDark border border-slate-700 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition"
            >
              {/* Header */}
              <div className="bg-[#E2E8F0] text-[#1A2238] font-bold px-6 py-3 text-lg">
                {group.title}
              </div>

              {/* Skills list */}
              <ul className="px-6 py-4 space-y-2 text-slateLight/70 text-sm">
                {group.items.map((item) => (
                  <li key={item} className="list-disc list-inside">
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
