import { useState } from "react";
import { ProductSlide } from "../components/ProductSlide";
import logo1 from "../assets/theme1bottle.png"
import logo2 from "../assets/theme2bottle.png"
import logo3 from "../assets/theme3bottle.png"
import wheat from "../assets/wheat.png"
import wheat2 from "../assets/wheat2.png"
import litchi from "../assets/theme1bowl.png"
import mulberries from "../assets/theme3bowl.png"
import table from "../assets/table.png"

export const ThemeCarousel = () => {
    const SLIDES = [
        {
            id: 'doaab',
            title: 'DOAAB',
            description: 'DOAAB India Craft Whisky is a versatile brand of a large and diverse, innovative, and elegant architecture that supports the world\'s most efficient solutions. It is an ideal, fast, easy to handle the model.',
            bottleImg: logo1,
            bgColor: 'bg-[#FFF7F1]',
            accentTop: wheat,
            accentBottom: wheat2,
            textColor: 'text-[#100E17]',
            accentColor: '#100E17'
        },
        {
            id: 'terai',
            title: 'TERAI INDIAN CRAFT GIN LITCHI & MULBERRIES',
            description: 'Terai India Dry Gin proudly presents The Bapt Exploration, an ode to the family farms of the SWARUP family in Jarauda.',
            bottleImg: logo2,
            bgColor: 'bg-[#F0F7EA]',
            accentTop: litchi,
            accentBottom: mulberries,
            textColor: 'text-[#100E17]',
            accentColor: '#100E17'
        },
        {
            id: 'terai-gin',
            title: 'TERAI DRY GIN',
            description: 'An authentic DRY GIN of true provenance...',
            bottleImg: logo3,
            bgColor: 'bg-[#FEE2E2]',
            accentTop: mulberries,
            accentBottom: mulberries,
            textColor: 'text-[#100E17]',
            accentColor: '#100E17'
        }
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    const handleNext = () => {
        setCurrentIndex((prev) => (prev === SLIDES.length - 1 ? 0 : prev + 1));
    };

    const handlePrev = () => {
        setCurrentIndex((prev) => (prev === 0 ? SLIDES.length - 1 : prev - 1));
    };

    return (
        <div className={`relative h-screen transition-colors duration-700 ${SLIDES[currentIndex].bgColor} overflow-hidden`}>

            <div className="absolute bottom-0 w-full h-1/3 z-10">
                <img
                    src={table}
                    className="w-full h-full object-cover"
                    alt="Table"
                />
            </div>

            <div className="relative z-20 pt-12">
                <div className="flex items-center justify-center gap-4">
                    <span className="w-12 h-[1px] bg-[#100E17]/70"></span>
                    <span className="w-2 h-2 rounded-full bg-[#100E17]"></span>
                    <h1 className="
                        w-auto
                        font-instrument-serif 
                        font-normal 
                        text-[48px] 
                        text-[#100E17]
                        leading-[100%] 
                        tracking-normal 
                        text-center
                        opacity-100
                        px-4
                    ">
                        Prestige Spirits
                    </h1>
                    <span className="w-2 h-2 rounded-full bg-[#100E17]"></span>
                    <span className="w-12 h-[1px] bg-[#100E17]/70"></span>
                </div>

                <h2 className="text-center text-[#100E17] text-lg font-light mt-4">
                    Premium spirits for discerning consumers
                </h2>
            </div>

            <ProductSlide
                data={SLIDES[currentIndex]}
                handleNext={handleNext}
                handlePrev={handlePrev}
                tableImg={table}
            />

        </div>
    )
}