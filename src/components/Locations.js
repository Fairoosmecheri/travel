import React from 'react'
import styled from 'styled-components'
import { LocationCard } from './LocationCard'

export const Locations = () => {
    return (
        <LocationContainer>
            <LocationHeading>Locations</LocationHeading>
            <LocationCardView>
                <LocationCard />
                <LocationCard />
                <LocationCard />
            </LocationCardView> 
        </LocationContainer>
    )
}
const LocationContainer = styled.div`
    width: 100vw;
    height: calc(100vh - 5rem); 
    color: white;
    background: url('images/location-bg.jpg');
    background-size: cover;
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-direction: column;
    padding: 20px 0;

    @media screen and (max-width: 768px) {
        height: min-content;
    }
`
const LocationCardView = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    @media screen and (max-width: 768px) {
        flex-direction: column;

    }
`
const LocationHeading = styled.h2`
    font-size: 50px;
`