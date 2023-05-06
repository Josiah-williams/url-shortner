import React from "react";
import HeroSection from "./HeroSection/HeroSection";
import Footer from "../Footer/Footer";
import Boost from "./Boost/Boost";
import UrlForm from "./UrlForm/UrlForm";
import Advanced from "./Advanced/Advanced";
// import Cards from "./Cards/Cards";



function LandingPage() {
    return(
        <div>
            <HeroSection />
             <UrlForm />
             <Advanced />
            <Boost />
            <Footer />
        </div>
    )
}
export default LandingPage