// src/components/Header.jsx
export default function Header() {
  return (
    <header className="bg-white shadow-md fixed top-0 left-0 w-full z-50">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        <h1 className="text-3xl font-bold text-black-600">My Portfolio</h1>
        <nav>
          <ul className="flex space-x-6">
            <li><a href="#hero" className="text-black-600 hover:text-blue-500 transition-all duration-300">Home</a></li>
            <li><a href="#portfolio" className="text-black-600 hover:text-blue-500 transition-all duration-300">Portfolio</a></li>
            <li><a href="#contact" className="text-black-600 hover:text-blue-500 transition-all duration-300">Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
