import { useState, useEffect } from 'react';

export default function CursorEffects() {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [hoveringLink, setHoveringLink] = useState(false);

    const circleDiameter = 25;
    const hoveringCircleDiameter = 50;

    const littleCircleDiameter = 7;
    const hoveringLittleCircleDiameter = 4;

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
        width: hoveringLink ? `${hoveringCircleDiameter}px` : `${circleDiameter}px`,
        height: hoveringLink ? `${hoveringCircleDiameter}px` : `${circleDiameter}px`,
        backgroundColor: 'rgba(255, 255, 255, 0.3)',
        boxShadow: '0 0 10px rgba(0, 0, 0, 0.25)',
        transition: 'transform 0.1s ease-out, width 0.1s ease-out, height 0.1s ease-out',
        transform: `translate(${position.x - (hoveringLink ? hoveringCircleDiameter / 2 : circleDiameter / 2)}px, ${position.y - (hoveringLink ? hoveringCircleDiameter / 2 : circleDiameter / 2)}px)`,
        backdropFilter: 'blur(3px)',
        borderRadius: '50%',
        pointerEvents: 'none',
        zIndex: 9999,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    };

    const littleCircle = {
        position: 'fixed',
        width: hoveringLink ? `${hoveringLittleCircleDiameter}px` : `${littleCircleDiameter}px`,
        height: hoveringLink ? `${hoveringLittleCircleDiameter}px` : `${littleCircleDiameter}px`,
        backgroundColor: 'rgba(255, 255, 255, 0.8)',
        boxShadow: '0 0 10px rgba(0, 0, 0, 0.5)',
        transition: 'width 0.3s ease-out, height 0.3s ease-out',
        transform: `translate(${position.x - (hoveringLink ? hoveringLittleCircleDiameter / 2 : littleCircleDiameter / 2)}px, ${position.y - (hoveringLink ? hoveringLittleCircleDiameter / 2 : littleCircleDiameter / 2)}px)`,
        backdropFilter: 'blur(3px)',
        borderRadius: '50%',
        pointerEvents: 'none',
        zIndex: 10000,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    };

    return (
        <>
            <div style={circleStyle}></div>
            <div style={littleCircle}></div>
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
