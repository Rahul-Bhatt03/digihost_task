import { useState } from "react";

export const ThemeCarousel=()=>{
    const SLIDES = [
        {
            id: 'doaab',
            title: 'DOAAB',
            description: 'DOAAB India Craft Whisky is a contemporary range...',
            bottleImg: '/images/doaab-bottle.png',
            bgTheme: 'bg-[#F9F7F2]', // Cream theme
            accentElements: ['/images/wheat-left.png', '/images/wheat-right.png'],
            textColor: 'text-[#1A1A1A]'
        },
        {
            id: 'terai',
            title: 'TERAI DRY GIN',
            description: 'An authentic DRY GIN of true provenance...',
            bottleImg: '/images/terai-bottle.png',
            bgTheme: 'bg-[#F0F7EA]', // Light green theme
            accentElements: ['/images/mint-leaf.png', '/images/blueberry.png'],
            textColor: 'text-green-900'
        },
        {
            id: 'terai',
            title: 'TERAI DRY GIN',
            description: 'An authentic DRY GIN of true provenance...',
            bottleImg: '/images/terai-bottle.png',
            bgTheme: 'bg-[#F0F7EA]', // Light green theme
            accentElements: ['/images/mint-leaf.png', '/images/blueberry.png'],
            textColor: 'text-green-900'
        }
    ];
    
    const [currentIndex, setCurrentIndex] = useState(0);
    
    const handleNext = () => {
        setCurrentIndex((prev) => (prev === SLIDES.length - 1 ? 0 : prev + 1));
    };
    
    const handlePrev = () => {
        setCurrentIndex((prev) => (prev === 0 ? SLIDES.length - 1 : prev - 1));
    };

    
}