import RevealWrapper from "../components/RevealWrapper"; 

const projectData = [
    {
        title: "ChiliCare",
        desc: "Detecting chili diseases using the ESP-32 Cam Camera Using AI",
        tags: ["React Native", "ESP-32 Cam", "IoT"],
        icon: "github",
        link: "https://github.com/Catkoo/ChiliCare",
    },
    {
        title: "Inventory Ternak Ayam",
        desc: "Inventory website with incoming and outgoing goods, reports, and role-based access for users and admins.",
        tags: ["MySQL", "Bootstrap"],
        icon: "github",
        link: "https://github.com/Catkoo/Ternak",
    },
    {
        title: "ArgoTrack Backend",
        desc: "ArgoTrack helps tomato farmers monitor and optimize crop health using smart technology, enabling better productivity and efficient farming decisions.",
        tags: ["Express.js", "Firebase", "Javascript"],
        icon: "github",
        link: "https://github.com/ArgoTrack-Bangkit/Cloud-Computing",
    },
    {
        title: "MyNoteApp",
        desc: "A modern, lightweight, and practical app for managing personal notes and film/drama watchlists. Built with Flutter & Firebase.",
        tags: ["Flutter", "Firebase", "Provider"],
        icon: "github",
        link: "https://github.com/Catkoo/MyNotePlus_Flutter",
    },
    {
        title: "Jaya Store UI",
        desc: "E-commerce app UI for electronics — includes login, catalog, cart & profile screens.",
        tags: ["Figma", "UI/UX"],
        icon: "figma",
        link: "https://www.figma.com/design/hC4bHLvkGAJc08BbcSXvx4/JAYA-STORE?node-id=0-1&p=f&t=GJCR34mh4K2mKlv8-0",
    },
];

const Projects = () => {
    return (
        <section id="projects" className="projects">
            <div className="container-projects">
                <h2>Projects 🚀</h2>
                <p>Showcasing my latest software and design projects.</p>

                <div className="project-grid">
                    {projectData.map((project, i) => (
                        <a
                            href={project.link}
                            className="project-link"
                            target="_blank"
                            rel="noopener noreferrer"
                            key={i}
                        >
                            <RevealWrapper>
                                <div className="project">
                                    <div className="project-info">
                                        <h3>{project.title}</h3>
                                        <p>{project.desc}</p>
                                        <div className="tags">
                                            {project.tags.map((tag, idx) => (
                                                <span key={idx}>{tag}</span>
                                            ))}
                                        </div>
                                    </div>
                                    <div className="github-icon">
                                        {project.icon === "github" ? (
                                            <img
                                                src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
                                                alt="GitHub"
                                            />
                                        ) : (
                                            <img src="/images/figma.png" alt="Figma" />
                                        )}
                                    </div>
                                </div>
                            </RevealWrapper>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
