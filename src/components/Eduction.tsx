import { motion } from "framer-motion";
import { FaMedal } from "react-icons/fa";

const educationData = [
  {
    degree: "Master in Information Systems with Computing",
    institution: "Dublin Business School, Dublin, Ireland",
    year: "Sep 2025",
    grade: "First Class",
  },
//   {
//     degree: "B.Tech in Electronics and Communication Engineering",
//     institution: "IIIT RGUKT RK Valley, Andhra Pradesh, India",
//     year: "May 2022",
//     grade: "First Class",
//   },
];

const Education = () => {
  return (
    <section id="education" className="py-24 px-6 bg-dark text-slateLight">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-12">
          Education <span className="text-primary">Qualifications</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {educationData.map((edu, idx) => (
            <motion.div
              key={edu.degree}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ delay: idx * 0.1 }}
              className="relative bg-cardDark border-2 border-primary rounded-xl p-6 pt-12 shadow-lg hover:shadow-2xl transition"
            >
              {/* Grade Chip inside the card */}
              <div className="absolute top-0 right-0  flex items-center gap-2 bg-[#E2E8F0] text-[#1A2238] font-semibold px-3 py-1 rounded-md shadow-md hover:scale-105 transition-transform">
                <FaMedal className="w-4 h-4 text-[#1A2238]" />
                <span>{edu.grade}</span>
              </div>

              <h3 className="text-xl font-semibold mb-2 text-slateLight">{edu.degree}</h3>
              <p className="text-slateLight/70 mb-1">{edu.institution}</p>
              <p className="text-slateLight/50 text-sm">{edu.year}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
