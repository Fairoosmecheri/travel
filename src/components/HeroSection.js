import React from 'react'
import styled from 'styled-components'

const HeroSection = (props) => {
    return (
        // <div >
            <HeroContainer ref={props.data}>
                <HeroContent>
                    <HeroH1>DISCOVER</HeroH1>
                </HeroContent>
            </HeroContainer>
        // </div>
        
    )
}

export default HeroSection

const HeroContainer = styled.div`
    background-image: url('/images/hero.png');
    height: 100vh;
    z-index: -1;
    width: 100vw;
`
const HeroContent = styled.div`
    width: 50vw;
    height: 50vh;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 25vh auto;
`
const HeroH1 = styled.h1`
    font-size: 80px;
    color: white;
    font-family: 'Work Sans', sans-serif;
    letter-spacing: 30px;
    @media screen and (max-width: 768px) {
        font-size: 30px;
        letter-spacing: 20px;
    }
`