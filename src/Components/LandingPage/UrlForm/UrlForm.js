import React from "react"
import styled from "styled-components"
import shortimg from "../../../images/bg-shorten-desktop.svg"
import UrlFormButton from "./UrlFormButton"


const Form = styled.div`
    .form-container{
        background-color: #282c34;
        width:70%;
        height:116px;
        border-radius:7px;
        margin-left:139px;
        margin-bottom:40px
    }
    .url-img img{
        width:50%
    }
    .form-container input{
        width: 62%;
        height:14px;
        margin: 12px 0px 30px;
        border: 1px solid #9FA3A9;
        outline: none;
        border-radius: 11px;
        padding: 16px;
        font-size: 18px;
        color: #0F1928;
        position:relative;
        top: -49px;
        left: -95px;
    }
`
const handleSubmit = (e) =>{
    e.preventDefault();
}
function UrlForm() {
    return(
        <Form>
        <div className="form-container">
            <div className="url-img">
            <img src={shortimg} alt="short-bg" />

            <form onSubmit={handleSubmit}>
                <input
                    id=""
                    type="text"
                    placeholder="shorten a link here..."
                    required
                />
            <div className="url-button">
                <UrlFormButton />
            </div>
            </form>

        </div>
        </div>
        </Form>
    )
}
export default UrlForm