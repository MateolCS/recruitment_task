import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    *{
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }

    body{
        background-color: #F6F1F1;
        font-family: 'Lato', sans-serif;
    }

    html, body, #root{
        height: 100%;
        width: 100%;
    }
`