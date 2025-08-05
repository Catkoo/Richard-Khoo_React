import { FaHtml5, FaCss3Alt, FaJs, FaPhp, FaReact, FaNodeJs } from 'react-icons/fa';
import { SiFirebase, SiExpress, SiGooglecloud, SiFigma, SiFlutter } from 'react-icons/si';

const Skills = () => {
    const skills = [
        { icon: <FaHtml5 />, name: "HTML" },
        { icon: <FaCss3Alt />, name: "CSS3" },
        { icon: <FaJs />, name: "JavaScript" },
        { icon: <FaPhp />, name: "PHP" },
        { icon: <SiFigma />, name: "UI/UX Design" },
        { icon: <FaReact />, name: "React Native" },
        { icon: <SiFirebase />, name: "Firebase" },
        { icon: <FaNodeJs />, name: "Node JS" },
        { icon: <SiExpress />, name: "Express JS" },
        { icon: <FaJs />, name: "Rest API" },
        { icon: <SiGooglecloud />, name: "Google Cloud" },
        { icon: <SiFlutter />, name: "Flutter" },
    ];

    return (
        <section id="skills" className="skills">
            <h2>My Skills</h2>
            <div className="skills-list">
                {skills.map((skill, index) => (
                    <div className="skill-item" key={index}>
                        <span style={{ marginRight: '8px' }}>{skill.icon}</span>
                        {skill.name}
                    </div>
                ))}
            </div>
        </section>
    );
};
export default Skills; 