import React from "react";
import styled from "styled-components";
import icon1 from "../../../images/icon-brand-recognition.svg"
import icon2 from "../../../images/icon-detailed-records.svg"
import icon3 from "../../../images/icon-fully-customizable.svg"


const Statistics = styled.div`
    .advanced{
        border: 1px solid rgb(159 163 169 / 18%);
        background-color: rgb(159 163 169 / 18%);
        height:900px;
    }
    .advanced-p p{
        width:40%;
        color:gray;
        position:relative;
        left:400px;
        font-size:20px;
        margin-bottom:80px;
    }
    .advanced-h1{
        margin-top: 200px;
    }
    .advanced-h1 h1{
        font-size: 40px
    }
    .card-container{
        display: flex;
        gap:25px;
    }
    .card1{
        border:1px solid white;
        background-color: white;
        border-radius: 7px;
        width:21%;
        text-align:left;
        margin-left: 157px;
        padding:25px 25px 25px 25px;
    }
    .card1-p p{
        color: gray;
        font-size:16.5px;
        line-height:23px;
    }
    .card2{
        border:1px solid white;
        background-color: white;
        border-radius: 7px;
        width:21%;
        text-align:left;
        padding:25px 25px 25px 25px;
        position: relative;
        top:41px;
    }
    .card2-p p{
        color: gray;
        font-size:16.5px;
        line-height: 23px
    }
    .card3{
        border:1px solid white;
        background-color: white;
        border-radius: 7px;
        width:21%;
        text-align:left;
        padding:25px 25px 25px 25px;
        position: relative;
        top:78px;
    }
    .card3-p p{
        // width:70%;
        color: gray;
        font-size:16.5px;
        line-height:23px;
    }
    .card1 img{
        position: relative;
        top: -48px;
        border: 1px solid rgb(75 63 107);
        border-radius:50%;
        padding:16px;
        background-color:rgb(75 63 107);
        margin-bottom:-45px;
    }
    .card2 img{
        position: relative;
        top: -48px;
        border: 1px solid rgb(75 63 107);
        border-radius:50%;
        padding:16px;
        background-color:rgb(75 63 107);
        margin-bottom:-45px;
    }
     .card3 img{
        position: relative;
        top: -48px;
        border: 1px solid rgb(75 63 107);
        border-radius:50%;
        padding:16px;
        background-color:rgb(75 63 107);
        margin-bottom:-45px;
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
            <div className="card3-h2">
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