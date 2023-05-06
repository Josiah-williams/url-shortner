import React from "react";
import styled from "styled-components";
import icon1 from "../../../images/icon-brand-recognition.svg"
import icon2 from "../../../images/icon-detailed-records.svg"
import icon3 from "../../../images/icon-fully-customizable.svg"

const Container = styled.div`
    .card1{
        border: 1px solid black;
        box-sizing: border-box;
        background-color:white;
    }
`
const Cards = () => {
    return (
        <Container>
        <div className="Card-container">
            <div className="card1">
            <img src={icon1} alt="finance-icon" />
            <div className="card1-h2">
            <h2>
                Brand Recognition
            </h2>
            </div>
            <div className="card1-p">
                <p>
                    Boost your brand recognition with each click. Generic links don't mean a thing. Branded links help instil confidence in your content
                </p>
            </div>
        </div>
        <div className="card2">
            <img src={icon2} alt="detailed-icon" />
            <div className="card2-h2">
                <h2>
                   Detailed Records
                </h2>
            </div>
        </div>
        <div className="card2-p">
            <p>
                Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions. 
            </p>
        </div>
        <div className="card3">
            <img src={icon3} alt="customizable-icon" />
            <div className="card3-h1">
                <h2>
                    Fully customizable
                </h2>
            </div>
            <div className="card3-p">
                <p>
                    Improve brand awareness and content discoverability through customizable links, supercharging audience engagement.
                </p>
            </div>
        </div>
        </div>
        </Container>
    )
}
export default Cards