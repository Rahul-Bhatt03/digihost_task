// ProductSlide.jsx
import table from "../assets/table.png";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import LearnMoreButton from "./LearnMoreButton";

interface Accent {
  image: string;
  top?: string;
  bottom?: string;
  left?: string;
  right?: string;
  width?: string;
  height?: string;
  rotate?: string;
}

interface Slide {
  id: string;
  title: string;
  description: string;
  bottleImg: string;
  bgColor: string;
  textColor: string;
  accents: Accent[];
}

interface ProductSlideProps {
  data: Slide;
  handleNext: () => void;
  handlePrev: () => void;
  isExiting: boolean;
}


export const ProductSlide = ({ data, handleNext, handlePrev, isExiting }:ProductSlideProps) => {
  return (
    <div className="relative w-full h-[70vh] flex items-end justify-center overflow-hidden">

<div className="absolute bottom-0 w-full h-[180px] sm:h-[220px] md:h-[260px] lg:h-[320px] xl:h-[360px] z-10">
  <img src={table} className="w-full h-full object-cover" alt="Table" />
</div>

      {data.accents.map((accent, index) => (
        <img
          key={`accent-${index}`}
          src={accent.image}
          alt={`Accent ${index + 1}`}
          className={`absolute object-contain z-30 transition-all duration-700 ${isExiting ? "opacity-0 -translate-x-10" : "opacity-90"}`}
          style={{
            top: accent.top,
            bottom: accent.bottom,
            left: accent.left,
            right: accent.right,
            width: accent.width || "120px",
            transform: `rotate(${accent.rotate || "0deg"})`,
          }}
        />
      ))}

      <div className="relative z-40 container mx-auto px-4 lg:px-20 pb-[220px] lg:pb-[280px]">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12">

          <div className="flex flex-col justify-center lg:items-end text-center lg:text-right">

            {/* TITLE */}
            <h2 className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-instrument serif lg:-translate-y-25 lg:translate-x-35  ${data.textColor} transition-all duration-700 ${isExiting ? "opacity-0 -translate-x-8" : "opacity-100"}`}>
              {data.title}
            </h2>

            {/* DESCRIPTION */}
            <p className={`mt-4 sm:mt-6 max-w-md sm:max-w-lg ${data.textColor} opacity-90 lg:-translate-y-25 lg:translate-x-35 font-light leading-relaxed transition-all duration-700 delay-100 ${isExiting ? "opacity-0 -translate-x-8" : "opacity-100"}`}>
              {data.description}
            </p>

            <div className={`mt-6 sm:mt-8 transition-all duration-700 delay-200 ${isExiting ? "opacity-0  -translate-y-4" : "opacity-100"}`}>
              <LearnMoreButton textBlack>Learn More</LearnMoreButton>
            </div>

         <div className={`mt-[50px] flex gap-6 justify-center lg:justify-end transition-all duration-700 delay-300 ${isExiting ? "opacity-0 -translate-y-4" : "opacity-100"}`}>
  <button
    onClick={handlePrev}
    className="p-4 rounded-full border-2 border-[#100E17] text-[#100E17] hover:bg-[#100E17] hover:text-white transition-all duration-300 lg:translate-y-[25px] lg:translate-x-[20px] lg:w-[45px] lg:h-[45px]"
    aria-label="Previous slide"
  >
    <ChevronLeftIcon className="w-6 h-6" />
  </button>

  <button
    onClick={handleNext}
    className="p-4 rounded-full border-2 border-[#100E17] text-[#100E17] hover:bg-[#100E17] hover:text-white transition-all duration-300 lg:translate-y-[25px] lg:translate-x-[25px] lg:w-[45px] lg:h-[45px]"
    aria-label="Next slide" 
  >
    <ChevronRightIcon className="w-6 h-6" />
  </button>
</div>
          </div>

          <div className={`flex justify-center items-end relative z-20 transition-all duration-700 ${isExiting ? "opacity-0 translate-x-12" : "opacity-100"}`}>
            <img
              src={data.bottleImg}
              alt={data.title}
              className="h-[280px] sm:h-[360px] md:h-[420px] lg:h-[560px] object-contain"
            />
          </div>

        </div>
      </div>
    </div>
  );
};
