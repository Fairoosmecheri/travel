import React from 'react'
import styled from 'styled-components'

const Contact = (props) => {
    return (
        <ContactContainer ref={props.data}>
            <ContactForm>
                <h1>Get In Touch</h1>
                <form>
                    <div className="form-group">
                        <input type="email" className="form-control" placeholder="Enter Full Name" />
                    </div>
                    <div className="form-group">
                        <input type="email" className="form-control" placeholder="Enter Email" />
                    </div>
                    <div className="form-group">
                        <textarea className="form-control"rows="6" placeholder='Message'></textarea>
                    </div>
                    <span type="submit">Send</span>
                </form>
            </ContactForm>
        </ContactContainer>
    )
}

export default Contact
const ContactContainer = styled.div`
 background: black;
 color: white;
 height: 100vh;
 width: 100vw;
 background: url('/images/contact.jpg');
 background-size: cover;
 padding-top: 100px;
 padding-bottom : 100px;
 @media screen and (max-width: 740px) {
    height: 100%;
}
`
const ContactForm = styled.div`
    background: rgba( 255, 255, 255, 0.25 );
    box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
    backdrop-filter: blur( 4px );
    -webkit-backdrop-filter: blur( 4px );
    border-radius: 10px;
    border: 1px solid rgba( 255, 255, 255, 0.18 );
    margin-top: 50px;
    width: 40vw;
    margin: 30px auto;
    text-align: center;
    padding: 30px; 
    font-family: 'Oswald', sans-serif;
    div {
        padding: 10px;
        width: 33vw;
        margin: 0 auto;
        @media screen and (max-width: 740px) {
            width: 60vw;
        }
    }
    span {
        cursor: pointer;
        background: #4CA95B;
        padding: 8px 30px;
        letter-spacing: 2px;
        border-radius: 10px;
        &:hover {
            background: #478f53;
        }
    }
    @media screen and (max-width: 740px) {
        width: 70vw;
    }
`