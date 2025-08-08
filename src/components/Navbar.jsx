import { useEffect, useState } from "react";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [activeSection, setActiveSection] = useState("");

    const handleLinkClick = () => setIsOpen(false);
    const toggleMenu = () => setIsOpen(!isOpen);

    useEffect(() => {
        const sections = document.querySelectorAll("section[id]");
        const observerOptions = {
            root: null,
            rootMargin: "0px",
            threshold: 0.5, // 50% terlihat baru dianggap aktif
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    const id = entry.target.getAttribute("id");
                    setActiveSection(id);
                }
            });
        }, observerOptions);

        sections.forEach((section) => {
            observer.observe(section);
        });

        return () => {
            sections.forEach((section) => {
                observer.unobserve(section);
            });
        };
    }, []);

    return (
        <nav className="navbar">
            <div className="mobile-menu-label" onClick={toggleMenu}>
                <div className="hamburger">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <span className="menu-title">Menu</span>
            </div>

            <ul className={`menu ${isOpen ? "open" : ""}`}>
                <li><a href="#home" onClick={handleLinkClick} className={activeSection === "home" ? "active" : ""}>Home</a></li>
                <li><a href="#about" onClick={handleLinkClick} className={activeSection === "about" ? "active" : ""}>About</a></li>
                <li><a href="#projects" onClick={handleLinkClick} className={activeSection === "projects" ? "active" : ""}>Projects</a></li>
                <li><a href="#skills" onClick={handleLinkClick} className={activeSection === "skills" ? "active" : ""}>Skills</a></li>
                <li><a href="#certificates" onClick={handleLinkClick} className={activeSection === "certificates" ? "active" : ""}>Certificates</a></li>
                <li><a href="#experience" onClick={handleLinkClick} className={activeSection === "experience" ? "active" : ""}>Experience</a></li>
                <li><a href="#contact" onClick={handleLinkClick} className={activeSection === "contact" ? "active" : ""}>Contact</a></li>
            </ul>
        </nav>
    );
};

export default Navbar;
