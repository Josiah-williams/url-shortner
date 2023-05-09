import React, { useState } from "react"
import styled from "styled-components"
import shortimg from "../../../images/bg-shorten-desktop.svg"
import UrlFormButton from "./UrlFormButton"
import {CopyToClipboard} from "react-copy-to-clipboard"

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
    .shortener__viewShot {
        margin-top: 20px;
        border: 1px solid white;
        background-color:white;
        display: flex;
        justify-content: space-between;
        padding-left: 10px;
        color: rgb(64, 64, 66);
        align-items: center;
        margin-top:-51px;
    }
    .shortener__viewShot button {
        background-color: rgb(43 208 208);
        padding: 12px 32px;
        color: #fff;
        border: none;
        border-radius: 7px;
        font-size: 18px;
        font-weight: 700;
        cursor:pointer;
}
`
export default function UrlForm() {
    const [url, setUrl ] = useState();
    const [shortendUrl, setShortenedUrl] = useState('')
   
    const shortenUrl = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch(
                `https://api.shrtco.de/v2/shorten?url=${url}`
            )
            const data = await response.json()
            setShortenedUrl(data.result.full_short_link);
        } catch (e) {
            alert(e);
        }
    };


    return(
        <Form>
        <div className="form-container">
            <div className="url-img">
            <img src={shortimg} alt="short-bg" />

            <form onSubmit={shortenUrl}>
                <input
                    placeholder="shorten a link here..."
                    value={url}
                    onChange={(e) => setUrl(e.target.value )} />
                
            <div className="url-button">
                <UrlFormButton />
            </div>
            </form>
          {/* Section to view shortened URLS */}
          {shortendUrl &&
          <div className='shortener__viewShot'>
            {shortendUrl}
            <CopyToClipboard text={shortendUrl}>
                <button  onClick={() => alert("The URL has been copied")}>copy
                </button>
            </CopyToClipboard>
        </div>
        }
        </div>
        </div>
        </Form>
    )
}
//In the code block above, we created a url used to make the input field controlled and a shortendUrl state which will hold the shortened URL.//