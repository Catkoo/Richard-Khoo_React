import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import Tilt from "react-parallax-tilt";

const Home = () => {
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

                <p className="yellow-text">
                    <Typewriter
                        words={["Backend Developer", "Web Developer", "UI/UX Designer"]}
                        loop
                        cursor
                        cursorStyle="_"
                        typeSpeed={70}
                        deleteSpeed={50}
                        delaySpeed={2000}
                    />
                </p>

                <p className="intro">
                    Solving problems and creating seamless digital experiences with every project. Let's make technology work for you!
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
                        <img src="/images/X.png" alt="X" className="social-icon x-icon" />
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

            <Tilt
                glareEnable={true}
                glareMaxOpacity={0.15}
                glareColor="#facc15"
                glarePosition="all"
                tiltMaxAngleX={8}
                tiltMaxAngleY={8}
                className="tilt-box"
            >
                <div className="home-image">
                    <img src="/images/foto.jpg" alt="Profile Image" className="profile-image" />
                </div>
            </Tilt>
        </motion.section>
    );
};

export default Home;
