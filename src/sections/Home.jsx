import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const Home = () => {
    const textArray = ["Backend Developer", "Web Developer", "UI/UX Designer"];
    const [currentText, setCurrentText] = useState(textArray[0]);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentText(prev => {
                const currentIndex = textArray.indexOf(prev);
                const nextIndex = (currentIndex + 1) % textArray.length;
                return textArray[nextIndex];
            });
        }, 2000);

        return () => clearInterval(interval);
    }, []);

    return (
        <motion.section
            id="home"
            className="home"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
        >
            <div className="home-content">
                <h1 className="main-title">
                    Hi, I'm <span>Richard Khoo</span>
                </h1>
                <p className="yellow-text">{currentText}</p>
                <p className="intro">
                    Solving problems and creating seamless digital experiences with every project.
                    Let's make technology work for you!
                </p>
                <p className="social-intro">Let’s connect:</p>
                <div className="social-media">
                    <a href="https://www.instagram.com/catkoo_/" target="_blank">
                        <img src="/images/IG.png" alt="Instagram" className="social-icon" />
                    </a>
                    <a href="https://www.linkedin.com/in/catkoo/" target="_blank">
                        <img src="/images/linkedin.png" alt="LinkedIn" className="social-icon" />
                    </a>
                    <a href="https://github.com/Catkoo" target="_blank">
                        <img src="/images/github.png" alt="GitHub" className="social-icon" />
                    </a>
                    <a href="https://x.com/Catkoo_" target="_blank">
                        <img src="/images/X.png" alt="X" className="social-icon" />
                    </a>
                </div>
                <div className="cta-buttons">
                    <a href="/cv/CV - Richard Khoo.pdf" download>
                        <button className="btn secondary">Download My CV</button>
                    </a>
                    <a href="#contact">
                        <button className="btn secondary">Contact By Email</button>
                    </a>
                </div>
            </div>

            <div className="home-image">
                <img src="/images/foto.jpg" alt="Profile Image" />
            </div>
        </motion.section>
    );
};

export default Home;
  