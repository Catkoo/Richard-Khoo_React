import './index.css';
import { useEffect } from "react";
import RevealWrapper from './components/RevealWrapper';

import Navbar from './components/Navbar';
import Home from './sections/Home';
import About from './sections/About';
import Projects from './sections/Projects';
import Skills from './sections/Skills';
import Certificate from "./sections/Certificate";
import Experience from './sections/Experience';
import Contact from './sections/Contact';

function App() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <>
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
