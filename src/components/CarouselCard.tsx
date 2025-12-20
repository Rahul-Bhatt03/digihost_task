import LearnMoreButton from "./LearnMoreButton";

interface CarouselCardProps {
    id: number;
    logo: string;
    imageUrl: string;
    description: string;
    isCenter?: boolean;
}

export const CarouselCard = ({ logo, imageUrl, description, isCenter }: CarouselCardProps) => {
    return (
        <div
            className={`
        flex flex-col items-center bg-white shadow-lg  p-6
        transition-all duration-500 ease-in-out
        ${isCenter
                    ? 'w-96 md:w-[36rem] h-[430px] scale-110 z-20 opacity-100  '
                    : 'w-80 md:w-[44rem] h-[280px] scale-90 opacity-60 '
                }
      `}
            style={{
                backgroundImage: `url(${imageUrl})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
            }}
        >
            <div className="mb-4 md:translate-y-50 -translate-x-55 ">
                <img src={logo} alt="Logo" className="w-30 h-15 object-contain" />
            </div>
            <p className=" text-white font-inria-serif font-bold text-[24px] leading-[120%] tracking-[0%] md:translate-y-50 md:translate-y-50 md:translate-x-2">
                {description}
            </p>
            <div className="md:translate-y-55 -translate-x-50">
                <LearnMoreButton children="Learn More >>" />
            </div>

        </div>
    )
}

