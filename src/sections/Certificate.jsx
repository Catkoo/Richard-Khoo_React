const certificates = [
    {
        title: "Bangkit Academy Cloud Computing 2024",
        image: "/certificates/bangkit-cc.png",
        link: "https://www.linkedin.com/in/catkoo/overlay/experience/2343736106/multiple-media-viewer/?profileId=ACoAACrSB5QB9Q1xpTGmGrUR86wGDLkky9NQIFo&treasuryMediaId=1721220968924",
    },
];

const Certificate = () => {
    return (
        <section id="certificates" className="certificates">
            <h2>My Certificates 🥇</h2>
            <div className="certificate-grid">
                {certificates.map((cert, index) => (
                    <a
                        href={cert.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        key={index}
                        className="certificate-card"
                    >
                        <img src={cert.image} alt={cert.title} className="certificate-img" />
                        <p className="certificate-title">{cert.title}</p>
                    </a>
                ))}
            </div>
        </section>
    );
};

export default Certificate;
  