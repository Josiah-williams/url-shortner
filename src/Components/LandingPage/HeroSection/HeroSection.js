import React from "react";
import styled from "styled-components";
import HeroSectionButton from "./HeroSectionButton";
import img from  "./images/illustration-working.svg"


const Hero = styled.div`
    .section-hero {
    display: flex;
    flex-direction: column;
    width: 100%;
    background: #fff;
    height: 1550px;
    
    }
    .hero-container{
    display: flex;
    justify-content: space-around;
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
        height: 400px;
        width: 45%;
        margin-top:10px;
        margin-right:-80px;
    }
    .boxes-container {
    display: flex;
    justify-content: center;
    width: 100%;
    }
    .hero-details {
    width:37%;
    text-align: left;
   }
   .hero-h1 {
    width: 100%;
    }
    .hero-h1 h1 {
    font-size: 56px;
    margin: 80px 0px 10px 0px;
    width: 100%;
    display: block;
    font-weight: 700;
    word-spacing: 2px;
    letter-spacing: 1px;
    line-height: 52px;
    }
    .hero-p {
    width: 100%;
    margin-bottom: 15px;
    }
    .hero-p p {
    font-size: 125%;
    color: #555;
    letter-spacing: 1px;
    word-spacing: 1px;
    line-height: 32px;
    }


`
const HeroSection = () => {
    return(
        <Hero>
        <section className="section-hero">
            <div className="hero-container">
                <div className="hero-details">
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
        </div>
        <div className="hero-img">
        </div>
        </div>
        </section>
        </Hero>
    )
}
export default HeroSection