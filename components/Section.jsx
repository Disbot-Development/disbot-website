import dynamic from 'next/dynamic';
import Image from 'next/image';

const ScrollReveal = dynamic(() => import('../components/static/ScrollReveal'), {
    ssr: false
});

export default function Section({ id, title, text, imgSrc, reverse }) {
    return (
        <div id={id} className={`py-20 mt-32 lg:mt-20 mx-auto flex items-center w-full justify-center lg:justify-between ${reverse ? 'lg:flex-row-reverse' : ''}`}>
            <div className='relative lg:static lg:flex lg:items-center'>
                <div className='absolute inset-0 flex justify-center items-center lg:hidden'>
                    <div className='w-[200px] lg:w-[300px] h-[200px] lg:h-[300px] bg-blurple-100/40 rounded-full blur-[100px] -z-50'></div>
                </div>
                <ScrollReveal>
                    <div className='flex items-center justify-center lg:justify-start'>
                        <div className='flex-shrink-0 mr-2 lg:hidden'>
                            <Image src={imgSrc} alt={title} width={50} height={50}/>
                        </div>
                        <p className='text-4xl font-extrabold text-white text-center lg:text-left'>
                            {title}
                        </p>
                    </div>
                    <p className='mt-5 text-xl text-white text-opacity-50 max-w-md text-center lg:text-left'>{text}</p>
                </ScrollReveal>
            </div>
            <div className='hidden lg:block w-[300px] h-[300px] bg-blurple-100/40 rounded-full mx-8 blur-[100px] -z-50'></div>
            <ScrollReveal>
                <div className='hidden lg:block'>
                    <Image src={imgSrc} alt={title} width={230} height={230} />
                </div>
            </ScrollReveal>
        </div>
    );
};
