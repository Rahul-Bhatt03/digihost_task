import logo from "../assets/eb426d81984c9da1cf18be4f39fd6ab6fcba36b0.jpg";
import LearnMoreButton from "../../src/components/LearnMoreButton"
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";

export const HeroSection = () => {
    return (
        <section className="relative w-full h-screen overflow-hidden">

            <div className="absolute top-10 left-0 right-0 z-50">
                <Navbar />
            </div>

            <img
                src={logo}
                alt="Hero Background"
                className="absolute inset-0 w-full h-full object-cover object-[center_bottom] z-10"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent z-20"></div>

            <div className="absolute inset-0 flex items-center justify-center px-4 z-30">
                <div className="max-w-[983px] text-center">
                    <h1 className="text-white font-serif leading-snug text-1xl sm:text-2xl md:text-2xl lg:text-3xl xl:text-3xl tracking-tight drop-shadow-lg">
                        The Only Indian Alcohol Company To Have A Wide Portfolio With Brands In All Industry
                    </h1>
                    <div className="translate-y-10 flex justify-center">
                        <LearnMoreButton children="Learn More" />
                    </div>
                </div>
            </div>
          
        </section>
    );
};