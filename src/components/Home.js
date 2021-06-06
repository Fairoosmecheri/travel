import React, {useRef} from 'react'
import Navbar from './Navbar'
import HeroSection from './HeroSection'
import { Locations } from './Locations'
import styled from 'styled-components'
import Membership from './Membership'
import Footer from './Footer'
const Home = () => {
    const locationRef = useRef(null)
    const membershipRef = useRef(null)
    const heroRef = useRef(null)
    return (
        <HomeContainer>
            <Navbar 
                locationRef = {locationRef}
                membershipRef = {membershipRef}
                heroRef = {heroRef}
            />
            <HeroSection data={heroRef} />
            <Locations data={locationRef}/>
            <Membership data={membershipRef}/>
            <Footer 
                locationRef = {locationRef}
                membershipRef = {membershipRef}
                heroRef = {heroRef}
            />
        </HomeContainer>
    )
}

export default Home

const HomeContainer = styled.div`
    display: flex;
    flex-direction: column;   
`