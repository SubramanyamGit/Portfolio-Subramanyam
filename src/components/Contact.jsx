import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

const Contact = () => {
  return (
    <section id="contact" className="py-24 px-6 bg-dark text-slateLight">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-slateLight">
          Get in <span className="text-primary">Touch</span>
        </h2>

        <p className="text-slateLight/70 mb-12 text-lg md:text-xl">
          Feel free to reach out for collaborations, questions, or a friendly chat.  
          I’m always open to exciting opportunities and networking.
        </p>

        <div className="flex flex-col md:flex-row justify-center gap-6">
          {/* Email */}
          <motion.a
            href="mailto:subramanyamsiliveri@gmail.com"
            className="flex items-center gap-3 bg-primary hover:bg-primaryDark text-white px-8 py-4 rounded-lg font-medium shadow-md transition transform hover:scale-105"
          >
            <FaEnvelope className="w-5 h-5" />
            Email Me
          </motion.a>

          {/* LinkedIn */}
          <motion.a
            href="https://www.linkedin.com/in/subramanyam-siliveri/"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-3 bg-[#0A66C2] hover:bg-[#004182] text-white px-8 py-4 rounded-lg font-medium shadow-md transition transform hover:scale-105"
          >
            <FaLinkedin className="w-5 h-5" />
            LinkedIn
          </motion.a>

          {/* GitHub */}
          <motion.a
            href="https://github.com/SubramanyamGit"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-3 bg-[#171515] hover:bg-[#333333] text-white px-8 py-4 rounded-lg font-medium shadow-md transition transform hover:scale-105"
          >
            <FaGithub className="w-5 h-5" />
            GitHub
          </motion.a>
        </div>

        <p className="text-slateLight/50 mt-12 text-sm">
          © {new Date().getFullYear()} Subramanyam Siliveri. All rights reserved.
        </p>
      </div>
    </section>
  );
};

export default Contact;
