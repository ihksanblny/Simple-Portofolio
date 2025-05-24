import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
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

const ProjectCard = ({ title, description, image, tags, repoUrl, liveUrl }) => {
  return (
    <motion.div
      className="bg-dark-surface rounded-lg overflow-hidden group"
      whileHover={{ y: -10, boxShadow: "0 20px 25px -5px rgba(0, 255, 204, 0.1), 0 10px 10px -5px rgba(0, 255, 204, 0.04)" }}
      transition={{ duration: 0.3 }}
    >
      <img src={image} alt={title} className="w-full h-48 object-cover group-hover:opacity-75 transition-opacity" />
      <div className="p-6">
        <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
        <p className="text-text-muted mb-4">{description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map(tag => (
            <span key={tag} className="bg-dark-bg text-primary text-xs font-bold px-3 py-1 rounded-full">{tag}</span>
          ))}
        </div>
        <div className="flex justify-end space-x-4">
          {repoUrl && <a href={repoUrl} className="text-text-muted hover:text-primary text-2xl"><FaGithub/></a>}
          {liveUrl && <a href={liveUrl} className="text-text-muted hover:text-primary text-2xl"><FaExternalLinkAlt/></a>}
        </div>
      </div>
    </motion.div>
  );
};


export default function Projects({ projects }) {
  return (
    <SectionWrapper id="projects" title="My Projects">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </SectionWrapper>
  );
}