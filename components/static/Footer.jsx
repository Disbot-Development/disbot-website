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
                setUserCount(data.users);
            } catch (error) {
                console.error('Failed to fetch user count:', error);
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
                            <div className='flex items-center space-x-5'>
                                <img src='/img/logo2.png' className='rounded-full w-12' />
                                <p className='font-semibold text-xl text-white'>Disbot</p>
                            </div>
                        </div>
                        <div className='col-span-1'>
                            <p className='text-white font-medium mt-3 sm:mt-0 sm:mb-3'>Liens</p>
                            <div>
                                <a href='https://discord.gg/YPW3ZNuKW5' target='_blank' className='text-white/50 hover:text-white hover:underline transform duration-200'>
                                    Support
                                </a>
                            </div>
                            <div>
                                <a href='https://discord.com/oauth2/authorize?client_id=1233606057507422268' target='_blank' className='text-white/50 hover:text-white hover:underline transform duration-200'>
                                    Inviter
                                </a>
                            </div>
                            <div>
                                <a href='https://api.dis-bot.xyz/routes' target='_blank' className='text-white/50 hover:text-white hover:underline transform duration-200'>
                                    API
                                </a>
                            </div>
                        </div>
                        <div className='col-span-1'>
                            <p className='text-white font-medium mt-3 sm:mt-0 sm:mb-3'>Réseaux</p>
                            <div>
                                <Link href='https://discord.gg/YPW3ZNuKW5' rel='noopener noreferrer'>
                                    <a className='text-white/50 hover:text-white hover:underline transform duration-200'>
                                    <i className={`fa-brands fa-discord`} /> Discord 
                                    </a>
                                </Link>
                            </div>
                            <div>
                                <Link href='https://github.com/disbot-development' rel='noopener noreferrer'>
                                    <a className='text-white/50 hover:text-white hover:underline transform duration-200'>
                                    <i className={`fa-brands fa-github`} /> GitHub 
                                    </a>
                                </Link>
                            </div>
                        </div>
                        <div className='col-span-1'>
                            <p className='text-white font-medium mt-3 sm:mt-0 sm:mb-3'>Important</p>
                            <div>
                                <Link href='/tos'>
                                    <a className='text-white/50 hover:text-white hover:underline transform duration-200'>
                                        Conditions d'utilisation
                                    </a>
                                </Link>
                            </div>
                            <div>
                                <Link href='/privacy'>
                                    <a className='text-white/50 hover:text-white hover:underline transform duration-200'>
                                        Politique de confidentialité
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
                            {userCount ? (
                                <p className='text-xs text-green-400'>
                                    Disbot a {userCount.toLocaleString()} utilisateurs
                                </p>
                            ) : (
                                <p className='text-xs text-white text-opacity-50'>
                                    Chargement des utilisateurs...
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
