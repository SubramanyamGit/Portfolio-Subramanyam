import { motion } from "framer-motion";

const navItems = ["About", "Skills", "Experience", "Projects", "Contact"];

const Navbar = () => {
  const navVariants = {
    hidden: { y: -50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 120, damping: 20, staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { y: -10, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.3 } },
  };

  return (
    <motion.nav
      variants={navVariants}
      initial="hidden"
      animate="visible"
      className="fixed top-0 w-full bg-dark/95 backdrop-blur-md border-b border-slate-700 z-50"
    >
      <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-4">
        <motion.h1
          className="text-lg font-bold tracking-wide text-slateLight"
          initial={{ y: -10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          Subramanyam Siliveri<span className="text-primary"></span>
        </motion.h1>

        <ul className="hidden md:flex gap-8 text-sm">
          {navItems.map((item) => (
            <motion.li
              key={item}
              variants={itemVariants}
              className="relative group cursor-pointer"
            >
              <a
                href={`#${item.toLowerCase()}`}
                className="text-slateLight transition-colors duration-300 group-hover:text-primary"
              >
                {item}
              </a>
              {/* Animated underline */}
              <span className="absolute left-0 -bottom-0.5 h-0.5 w-0 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </motion.li>
          ))}
        </ul>
      </div>
    </motion.nav>
  );
};

export default Navbar;
