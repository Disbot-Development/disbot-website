import { useState, useEffect } from 'react';

import Image from 'next/image';

export default function ScrollButton() {
    const [showButton, setShowButton] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 100) {
                setShowButton(true);
            } else {
                setShowButton(false);
            };
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <>
            <a className={`fixed bottom-10 right-10 bg-blurple-100/70 text-white rounded-full w-14 h-14 p-2 shadow-lg hover:bg-blurple-100 transition-all duration-300 ease-in-out transform z-50 flex items-center justify-center ${showButton ? 'translate-y-0' : 'translate-y-24'} backdrop-blur-sm`} href='#'>
                <Image width={24} height={24} src='/imgs/arrow2.svg' alt='Top Arrow' priority unoptimized />
            </a>
        </>
    );
};