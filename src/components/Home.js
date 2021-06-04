import React from 'react'
import Navbar from './Navbar'
import HeroSection from './HeroSection'
import { Locations } from './Locations'
import styled from 'styled-components'
import MyComponent from 'react-full-page-scroller'
import Membership from './Membership'
const Home = () => {
    return (
        <HomeContainer>
            <Navbar />
            <HeroSection />
            <Locations />
            <Membership />
        </HomeContainer>
    )
}

export default Home

const HomeContainer = styled.div`
    display: flex;
    flex-direction: column;
`