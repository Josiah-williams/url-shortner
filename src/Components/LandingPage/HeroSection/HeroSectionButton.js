import React from "react";
import styled from "styled-components";

const Button = styled.div`
    .hero-section-button button{
    background-color: rgb(43 208 208);
    padding: 12px 32px;
    color: #fff;
    border: none;
    border-radius: 27px;
    font-size: 18px;
    font-weight: 700;
    }
    `;

const HeroSectionButton = () => {
    return (
        <Button>
        <div className="hero-section-button">
            <button>Get started</button>
        </div>
        </Button>
    )
}
export default HeroSectionButton