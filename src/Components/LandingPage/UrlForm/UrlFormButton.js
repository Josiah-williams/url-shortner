import React from 'react';
import styled from "styled-components";


const Button = styled.div`
    .url-section-button button{
    background-color: rgb(43 208 208);
    padding: 12px 32px;
    color: #fff;
    border: none;
    border-radius: 7px;
    font-size: 18px;
    font-weight: 700;
    position:relative;
    left:400px;
    bottom:140px;
    cursor:pointer
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