import { useEffect } from "react";

const Experience = () => {
    useEffect(() => {
        const items = document.querySelectorAll(".timeline-item");

        const showVisible = () => {
            items.forEach((item) => {
                const rect = item.getBoundingClientRect();
                if (rect.top < window.innerHeight && rect.bottom >= 0) {
                    item.classList.add("show");
                }
            });
        };

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("show");
                    }
                });
            },
            { threshold: 0.3 }
        );

        items.forEach((item) => observer.observe(item));

        showVisible();

        return () => observer.disconnect();
    }, []);

    return (
        <section id="experience" className="experience">
            <h2>My Experience</h2>
            <div className="timeline">
                <div className="timeline-item">
                    <div className="content">
                        <h3>Graduated Bachelor Degree</h3>
                        <p><strong>2020 - 2024</strong><br />Tanjungpinang, Indonesia</p>
                        <p>I graduated in informatics engineering in 4 years. While there I developed an interest in programming, technology and solving problems.</p>
                    </div>
                    <div className="date">2024</div>
                </div>

                <div className="timeline-item right-align">
                    <div className="date">2023</div>
                    <div className="content">
                        <h3>Software Developer</h3>
                        <p><strong>2023</strong><br />Tanjungpinang, Indonesia</p>
                        <p>I completed my college internship, which was to create a web-based inventory system in Ternak Ayam Pak Asun.</p>
                    </div>
                </div>

                <div className="timeline-item">
                    <div className="content">
                        <h3>Graduated Bangkit Academy 2024 H1</h3>
                        <p><strong>2024</strong><br />Jakarta, Indonesia</p>
                        <p>I Graduated from Bangkit 2024 Cloud Computing program.</p>
                    </div>
                    <div className="date">2024</div>
                </div>
            </div>
        </section>
    );
};

export default Experience;
