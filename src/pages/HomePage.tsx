import { Achievement } from "../components/Achievement"
import { CocktailPage } from "../components/CocktailPage"
import { ConnectWithUs } from "../components/ConnectWithUs"
import { Footer } from "../components/Footer"
import { HeroSection } from "../components/HeroSection"
import { MileStone } from "../components/MileStone"
import { SamalkhaPage } from "../components/SamalkhaPage"
import { CarouselPage } from "./CarouselPage"
import { ThemeCarousel } from "./ThemeCarousel"

export const HomePage = () => {
    return (
        <div>
            <HeroSection />
            <CocktailPage />
            <ThemeCarousel/>
            <MileStone/>
            <Achievement/>
            <SamalkhaPage/>
            <CarouselPage/>
            <ConnectWithUs/>
            <Footer />
        </div>

    )
}