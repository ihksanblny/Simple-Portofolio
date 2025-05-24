// src/components/PortfolioCard.jsx
import PropTypes from 'prop-types';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

export default function PortfolioCard({ title, description, image, tags = [], liveUrl, repoUrl }) {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden transform hover:scale-105 transition-all duration-300 ease-in-out flex flex-col">
      <img src={image} alt={title} className="w-full h-48 object-cover"/>
      <div className="p-6 flex-grow flex flex-col">
        <h3 className="text-2xl font-semibold text-gray-900">{title}</h3>
        <p className="mt-3 text-gray-700 flex-grow">{description}</p>
        <div className="mt-4">
          {tags.map((tag) => (
            <span key={tag} className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              {tag}
            </span>
          ))}
        </div>
        <div className="mt-auto pt-4 flex justify-end space-x-4">
          {liveUrl && (
            <a href={liveUrl} target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-500 transition-colors duration-300 text-2xl" aria-label="Live Demo">
              <FaExternalLinkAlt />
            </a>
          )}
          {repoUrl && (
            <a href={repoUrl} target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-500 transition-colors duration-300 text-2xl" aria-label="GitHub Repository">
              <FaGithub />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

PortfolioCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  tags: PropTypes.arrayOf(PropTypes.string),
  liveUrl: PropTypes.string,
  repoUrl: PropTypes.string,
};