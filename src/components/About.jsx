// src/components/About.jsx
import { motion } from 'framer-motion';
// My3DScene TIDAK diimpor di sini lagi

const SectionWrapper = ({ children, id, title, className }) => (
  <motion.section
    id={id}
    // Background section ini akan transparan, membiarkan 3D global dari App.jsx terlihat.
    // 'relative' penting agar konten di dalamnya bisa diposisikan dengan z-index jika diperlukan.
    className={`min-h-screen w-full px-6 flex flex-col justify-center relative ${className || 'py-20'}`}
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.3 }}
    transition={{ duration: 0.8 }}
  >
    {/* Tidak ada lagi div untuk My3DScene di sini */}

    <h2 className="text-4xl font-bold text-center mb-12 text-white relative">
      {title} <span className="text-primary">.</span>
    </h2>

    <div className="relative max-w-4xl mx-auto text-center">
      {children}
    </div>
  </motion.section>
);

export default function About() {
  return (
    <SectionWrapper id="about" title="About Me">
      <p className="text-text-muted text-lg leading-relaxed">
        Hello, I'm Ihksan. The world of web development has always captivated me, starting from a simple question, 'how does all this work?' to what has now become an unquenchable passion. I find great satisfaction in creating intuitive and dynamic user experiences, especially with React on the frontend. However, behind the scenes, I'm also a backend enthusiast. I'm currently diving deep into Flask and have become quite comfortable building APIs with Express.js. Laravel has also been a companion in several projects. Beyond that, I've ventured into the cloud, becoming familiar with Firebase and even directly interacting with the Google Cloud Console for a project. For me, every line of code is an opportunity to learn and innovate, whether I'm sipping coffee at my favorite cafe or lost in the pages of a good book.
      </p>
    </SectionWrapper>
  );
}