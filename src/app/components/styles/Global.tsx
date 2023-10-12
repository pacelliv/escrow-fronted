"use client"

import { createGlobalStyle } from "styled-components"

const GlobalStyles = createGlobalStyle`
    *,
    *::before,
    *::after {
        box-sizing: border-box;
        padding: 0;
        margin: 0;
    }

    html,
    body {
        max-width: 100vw;
        overflow-x: hidden;
        line-height: 1.4;
    }

    body {
        min-height: 100vh;
        background-color: #081229;
        color: #fff;
        display: flex;
        flex-direction: column;
    }

    button {
        color: inherit;
        cursor: pointer;
    }

    a {
        color: inherit;
        text-decoration: none;
    }
`

export default GlobalStyles
