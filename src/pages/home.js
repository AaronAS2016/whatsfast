import React from 'react';
import styled from 'styled-components';
import { FormSend } from '../components/formSend';
import { DetailSection } from '../components/detail';
import { Footer } from '../components/footer';

const Wrapper = styled.div`
    height:100%;
    display:flex;
    flex-direction:column;
    animation: fadeIn .3s;

`
const Container = styled.div`
    width:100%;
    padding: 20% 0;
    margin:20px 0;
    display:flex;
    justify-content:center;
    flex-direction:column;
    align-items:center;
    box-sizing:border-box;
`

const Title = styled.h1`
    width:80%;
    text-align:center;
    margin-bottom:0;
    font-size:4em;

`

export const Home = () => {
    return (
        <Wrapper>
            <Container>
                <Title>Whatsfast.</Title>
                <p style={{ textAlign: "center" }}>Send a Whatsapp message without save the number! 🕵️‍♀️🕵🕵️‍♂️ </p>

                <FormSend />

            </Container>


            <DetailSection />


            <Footer />
        </Wrapper>

    )
}