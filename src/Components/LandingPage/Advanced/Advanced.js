import React from "react";
import styled from "styled-components";
import icon1 from "../../../images/icon-brand-recognition.svg"
import icon2 from "../../../images/icon-detailed-records.svg"
import icon3 from "../../../images/icon-fully-customizable.svg"


const Statistics = styled.div`
    .advanced{
        border: 1px solid rgb(159 163 169 / 18%);
        background-color: rgb(159 163 169 / 18%);
        height:574px;
    }
    .advanced-p p{
        width:32%;
        color:gray;
        position:relative;
        left:450px
    }
    .card-container{
        display: flex;
    }
    .card1{
        border:1px solid white;
        background-color: white;
        width:20%;
        text-align:left;
        margin-left: 136px;
        padding:25px 25px 25px 25px;
    }
    .card1-p p{
        color: gray;
        font-size:16px
    }
    .card2{
        border:1px solid white;
        background-color: white;
        width:20%;
        text-align:left;
        margin-left: 136px;
        padding:25px 25px 25px 25px
    }
    .card2-p p{
        color: gray;
        font-size:16px
    }
    .card3{
        border:1px solid white;
        background-color: white;
        width:20%;
        text-align:left;
        margin-left: 136px;
        padding:25px 25px 25px 25px
    }
    .card3-p p{
        color: gray;
        font-size:16px
    }
`

const Advanced = () => {
    return(
        <Statistics>
        <div className="advanced">
            <div className="advanced-h1">
                <h1>
                  Advanced Statistics
                </h1>
            </div>
            <div className="advanced-p">
                <p>
                    Track how your links are performing across the web with our advanced statistics dashboard.
                </p>
            </div>

             <div className="card-container">
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

        <div className="card2-p">
            <p>
                Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions. 
            </p>
        </div>
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
        </div>


        </Statistics>
    )
}
export default Advanced