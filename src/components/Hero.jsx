import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaDownload } from "react-icons/fa";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 bg-dark text-slateLight">
      <div className="max-w-6xl w-full grid md:grid-cols-2 gap-10 items-center">

        {/* Text */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-sm uppercase tracking-widest text-primary mb-4">
            Software Engineer
          </h2>

          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6 text-slateLight">
            Building scalable, <br />
            high-performance <br />
            web applications
          </h1>

          <p className="text-slateLight/70 max-w-md mb-8">
            Frontend-focused Full Stack Developer with expertise in React,
            TypeScript, Node.js, and enterprise-grade web applications.
          </p>

          {/* Buttons */}
          <div className="flex gap-4 mb-6 flex-wrap">
            <a
              href="#projects"
              className="bg-primary hover:bg-primaryDark text-white px-6 py-3 rounded-lg font-medium shadow-md transition"
            >
              View Projects
            </a>

            <a
              href="#contact"
              className="border border-primary hover:bg-primary hover:text-white px-6 py-3 rounded-lg font-medium transition"
            >
              Contact Me
            </a>

            {/* Download Resume */}
            <a
              href="/SUBRAMANYAM SILIVERI.pdf"
              download
              className="flex items-center gap-2 border border-primary hover:bg-primary hover:text-white px-6 py-3 rounded-lg font-medium transition"
            >
              <FaDownload /> Download Resume
            </a>
          </div>

          {/* Social Icons */}
          <div className="flex gap-4 flex-wrap">
            <a
              href="https://www.linkedin.com/in/subramanyam-siliveri/"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-slate-800 hover:bg-primary rounded-lg transition"
            >
              <FaLinkedin className="text-primary w-5 h-5" />
              <span className="text-slateLight font-medium">LinkedIn</span>
            </a>
            <a
              href="https://github.com/SubramanyamGit"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-slate-800 hover:bg-primary rounded-lg transition"
            >
              <FaGithub className="text-primary w-5 h-5" />
              <span className="text-slateLight font-medium">GitHub</span>
            </a>
          </div>
        </motion.div>

        {/* Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="flex justify-center"
        >
          <div className="rounded-full border-4 border-primary flex items-center justify-center shadow-xl
                          w-60 h-60 md:w-80 md:h-80 bg-cardDark">
            <img
              src="/profile-pic.png"
              alt="Hero"
              className="w-56 h-56 md:w-76 md:h-76 rounded-full object-cover"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
