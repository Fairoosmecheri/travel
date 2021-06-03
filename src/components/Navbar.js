import React from 'react'
import styled from 'styled-components'
import {useState} from 'react'
const Navbar = () => {
    const [colorChange, setColorchange] = useState(false);
    const changeNavbarColor = () =>{
        if(window.scrollY >= 50){
        setColorchange(true);
        console.log("hh")
        }
        else{
        setColorchange(false);
        console.log("DD")
        }
    };
    window.addEventListener('scroll', changeNavbarColor);
    return (
        <NavbarContainer colorChange = {colorChange}>
            <NavbarWrapper>
                <NavbarLogo>
                    travel. 
                </NavbarLogo>
                <NavbarMenu>
                    <a><span href="">Locations</span></a>
                    <a><span href="">Membership</span></a>
                    <a><span href="">Contact Us</span></a>
                </NavbarMenu>
                <NavbarRightMenu>
                    <span>Login</span>
                </NavbarRightMenu>
                
            </NavbarWrapper>
            <NavbarIcon>

                </NavbarIcon>
        </NavbarContainer>
    )
}

export default Navbar

const NavbarContainer = styled.div`
    height: 5rem;
    width: 100vw;
    z-index: 10;
    position: fixed;
    top: 0;
    background: ${({colorChange}) => (colorChange ? 'black' : 'transparent')};
    transition: background 200ms ease;
`
const NavbarWrapper = styled.div`
    width: 90vw;
    height: 4rem;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between
`
const NavbarLogo = styled.div`
    color: white;
    font-size: 40px;
    cursor: pointer;
    text-align: center;
    margin-top: 10px;
    font-family: 'Racing Sans One', cursive;
`
const NavbarMenu = styled.div`
    color: white;
    margin-top: 10px;
    cursor: pointer;
    font-family: 'Oswald', sans-serif;
    a {

        font-size: 18px;
        margin: 0 15px;
        span {
            padding: 0 4px;
            letter-spacing: 1.42px;
            position: relative;
            &:after {
                content: "";
                height: 2px;
                background: white;
                position: absolute;
                left: 0;
                right: 0;
                bottom: -6px;
                opacity: 0;
                transform-origin: left center;
                transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
                transform: scaleX(0);
            }
        }
        &:hover {
            span: after {
                transform: scaleX(1);
                opacity: 1;
            }
        }
    }
    
`
const NavbarRightMenu = styled.div`
    color: white;
    margin-top: 10px;
    font-family: 'Oswald', sans-serif;
    font-weight: 400;
    span {
        cursor: pointer;
        background: #4CA95B;
        padding: 8px 30px;
        letter-spacing: 2px;
        border-radius: 10px;
        &:hover {
            background: #478f53;
        }
    }
`
const NavbarIcon = styled.div`

`