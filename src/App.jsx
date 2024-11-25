// src/App.jsx
import Header from "./components/Header";
import Hero from "./components/Hero";
import PortfolioCard from "./components/PortofolioCard";
import Contact from "./components/contact";
import Footer from "./components/footer";

function App() {
  return (
    <div className="font-inter">
      <Header />
      <Hero />
      <div id="portfolio" className="container mx-auto py-20">
        <h2 className="text-3xl font-semibold text-center text-gray-800 mb-10">My Projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          <PortfolioCard
            title="Project 1"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            image="https://via.placeholder.com/400x300"
          />
          <PortfolioCard
            title="Project 2"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            image="https://via.placeholder.com/400x300"
          />
          <PortfolioCard
            title="Project 3"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            image="https://via.placeholder.com/400x300"
          />
        </div>
      </div>
      <section id="contact" className="py-16 bg-gray-50">
        <Contact />
      </section>
      <Footer />
    </div>
  );
}

export default App;
