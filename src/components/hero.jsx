// src/components/Hero.jsx
export default function Hero() {
  return (
    <section id="hero"className="bg-gradient-to-r from-gray-900 via-blue-900 to-black text-white text-center py-40">
      <h2 className="text-4xl font-bold mb-4 animate__animated animate__fadeIn">Welcome to My Portfolio</h2>
      <p className="text-xl mb-8 animate__animated animate__fadeIn animate__delay-1s">
        I am a passionate developer who loves building modern web applications.
      </p>
      <button
        onClick={()=>{
          const contactSection = document.getElementById('contact');
          if(contactSection) contactSection.scrollIntoView({ behavior: 'smooth' });
        }}
          className="px-6 py-3 bg-white text-blue-800 font-semibold rounded-full hover:bg-gray-200 transition-all duration-300">
        Get in Touch
      </button>
    </section>
  );
}
