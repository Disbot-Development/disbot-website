import { useState, useRef, useEffect } from 'react';
import { useRouter } from 'next/router';

import Image from 'next/image';
import Link from 'next/link';

export default function Header({ NavItems }) {
    const router = useRouter();

    const [activeRect, setActiveRect] = useState(null);

    const navRef = useRef();

    useEffect(() => {
        const activeItem = navRef.current.querySelector('.active');

        if (activeItem) setActiveRect(activeItem.getBoundingClientRect());
    }, [router.asPath]);

    const handleMouseEnter = (index, event) => {
        setActiveRect(event.target.getBoundingClientRect());
    };

    const handleMouseLeave = () => {
        const activeItem = navRef.current.querySelector('.active');

        if (activeItem) setActiveRect(activeItem.getBoundingClientRect());
        else setActiveRect(null);
    };

    return (
        <>
            <header>
                <div className='max-w-7xl mx-auto py-5 flex items-center justify-between'>
                    <div className='flex items-center space-x-6'>
                        <div className='flex items-center space-x-3'>
                            <a href='/' className='rounded-full hover:scale-110 transition-all duration-300 ease-in-out'>
                                <Image width={48} height={48} src='/imgs/logo2.png' alt='Disbot Logo'/>
                            </a>
                        </div>
                        <ul ref={navRef} className='hidden lg:flex items-center space-x-4 relative'>
                            <span className={`absolute py-4 px-4 rounded-xl bg-blurple-100 transition-all duration-300 ease-in-out`} style={{
                                width: activeRect ? `${activeRect.width}px` : 0,
                                height: activeRect ? `${activeRect.height}px` : 0,
                                transform: activeRect ? `translateX(${activeRect.left - navRef.current.getBoundingClientRect().left}px)` : 'translateX(0)',
                            }}></span>
                            {NavItems.filter((a) => a.link).map((item, itemIndex) => {
                                return (
                                    <li key={itemIndex} onMouseEnter={(e) => handleMouseEnter(itemIndex, e)} onMouseLeave={handleMouseLeave} className={`relative ${!itemIndex ? 'active' : ''}`}>
                                        <Link href={item.href}>
                                            <a className={`relative z-10 px-4 font-medium transition-all duration-300 ease-in-out ${!itemIndex ? 'text-white' : 'text-white/75 hover:text-white'}`}>
                                                {item.name}
                                            </a>
                                        </Link>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                    <div className='flex items-center space-x-6 relative'>
                        <Link href='https://discord.gg/YPW3ZNuKW5'>
                            <a className='group overflow-hidden relative w-28 h-11 bg-gray-600/50 text-white rounded-xl font-medium cursor-pointer z-10 flex items-center justify-center'>
                                Support
                                <span className='absolute w-36 h-32 -top-8 -left-2 bg-white rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-all group-hover:duration-500 duration-1000 origin-left'></span>
                                <span className='absolute w-36 h-32 -top-8 -left-2 bg-gray-400 rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-all group-hover:duration-700 duration-700 origin-left'></span>
                                <span className='absolute w-36 h-32 -top-8 -left-2 bg-gray-500 rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-all group-hover:duration-1000 duration-500 origin-left'></span>
                                <span className='group-hover:opacity-100 group-hover:duration-1000 duration-100 opacity-0 absolute left-1/2 transform -translate-x-1/2 z-10'>
                                    Rejoindre
                                </span>
                            </a>
                        </Link>
                        <Link href='https://discord.com/oauth2/authorize?client_id=1233606057507422268'>
                            <a className='group overflow-hidden relative w-28 h-11 bg-blurple-100/50 text-white rounded-xl font-medium cursor-pointer z-10 flex items-center justify-center'>
                                Inviter
                                <span className='absolute w-36 h-32 -top-8 -left-2 bg-white rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-all group-hover:duration-500 duration-1000 origin-left'></span>
                                <span className='absolute w-36 h-32 -top-8 -left-2 bg-blurple-100/70 rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-all group-hover:duration-700 duration-700 origin-left'></span>
                                <span className='absolute w-36 h-32 -top-8 -left-2 bg-blurple-100 rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-all group-hover:duration-1000 duration-500 origin-left'></span>
                                <span className='group-hover:opacity-100 group-hover:duration-1000 duration-100 opacity-0 absolute left-1/2 transform -translate-x-1/2 z-10'>
                                    Découvrir
                                </span>
                            </a>
                        </Link>
                    </div>
                </div>
            </header>
        </>
    );
};