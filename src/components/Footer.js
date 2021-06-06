import React from 'react'
import styled from 'styled-components'
import { FaInstagram, FaFacebookF, FaYoutube } from 'react-icons/fa';
const Footer = () => {
    return (
        <FooterContainer>
            <FooterContent>
                <Detail>
                    <h2>travel.</h2>
                    <p>Travel is an outdoor recreational<br /> center which celebrates nature<br /> and it's inexplicable beauty.</p>
                </Detail>
                <Pages>
                    <h3>Pages</h3>
                    <span>Home</span>
                    <span>Locations</span>
                    <span>Memberships</span>
                    <span>Contact Us</span>
                </Pages>
                <Social>
                    <h3>Social Media</h3>
                    <span><FaFacebookF /></span>
                    <span><FaInstagram /></span>
                    <span><FaYoutube /></span>
                </Social>
            </FooterContent>
            <Copyright>
                &#169; 2021 Travel. All rights reserved.
            </Copyright>
        </FooterContainer>
    )
}

export default Footer
const FooterContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background: black;
    color: white;
    padding: 20px;
`
const FooterContent = styled.div`
    display: flex;
    width: 75vw;
    justify-content: space-between;
    @media screen and (max-width: 768px) {
        flex-direction: column;
        width: 50vw;
        margin: 0 25vw;
    }
    
`
const Copyright = styled.div`
    width: 80vw;
    border-top: 1px solid rgba(255, 255, 255, 0.5);
    text-align: center;
    padding: 10px;
`
const Detail = styled.div`
    padding-left: 1vw; 
    width: 100%;
    margin: 10px;
    h2 {
        font-family: 'Racing Sans One', cursive;
    }
    p {
        font-family: 'Roboto', sans-serif;
    }
    @media screen and (max-width: 1440px) {
        padding-left: 0;
    }
`
const Pages = styled.div`
    padding-left: 1vw; 
    display: flex;
    width: 100%;
    margin: 10px;
    
    flex-direction: column;
    h3 {
        margin-bottom: 5px;
    }
    span {
        margin-top: 5px;
        cursor: pointer;
        font-family: 'Roboto', sans-serif;
    }
    @media screen and (max-width: 1440px) {
        padding-left: 0;
    }
`
const Social = styled.div`
    padding-left: 1vw; 
    width: 100%;
    margin: 10px;
    h3 {
        margin-bottom: 5px;
    }
    span {
        margin-right: 8px;
        cursor: pointer;
    }
    @media screen and (max-width: 1440px) {
        padding-left: 0;
    }
`