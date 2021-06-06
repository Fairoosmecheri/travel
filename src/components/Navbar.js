import React from 'react'
import styled from 'styled-components'
import {useState} from 'react'
import { FiMenu } from 'react-icons/fi'
import { CgClose } from 'react-icons/cg'
const Navbar = (props) => {
    const [colorChange, setColorchange] = useState(false);
    const [menuStatus, setMenuStatus] = useState(false);
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
    const locationRef = props.locationRef
    const membershipRef = props.membershipRef
    const heroRef = props.heroRef
    const onLocationClick = () => {
        locationRef.current.scrollIntoView()
    }
    const onMembershipClick = () => {
        membershipRef.current.scrollIntoView()
    }
    const onLogoClick = () => {
        heroRef.current.scrollIntoView()
    }
    window.addEventListener('scroll', changeNavbarColor);
    return (
        <NavbarContainer colorChange = {colorChange}>
            <NavbarWrapper>
                <NavbarLogo onClick={onLogoClick}>
                    travel. 
                </NavbarLogo>
                <NavbarMenu>
                    <a><span onClick={onLocationClick}>Locations</span></a>
                    <a><span onClick={onMembershipClick}>Membership</span></a>
                    <a><span>Contact Us</span></a>
                </NavbarMenu>
                <NavbarRightMenu>
                    <span>Login</span>
                </NavbarRightMenu>
                <NavbarIcon>
                    <FiMenu onClick={() => setMenuStatus(true)} />
                </NavbarIcon>
                <Sidebar show={menuStatus}>
                    <MenuCloseButton>
                        <CgClose onClick={() => setMenuStatus(false)} /> 
                    </MenuCloseButton>
                    <li><span>Locations</span></li>
                    <li><span>Memberships</span></li>
                    <li><span>Contact Us</span></li>
                    <span className='loginBtn'>Login</span>
                </Sidebar>
            </NavbarWrapper>
            
        </NavbarContainer>
    )
}

export default Navbar

const Sidebar = styled.div`
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    background: white;
    width: 300px; 
    list-style: none;
    padding: 20px;
    display: flex;
    flex-direction: column;
    text-align: start;
    transform: ${props => props.show ? 'translateX(0)' : 'translateX(100%)'};
    transition: transform 0.2s;
    li {
        padding: 15px 0;
        border-bottom: 1px solid rgba(0, 0, 0, .2);
        span {
            font-weight: 500;
            cursor: pointer;
        }
    }
    .loginBtn{
        cursor: pointer;
        background: #4CA95B;
        padding: 8px 30px;
        letter-spacing: 2px;
        border-radius: 10px;
        color: white;
        width: min-content;
        margin: 15px auto;
        font-family: 'Oswald', sans-serif;
        &:hover {
            background: #478f53;
        }
    }
`
const MenuCloseButton = styled.div`
    cursor: pointer;
    display: flex;
    justify-content: flex-end;
    font-size: 30px;
    margin-top: 10px;
    margin-right: 10px;
`
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
    @media screen and (max-width: 760px) {
        display: none;
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
    @media screen and (max-width: 768px) {
        display: none;
    }
`
const NavbarIcon = styled.div`
    color: white;
    font-size: 40px;
    margin-top: 30px;
    display: none;
    cursor: pointer;
    FiMenu {
        
    }
    @media screen and (max-width: 768px) {
        display: block;
    }
`