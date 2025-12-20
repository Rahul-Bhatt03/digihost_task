import LearnMoreButton from "../components/LearnMoreButton";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import { CarouselCard } from "../components/CarouselCard";
import carouselbg from "../assets/carousebg.jpg";

import carousel1 from "../assets/carousel1.jpg";
import carousel2 from "../assets/carousel2.jpg";
import carousel3 from "../assets/carousel3.jpg";
import carousel4 from "../assets/carousebg.jpg";

import logo1 from "../assets/firstLogo.png";
import logo2 from "../assets/firstLogo.png";
import logo3 from "../assets/firstLogo.png";
import logo4 from "../assets/firstLogo.png";

export const CarouselPage = () => {
 const carouselData = [
  {
    id: 1,
    logo: logo1,
    imageUrl: carousel1,
    description: "The Samalkha plant was first established as a molasses-based distillery..."
  },
  {
    id: 2,
    logo: logo2,
    imageUrl: carousel2,
    description: "Paying our privilege forward and paving the way for stronger communities..."
  },
  {
    id: 3,
    logo: logo3,
    imageUrl: carousel3,
    description: "InShakti is an end to end solution provider for aspiring women entrepreneurs..."
  },
  {
    id: 4,
    logo: logo4,
    imageUrl: carousel4,
    description: "Quality, heritage, and excellence in every bottle through vocational skill training."
  }
];

  const [index, setIndex] = useState(0);

  const onLeftClick = () => {
    setIndex(index === 0 ? carouselData.length - 1 : index - 1);
  };

  const onRightClick = () => {
    setIndex(index === carouselData.length - 1 ? 0 : index + 1);
  };

  const getVisibleCards = () => {
    const prevIndex = index === 0 ? carouselData.length - 1 : index - 1;
    const nextIndex = index === carouselData.length - 1 ? 0 : index + 1;

    return [
      { data: carouselData[prevIndex], position: 'top', index: prevIndex },
      { data: carouselData[index], position: 'center', index: index },
      { data: carouselData[nextIndex], position: 'bottom', index: nextIndex }
    ];
  };

  return (
    <div 
  className="grid grid-cols-1 lg:grid-cols-2 min-h-screen bg-cover bg-center bg-no-repeat"
  style={{ backgroundImage: `url(${carouselbg})` }}
>
     {/* Overlay */}
   <div className="absolute inset-0 bg-black/40 pointer-events-none"></div>

      {/* LEFT SIDE - Text Content */}
       <div className="relative flex flex-col justify-center items-start p-12 lg:p-20 overflow-hidden z-10">

        {/* Content */}
        <div className="relative z-10 max-w-xl">
          <h2 className=" text-white font-instrument-serif font-normal text-[56px] leading-[106%] tracking-[0%] md:-translate-y-25 md:translate-x-25">
            Paying our privilege forward and paving the way for stronger communities
          </h2>

          <div className="mt-12 md:-translate-y-15 md:translate-x-25 ">
            <LearnMoreButton>Learn More</LearnMoreButton>
          </div>

          <div className="flex gap-4 mt-16 md:translate-y-5 md:translate-x-25">
            <button
              className="p-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full shadow-lg hover:bg-white/20 hover:border-amber-500/50 transition-all duration-300 hover:scale-110"
              onClick={onLeftClick}
            >
              <ChevronLeftIcon className="w-10 h-10 text-white" />
            </button>

            <button
              className="p-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full shadow-lg hover:bg-white/20 hover:border-amber-500/50 transition-all duration-300 hover:scale-110"
              onClick={onRightClick}
            >
              <ChevronRightIcon className="w-10 h-10 text-white" />
            </button>
          </div>
        </div>
      </div>

      {/* RIGHT SIDE - Carousel */}
      <div className="relative flex items-center justify-center p-8 overflow-hidden z-10">

        {/* Cards Container */}
        <div className="relative flex flex-col items-center justify-center w-full max-w-[28rem] h-[800px]">
          {getVisibleCards().map(({ data, position, index: cardIndex }) => (
            <div
              key={cardIndex}
              className={`
                absolute transition-all duration-700 ease-in-out
              ${position === 'center' 
  ? 'z-20 translate-y-0' 
  : position === 'top' 
    ? 'z-10 -translate-y-[420px] md:-translate-y-[480px]' 
    : 'z-10 translate-y-[420px] md:translate-y-[480px]'
}
              `}
            >
              <CarouselCard 
                {...data} 
                isCenter={position === 'center'}
              />
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};