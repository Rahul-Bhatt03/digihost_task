import logo from "../assets/carousel3.jpg";
import LearnMoreButton from "./LearnMoreButton";

export const SamalkhaPage = () => {
    return (
        <section className="bg-[#FFF7F1] w-full h-165 lg:h-280">
            <div
                className="
          max-w-7xl mx-auto
          px-6 sm:px-10 lg:px-20
          py-16 sm:py-20 lg:py-28
          flex flex-col gap-6 sm:gap-8
        "
            >
                <h2
                    className="
            font-instrument-serif font-normal
            text-[32px] sm:text-[40px] lg:text-[48px] lg:translate-x-50
            lg:translate-y-30
            leading-[120%] tracking-normal
            text-gray-900
            max-w-3xl
          "
                >
                    Quality is built into
                    every <br /> distillery we operate.
                </h2>

                {/* Location */}
                <p
                    className="
            font-albert-sans font-normal
            text-[20px] sm:text-[24px] lg:text-[32px]
            leading-[100%] tracking-normal
            text-gray-700 lg:translate-x-50
            lg:translate-y-30
          "
                >
                    Samalkha, Haryana
                </p>

                {/* Image */}
                <div className="w-full flex justify-center py-6 sm:py-10 lg:translate-x-30 lg:translate-y-30">
                    <img
                        src={logo}
                        alt="Samalkha Distillery"
                        className="
              w-full max-w-[1131px]
              h-[260px] sm:h-[380px] lg:h-[465px]
              object-cover
              shadow-md
            "
                    />
                </div>

                <p
                    className="
            font-albert-sans font-normal
            text-[16px] sm:text-[18px] lg:text-[20px]
            leading-[120%] tracking-normal
            text-gray-700
            max-w-3xl lg:translate-x-45 lg:translate-y-30
          "
                >
                    The Samalkha plant was first established as a molasses-based <br />distillery
                    before being converted for the production of Grain <br /> Neutral Alcohol.
                </p>

                <div className="p-6 lg:translate-x-45 lg:translate-y-30">
                    <LearnMoreButton textBlack>Learn More</LearnMoreButton>
                </div>


            </div>
        </section>
    );
};
