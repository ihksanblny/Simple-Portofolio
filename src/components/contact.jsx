import { motion } from 'framer-motion';

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

export default function Contact() {
  return (
    <SectionWrapper id="contact" title="Get In Touch">
      <div className="max-w-2xl mx-auto text-center">
        <p className="text-text-muted mb-8">
          Have a project in mind or just want to say hello? My inbox is always open.
          I'll get back to you as soon as possible!
        </p>
        <a
          href="mailto:ihksanbalany@gmail.com"
          className="inline-block bg-primary text-dark-bg font-bold py-3 px-8 rounded-full hover:bg-primary-dark transition-all duration-300 transform hover:scale-105 shadow-glow"
        >
          Say Hello
        </a>
      </div>
    </SectionWrapper>
  );
}