import { useState, useEffect, useRef } from 'react';

const CursorFollower = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const circleRef = useRef(null);

    const diameter = 25;

    const handleMouseMove = (e) => {
        setPosition({ x: e.clientX, y: e.clientY });
    };

    useEffect(() => {
        const updateCirclePosition = () => {
            requestAnimationFrame(updateCirclePosition);
        };

        window.addEventListener('mousemove', handleMouseMove);
        requestAnimationFrame(updateCirclePosition);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, [position]);

    return (
        <div
            ref={circleRef}
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: `${diameter}px`,
                height: `${diameter}px`,
                backgroundColor: 'var(--600-50)',
                transition: 'transform 0.2s ease-out',
                transform: `translate(${position.x - diameter / 2}px, ${position.y - diameter / 2}px)`,
                backdropFilter: 'blur(2px)',
                borderRadius: '50%',
                pointerEvents: 'none',
                zIndex: 9999
            }}
        />
    );
};

export default CursorFollower;