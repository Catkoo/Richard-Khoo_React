import { useState } from "react";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const handleLinkClick = () => setIsOpen(false);

    return (
        <nav className="navbar">
            <div className="mobile-menu-label">
                <div className="hamburger" onClick={() => setIsOpen(!isOpen)}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <span className="menu-text">Menu</span>
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
