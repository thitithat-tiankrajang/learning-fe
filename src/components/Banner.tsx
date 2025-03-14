import Image from 'next/image';
export default function Banner() {
    return (
        <div className="relative w-screen h-[60vh] overflow-hidden">

            <Image 
                src="/img/EventVanueBanner.jpg" 
                alt="cover"
                fill
                priority
                className="object-cover"
            />
            
            <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-transparent"></div>

            <div className="absolute top-[100px] left-0 w-full text-center text-white z-10">
                <div className="text-2xl font-bold [text-shadow:2px_2px_0px_#1a1a1a]">
                    where every event finds its venue
                </div>
                <div className="pt-5 text-base sm:text-lg leading-relaxed [text-shadow:2px_2px_0px_#1a1a1a]">
                    Finding the perfect venue has never been easier.<br/> 
                    Whether it's a wedding, corporate event, or private party, we connect people to the perfect place.
                </div>
            </div>
        </div>
    );
}