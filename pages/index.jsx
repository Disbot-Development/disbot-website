import { useEffect, useState } from 'react';
import { isBrowser } from 'react-device-detect';

import Link from 'next/link';

export default function Landing() {
    const [isBrowserView, setIsBrowserView] = useState(false);
    const [guilds, setGuilds] = useState(null);

    useEffect(() => {
        if (isBrowser) setIsBrowserView(true);
    }, []);

    useEffect(() => {
        async function fetchUserCount() {
            try {
                const response = await fetch('/api/guilds');
                if (!response.ok) throw new Error('Network response was not ok');

                const data = await response.json();
                setGuilds(Object.values(data));
            } catch (error) {
                console.error('Failed to fetch guilds:', error);
            };
        };

        fetchUserCount();
    }, []);

    return (
        <>
            {isBrowserView && (
                <div
                className='rounded-full absolute bg-blurple-600/40 -z-50
                    lg:left-[-525px] lg:top-[280px] lg:h-[750px] lg:w-[750px] lg:blur-[150px]
                '
                />
            )}
            
            {isBrowserView && (
                <div
                    className='rounded-full absolute bg-blurple-600/40 -z-50
                        lg:right-[-700px] lg:top-[480px] lg:h-[750px] lg:w-[750px] lg:blur-[150px]
                    '
                />
            )}

            <div className='py-20 mt-20 mb-30 mx-auto'>
                <div className='flex justify-center items-center w-full lg:justify-between'>
                    <div>
                        <p className='text-6xl font-extrabold text-white text-center lg:text-left'>
                            Disbot
                        </p>
                        <p className='mt-5 text-2xl text-white text-opacity-50 max-w-md text-center lg:text-left'>
                            Le meilleur bot de protection pour votre serveur
                        </p>
                        <div className='mt-5 flex flex-wrap items-center gap-x-4 justify-center lg:justify-start'>
                            <Link href={'https://discord.com/oauth2/authorize?client_id=1233606057507422268'}>
                                <a className='group overflow-hidden relative w-32 h-12 bg-blurple-600/50 text-white rounded-xl font-medium cursor-pointer z-10 flex items-center justify-center'>
                                    Inviter
                                        <span className='absolute w-36 h-32 -top-8 -left-2 bg-white rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-500 duration-1000 origin-left'></span>
                                        <span className='absolute w-36 h-32 -top-8 -left-2 bg-blurple-600/70 rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-700 duration-700 origin-left'></span>
                                        <span className='absolute w-36 h-32 -top-8 -left-2 bg-blurple-600 rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-1000 duration-500 origin-left'></span>
                                    <span className='group-hover:opacity-100 group-hover:duration-1000 duration-100 opacity-0 absolute left-1/2 transform -translate-x-1/2 z-10'>
                                        Découvrir
                                    </span>
                                </a>
                            </Link>
                            <div className='py-10'></div>
                            <Link href={'#features'}>
                                <a className='group overflow-hidden relative w-44 h-12 bg-gray-600/50 text-white rounded-xl font-medium cursor-pointer z-10 flex items-center justify-center'>
                                    Fonctionnalités
                                        <span className='absolute w-36 h-36 -top-16 -left-2 bg-white rotate-12 transform scale-x-0 group-hover:scale-x-150 transition-transform group-hover:duration-500 duration-1000 origin-left'></span>
                                        <span className='absolute w-36 h-36 -top-16 -left-2 bg-gray-400 rotate-12 transform scale-x-0 group-hover:scale-x-150 transition-transform group-hover:duration-700 duration-700 origin-left'></span>
                                        <span className='absolute w-36 h-36 -top-16 -left-2 bg-gray-500 rotate-12 transform scale-x-0 group-hover:scale-x-150 transition-transform group-hover:duration-1000 duration-500 origin-left'></span>
                                    <span className='group-hover:opacity-100 group-hover:duration-1000 duration-100 opacity-0 absolute left-1/2 transform -translate-x-1/2 z-10'>
                                        Fonctionnalités
                                    </span>
                                </a>
                            </Link>
                        </div>
                    </div>
                    <img className='hidden lg:block' width='420' src='/img/bck.png'/>
                </div>
            </div>

            <div className='h-60 w-full mt-20 rounded-3xl bg-[#212121] flex items-center justify-center'>
                {guilds ? (
                    <p className='mx-20 text-2xl font-semibold text-white'>
                        Disbot est fiable et est sur {new Intl.NumberFormat('en-US', { maximumFractionDigits: 1, notation: 'compact', compactDisplay: 'short' }).format(guilds.length)}+ serveurs
                    </p>
                ) : (
                    <p className='mx-20 text-2xl font-semibold text-white text-opacity-50'>
                        ...
                    </p>
                )}
                {guilds ? (
                    guilds.sort((a, b) => b.memberCount - a.memberCount).slice(0, 3).map((guild, index, array) => (
                        <div key={index} className={`hidden lg:flex flex-col items-center ${index === array.length - 1 ? 'ml-10 mr-20' : 'mx-10'}`} >
                            <img className='w-28 rounded-full' src={guild.avatarURL} alt={`Image ${guild.avatarURL}`} />
                            <p className='text-base font-semibold text-white text-center text-opacity-50 mt-2'>
                                {guild.name}
                            </p>
                        </div>
                    ))
                ) : (
                    <p className='mx-20 text-2xl font-semibold text-white text-opacity-50'>
                        ...
                    </p>
                )}
            </div>

            <div id='features' className='py-20 mt-20 lg:mt-40 mx-auto flex items-center w-full justify-center lg:justify-between lg:flex-row-reverse'>
                <div>
                    <p className='text-4xl font-extrabold text-white text-center lg:text-left'>
                        Optimisé
                    </p>
                    <p className='mt-5 text-xl text-white text-opacity-50 max-w-md text-center lg:text-left'>
                        Disbot est optimisé afin de réagir le plus rapidement possible. Cela est notamment possible grâce à notre VPS hébergé par OVH.
                    </p>
                </div>
                <div className='hidden lg:block w-[300px] h-[300px] bg-blurple-600/40 rounded-full mx-8 blur-[100px] -z-50'></div>
                <img className='hidden lg:block' width='230' src='/img/feature1.png'/>
            </div>

            <div className='py-20 lg:mt-20 mx-auto flex items-center w-full justify-center lg:justify-between'>
                <div>
                    <p className='text-4xl font-extrabold text-white text-center lg:text-left'>
                        Sécurité
                    </p>
                    <p className='mt-5 text-xl text-white text-opacity-50 max-w-md text-center lg:text-left'>
                        Disbot possède actuellement les systèmes de sécurités les plus avancés. Bien qu'ils soient open source (code libre d'accès), nous pouvons assurer la sécurité de vos serveurs.
                    </p>
                </div>
                <div className='hidden lg:block w-[300px] h-[300px] bg-blurple-600/40 rounded-full mx-8 blur-[100px] -z-50'></div>
                <img className='hidden lg:block' width='230' src='/img/feature2.png'/>
            </div>

            <div className='py-20 lg:mt-20 mx-auto flex items-center w-full justify-center lg:justify-between lg:flex-row-reverse'>
                <div>
                    <p className='text-4xl font-extrabold text-white text-center lg:text-left'>
                        Modération
                    </p>
                    <p className='mt-5 text-xl text-white text-opacity-50 max-w-md text-center lg:text-left'>
                        Disbot est l'un des meilleurs pour modérer votre serveur. Il utilise les dernières fonctionnalités que Discord propose tout en restant intuitif et rapide.
                    </p>
                </div>
                <div className='hidden lg:block w-[300px] h-[300px] bg-blurple-600/40 rounded-full mx-8 blur-[100px] -z-50'></div>
                <img className='hidden lg:block' width='230' src='/img/feature3.png'/>
            </div>

            <div className='py-20 lg:mt-20 mx-auto flex items-center w-full justify-center lg:justify-between'>
                <div>
                    <p className='text-4xl font-extrabold text-white text-center lg:text-left'>
                        Support
                    </p>
                    <p className='mt-5 text-xl text-white text-opacity-50 max-w-md text-center lg:text-left'>
                        Nous proposons une équipe support rapide, réactive et informée. Si vous souhaitez nous solliciter, rendez-vous sur notre serveur support.
                    </p>
                </div>
                <div className='hidden lg:block w-[300px] h-[300px] bg-blurple-600/40 rounded-full mx-8 blur-[100px] -z-50'></div>
                <img className='hidden lg:block' width='230' src='/img/feature4.png'/>
            </div>

            <div className='flex items-center justify-center'>
                <div className='h-60 w-[800px] mt-20 rounded-3xl border-2 border-blurple-600 bg-blurple-600/10 flex flex-col items-center justify-center'>
                    {guilds ? (
                        <p className='mx-20 text-2xl text-white text-center'>
                            Protégez votre serveur tout en gardant les yeux fermés
                        </p>
                    ) : (
                        <p className='mx-20 text-2xl font-semibold text-white text-opacity-50 text-center'>
                            ...
                        </p>
                    )}
                    <Link href={'https://discord.com/oauth2/authorize?client_id=1233606057507422268'}>
                        <a className='mt-5 group overflow-hidden relative w-32 h-12 bg-blurple-600/50 text-white rounded-xl font-medium cursor-pointer z-10 flex items-center justify-center'>
                            Inviter
                                <span className='absolute w-36 h-32 -top-8 -left-2 bg-white rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-500 duration-1000 origin-left'></span>
                                <span className='absolute w-36 h-32 -top-8 -left-2 bg-blurple-600/70 rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-700 duration-700 origin-left'></span>
                                <span className='absolute w-36 h-32 -top-8 -left-2 bg-blurple-600 rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-1000 duration-500 origin-left'></span>
                            <span className='group-hover:opacity-100 group-hover:duration-1000 duration-100 opacity-0 absolute left-1/2 transform -translate-x-1/2 z-10'>
                                Découvrir
                            </span>
                        </a>
                    </Link>
                </div>
            </div>
        </>
    );
};