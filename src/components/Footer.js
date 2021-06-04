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
    padding: 20px 10vw;
    border-top: 1px solid black;
`
const FooterContent = styled.div`
    display: flex
`
const Copyright = styled.div`
    margin: 30px 0;
`
const Detail = styled.div`
    width: 400px;
    padding-left: 100px;
    border-right: 1px solid #103334;
    h2 {
        font-family: 'Racing Sans One', cursive;
    }
    p {
        font-family: 'Oswald', sans-serif;
    }
`
const Pages = styled.div`
    width: 400px;
    padding-left: 80px;
    display: flex;
    flex-direction: column;
    border-right: 1px solid #103334;
    h3 {
        margin-bottom: 5px;
    }
    span {
        margin-top: 5px;
        cursor: pointer;
    }
`
const Social = styled.div`
    width: 400px;
    padding-left: 80px;
    h3 {
        margin-bottom: 5px;
    }
    span {
        margin-right: 8px;
        cursor: pointer;
    }
`