import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaLaravel,
  FaReact,
  FaFigma,
  FaGitAlt,
  FaNodeJs,
} from 'react-icons/fa';
import { SiGooglecloud, SiFirebase } from 'react-icons/si';
import { motion } from 'framer-motion';

// Wrapper component untuk konsistensi antar section
const SectionWrapper = ({ children, id, title }) => (
  <motion.section
    id={id}
    className="min-h-screen container mx-auto py-20 px-6 flex flex-col justify-center"
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.3 }}
    transition={{ duration: 0.8 }}
  >
    <h2 className="text-4xl font-bold text-center mb-12 text-white">
      {title} <span className="text-primary">.</span>
    </h2>
    {children}
  </motion.section>
);

// Daftar skill baru sesuai permintaan Anda
const skillList = [
  { name: 'HTML5', icon: <FaHtml5 size={40} className="text-orange-500" /> },
  { name: 'CSS3', icon: <FaCss3Alt size={40} className="text-blue-500" /> },
  { name: 'JavaScript', icon: <FaJsSquare size={40} className="text-yellow-400" /> },
  { name: 'React', icon: <FaReact size={40} className="text-sky-400" /> },
  { name: 'Node.js', icon: <FaNodeJs size={40} className="text-green-500" /> },
  { name: 'Laravel', icon: <FaLaravel size={40} className="text-red-600" /> },
  { name: 'Firebase', icon: <SiFirebase size={40} className="text-amber-500" /> },
  { name: 'Google Cloud', icon: <SiGooglecloud size={40} className="text-blue-400" /> },
  { name: 'Git & GitHub', icon: <FaGitAlt size={40} className="text-orange-600" /> },
  { name: 'Figma', icon: <FaFigma size={40} className="text-pink-500" /> },
];

export default function Skills() {
    return (
        <SectionWrapper id="skills" title="My Skills">
            <div className="flex flex-wrap justify-center gap-6">
                {skillList.map((skill, index) => (
                    <motion.div
                        key={skill.name}
                        className="bg-dark-surface p-6 rounded-lg flex flex-col items-center justify-center w-36 h-36"
                        initial={{ opacity: 0, scale: 0.5 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ duration: 0.3, delay: index * 0.1 }}
                        whileHover={{ scale: 1.1, y: -5, boxShadow: "0 0 15px rgba(0, 255, 204, 0.2)" }}
                    >
                        {skill.icon}
                        <p className="mt-4 text-text-light font-medium text-center">{skill.name}</p>
                    </motion.div>
                ))}
            </div>
        </SectionWrapper>
    );
}