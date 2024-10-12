export default function Loading(fadeOut) {
    return (
        <div className={`fixed inset-0 flex space-x-2 justify-center items-center transition-opacity duration-500 ease-in-out ${fadeOut ? 'opacity-0' : 'opacity-100'}`}>
            <div className='h-8 w-8 bg-blurple-100 rounded-full animate-[bounce_1s_ease-in-out_-0.3s_infinite]'></div>
            <div className='h-8 w-8 bg-blurple-100 rounded-full animate-[bounce_1s_ease-in-out_-0.15s_infinite]'></div>
            <div className='h-8 w-8 bg-blurple-100 rounded-full animate-[bounce_1s_ease-in-out_infinite]'></div>
        </div>
    );
};