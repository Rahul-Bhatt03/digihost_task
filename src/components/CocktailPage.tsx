import logo from "../assets/Cocktailrecipe.jpg";
import LearnMoreButton from "./LearnMoreButton";

export const CocktailPage = () => {
    return (
        <section className="relative w-full h-screen overflow-hidden">

            <img
                src={logo}
                alt="Cocktail Background"
                className="absolute inset-0 w-full h-full object-cover z-0"
            />

            <div className="absolute top-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center text-center px-6 max-w-4xl w-full">

                <p className="text-white text-[20px] md:text-[22px] leading-relaxed font-serif mb-20 -translate-y-10">
                    At Globus Spirits, tradition meets innovation. Guided by experience and
                    energized by fresh ideas, we craft premium spirits with uncompromising
                    quality—creating value for every stakeholder we serve.
                </p>
                <div className="-translate-y-8">
                    <LearnMoreButton>Learn More</LearnMoreButton>
                </div>

            </div>
        </section>
    );
};
