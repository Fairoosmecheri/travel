import React from 'react'
import styled from 'styled-components'
import MembershipCard from './MembershipCard'
const Membership = () => {
    return (
        <MembershipContainer>
            <MembershipHeading>Memberships</MembershipHeading>
            <MembershipCardView>
                <MembershipCard />
                <MembershipCard />
                <MembershipCard />
            </MembershipCardView> 
        </MembershipContainer>
    )
}

export default Membership

const MembershipContainer = styled.div`
    width: 100vw;
    height: calc(100vh - 5rem); 
    color: black;
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-direction: column;
    padding: 20px 0;
`
const MembershipCardView = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`
const MembershipHeading = styled.h2`
    font-size: 50px;
`