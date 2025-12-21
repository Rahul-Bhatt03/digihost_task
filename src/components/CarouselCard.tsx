import LearnMoreButton from "./LearnMoreButton";

interface CarouselCardProps {
    id: number;
    logo: string;
    imageUrl: string;
    description: string;
    isCenter?: boolean;
    isMobile?: boolean;
}

export const CarouselCard = ({ logo, imageUrl, description, isCenter, isMobile }: CarouselCardProps) => {
    if (isMobile) {

        return (
            <div className="relative w-full h-[500px]  overflow-hidden shadow-2xl">

                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: `url(${imageUrl})` }}
                >
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                </div>

                <div className="relative h-full flex flex-col justify-end p-6">

                    <div className="mb-6">
                        <img src={logo} alt="Logo" className="h-12 w-auto object-contain" />
                    </div>

                    <p className="text-white font-inria-serif font-bold text-xl leading-[130%] mb-8">
                        {description}
                    </p>

                    <div className="mb-6">
                        <LearnMoreButton
                            variant="white"
                            children="Learn More >>"
                            className="w-full justify-center"
                        />
                    </div>


                    <div className="flex justify-center gap-2 mb-4">
                        <div className="w-2 h-2 rounded-full bg-white/40"></div>
                        <div className="w-2 h-2 rounded-full bg-white/40"></div>
                        <div className="w-2 h-2 rounded-full bg-white"></div>
                        <div className="w-2 h-2 rounded-full bg-white/40"></div>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div
            className={`
                flex flex-col items-center bg-white shadow-lg p-6 
                transition-all duration-500 ease-in-out relative
                ${isCenter
                    ? 'w-80 sm:w-96 md:w-[36rem] h-[380px] sm:h-[430px] scale-105 sm:scale-110 z-20 opacity-100 shadow-2xl'
                    : 'w-72 sm:w-80 md:w-[44rem] h-[250px] sm:h-[280px] scale-90 opacity-60 sm:opacity-60'
                }
            `}
            style={{
                backgroundImage: `url(${imageUrl})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
            }}
        >

            <div className={`absolute inset-0 rounded-xl ${isCenter ? 'bg-black/30' : 'bg-black/40'}`}></div>

            <div className={`relative ${isCenter ? 'mb-8 mt-8' : 'mb-4 mt-4'} lg:-translate-x-55 lg:translate-y-55 w-25 flex justify-center`}>
                <img src={logo} alt="Logo" className="h-10 sm:h-12 md:h-15 object-contain" />
            </div>

            <p className={`
                relative text-white font-inria-serif font-bold lg:-translate-x-5 lg:translate-y-55
                ${isCenter
                    ? 'text-lg sm:text-xl md:text-[24px] px-4'
                    : 'text-base sm:text-lg md:text-xl px-2'
                } 
                leading-[130%] text-center
                mt-4 sm:mt-8
            `}>
                {description}
            </p>

            <div className={`relative lg:-translate-x-50 lg:translate-y-60 ${isCenter ? 'mt-8 sm:mt-12' : 'mt-4 sm:mt-6'}`}>
                <LearnMoreButton
                    variant="white"
                    size={isCenter ? "lg" : "md"}
                    children="Learn More >>"
                />
            </div>
        </div>
    )
}