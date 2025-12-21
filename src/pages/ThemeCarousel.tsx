// ThemeCarousel.jsx
import { useState } from "react";
import { ProductSlide } from "../components/ProductSlide";
import logo1 from "../assets/theme1bottle.png";
import logo2 from "../assets/theme2bottle.png";
import logo3 from "../assets/theme3bottle.png";

// Accent Images
import wheat from "../assets/wheat.png";
import wheat2 from "../assets/wheat2.png";
import litchi from "../assets/theme1bowl.png";
import mulberries from "../assets/theme3bowl.png";
import glass1 from "../assets/theme1glass.png";
import jamun from "../assets/jamun.png";
import leaf from "../assets/leafdrop.png";
import blackberry from "../assets/blackberry.png";
import litchipic from '../assets/litchipic.png';
import shrubleaf from "../assets/shrubleaf.png";

export const ThemeCarousel = () => {
    const SLIDES = [
        {
            id: 'doaab',
            title: 'DOAAB',
            description:
                'DŌAAB India Craft Whisky is a contemporary range of limited-edition Indian whiskies, born of a spirit of exploration and experimentation. Crafted for an India ready to break the mould, it redefines tradition through bold expression and refined craftsmanship.',
            bottleImg: logo1,
            bgColor: 'bg-[#FFF7F1]',
            textColor: 'text-[#100E17]',
            accents: [
                { image: wheat, top: '-40%', left: '60%', width: '680px', height: '280px', rotate: '-270deg' },
                { image: glass1, top: '60%', right: '8%', width: '190px', height: '150px' },
                { image: wheat, bottom: '30%', left: '-2%', width: '500px', height: '500px' },
                { image: wheat2, bottom: '-25%', left: "15%", right: '48%', width: '340px', height: '340px', rotate: "310deg" }
            ]
        },
        {
            id: 'terai',
            title: 'TERAI INDIAN CRAFT GIN LITCHI & MULBERRIES',
            description: 'Terai India Dry Gin proudly presents The Bagh Explorations, an ode to the family farms of the SWARUP family in Jarauda.',
            bottleImg: logo2,
            bgColor: 'bg-[#F0F7EA]',
            textColor: 'text-[#100E17]',
            accents: [
                { image: jamun, top: '70%', left: '10%', width: '100px', height: '100px' },
                { image: jamun, bottom: '-30%', left: '15%', width: '320px', height: '220px' },
                { image: leaf, bottom: '45%', right: '-10%', width: '530px', height: '130px', rotate: "270deg" },
                { image: leaf, bottom: '55%', right: '-10%', width: '430px', height: '130px', rotate: "190deg" },
                { image: leaf, bottom: '45%', left: '-10%', width: '530px', height: '130px', rotate: "70deg" },
                { image: leaf, bottom: '55%', left: '-10%', width: '430px', height: '130px', rotate: "190deg" },
                { image: mulberries, top: '57%', right: '10%', width: '160px', height: '200px' }
            ]
        },
        {
            id: 'terai-gin',
            title: 'TERAI DRY GIN',
            description: 'An authentic DRY GIN of true provenance. A product of intrinsic quality taste crafted entirely in India using indigenously sourced ingredients.',
            bottleImg: logo3,
            bgColor: 'bg-[#FFDDDD]',
            textColor: 'text-[#100E17]',
            accents: [
                { image: blackberry, top: '80%', left: '-9%', width: '340px', height: '140px', rotate: "220deg" },
                { image: blackberry, top: '60%', left: '5%', width: '140px', height: '140px', rotate: "220deg" },
                { image: shrubleaf, top: '-30%', right: '-5%', width: '400px', height: '200px', rotate: "-20deg" },
                { image: shrubleaf, top: '-30%', right: '-5%', width: '400px', height: '200px', rotate: "-50deg" },
                { image: leaf, top: '-15%', right: '80%', width: '400px', height: '200px', rotate: "110deg" },
                { image: litchipic, bottom: '-20%', left: '20%', width: '260px', height: '160px' },
                { image: litchipic, bottom: '40%', left: '15%', width: '90px', height: '160px', rotate: "30deg" },
                { image: litchi, bottom: '-3%', right: '10%', width: '180px', height: '180px' }
            ]
        }
    ];

    const [currentIndex, setCurrentIndex] = useState(0);
    const [isExiting, setIsExiting] = useState(false);

    const handleNext = () => {
        setIsExiting(true);
        setTimeout(() => {
            setCurrentIndex((prev) => (prev === SLIDES.length - 1 ? 0 : prev + 1));
            setIsExiting(false);
        }, 700);
    };

    const handlePrev = () => {
        setIsExiting(true);
        setTimeout(() => {
            setCurrentIndex((prev) => (prev === 0 ? SLIDES.length - 1 : prev - 1));
            setIsExiting(false);
        }, 700);
    };

    return (
        <div className={`relative h-screen transition-colors duration-700 ${SLIDES[currentIndex].bgColor} overflow-hidden`}>
            <div className="relative z-20 pt-12 text-center">
                <div className="flex items-center justify-center gap-4">
                    <span className="w-12 h-[1px] bg-[#100E17]/70"></span>
                    <span className="w-2 h-2 rounded-full bg-[#100E17]"></span>
                    <h1 className="font-serif font-normal text-5xl text-[#100E17] px-4">Prestige Spirits</h1>
                    <span className="w-2 h-2 rounded-full bg-[#100E17]"></span>
                    <span className="w-12 h-[1px] bg-[#100E17]/70"></span>
                </div>

                <h2 className="text-[#100E17] text-lg font-light mt-4">
                    Premium spirits for discerning consumers
                </h2>
            </div>

            <ProductSlide
                data={SLIDES[currentIndex]}
                handleNext={handleNext}
                handlePrev={handlePrev}
                isExiting={isExiting}
            />
        </div>
    );
};
