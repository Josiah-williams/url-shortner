import React from "react";
import styled from "styled-components";
import HeroSectionButton from "./HeroSectionButton";
import img from  "./images/illustration-working.svg"


const Hero = styled.div`
    .hero-container{
    display: flex;
    justify-content: center;
    width: 100%;
    }
    .hero-img{
    color: red;
    background-color: #fff;
    background: url(${img});
    background-position: center;
    background-size: cover;
    }
    .hero-button {
    width: 100%;
    display: block;
    display: flex;
    justify-items: flex-start;
    }
     .hero-img {
        height: 38vh;
        width: 179vh;
        
    }
`
const HeroSection = () => {
    return(
        <Hero>
        <section className="section-hero">
            <div className="hero-container">
        <div className="hero-h1">
            <h1>
                More than just shorter links
            </h1>
        </div>
        <div className="hero-p">
        <p>
          Build your brand's recognition and get detailed insights on how your links are performing  
        </p>
        </div>

        <div className="hero-button">
            <HeroSectionButton />
        </div>
        <div className="hero-boxes hero-img">
        </div>
        </div>
        </section>
        </Hero>
    )
}
export default HeroSection