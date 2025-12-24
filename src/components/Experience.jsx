import { motion } from "framer-motion";
import { FaBuilding, FaCalendarAlt } from "react-icons/fa";

const experiences = [
  {
    role: "Software Engineer – HDFC Admin Module",
    company: "Josh Software Private Limited / HDFC Bank",
    duration: "May 2022 – July 2024 | Pune, India",
    responsibilities: [
      "Contributed to frontend architecture and development of enterprise-grade React applications.",
      "Designed and implemented interactive dashboards enabling users to visualize, navigate, and manage large datasets efficiently.",
      "Took complete ownership of UI/UX and layout design, defining interaction flows and UI patterns in the absence of a dedicated design team.",
      "Built configurable components and data-driven tables for user account management and application configuration.",
      "Integrated frontend components with REST APIs through close collaboration with backend engineers to maintain data consistency and performance.",
      "Implemented Maker-Checker (RBAC) workflows for secure, compliant, and auditable operations.",
      "Improved application performance using memoization, lazy loading, and effective caching strategies.",
      "Containerized frontend applications using Docker to ensure consistency across development, staging, and production environments.",
      "Developed and maintained CI/CD pipelines through GitHub Actions and Azure DevOps, ensuring automated, reliable builds and deployments.",
      "Performed thorough code reviews and implemented unit tests to uphold code quality and maintainability.",
      "Mentored interns and junior developers on React best practices, design patterns, and agile methodologies.",
      "Participated actively in scrum ceremonies to support transparent communication and iterative project delivery.",
      "Delivered a scalable, responsive, and intuitive dashboard that significantly improved administrative efficiency and operational workflows."
    ],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-24 px-6 bg-dark text-slateLight">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-slateLight">
          Experience <span className="text-primary">Timeline</span>
        </h2>

        <div className="space-y-10">
          {experiences.map((exp, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              className="bg-cardDark border border-slate-700 rounded-xl p-6 shadow-md hover:shadow-xl transition-transform transform hover:-translate-y-1 relative"
            >
              {/* Role */}
              <h3 className="text-xl md:text-2xl font-bold mb-2 text-slateLight">{exp.role}</h3>

              {/* Company and Duration */}
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
                <p className="flex items-center gap-2 text-slate-400 font-medium">
                  <FaBuilding className="w-4 h-4 text-primary" />
                  {exp.company}
                </p>
                <p className="flex items-center gap-2 text-slate-500 text-sm mt-1 md:mt-0">
                  <FaCalendarAlt className="w-4 h-4 text-primary" />
                  {exp.duration}
                </p>
              </div>

              {/* Responsibilities */}
              <ul className="list-disc list-inside text-slate-400 space-y-2">
                {exp.responsibilities.map((resp, i) => (
                  <li key={i}>{resp}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
