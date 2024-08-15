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
                <svg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='currentColor' viewBox='0 0 16 16'>
                    <path d='M8 12a.5.5 0 0 0 .5-.5V5.707l2.146 2.147a.5.5 0 0 0 .708-.708l-3-3a.5.5 0 0 0-.708 0l-3 3a.5.5 0 1 0 .708.708L7.5 5.707V11.5a.5.5 0 0 0 .5.5'/>
                </svg>
            </a>
        </div>
    );
}
