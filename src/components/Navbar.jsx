import { useState } from "react";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const handleLinkClick = () => setIsOpen(false);
    const toggleMenu = () => setIsOpen(!isOpen);

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
                <li><a href="#home" onClick={handleLinkClick}>Home</a></li>
                <li><a href="#about" onClick={handleLinkClick}>About</a></li>
                <li><a href="#projects" onClick={handleLinkClick}>Projects</a></li>
                <li><a href="#skills" onClick={handleLinkClick}>Skills</a></li>
                <li><a href="#certificates" onClick={handleLinkClick}>Certificates</a></li>
                <li><a href="#experience" onClick={handleLinkClick}>Experience</a></li>
                <li><a href="#contact" onClick={handleLinkClick}>Contact</a></li>
            </ul>
        </nav>
    );
};

export default Navbar;
