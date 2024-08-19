import { useState, useEffect } from 'react';

import Link from 'next/link';

export default function Footer() {
    const [userCount, setUserCount] = useState(null);

    useEffect(() => {
        async function fetchUserCount() {
            try {
                const response = await fetch('/api/users');
                if (!response.ok) throw new Error('Network response was not ok');

                const data = await response.json();
                setUserCount(data);
                localStorage.setItem('cache.userCount', JSON.stringify(data));
            } catch (error) {
                console.error('Failed to fetch user count:', error);
                if (localStorage.getItem('cache.userCount')) setUserCount(JSON.parse(localStorage.getItem('cache.userCount')));
            };
        };

        fetchUserCount();
    }, []);

    return (
        <>
            <footer className='py-10'>
                <div className='pt-10 mx-auto'>
                    <div className='lg:grid lg:grid-cols-6 gap-20'>
                        <div className='col-span-3'>
                            <div className='items-center space-x-5 hidden lg:flex'>
                                <img src='/img/bck.png' className='rounded-full w-[170px]'/>
                            </div>
                        </div>
                        <div className='col-span-1'>
                            <p className='text-white font-medium mt-3 sm:mt-0 sm:mb-3'>Liens</p>
                            <div className='mb-1'>
                                <a href='https://discord.gg/YPW3ZNuKW5' className='relative text-white/50 hover:text-white transform duration-300 group'>
                                    Support
                                    <span className='absolute -inset-x-1 bottom-0 h-[3px] bg-blurple-600 transition-all duration-300 ease-in-out group-hover:h-full -z-10'></span>
                                </a>
                            </div>
                            <div className='mb-1'>
                                <a href='https://discord.com/oauth2/authorize?client_id=1233606057507422268' className='relative text-white/50 hover:text-white transform duration-300 group'>
                                    Inviter
                                    <span className='absolute -inset-x-1 bottom-0 h-[3px] bg-blurple-600 transition-all duration-300 ease-in-out group-hover:h-full -z-10'></span>
                                </a>
                            </div>
                            <div className='mb-1'>
                                <a href='https://api.dis-bot.xyz/routes' className='relative text-white/50 hover:text-white transform duration-300 group'>
                                    Rest API
                                    <span className='absolute -inset-x-1 bottom-0 h-[3px] bg-blurple-600 transition-all duration-300 ease-in-out group-hover:h-full -z-10'></span>
                                </a>
                            </div>
                        </div>
                        <div className='col-span-1'>
                            <p className='text-white font-medium mt-3 sm:mt-0 sm:mb-3'>Réseaux</p>
                            <div className='mb-1'>
                            <Link href='https://discord.gg/YPW3ZNuKW5' rel='noopener noreferrer'>
                                <a className='relative text-white/50 hover:text-white transform duration-300 group'>
                                    <i className={`fa-brands fa-discord`}/> Discord
                                    <span className='absolute -inset-x-1 bottom-0 h-[3px] bg-blurple-600 transition-all duration-300 ease-in-out group-hover:h-full -z-10'></span>
                                </a>
                            </Link>
                            </div>
                            <div className='mb-1'>
                                <Link href='https://github.com/disbot-development' rel='noopener noreferrer'>
                                    <a className='relative text-white/50 hover:text-white transform duration-300 group'>
                                        <i className={`fa-brands fa-github`}/> GitHub 
                                        <span className='absolute -inset-x-1 bottom-0 h-[3px] bg-blurple-600 transition-all duration-300 ease-in-out group-hover:h-full -z-10'></span>
                                    </a>
                                </Link>
                            </div>
                        </div>
                        <div className='col-span-1'>
                            <p className='text-white font-medium mt-3 sm:mt-0 sm:mb-3'>Important</p>
                            <div className='mb-1'>
                                <Link href='/tos'>
                                    <a className='relative text-white/50 hover:text-white transform duration-300 group'>
                                        Conditions d'utilisation
                                        <span className='absolute -inset-x-1 bottom-0 h-[3px] bg-blurple-600 transition-all duration-300 ease-in-out group-hover:h-full -z-10'></span>
                                    </a>
                                </Link>
                            </div>
                            <div className='mb-1'>
                                <Link href='/privacy'>
                                    <a className='relative text-white/50 hover:text-white transform duration-300 group'>
                                        Politique de confidentialité
                                        <span className='absolute -inset-x-1 bottom-0 h-[3px] bg-blurple-600 transition-all duration-300 ease-in-out group-hover:h-full -z-10'></span>
                                    </a>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className='mt-10 grid content-center grid-cols-1 sm:grid-cols-2 md:grid-cols-3'>
                        <p className='text-white text-center sm:text-left text-opacity-50'>
                            Disbot &copy; {new Date().getFullYear()} - Tous droits réservés.
                        </p>
                        <div className='hidden md:flex items-center justify-center'>
                            {userCount !== null ? (
                                <p className='text-xs text-green-400'>
                                    Disbot a {userCount.toLocaleString()} utilisateurs
                                </p>
                            ) : (
                                <p className='text-xs text-red-400 text-opacity-50'>
                                    Erreur lors du chargement des utilisateurs
                                </p>
                            )}
                        </div>
                        <p className='text-white text-center sm:text-right text-opacity-50'>
                            {'Propulsé par Disbot Development'}
                        </p>
                    </div>
                </div>
            </footer>
        </>
    );
};
