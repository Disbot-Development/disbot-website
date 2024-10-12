import { useRouter } from 'next/router';

import Image from 'next/image';
import Head from 'next/head';

export default function ErrorPage({ code, message }) {
    const router = useRouter();
    
    return (
        <>
            <Head>
                <title>{code} | Disbot</title>
            </Head>

            <div className='max-w-7xl text-center py-60 mx-auto'>
                <div className='flex w-full justify-center mb-12'>
                    <Image src='/imgs/bck2.png' alt='?' width={200} height={200}/>
                </div>
                <h1 className='text-4xl font-extrabold text-white'>{code}</h1>
                <p className='text-xl font-thin text-white text-opacity-75'>{message}</p>
                <button type='button' className='bg-blurple-100 text-center w-72 rounded-2xl h-14 relative font-medium text-white group mt-2' onClick={() => router.back()}>
                    <div className='bg-blurple-100 rounded-xl h-12 w-1/4 flex items-center justify-center absolute left-1 top-[4px] group-hover:w-[275px] z-10 transition-all duration-300 ease-in-out'>
                        <svg width='25px' height='25px' viewBox='0 0 1024 1024' xmlns='http://www.w3.org/2000/svg'>
                            <path fill='#FFFFFF' d='M224 480h640a32 32 0 1 1 0 64H224a32 32 0 0 1 0-64z'></path>
                            <path fill='#FFFFFF' d='m237.248 512 265.408 265.344a32 32 0 0 1-45.312 45.312l-288-288a32 32 0 0 1 0-45.312l288-288a32 32 0 1 1 45.312 45.312L237.248 512z'></path>
                        </svg>
                    </div>
                    <p className='translate-x-8 text-white'>
                        Retourner en arrière
                    </p>
                </button>
            </div>
        </>
    );
};