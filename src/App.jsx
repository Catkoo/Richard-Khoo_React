import './index.css';
import { useEffect } from "react";
import RevealWrapper from './components/RevealWrapper';
import AnimatedBackground from './components/AnimatedBackground';

import Navbar from './components/Navbar';
import Home from './sections/Home';
import About from './sections/About';
import Projects from './sections/Projects';
import Skills from './sections/Skills';
import Certificate from "./sections/Certificate";
import Experience from './sections/Experience';
import Contact from './sections/Contact';
import Maintenance from './components/Maintenance';

function App() {
  const isMaintenance = import.meta.env.VITE_MAINTENANCE === "true";

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  if (isMaintenance) return <Maintenance />;

  return (
    <>
      <AnimatedBackground />
      <header>
        <Navbar />
      </header>

      <main>
        <RevealWrapper><Home /></RevealWrapper>
        <RevealWrapper><About /></RevealWrapper>
        <RevealWrapper><Projects /></RevealWrapper>
        <RevealWrapper><Skills /></RevealWrapper>
        <RevealWrapper><Certificate /></RevealWrapper>
        <RevealWrapper><Experience /></RevealWrapper>
        <RevealWrapper><Contact /></RevealWrapper>
      </main>

      <footer className="footer">
        <p>© {new Date().getFullYear()} Richard Khoo — Designed & built using React and Vercel.</p>
      </footer>
    </>
  );
}

export default App;
