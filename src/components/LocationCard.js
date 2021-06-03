import React, {useState} from 'react'
import styled from 'styled-components'
import { FaAngleRight, FaArrowRight } from 'react-icons/fa';    
export const LocationCard = () => {
    const [hover, setHover] = useState(false)
    const onHover = () => {
        setHover(!hover)
    } 
    return (
        <CardContainer>
            <CardHeading>
                WAYANAD
            </CardHeading>
            <CardImage>
                <img src="/images/wayanad.png" alt=""/>
            </CardImage>
            <CardDescription>
            Aranamala is every bit as intriguing and adventurous, even on a hot summer day weather inside the forest is cold and refreshing which makes both places a wonderland
            </CardDescription>
            <CardButton onMouseEnter={onHover} onMouseLeave={onHover}>Know More {hover ? <FaArrowRight/> : <FaAngleRight/>}</CardButton>
        </CardContainer>
    )
}

const CardContainer = styled.div`
    width: 320px;
    height: 450px;
    background: white;
    margin: 0 15px;
    border-radius: 10px;
    background: rgba( 255, 255, 255, 0.10 );
    box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
    backdrop-filter: blur( 4px );
    -webkit-backdrop-filter: blur( 4px );
    border-radius: 10px;
    border: 1px solid rgba( 255, 255, 255, 0.18 );
    display: flex;
    flex-direction: column;
    background-attachment: fixed;
    align-items: center;
    padding: 10px;
`
const CardHeading = styled.div`
    font-family: 'Teko', sans-serif;
    font-size: 30px;
`
const CardImage = styled.div`
    img {
        width: 300px;
        height: 200px;
        object-fit: cover;
        border-radius: 10px;
    }    
`
const CardDescription = styled.p`
    margin-top: 15px;
    text-align: center;
`
const CardButton = styled.span`
    margin-top: 10px;
    cursor: pointer;
    background: #4CA95B;
    padding: 8px 30px;
    letter-spacing: 2px;
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    &:hover {
        background: #478f53;
    }
`