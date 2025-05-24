// src/App.jsx

// Impor komponen-komponen yang telah kita desain ulang untuk tema gelap
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/skills';
import Contact from './components/contact';
import Footer from './components/footer';
import My3DScene from './components/My3DScene'; // Pastikan path ini benar

// Ganti data di bawah ini dengan informasi proyek Anda
const portfolioProjects = [
  {
    title: "SkillMatch Landing Page",
    description: "A landing page for SkillMatch, a platform connecting learners with mentors and professionals.",
    image: "/skillmatch1.png", // Ganti dengan path gambar Anda. Contoh: /images/project-1.png
    tags: ['React', 'Tailwind CSS', 'Vite'],
    repoUrl: "https://github.com/ihksanblny/SkillMatch-New", // Ganti dengan URL repo Anda
    liveUrl: "#", // Ganti dengan URL demo live jika ada
  },
  {
    title: "Deploy ML Model with Flask",
    description: "A project deploying a machine learning model using Flask.",
    image: "/gcp.png", // Ganti dengan path gambar Anda
    tags: ['Google Cloud Console', 'Flask', 'Docker'],
    repoUrl: "https://github.com/ihksanblny/Deploy-Model",
    liveUrl: "#",
  },
];

export default function App() {
  return (
    <div className="relative"> {/* Tambahkan relative di sini */}
      {/* 3D Scene sebagai background global */}
      <div className="fixed top-0 left-0 w-full h-full z-[-1]"> {/* z-[-1] agar di belakang semua */}
        <My3DScene />
      </div>

      {/* Konten utama aplikasi */}
      <div className="relative z-[1]"> {/* Konten harus punya z-index lebih tinggi */}
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
    </div>
  );
}

