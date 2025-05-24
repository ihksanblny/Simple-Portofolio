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
          Hello, I'm Ihksan. The world of web development has always captivated me, starting from a simple question, 'how does all this work?' to what has now become an unquenchable passion. I find great satisfaction in creating intuitive and dynamic user experiences, especially with React on the frontend. However, behind the scenes, I'm also a backend enthusiast. I'm currently diving deep into Flask and have become quite comfortable building APIs with Express.js. Laravel has also been a companion in several projects. Beyond that, I've ventured into the cloud, becoming familiar with Firebase and even directly interacting with the Google Cloud Console for a project. For me, every line of code is an opportunity to learn and innovate, whether I'm sipping coffee at my favorite cafe or lost in the pages of a good book.
        </p>
      </div>
    </SectionWrapper>
  );
}