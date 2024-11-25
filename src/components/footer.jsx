// src/components/Footer.jsx
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa"; // Import ikon

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-gray-900 via-blue-900 to-black text-white py-6">
      <div className="container mx-auto text-center">
        <p className="text-lg">&copy; 2024 My Portfolio</p>
        <div className="flex justify-center space-x-6 mt-4">
          {/* LinkedIn */}
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-500 transition-all duration-300 text-2xl"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>
          {/* GitHub */}
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-500 transition-all duration-300 text-2xl"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>
          {/* Email */}
          <a
            href="mailto:email@example.com"
            className="hover:text-blue-500 transition-all duration-300 text-2xl"
            aria-label="Email"
          >
            <FaEnvelope />
          </a>
        </div>
      </div>
    </footer>
  );
}
