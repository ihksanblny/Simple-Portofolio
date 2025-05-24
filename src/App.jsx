// src/App.jsx

// Impor komponen-komponen yang telah kita desain ulang untuk tema gelap
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/skills';
import Contact from './components/contact';
import Footer from './components/Footer';

// Ganti data di bawah ini dengan informasi proyek Anda
const portfolioProjects = [
  {
    title: "Modern Portfolio Website",
    description: "A sleek, dark-mode personal portfolio built with React, Tailwind CSS, and Framer Motion.",
    image: "/ihksan.jpeg", // Ganti dengan path gambar Anda. Contoh: /images/project-1.png
    tags: ['React', 'Tailwind CSS', 'Framer Motion'],
    repoUrl: "https://github.com/ihksanblny/Simple-Portofolio", // Ganti dengan URL repo Anda
    liveUrl: "#", // Ganti dengan URL demo live jika ada
  },
  {
    title: "Project Example 2",
    description: "Description for your second project. Explain the technology and your role.",
    image: "/ihksan.jpeg", // Ganti dengan path gambar Anda
    tags: ['React', 'Node.js', 'Express.js'],
    repoUrl: "#",
    liveUrl: "#",
  },
];

function App() {
  return (
    // PERHATIKAN: Div utama ini sekarang sudah benar.
    // Tidak ada kelas 'bg-gray-50', sehingga latar belakang gelap dari index.css
    // bisa ditampilkan dengan benar.
    <div>
      <Header />
      <main>
        <Hero />
        <About />
        <Projects projects={portfolioProjects} />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
