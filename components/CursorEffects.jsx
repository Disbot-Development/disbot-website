import React, { useState, useEffect } from 'react';

const CursorEffects = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [hoveringLink, setHoveringLink] = useState(false);

    const circleDiameter = 25;
    const bubbleWidth = 60;
    const bubbleHeight = 30;

    const handleMouseMove = (e) => {
        setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e) => {
        if (e.target.tagName === 'A') {
            setHoveringLink(true);
        }
    };

    const handleMouseOut = (e) => {
        if (e.target.tagName === 'A') {
            setHoveringLink(false);
        }
    };

    useEffect(() => {
        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('mouseover', handleMouseOver);
        window.addEventListener('mouseout', handleMouseOut);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('mouseover', handleMouseOver);
            window.removeEventListener('mouseout', handleMouseOut);
        };
    }, []);

    const circleStyle = {
        position: 'fixed',
        top: 0,
        left: 0,
        width: hoveringLink ? `${bubbleWidth}px` : `${circleDiameter}px`,
        height: hoveringLink ? `${bubbleHeight}px` : `${circleDiameter}px`,
        backgroundColor: 'var(--600-50)',
        transition: 'transform 0.2s ease-out, width 0.3s ease-out, height 0.3s ease-out',
        transform: `translate(${position.x - (hoveringLink ? bubbleWidth / 2 : circleDiameter / 2)}px, ${
            position.y - (hoveringLink ? bubbleHeight + 10 : circleDiameter / 2)}px)`, // Ajustez la position ici
        backdropFilter: 'blur(2px)',
        borderRadius: hoveringLink ? '10px' : '50%',
        pointerEvents: 'none',
        zIndex: 9999,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: '#FFFFFF',
        fontSize: '14px',
        fontWeight: 'bold',
        opacity: 1,
    };

    return (
        <div style={circleStyle}>
            {hoveringLink && <span style={{ whiteSpace: 'nowrap' }}>Clique</span>}
        </div>
    );
};

export default CursorEffects;