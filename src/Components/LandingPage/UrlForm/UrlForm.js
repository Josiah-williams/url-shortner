import React, { useEffect } from "react"
import styled from "styled-components"
import shortimg from "../../../images/bg-shorten-desktop.svg"
import UrlFormButton from "./UrlFormButton"


const Form = styled.div`
    .form-container{
        background-color: rgb(49 37 78);
        width:78%;
        height:116px;
        border-radius:7px;
        margin-left:155px;
        margin-top: 20px;
        position: relative;
        bottom: -50px;
    }
    .url-img img{
        width:50%
    }
    .form-container input{
        width: 70%;
        height:14px;
        margin: 12px 0px 30px;
        border: 1px solid #9FA3A9;
        outline: none;
        border-radius: 11px;
        padding: 16px;
        font-size: 18px;
        color: #0F1928;
        position:relative;
        top: -62px;
        left: -100px;
    }
`
const handleSubmit = (e) =>{
    e.preventDefault();
}
function UrlForm() {
    const url = `https://app.shrtco.de/`

    useEffect(() => {
        axios
            .get(url)
            .then((res) => {
            })
            .catch((err) => {
                console.log(err)
            });
    }, [url]);

    
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