import { motion } from "framer-motion";

const projects = [
  {
    title: "HDFC Admin Module",
    description:
      "Enterprise dashboard for HDFC Bank employees to configure, manage, and audit internal applications. Built using ReactJS, TypeScript, and robust frontend architecture. Implemented RBAC workflows and interactive, data-driven tables for efficient administration.",
    technologies: ["ReactJS", "TypeScript", "Redux", "TailwindCSS", "Docker", "CI/CD", "RBAC"],
    link: "#",
  },
  {
    title: "RBAC Management System",
    description:
      "Web application to manage roles, permissions, and access control workflows. Features include self-service role requests, admin approval flows, and automated permission expiry. Designed to ensure security, compliance, and auditability.",
    technologies: ["ReactJS", "TypeScript", "Node.js", "Express", "MySQL", "JWT", "TailwindCSS"],
    link: "#",
  },
  {
    title: "Hotel Resources Management",
    description:
      "Web application to manage hotel resources including room bookings, inventory, and staff schedules. Built with ReactJS and Node.js, featuring dynamic dashboards, role-based access, and responsive UI for operational efficiency.",
    technologies: ["ReactJS", "Node.js", "TypeScript", "TailwindCSS", "MySQL", "REST APIs"],
    link: "#",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-24 px-6 bg-dark text-slateLight">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-slateLight">
          Projects <span className="text-primary">Portfolio</span>
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.05 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ type: "spring", stiffness: 150, damping: 20, delay: idx * 0.1 }}
              className="bg-cardDark border border-slate-700 rounded-xl shadow-lg hover:shadow-2xl overflow-hidden cursor-pointer"
            >
              {/* Project Title Header */}
              <div className="bg-[#E2E8F0] text-[#1A2238] font-bold px-6 py-3 text-lg">
                {project.title}
              </div>

              {/* Description */}
              <div className="px-6 py-4">
                <p className="text-slateLight/70 mb-4 text-sm">{project.description}</p>

                {/* Technologies as chips */}
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <button
                      key={tech}
                      className="text-xs px-3 py-1 rounded-md bg-primary/20 text-primary font-medium hover:bg-primary/40 hover:text-white transition border border-neutral"
                    >
                      {tech}
                    </button>
                  ))}
                </div>
              </div>

              {/* Optional Project Link */}
              {/* {project.link && (
                <a
                  href={project.link}
                  className="text-primary hover:text-primaryDark font-medium px-6 pb-4 block"
                >
                  View Project
                </a>
              )} */}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
