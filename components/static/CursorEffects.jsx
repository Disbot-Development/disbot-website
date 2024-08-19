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
        width: hoveringLink ? `${hoveringCircleDiameter}px` : `${circleDiameter}px`,
        height: hoveringLink ? `${hoveringCircleDiameter}px` : `${circleDiameter}px`,
        transform: `translate(${position.x - (hoveringLink ? hoveringCircleDiameter / 2 : circleDiameter / 2)}px, ${position.y - (hoveringLink ? hoveringCircleDiameter / 2 : circleDiameter / 2)}px)`,
    };

    const littleCircleStyle = {
        width: hoveringLink ? `${hoveringLittleCircleDiameter}px` : `${littleCircleDiameter}px`,
        height: hoveringLink ? `${hoveringLittleCircleDiameter}px` : `${littleCircleDiameter}px`,
        transform: `translate(${position.x - (hoveringLink ? hoveringLittleCircleDiameter / 2 : littleCircleDiameter / 2)}px, ${position.y - (hoveringLink ? hoveringLittleCircleDiameter / 2 : littleCircleDiameter / 2)}px)`,
    };

    return (
        <>
            <div style={circleStyle} className={`fixed bg-white/30 shadow-[0_0_10px_rgba(0,0,0,0.25)] rounded-full pointer-events-none z-[9999] flex items-center justify-center transition-[transform,width,height] duration-200 ease-out backdrop-blur-sm`}></div>
            <div style={littleCircleStyle} className={`fixed bg-white/80 shadow-[0_0_10px_rgba(0,0,0,0.5)] rounded-full pointer-events-none z-[10000] flex items-center justify-center transition-[width,height] duration-200 ease-out backdrop-blur-sm`}></div>
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
