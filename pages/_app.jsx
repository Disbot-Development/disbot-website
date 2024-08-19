import '../public/css/global.css';
import '../public/css/tippy.css';
import '../public/css/customColors.css';
import 'tailwindcss/tailwind.css';

import { ThemeProvider } from 'next-themes';
import { BrowserView } from 'react-device-detect';

import NProgress from 'nprogress';
import Router from 'next/router';
import Head from 'next/head';

import Header from '../components/static/Header.jsx';
import Footer from '../components/static/Footer.jsx';
import CursorEffects from '../components/static/CursorEffects.jsx';
import ScrollButton from '../components/static/ScrollButton.jsx';

Router.onRouteChangeStart = () => NProgress.start();
Router.onRouteChangeComplete = () => NProgress.done();
Router.onRouteChangeError = () => NProgress.done();

export default function App({ Component, pageProps }) {
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
        }
    ];

    return (
        <ThemeProvider defaultTheme='blurple'>
            <Head>
                <title>Disbot</title>
            </Head>
            <main className='absolute inset-0 px-5 max-w-7xl mx-auto'>
                <Header NavItems={NavItems}/>
                <div className='px-5 lg:px-0'>
                    <Component {...pageProps}/>
                </div>
                <Footer/>
            </main>
            <BrowserView>
                <CursorEffects/>
            </BrowserView>
            <ScrollButton/>
        </ThemeProvider>
    );
}