import React from "react";
import HeroSection from "./HeroSection/HeroSection";
import Footer from "../Footer/Footer";
import Boost from "./Boost/Boost";
import UrlForm from "./UrlForm/UrlForm";


function LandingPage() {
    return(
        <div>
            <HeroSection />
            <UrlForm />
            <Boost />
            <Footer />
        </div>
    )
}
export default LandingPage