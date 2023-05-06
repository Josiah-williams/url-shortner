import React from 'react';
import styled from "styled-components";


const Button = styled.div`
    .url-section-button button{
    background-color: rgb(26 178 157);
    padding: 12px 32px;
    color: #fff;
    border: none;
    border-radius: 7px;
    font-size: 18px;
    font-weight: 700;
    position:relative;
    left:320px;
    bottom:125px;
    }
`
const UrlFormButton = () => {
    return (
        <Button>
            <div className="url-section-button">
                <button>Shorten it!</button>
            </div>
        </Button>
    )
}
export default UrlFormButton