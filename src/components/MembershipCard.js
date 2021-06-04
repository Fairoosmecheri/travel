import React from 'react'
import styled from 'styled-components'
const MembershipCard = () => {
    return (
        <CardContainer>
            <div>
                <h3>Gold</h3>
                <p>Gold Member Card</p>
                <h4>Rs. 5000</h4>
            </div>
            <div>
                <h1>Know  More</h1>
            </div>
        </CardContainer>
    )
}

export default MembershipCard


const CardContainer = styled.div`
    width: 320px;
    height: 450px;
    background: white;
    margin: 0 15px;
    border-radius: 10px;
    background: url('/images/membership-card.png');
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.8), 0 6px 20px 0 rgba(0, 0, 0, 0.79);
    display: flex;
    flex-direction: column;
    background-size: cover;
    object-fit: cover;
    justify-content: space-between;
    padding: 40px 20px;
    h3 {
        color: white;
    }
    p {
        margin-top: 5px;
        color: gold;
    }
    h4 {
        font-family: 'Odibee Sans', cursive;
        color: white;
        margin-top: 5px;
    }
    h1 {
        background: #4CA95B;
        text-align: center;
        margin: 0 70px;
        color: white;
        border-radius: 15px;
        font-size: 25px;
        padding: 10px;
        font-family: 'Odibee Sans', cursive;
        cursor: pointer;
        &:hover {
            background: #478f53;
        }
        letter-spacing: 1px;
    }
`
