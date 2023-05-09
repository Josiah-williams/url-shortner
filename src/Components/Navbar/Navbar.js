import React from 'react'
import logo from "../../images/logo.svg"
import styled from "styled-components"

const Top = styled.div`
* {
    box-sizing: border-box;
    margin: 0;
}
    header{
        display: flex;
        justify-content:left;
        padding: 48px 155px;
    }
    header img{
        width: 100px;
        height: 31px;
        margin-top: -5px
    }
    header ul {
        list-style-type: none;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    header ul li a {
    text-decoration: none;
    margin: 10px 20px;
    padding-bottom: 8px;
    border-bottom: 2px solid transparent;
    font-weight: 400;
    font-size: 16px;
    color: rgb(159, 163, 169);
    letter-spacing: 1px;
    word-spacing: 1px;
    }
    .nav2{
        display: flex;
        gap:40px;
        margin-left:350px
    }
    .nav2 h3{
        cursor:pointer;
        color: rgb(159, 163, 169);
    }
     button, .cta {
        border-radius: 27px;
        padding: 0.8em 1.5em;
        margin-top:-12px;
        background-color: rgb(43 208 208);
        color: #fff;
        font-size: 18px;
        letter-spacing: 5%;
        outline: none;
        border: none;
        cursor: pointer;
        width:139px
    }
`;
function Navbar() {
    return(
        <Top>
        <header>
            <div className='logodiv'>
                <img src={logo} alt='logo' />
            </div>

            <div className='nav1'>
                <ul>
                   <li><a href='#'>Features</a></li>
                   <li><a href='#'>Pricing</a></li>
                   <li><a href='#'>Resources</a></li>
                </ul>
                </div>
                <div className='nav2'>
                    <h3>Login</h3>
                    <button className='cta'>Sign Up</button>
                </div>
        </header>
        </Top>
    )
}
export default Navbar