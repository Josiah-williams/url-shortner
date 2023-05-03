import React from "react"
import logo3 from '../../images/logo.svg';
import img1 from '../../images/icon-facebook.svg';
import img2 from '../../images/icon-twitter.svg';
import img3 from '../../images/icon-pinterest.svg';
import img4 from '../../images/icon-instagram.svg'
import styled from "styled-components";

const Foteer = styled.div`
    footer{
     width: 100%;
    height: 337px;
    background: #000000c9;
    }
    .footer-container{
    position: relative;
    width: 1349px;
    height: 81px;    
    top: 0px;
    display: flex;
    }
    .footer-logo-container {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    height: 35vh;
    width: 40%;
    margin-left: 50px;
    }
    .footer-image{
    position: absolute;
    width: 110.37px;
    height: 54px;
    left: 20px;
    top: 61px;
    margin-left: 81px
    }
    .footer-image img {
    width: 100%;
    height: 100%;
    }
    .footer-icons-box {
    display: flex;
    margin-bottom: 5px;
    }
    .footer-icon {
    margin-right: 10px;
    padding: 5.5px;
    margin-top:20px
    }
    .footer-pages {
    display: flex;
    margin-top: -38px;
    margin-left: 500px;
    width: 56%;
    }
    .footer-pages-box {
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;
    margin-right: 60px;
    align-items: flex-start;
    width: 90%;
    }
    .footer-pages-box h4 {
    color: #FFFFFF;
    font-weight: 500;
    font-size: 17px;
    letter-spacing: 1px;
    margin-bottom: 20px;
    }
    .footer-pages-box a {
    margin-bottom: 10px;
    font-size: 13px;
    color: #FFFFFF;
    letter-spacing: 1px;
    text-decoration: none;
    }

`

const Footer = () => {
    return (
        <Foteer>
        <footer>
            <div className='footer-container'>
          <div className='footer-logo-container'>
            <div className="footer-image">
                <img src={logo3} alt="logo" />
            </div>
            </div>
            </div>

            <div className="footer-pages">
                <div className="footer-pages-box">
                    <h4>Features</h4>
                    <a href="">LInk shortening</a>
                    <a href="">Branded Links</a>
                    <a href="">Analytics</a>
                </div>

                <div className="footer-pages-box">
                    <h4>Resources</h4>
                    <a href="">Blog</a>
                    <a href="">Developers</a>
                    <a href="">Support</a>
                </div>

                <div className="footer-pages-box">
                    <h4>Company</h4>
                    <a href="">About</a>
                    <a href="">Our Team</a>
                    <a href="">Careers</a>
                    <a href="">Contact</a>
                </div>

                 <div className='footer-icons-box'>
                    <div className="footer-icon">
                        <img src={img1} alt="fb" />
                    </div>
                     <div className="footer-icon">
                        <img src={img2} alt="twi" />
                 </div>
                     <div className="footer-icon">
                        <img src={img3} alt="pin" />
                </div>
                <div className="footer-icon">
                        <img src={img4} alt="ig" />
                        </div>
                    </div>
        </div>
        </footer>
        </Foteer>
    )
}
export default Footer