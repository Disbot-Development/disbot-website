import { isBrowser } from 'react-device-detect';
import { useEffect, useState } from 'react';

import dynamic from 'next/dynamic';
import Image from 'next/image';
import Link from 'next/link';

import Section from '../components/Section';

const ScrollReveal = dynamic(() => import('../components/static/ScrollReveal'), {
    ssr: false
});

export default function Landing() {
    const [isBrowserView, setIsBrowserView] = useState(false);
    const [guilds, setGuilds] = useState([]);

    useEffect(() => {
        if (isBrowser) setIsBrowserView(true);
    }, []);

    useEffect(() => {
        async function fetchGuilds() {
            try {
                const response = await fetch('https://api.dis-bot.xyz/guilds');
                if (!response.ok) throw new Error('Network response was not ok');
                
                const data = await response.json();
                setGuilds(Object.values(data));
                localStorage.setItem('cache.guilds', JSON.stringify(Object.values(data)));
            } catch {
                const cachedGuilds = localStorage.getItem('cache.guilds');
                if (cachedGuilds) setGuilds(JSON.parse(cachedGuilds));
            };
        };

        fetchGuilds();
    }, []);

    return (
        <>
            {isBrowserView && (
                <>
                    <div className='rounded-full absolute bg-blurple-100/40 -z-50 lg:left-[-525px] lg:top-[280px] lg:h-[750px] lg:w-[750px] lg:blur-[150px]'/>
                    <div className='rounded-full absolute bg-blurple-100/40 -z-50 lg:right-[-700px] lg:top-[480px] lg:h-[750px] lg:w-[750px] lg:blur-[150px]'/>
                </>
            )}

            <div className='mt-40 mx-auto'>
                <div className='flex justify-center items-center w-full lg:justify-between'>
                    <div>
                        <p className='text-6xl font-extrabold text-white text-center lg:text-left'>
                            Disbot
                        </p>
                        <p className='mt-5 text-2xl text-white text-opacity-50 max-w-md text-center lg:text-left'>
                            Le meilleur bot de protection pour votre serveur
                        </p>
                        <div className='mt-5 flex flex-wrap items-center gap-x-4 justify-center lg:justify-start'>
                            <Link href='https://discord.com/oauth2/authorize?client_id=1233606057507422268'>
                                <a className='group overflow-hidden relative w-32 h-12 bg-blurple-100/50 text-white rounded-xl font-medium cursor-pointer z-10 flex items-center justify-center'>
                                    Inviter
                                        <span className='absolute w-36 h-32 -top-8 -left-2 bg-white rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-all group-hover:duration-500 duration-1000 origin-left'></span>
                                        <span className='absolute w-36 h-32 -top-8 -left-2 bg-blurple-100/70 rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-all group-hover:duration-700 duration-700 origin-left'></span>
                                        <span className='absolute w-36 h-32 -top-8 -left-2 bg-blurple-100 rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-all group-hover:duration-1000 duration-500 origin-left'></span>
                                    <span className='group-hover:opacity-100 group-hover:duration-1000 duration-100 opacity-0 absolute left-1/2 transform -translate-x-1/2 z-10'>
                                        Découvrir
                                    </span>
                                </a>
                            </Link>
                            <div className='py-10'></div>
                            <Link href='#features'>
                                <a className='group overflow-hidden relative w-44 h-12 bg-gray-600/50 text-white rounded-xl font-medium cursor-pointer z-10 flex items-center justify-center'>
                                    Fonctionnalités
                                        <span className='absolute w-36 h-36 -top-16 -left-2 bg-white rotate-12 transform scale-x-0 group-hover:scale-x-150 transition-all group-hover:duration-500 duration-1000 origin-left'></span>
                                        <span className='absolute w-36 h-36 -top-16 -left-2 bg-gray-400 rotate-12 transform scale-x-0 group-hover:scale-x-150 transition-all group-hover:duration-700 duration-700 origin-left'></span>
                                        <span className='absolute w-36 h-36 -top-16 -left-2 bg-gray-500 rotate-12 transform scale-x-0 group-hover:scale-x-150 transition-all group-hover:duration-1000 duration-500 origin-left'></span>
                                    <span className='group-hover:opacity-100 group-hover:duration-1000 duration-100 opacity-0 absolute left-1/2 transform -translate-x-1/2 z-10'>
                                        Fonctionnalités
                                    </span>
                                </a>
                            </Link>
                        </div>
                    </div>
                    <div className='hidden lg:block'>
                        <Image width={420} height={420} src='/imgs/bck.png' alt='Disbot Logo' priority/>
                    </div>
                </div>
            </div>

            <div className='flex items-center justify-center mt-10 lg:mt-0'>
                <a href='#features' className='animate-bounce'>
                    <Image width={32} height={32} src='/imgs/arrow.svg' alt='Scroll Arrow' priority unoptimized/>
                </a>
            </div>

            <div className='h-60 w-full mt-24 rounded-3xl bg-[#212121] flex items-center justify-center'>
                {guilds.length ? (
                    <p className='mx-20 text-2xl font-semibold text-white'>
                        Disbot est fiable et est sur {new Intl.NumberFormat('en-US', { maximumFractionDigits: 1, notation: 'compact', compactDisplay: 'short' }).format(guilds.length)}+ serveurs
                    </p>
                ) : (
                    <p className='mx-20 text-2xl font-semibold text-white text-opacity-50'>
                        ...
                    </p>
                )}
                {guilds.length > 0 ? (
                    guilds.sort((a, b) => b.memberCount - a.memberCount).slice(0, 3).map((guild, index, array) => (
                        <div key={index} className={`hidden lg:flex flex-col items-center ${index === array.length - 1 ? 'ml-10 mr-20' : 'mx-10'}`}>
                            <Image className='w-28 rounded-full' src={guild.avatarURL} alt={`Image ${guild.avatarURL}`} width={112} height={112} priority/>
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

            <Section
                id='features'
                title='Optimisé'
                text='Disbot est optimisé afin de réagir le plus rapidement possible. Cela est notamment possible grâce à notre VPS hébergé par OVH.'
                imgSrc='/imgs/feature1.png'
                reverse
            />

            <Section
                title='Sécurité'
                text="Disbot possède actuellement les systèmes de sécurité les plus avancés. Bien qu'ils soient open source, il peut assurer la sécurité de vos serveurs."
                imgSrc='/imgs/feature2.png'
            />

            <Section
                title='Modération'
                text="Disbot est l'un des meilleurs pour modérer votre serveur. Il utilise les dernières fonctionnalités que Discord propose tout en restant intuitif et rapide."
                imgSrc='/imgs/feature3.png'
                reverse
            />

            <Section
                title='Support'
                text='Nous proposons une équipe support rapide, réactive et informée. Si vous souhaitez nous solliciter, rendez-vous sur notre serveur support.'
                imgSrc='/imgs/feature4.png'
            />

            <ScrollReveal>
                <div className='flex items-center justify-center'>
                    <div className='h-60 w-[800px] mt-20 rounded-3xl border-2 border-blurple-100 bg-blurple-100/10 flex flex-col items-center justify-center'>
                        <p className='mx-20 sm:text-2xl text-white text-center text-base'>
                            Protégez votre serveur tout en gardant les yeux fermés
                        </p>
                        <Link href='https://discord.com/oauth2/authorize?client_id=1233606057507422268'>
                            <a className='mt-5 group overflow-hidden relative bg-blurple-100/50 text-white rounded-xl font-medium cursor-pointer z-10 flex items-center justify-center w-28 h-8 sm:w-32 sm:h-12'>
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
            </ScrollReveal>
        </>
    );
};