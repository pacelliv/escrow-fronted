"use client"

import styled from "styled-components"

export const StyledNavbar = styled.div`
    width: 90%;
    display: flex;
    gap: 7px;
    align-items: center;
    margin: 2em auto;

    .logo {
        font-size: 2.2rem;
    }

    a {
        font-size: 2.5rem;
    }

    img {
        background-color: #0e101c;
        border: 1px solid #516391;
        border-radius: 4px;
        padding: 0.35em;
        margin: auto 0 auto auto;
    }

    button {
        width: 150px;
        border: none;
        font-size: 0.9rem;
        padding: 1em;
        font-weight: 600;
        border-radius: 4px;
        border: 1px solid #516391;
        background-color: #0e101c;
        transition: all 0.2s ease-in-out;
        letter-spacing: 0.1px;
    }

    button:hover {
        border: 1px solid #bf1650;
    }

    @media (max-width: 470px) {
        a {
            font-size: 2rem;
        }

        button {
            margin: auto 0 auto auto;
            padding: 0.8em;
            font-size: 0.85rem;
        }

        .logo,
        img {
            display: none;
        }
    }
`
