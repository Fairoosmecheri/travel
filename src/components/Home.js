import React, {useRef} from 'react'
import Navbar from './Navbar'
import HeroSection from './HeroSection'
import { Locations } from './Locations'
import styled from 'styled-components'
import Membership from './Membership'
import Footer from './Footer'
import Contact from './Contact'
const Home = () => {
    const locationRef = useRef(null)
    const membershipRef = useRef(null)
    const heroRef = useRef(null)
    const contactRef = useRef(null)
    return (
        <HomeContainer>
            <Navbar 
                locationRef = {locationRef}
                membershipRef = {membershipRef}
                heroRef = {heroRef}
                contactRef = {contactRef}
            />
            <HeroSection data={heroRef} />
            <Locations data={locationRef}/>
            <Membership data={membershipRef}/>
            <Contact data={contactRef}/>
            <Footer 
                locationRef = {locationRef}
                membershipRef = {membershipRef}
                heroRef = {heroRef}
                contactRef = {contactRef}
            />
        </HomeContainer>
    )
}

export default Home

const HomeContainer = styled.div`
    display: flex;
    flex-direction: column;   
`