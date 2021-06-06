import React from 'react'
import styled from 'styled-components'
import MembershipCard from './MembershipCard'
const Membership = (props) => {
    return (
        <div ref={props.data}>
            <MembershipContainer>
                <MembershipHeading>Memberships</MembershipHeading>
                <MembershipCardView>
                    <MembershipCard />
                    <MembershipCard />
                    <MembershipCard />
                </MembershipCardView> 
            </MembershipContainer>
        </div>
        
    )
}

export default Membership

const MembershipContainer = styled.div`
    width: 100vw;
    height: 100vh;
    color: black;
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-direction: column;
    padding: 20px 0;
    @media screen and (max-width: 768px) {
        height: min-content;
        
    }
`
const MembershipCardView = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    @media screen and (max-width: 768px) {
        flex-direction: column;
        
    }
`
const MembershipHeading = styled.h2`
    font-size: 50px;
    margin-top: 20px;
`