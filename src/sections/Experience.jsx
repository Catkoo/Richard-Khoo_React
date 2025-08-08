import { useEffect } from "react";

const Experience = () => {
    useEffect(() => {
        const items = document.querySelectorAll(".timeline-item");

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("show");
                        observer.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.3 }
        );

        items.forEach((item) => observer.observe(item));

        return () => observer.disconnect();
    }, []);

    return (
        <section id="experience" className="experience">
            <h2>My Experience 💼</h2>
            <div className="timeline">
                <div className="timeline-item">
                    <div className="date">2020 - 2024</div>
                    <div className="icon">🎓</div>
                    <div className="content">
                        <h3>Graduated Bachelor Degree</h3>
                        <p>
                            <span className="mobile-date-only">2020 - 2024<br /></span>
                            Tanjungpinang, Indonesia
                        </p>
                        <br/>
                        <p>
                            I pursued a degree in Informatics Engineering and successfully
                            graduated within 4 years. Throughout my studies, I developed a
                            deep interest in programming, technology, and problem-solving,
                            which motivated me to continuously enhance my skills and knowledge.
                        </p>
                    </div>
                </div>

                <div className="timeline-item right-align">
                    <div className="date">2023</div>
                    <div className="icon">💼</div>
                    <div className="content">
                        <h3>Web Developer Intern</h3>
                        <p>
                            <span className="mobile-date-only">2023<br /></span>
                            Tanjungpinang, Indonesia</p>
                        <br/>
                        <p>
                            I completed my college internship, which was to create a web-based
                            inventory system in Ternak Ayam Pak Asun.
                        </p>
                    </div>
                </div>

                <div className="timeline-item">
                    <div className="date">2024</div>
                    <div className="icon">🎓</div>
                    <div className="content">
                        <h3>Graduated Bangkit Academy 2024 H1</h3>
                        <p>
                            <span className="mobile-date-only">2024<br /></span>
                            Jakarta, Indonesia</p>
                        <br/>
                        <p>
                            I graduated from Bangkit 2024 Cloud Computing program.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experience;
