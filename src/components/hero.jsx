import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center text-center">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <img
            src="/ihksan.jpg" // GANTI DENGAN FOTO ANDA
            alt="Ihksan"
            className="w-40 h-40 rounded-full mx-auto mb-6 border-4 border-primary shadow-glow"
          />
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-3">
            Hi, I'm Ihksan
          </h1>
          <h2 className="text-2xl md:text-3xl text-text-light mb-6">
            <TypeAnimation
              sequence={[
                'A Frontend Developer',
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
            <a href="#" target="_blank" rel="noopener noreferrer" className="text-text-muted hover:text-primary text-3xl transition-colors"><FaLinkedin /></a>
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