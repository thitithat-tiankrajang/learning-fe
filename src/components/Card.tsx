import Image from 'next/image';
import InteractiveCard from './InteractiveCard';

export default function Card({
    venueName, imgSrc 
}: { 
    venueName: string, imgSrc: string
}) {
    return (
        <InteractiveCard>
            <div className='w-full h-[70%] relative rounded-t-lg'>
                <Image src={imgSrc}
                alt='Event Vanue Picture'
                fill={true}
                className='object-cover rounded-t-lg'
                />
            </div>
            <div className='text-amber-800 font-medium text-lg h-[30%] p-2.5 bg-white'>
                <div>{venueName}</div>
            </div>
        </InteractiveCard>
    );
}