import '../public/css/customColors.css';
import '../public/css/global.css';
import 'tailwindcss/tailwind.css';

import { BrowserView } from 'react-device-detect';
import { ThemeProvider } from 'next-themes';
import { useEffect, useState } from 'react';

import dynamic from 'next/dynamic';
import NProgress from 'nprogress';
import Router from 'next/router';
import Head from 'next/head';

import Loading from '../components/static/Loading';
import ConsoleLog from '../components/static/ConsoleLog';
import Header from '../components/static/Header';
import Footer from '../components/static/Footer';

NProgress.configure({ showSpinner: false })
Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

const ScrollButton = dynamic(() => import('../components/static/ScrollButton'), {
    ssr: false,
});

const CursorEffects = dynamic(() => import('../components/static/CursorEffects'), {
    ssr: false,
});

export default function App({ Component, pageProps }) {
    ConsoleLog();

    const NavItems = [
        {
            link: true,
            name: 'Accueil',
            href: '/',
        },
        {
            link: true,
            name: 'Fonctionnalités',
            href: '#features',
        },
    ];

    const [isLoading, setIsLoading] = useState(true);
    const [fadeOut, setFadeOut] = useState(false);

    useEffect(() => {
        const onPageLoad = () => {
            setFadeOut(true);
            setTimeout(() => setIsLoading(false), 500);
        };

        if (document.readyState === 'complete') onPageLoad();
        else {
            window.addEventListener('load', onPageLoad, false);
            return () => window.removeEventListener('load', onPageLoad);
        }
    }, []);
    
    return (
        <ThemeProvider defaultTheme='blurple'>
            <Head>
                <title>Disbot</title>
            </Head>
            <div className='relative min-h-screen'>
                {isLoading && Loading(fadeOut)}

                <main className={`absolute inset-0 px-5 max-w-7xl mx-auto transition-opacity duration-500 ease-in-out ${isLoading ? 'opacity-0' : 'opacity-100'}`}>
                    <Header NavItems={NavItems}/>
                    <div className='px-5 lg:px-0'>
                        <Component {...pageProps}/>
                    </div>
                    <Footer/>
                </main>
                <BrowserView>
                    <CursorEffects/>
                </BrowserView>
                {!isLoading && <ScrollButton/>}
            </div>
        </ThemeProvider>
    );
};