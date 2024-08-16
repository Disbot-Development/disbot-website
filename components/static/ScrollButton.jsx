import { useState, useEffect } from 'react';

export default function ScrollButton() {
    const [showButton, setShowButton] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 100) {
                setShowButton(true);
            } else {
                setShowButton(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div>
            <a className={`fixed bottom-10 right-10 bg-blurple-600/70 text-white rounded-full p-4 shadow-lg hover:bg-blurple-600 transition-all duration-300 ease-in-out transform z-50 ${showButton ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`} onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                    <svg xmlns='http://www.w3.org/2000/svg' className='w-5 h-5 text-white' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
                        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M5 15l7-7 7 7'/>
                    </svg>
            </a>
        </div>
    );
}
