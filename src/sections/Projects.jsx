const Projects = () => {
    return (
        <section id="projects" className="projects">
            <div className="container-projects">
                <h2>Projects</h2>
                <p>Showcasing my latest software and design projects.</p>

                <div className="project-grid">
                    {/* Project 1 */}
                    <a href="https://github.com/Catkoo/ChiliCare" className="project-link" target="_blank" rel="noopener noreferrer">
                        <div className="project">
                            <div className="project-info">
                                <h3>ChiliCare</h3>
                                <p>Detecting chili diseases using the ESP-32 Cam Camera Using AI</p>
                                <div className="tags">
                                    <span>React Native</span>
                                    <span>ESP-32 Cam</span>
                                    <span>IoT</span>
                                </div>
                            </div>
                            <div className="github-icon">
                                <img src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" alt="GitHub" />
                            </div>
                        </div>
                    </a>

                    {/* Project 2 */}
                    <a href="https://github.com/Catkoo/Ternak" className="project-link" target="_blank" rel="noopener noreferrer">
                        <div className="project">
                            <div className="project-info">
                                <h3>Inventory Ternak Ayam</h3>
                                <p>
                                    Inventory website with incoming and outgoing goods, reports, and role-based access
                                    for users and admins.
                                </p>
                                <div className="tags">
                                    <span>MySQL</span>
                                    <span>Bootstrap</span>
                                </div>
                            </div>
                            <div className="github-icon">
                                <img src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" alt="GitHub" />
                            </div>
                        </div>
                    </a>

                    {/* Project 3 */}
                    <a href="https://github.com/ArgoTrack-Bangkit/Cloud-Computing" className="project-link" target="_blank" rel="noopener noreferrer">
                        <div className="project">
                            <div className="project-info">
                                <h3>ArgoTrack Backend</h3>
                                <p>ArgoTrack helps tomato farmers monitor and optimize crop health using smart technology, enabling better productivity and efficient farming decisions.</p>
                                <div className="tags">
                                    <span>Express.js</span>
                                    <span>Firebase</span>
                                    <span>Javascript</span>
                                </div>
                            </div>
                            <div className="github-icon">
                                <img src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" alt="GitHub" />
                            </div>
                        </div>
                    </a>

                    {/* Project 4 */}
                    <a href="https://github.com/Catkoo/MyNotePlus_Flutter" className="project-link" target="_blank" rel="noopener noreferrer">
                        <div className="project">
                            <div className="project-info">
                                <h3>MyNoteApp</h3>
                                <p>A modern, lightweight, and practical app for managing personal notes and film/drama watchlists. Built with Flutter & Firebase.</p>
                                <div className="tags">
                                    <span>Flutter</span>
                                    <span>Firebase</span>
                                    <span>Provider</span>
                                </div>
                            </div>
                            <div className="github-icon">
                                <img src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" alt="GitHub" />
                            </div>
                        </div>
                    </a>

                    {/* Project 5 - Figma Design */}
                    <a href="https://www.figma.com/design/hC4bHLvkGAJc08BbcSXvx4/JAYA-STORE?node-id=0-1&p=f&t=GJCR34mh4K2mKlv8-0" className="project-link" target="_blank" rel="noopener noreferrer">
                        <div className="project">
                            <div className="project-info">
                                <h3>Jaya Store UI</h3>
                                <p>
                                    E-commerce app UI for electronics — includes login, catalog, cart & profile screens.
                                </p>
                                <div className="tags">
                                    <span>Figma</span>
                                    <span>UI/UX</span>
                                </div>
                            </div>
                            <div className="github-icon">
                                <img src="/images/figma.png" alt="Figma" />
                            </div>
                        </div>
                    </a>

                </div>
            </div>
        </section>
    );
};

export default Projects;
