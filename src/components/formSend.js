import React, { useState, useCallback } from 'react'
import styled from 'styled-components';

import PhoneInput from 'react-phone-input-2'

import 'react-phone-input-2/lib/bootstrap.css'


const BASE_URL_WHATSAPP = `https://wa.me/[PHONE]`

const Form = styled.div`
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


const Label = styled.label`
    margin:20px;

`

export const FormSend = () => {
    const [phone, setPhone] = useState("");



    const sendWhatsApp = useCallback((phone) => {
        let phoneNumber = phone.replace(/\D/g, '');
        window.location.href = BASE_URL_WHATSAPP.replace("[PHONE]", phoneNumber).split("").join("")
    })

    return (

        <Form>
            <Label>
                Phone

                <PhoneInput
                    country={'us'}
                    value={phone}
                    onChange={phone => setPhone(phone)}
                    placeholder="Phone Number"
                    preferredCountries={["us", "ar"]}
                    onKeyPress={event => {
                        if (event.key === 'Enter') {
                            sendWhatsApp(phone)
                        }
                    }}
                    inputProps={{
                        name: 'phone',
                        required: true,
                        autoFocus: true
                    }}

                />

            </Label>



            <SendButton onClick={() => sendWhatsApp(phone)}>
                Send Whatsapp
        </SendButton>

        </Form>
    )
}