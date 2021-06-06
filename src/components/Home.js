import React from 'react'
import Navbar from './Navbar'
import HeroSection from './HeroSection'
import { Locations } from './Locations'
import styled from 'styled-components'
import Membership from './Membership'
import Footer from './Footer'
const Home = () => {
    return (
        <HomeContainer>
            <Navbar />
            <HeroSection />
            <Locations />
            <Membership />
            <Footer />
        </HomeContainer>
    )
}

export default Home

const HomeContainer = styled.div`
    display: flex;
    flex-direction: column;
`