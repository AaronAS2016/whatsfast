import React from 'react'
import styled from 'styled-components';


const Container = styled.footer`
    width:100%;
    height:100px;
    border:1px solid #e1e4e8;
    color: #586069;
    background:#fafbfc;
    display:flex;
    align-items:center;
    justify-content:center;
    box-sizing:border-box;
    margin-top:auto;
`

const Link = styled.a`

    display:flex;
    align-items:center;
`


export const Footer = () => (
    <Container>

        Made by Aaron Saban <Link href="https://github.com/AaronAS2016" target="_blank" >

            <img src={"https://img.favpng.com/4/20/21/github-computer-icons-icon-design-png-favpng-KaDTwuHWgG8D1qn47QW2hK7Gj.jpg"} style={{width:"24px",  marginLeft:5}} />
        </Link>


    </Container>
)