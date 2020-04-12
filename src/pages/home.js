import React, {useState, useCallback} from 'react';
import styled from 'styled-components';

const Container = styled.div`
    width:100%;
    height:100vh;
    display:flex;
    justify-content:center;
    flex-direction:column;
    align-items:center;
    box-sizing:border-box;
`

const Title = styled.h1`
    width:80%;
    text-align:center;
    font-size:5em;
    margin-bottom:0;
`

const Form = styled.div `
    display:flex;
    justify-content:center;
    flex-direction:column;
    align-items:center;


    & > *{
        margin: 10px 0;
    }
`



const SendButton = styled.div`
    background:var(--accent);
    padding:20px;
    border-radius:5px;
    color:white;
    text-align:center;
    cursor:pointer;
    width:100%;
    box-sizing:border-box;
`


const Input = styled.input`
    border:1px solid #eaeaea;
    padding:20px;
    width:100%;
    box-sizing:border-box;
`


const BASE_URL_WHATSAPP = `https://wa.me/[PHONE]`
export const Home = () => {

    const [phone, setPhone] = useState("");

    const sendWhatsApp = useCallback((phone) => {
        window.location.href= BASE_URL_WHATSAPP.replace("[PHONE]", phone).split("").join("")
    })


    return(
        <Container>
            <Title>Whatsfast.</Title>
            <p>Send a Whatsapp message without save the number! 🕵️‍♀️🕵🕵️‍♂️ </p>

            <Form>

                <label>
                    Phone Number


                    <Input 
                    type="number"
                    placeholder="54 XXXX XXXX"
                    onChange = {(e) => setPhone(e.target.value)}
                    onKeyPress={event => {
                        if (event.key === 'Enter') {
                            sendWhatsApp(phone)
                        }
                    }}
                    value={phone}

                    />

                </label>

                


                <SendButton onClick={() => sendWhatsApp(phone)}>
                    Send Whatsapp
                </SendButton>
                


            </Form>
        </Container>
    )
}