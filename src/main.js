import React from "react";

import  { createGlobalStyle } from "styled-components";
import { Home } from "./pages/home";

const GlobalStyle = createGlobalStyle`

  :root{
    --primary: #fff;
    --secondary:#000;
    --accent: #28AE5D;
    --accent-tint: #53bb7c;
    --accent2:#1F98E9;

    --font-small: 14px;
    --font-medium: 22px;
    --font-large: 28px;
  }
  

  html, body, #app {
    margin: 0;
    padding: 0;
    scroll-behavior: smooth;
    height:100%;  
  }
  body {
    font-family: helvetica;
    font-weight: 300;
  }

  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translate3d(0, 100%, 0);
    }

    to {
      opacity: 1;
      transform: translate3d(0, 0, 0);
    }
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
    }

    to {
      opacity: 1;
    }
  }

  input,
  label,
  select,
  button,
  textarea
  {
    margin:0;
    border:0;
    padding:0;
    display:inline-block;
    vertical-align:middle;
    white-space:normal;
    background:none;
    line-height:1;
    
    /* Browsers have different default form fonts */
    font-size:13px;
    font-family:Arial;
  }

  /* do not add bullets, margin or padding in lists */
  ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
  }

  /* Remove the stupid outer glow in Webkit */
  input:focus
  {
    outline:0;
  }

  /** remove arrows in input number */

  /* Chrome, Safari, Edge, Opera */
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  /* Firefox */
  input[type=number] {
    -moz-appearance: textfield;
  }


`;

export const Main = () => {
  console.log("%cCoded with love by Aaron Saban 🚀", "font-size:1-1em; font-weight:bold;")

  return (
    <>
      <GlobalStyle />
      <Home />
    </>
  );
};
