import { CocktailPage } from "../components/CocktailPage"
import { ConnectWithUs } from "../components/ConnectWithUs"
import { Footer } from "../components/Footer"
import { HeroSection } from "../components/HeroSection"
import { CarouselPage } from "./CarouselPage"

export const HomePage = () => {
    return (
        <div>
            <HeroSection />
            <CocktailPage />
            <CarouselPage/>
            <ConnectWithUs/>
            <Footer />
        </div>

    )
}