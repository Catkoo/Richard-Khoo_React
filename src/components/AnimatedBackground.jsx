import { useEffect, useState } from 'react';
import { FaCircle, FaStar } from 'react-icons/fa';
import './AnimatedBackground.css';

const AnimatedBackground = () => {
    const [dots, setDots] = useState([]);
    const [meteors, setMeteors] = useState([]);

    useEffect(() => {
        const newDots = Array.from({ length: 50 }, () => ({
            top: Math.random() * 100 + '%',
            left: Math.random() * 100 + '%',
        }));
        setDots(newDots);
    }, []);

    useEffect(() => {
        let timeout;

        const spawnSingleMeteorAcak = () => {
            const id = Date.now();
            const fromLeft = Math.random() > 0.5;
            const direction = fromLeft ? 'left' : 'right';

            setMeteors((prev) => [
                ...prev,
                {
                    id,
                    top: '-10%',
                    left: direction === 'left' ? '100%' : '-10%',
                    direction,
                },
            ]);

            setTimeout(() => {
                setMeteors((prev) => prev.filter((m) => m.id !== id));
            }, 9000);

            timeout = setTimeout(spawnSingleMeteorAcak, 5000);
        };

        timeout = setTimeout(spawnSingleMeteorAcak, 2000);

        return () => clearTimeout(timeout);
    }, []);

    return (
        <div className="animated-background">
            {dots.map((dot, index) => (
                <span
                    key={`dot-${index}`}
                    className="dot"
                    style={{ top: dot.top, left: dot.left }}
                />
            ))}
            {meteors.map((meteor) => (
                <span
                    key={meteor.id}
                    className={`meteor ${meteor.direction}`}
                    style={{ top: meteor.top, left: meteor.left }}
                >
                    <span className="meteor-tail" data-direction={meteor.direction}></span>
                    <FaStar className="meteor-icon" />
                </span>
            ))}
        </div>
    );
};

export default AnimatedBackground;
