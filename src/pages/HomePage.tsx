import { CocktailPage } from "../components/CocktailPage"
import { ConnectWithUs } from "../components/ConnectWithUs"
import { Footer } from "../components/Footer"
import { HeroSection } from "../components/HeroSection"
import { SamalkhaPage } from "../components/SamalkhaPage"
import { CarouselPage } from "./CarouselPage"

export const HomePage = () => {
    return (
        <div>
            <HeroSection />
            <CocktailPage />
            <SamalkhaPage/>
            <CarouselPage/>
            <ConnectWithUs/>
            <Footer />
        </div>

    )
}