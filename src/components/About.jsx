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


export default function About() {
  return (
    <SectionWrapper id="about" title="About Me">
      <div className="text-center max-w-3xl mx-auto">
        <p className="text-text-muted text-lg leading-relaxed">
          Hello! I'm Ihksan, a passionate frontend developer with a keen eye for design and a love for creating intuitive, dynamic user experiences. My journey into web development started with a simple curiosity for how things work on the internet, which has since grown into a full-fledged passion.
          <br /><br />
          I specialize in React and its ecosystem, and I'm always eager to learn new technologies to build better and faster applications. When I'm not coding, you can find me exploring new coffee shops or diving into a good book.
        </p>
      </div>
    </SectionWrapper>
  );
}