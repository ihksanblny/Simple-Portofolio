// src/components/PortfolioCard.jsx
import PropTypes from 'prop-types';

export default function PortfolioCard({ title, description, image }) {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden transform hover:scale-105 transition-all duration-300 ease-in-out">
      <img src={image} alt={title} className="w-full h-48 object-cover"/>
      <div className="p-6">
        <h3 className="text-2xl font-semibold text-black-900">{title}</h3>
        <p className="mt-3 text-black-900">{description}</p>
      </div>
    </div>
  );
}

// Menambahkan PropTypes untuk validasi properti
PortfolioCard.propTypes = {
  title: PropTypes.string.isRequired,        // 'title' harus berupa string dan wajib
  description: PropTypes.string.isRequired,  // 'description' harus berupa string dan wajib
  image: PropTypes.string.isRequired,        // 'image' harus berupa string dan wajib (URL atau path)
};

