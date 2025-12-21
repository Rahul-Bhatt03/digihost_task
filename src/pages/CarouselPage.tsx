import LearnMoreButton from "../components/LearnMoreButton";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import { useState, useEffect } from "react";
import { CarouselCard } from "../components/CarouselCard";
import carouselbg from "../assets/carousebg.jpg";

import carousel1 from "../assets/carousel1.jpg";
import carousel2 from "../assets/carousel2.jpg";
import carousel3 from "../assets/carousel3.jpg";

import logo1 from "../assets/firstLogo.png";
import logo2 from "../assets/firstLogo.png";
import logo3 from "../assets/firstLogo.png";

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
    }
  ];

  const [index, setIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const onLeftClick = () => {
    setIndex(index === 0 ? carouselData.length - 1 : index - 1);
  };

  const onRightClick = () => {
    setIndex(index === carouselData.length - 1 ? 0 : index + 1);
  };

  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 50) {
      onRightClick();
    }

    if (touchStart - touchEnd < -50) {
      onLeftClick();
    }
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

  if (isMobile) {
    return (
      <div className="min-h-screen relative bg-black">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-40"
          style={{ backgroundImage: `url(${carouselbg})` }}
        ></div>

        <div className="relative z-10 min-h-screen flex flex-col p-4 pt-12">
          <div className="text-center mb-8">
            <h2 className="text-white font-instrument-serif font-normal text-3xl sm:text-4xl leading-[110%] mb-6">
              Paying our privilege forward and paving the way for stronger communities
            </h2>

            <div className="mb-8">
              <LearnMoreButton variant="white">Learn More</LearnMoreButton>
            </div>
          </div>

          <div
            className="flex-1 flex items-center justify-center"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <div className="w-full max-w-md px-4">
              <CarouselCard
                {...carouselData[index]}
                isMobile={true}
              />
            </div>
          </div>

          <div className="flex items-center justify-center gap-6 mt-8 py-6">
            <button
              className="p-4 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full shadow-lg hover:bg-white/30 hover:scale-110 transition-all duration-300 active:scale-95"
              onClick={onLeftClick}
            >
              <ChevronLeftIcon className="w-8 h-8 text-white" />
            </button>

            <div className="flex gap-3 mx-6">
              {carouselData.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setIndex(i)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${i === index ? 'bg-white scale-125' : 'bg-white/40'}`}
                />
              ))}
            </div>

            <button
              className="p-4 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full shadow-lg hover:bg-white/30 hover:scale-110 transition-all duration-300 active:scale-95"
              onClick={onRightClick}
            >
              <ChevronRightIcon className="w-8 h-8 text-white" />
            </button>
          </div>

          {/* Mobile Swipe Hint */}
          <div className="text-center mt-4 mb-8">
            <p className="text-white/60 text-sm flex items-center justify-center gap-2">
              <span className="animate-pulse">←</span>
              Swipe to navigate
              <span className="animate-pulse">→</span>
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      className="grid grid-cols-1 lg:grid-cols-2 min-h-screen bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${carouselbg})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40 pointer-events-none"></div>

      <div className="relative flex flex-col justify-center items-start p-8 sm:p-12 lg:p-20 overflow-hidden z-10">
        <div className="relative z-10 max-w-xl">
          <h2 className="text-white font-instrument-serif font-normal text-4xl sm:text-5xl md:text-[56px] leading-[106%] mb-8 sm:mb-12 lg:translate-x-25 lg:-translate-y-25 ">
            Paying our privilege forward and paving the way for stronger communities
          </h2>

          <div className="mb-12 lg:translate-x-25 lg:-translate-y-15">
            <LearnMoreButton variant="white">Learn More</LearnMoreButton>
          </div>

          <div className="flex gap-4 lg:translate-x-25 lg:translate-y-15">
            <button
              className="p-3 sm:p-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full shadow-lg hover:bg-white/20 hover:border-amber-500/50 transition-all duration-300 hover:scale-110 active:scale-95"
              onClick={onLeftClick}
            >
              <ChevronLeftIcon className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
            </button>

            <button
              className="p-3 sm:p-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full shadow-lg hover:bg-white/20 hover:border-amber-500/50 transition-all duration-300 hover:scale-110 active:scale-95"
              onClick={onRightClick}
            >
              <ChevronRightIcon className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
            </button>
          </div>
        </div>
      </div>

      <div className="relative flex items-center justify-center p-4 sm:p-8 overflow-hidden z-10">

        <div className="relative flex flex-col items-center justify-center w-full max-w-[90vw] sm:max-w-[28rem] h-[700px] sm:h-[800px]">
          {getVisibleCards().map(({ data, position, index: cardIndex }) => (
            <div
              key={cardIndex}
              className={`
                absolute transition-all duration-700 ease-in-out
                ${position === 'center'
                  ? 'z-20 translate-y-0'
                  : position === 'top'
                    ? 'z-10 -translate-y-[320px] sm:-translate-y-[380px] md:-translate-y-[420px] lg:-translate-y-[480px]'
                    : 'z-10 translate-y-[320px] sm:translate-y-[380px] md:translate-y-[420px] lg:translate-y-[480px]'
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