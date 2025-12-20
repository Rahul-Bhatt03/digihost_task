import logo from "../assets/eb426d81984c9da1cf18be4f39fd6ab6fcba36b0.jpg";
import LearnMoreButton from "../../src/components/LearnMoreButton";
import { Navbar } from "./Navbar";

export const HeroSection = () => {
  return (
    <section className="relative w-full h-screen overflow-hidden">
      
      <div className="absolute top-0 left-0 right-0 z-50">
        <Navbar />
      </div>

      <img
        src={logo}
        alt="Hero Background"
        className="absolute inset-0 w-full h-full object-cover object-[center_bottom] z-10"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent z-20"></div>

      <div className="absolute inset-0 flex flex-col items-center justify-center px-4 z-30">
        <div className="max-w-[983px] text-center">
          <h1 className="
            font-instrument-serif font-normal
            text-[32px] sm:text-[40px] md:text-[48px] lg:text-[50px]
            leading-[100%] tracking-normal
            text-white capitalize drop-shadow-lg
            w-full sm:w-[600px] md:w-[800px] lg:w-[983px]
          ">
            The Only Indian Alcohol Company To Have <br/> A Wide Portfolio With Brands In All Industry
          </h1>

          <div className="mt-8 lg:translate-y-10 flex justify-center">
            <LearnMoreButton children="Learn More" />
          </div>
        </div>

        <div className="mt-12 flex items-center gap-4 text-white lg:translate-y-70 translate-y-80">
          <span className="w-12 h-[1px] bg-white/70"></span>
          <span className="w-2 h-2 rounded-full bg-white"></span>
          <span className="text-sm tracking-widest font-light">Since 1993</span>
          <span className="w-2 h-2 rounded-full bg-white"></span>
          <span className="w-12 h-[1px] bg-white/70"></span>
        </div>
      </div>
      
    </section>
  );
};
