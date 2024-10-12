import { useState, useEffect } from 'react';

export default function CursorEffects() {
    const [position, setPosition] = useState({ x: window.innerWidth / 2, y: window.innerHeight / 2 });
    const [hoveringLink, setHoveringLink] = useState(false);
    const [isCircleVisible, setIsCircleVisible] = useState(false);
    const [circleClassName, setCircleClassName] = useState('fixed bg-white/30 shadow-[0_0_10px_rgba(0,0,0,0.25)] rounded-full pointer-events-none z-[9999] flex items-center justify-center backdrop-blur-sm');

    const circleDiameter = hoveringLink ? 50 : 25;
    const littleCircleDiameter = hoveringLink ? 4 : 7;

    useEffect(() => {
        const links = document.querySelectorAll('a, button, .cursor-pointer');

        const handleMouseMove = (e) => {
            setPosition({ x: e.clientX, y: e.clientY });
            if (!isCircleVisible) setIsCircleVisible(true);

            setTimeout(() => setCircleClassName('fixed bg-white/30 shadow-[0_0_10px_rgba(0,0,0,0.25)] rounded-full pointer-events-none z-[9999] flex items-center justify-center backdrop-blur-sm transition-[transform,width,height] duration-200 ease-out'), 1);
        };

        const handleMouseOver = () => setHoveringLink(true);
        const handleMouseOut = () => setHoveringLink(false);

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
    }, [hoveringLink, isCircleVisible]);

    const circleStyle = {
        width: `${circleDiameter}px`,
        height: `${circleDiameter}px`,
        transform: `translate(${position.x - circleDiameter / 2}px, ${position.y - circleDiameter / 2}px)`,
        opacity: isCircleVisible && position.x && position.y ? 1 : 0
    };

    const littleCircleStyle = {
        width: `${littleCircleDiameter}px`,
        height: `${littleCircleDiameter}px`,
        transform: `translate(${position.x - littleCircleDiameter / 2}px, ${position.y - littleCircleDiameter / 2}px)`,
        opacity: isCircleVisible && position.x && position.y ? 1 : 0
    };

    return (
        <>
            <div style={circleStyle} className={circleClassName}></div>
            <div style={littleCircleStyle} className='fixed bg-white/80 shadow-[0_0_10px_rgba(0,0,0,0.5)] rounded-full pointer-events-none z-[10000] flex items-center justify-center transition-[width,height] duration-200 ease-out backdrop-blur-sm'></div>
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