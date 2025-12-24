import { motion } from "framer-motion";
import { FaGraduationCap } from "react-icons/fa";

const About = () => {
  return (
    <section
      id="about"
      className="relative py-24 px-6 bg-dark text-slateLight overflow-hidden"
    >
      {/* Background shapes */}
      <div className="absolute top-0 -left-20 w-96 h-96 bg-gradient-to-tr from-primary/20 to-transparent rounded-full filter blur-3xl"></div>
      <div className="absolute bottom-0 -right-20 w-96 h-96 bg-gradient-to-bl from-accent/20 to-transparent rounded-full filter blur-3xl"></div>

      <div className="relative max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center z-10">
        {/* Image */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="flex justify-center"
        >
          <div className="w-72 h-72 md:w-80 md:h-80 rounded-xl bg-cardDark border-2 border-primary flex items-center justify-center shadow-lg hover:shadow-2xl transition-transform transform hover:scale-105 relative overflow-hidden">
            <img
              src="/about.png"
              alt="Hero"
              className="w-64 h-64 md:w-72 md:h-72 object-cover rounded-xl"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/30 rounded-xl pointer-events-none"></div>
          </div>
        </motion.div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="relative"
        >
          <h2 className="text-3xl font-bold mb-6">
            About <span className="text-primary">Me</span>
          </h2>

          <p className="text-slateLight/70 mb-4 leading-relaxed">
            Results-driven Software Engineer with over 2.5 years of experience
            building enterprise-grade, data-driven web applications. I
            specialize in React, TypeScript, and modern frontend architecture,
            with strong backend exposure in Node.js and Java Spring Boot.
          </p>

          <p className="text-slateLight/70 mb-4 leading-relaxed">
            I’ve owned the full frontend lifecycle—from architecture and UX
            decisions to performance optimization and CI/CD-driven deployments—
            delivering scalable and maintainable systems for real-world users.
          </p>

          <p className="text-slateLight/70 leading-relaxed">
            Completed Master in Information Systems with Computing at Dublin
            Business School, Ireland, First Class Honours. Focused on mastering
            Information Systems, data modeling, and enterprise application
            design, strengthening my ability to architect scalable and
            data-driven applications.
          </p>
         
        </motion.div>
      </div>
    </section>
  );
};

export default About;
