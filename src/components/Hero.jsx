// src/components/Hero.jsx
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion';
// My3DScene TIDAK diimpor di sini lagi

export default function Hero() {
  return (
    <section
      id="hero"
      // Background section ini akan transparan, membiarkan 3D global dari App.jsx terlihat.
      // 'relative' penting agar konten di dalamnya bisa diposisikan dengan z-index jika diperlukan.
      className="min-h-screen flex items-center justify-center text-center relative"
    >
      {/* Tidak ada lagi div untuk My3DScene atau gradient overlay karena background 3D sudah global */}

      <div className="container mx-auto px-6 relative"> {/* Konten utama Hero */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <img
            src="/ihksan.jpg" // Pastikan gambar ini ada di folder public
            alt="Ihksan"
            className="w-40 h-40 rounded-full mx-auto mb-6 border-4 border-primary shadow-glow object-cover"
          />
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-3">
            Hi, I'm Ihksan
          </h1>
          <h2 className="text-2xl md:text-3xl text-text-light mb-6">
            <TypeAnimation
              sequence={[
                'A Frontend Developer & Backend Developer',
                2000,
                'A React Enthusiast',
                2000,
                'A Lifelong Learner',
                2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              className="text-primary"
            />
          </h2>
          <p className="max-w-2xl mx-auto text-text-muted mb-8">
            I build beautiful and responsive web applications. Welcome to my creative corner of the internet.
          </p>
          <div className="flex justify-center space-x-6 mb-8">
            <a href="https://github.com/ihksanblny" target="_blank" rel="noopener noreferrer" className="text-text-muted hover:text-primary text-3xl transition-colors"><FaGithub /></a>
            <a href="https://www.linkedin.com/in/ihksanblny" target="_blank" rel="noopener noreferrer" className="text-text-muted hover:text-primary text-3xl transition-colors"><FaLinkedin /></a>
            <a href="mailto:ihksan.mail@gmail.com" className="text-text-muted hover:text-primary text-3xl transition-colors"><FaEnvelope /></a>
          </div>
          <a
            href="#projects"
            className="inline-block bg-primary text-dark-bg font-bold py-3 px-8 rounded-full hover:bg-primary-dark transition-all duration-300 transform hover:scale-105"
          >
            View My Work
          </a>
        </motion.div>
      </div>
    </section>
  );
}