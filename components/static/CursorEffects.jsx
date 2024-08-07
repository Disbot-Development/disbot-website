import React, { useState, useEffect } from 'react';

export default function CursorEffects() {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [hoveringLink, setHoveringLink] = useState(false);

    const circleDiameter = 25;
    const bubbleWidth = 60;
    const bubbleHeight = 30;

    const handleMouseMove = (e) => {
        setPosition({ x: e.clientX, y: e.clientY });
    };

    useEffect(() => {
        const links = document.querySelectorAll('a, button, .cursor-pointer');

        const handleMouseOver = () => {
            setHoveringLink(true);
        };

        const handleMouseOut = () => {
            setHoveringLink(false);
        };

        window.addEventListener('mousemove', handleMouseMove);
        links.forEach((link) => {
            link.addEventListener('mouseover', handleMouseOver);
            link.addEventListener('mouseout', handleMouseOut);
        });

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            links.forEach((link) => {
                link.removeEventListener('mouseover', handleMouseOver);
                link.removeEventListener('mouseout', handleMouseOut);
            });
        };
    }, []);

    const circleStyle = {
        position: 'fixed',
        width: hoveringLink ? `${bubbleWidth}px` : `${circleDiameter}px`,
        height: hoveringLink ? `${bubbleHeight}px` : `${circleDiameter}px`,
        backgroundColor: 'var(--600-50)',
        transition: 'transform 0.06s ease-out, width 0.3s ease-out, height 0.3s ease-out',
        transform: `translate(${position.x - (hoveringLink ? bubbleWidth / 2 : circleDiameter / 2)}px, ${
            position.y - (hoveringLink ? bubbleHeight + 10 : circleDiameter / 2)}px)`,
        backdropFilter: 'blur(2px)',
        borderRadius: hoveringLink ? '10px' : '50%',
        pointerEvents: 'none',
        zIndex: 9999,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    };

    const textStyle = {
        whiteSpace: 'nowrap',
        opacity: hoveringLink ? 1 : 0,
        transition: 'opacity 0.4s ease-out',
        visibility: hoveringLink ? 'visible' : 'hidden',
        fontSize: '14px',
        fontWeight: 'bold',
        color: '#FFFFFF'
    };

    return (
        <>
            <div style={circleStyle}>
                <span style={textStyle}>
                    Clique
                </span>
            </div>
            <style jsx global>{`
                * {
                    cursor: none !important;
                }
                a, button, .cursor-pointer {
                    cursor: none !important;
                }
            `}</style>
        </>
    );
};