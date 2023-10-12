"use client"

import styled from "styled-components"

export const Wrapper = styled.main`
    width: 90%;
    height: min-content;
    margin: 5em auto auto;
    overflow-y: hidden;
    position: relative;
    padding: 2em 4.5em;
    border-radius: 4px;
    border: 1px solid transparent;
    box-shadow: 0px 0px 20px 2px #010817;
    display: flex;
    justify-content: space-between;
    gap: 15px;

    @media (max-width: 545px) {
        padding: 2em 2.5em;
    }

    @media (max-width: 1015px) {
        flex-direction: column-reverse;
    }
`

export const Section = styled.div`
    display: flex;
    align-items: center;
    width: 650px;

    @media (max-width: 1015px) {
        width: 100%;
    }
`

export const Panel = styled.div`
    width: 100%;
    position: relative;
    border-radius: 4px;
    background-color: rgba(0, 0, 0, 0.2);
    backdrop-filter: saturate(120%) blur(1.5px);
    padding: 4.5em 2.5em 2.5em;

    @media (max-width: 545px) {
        padding: 4.5em 2em 2.5em;
    }

    @media (max-width: 1015px) {
        margin-top: 2em;
    }
`

export const ReturnButton = styled.div`
    display: flex;
    position: absolute;
    top: 0;
    right: 0;

    span {
        margin: auto 0 auto auto;
        padding: 0.3em 0.5em;
        background-color: #1e2128;
        border-top-left-radius: 4px;
        border-bottom-left-radius: 4px;
    }

    a {
        background-color: #1e2128;
        padding: 0.3em 0.5em;
        border-top-right-radius: 4px;
        border-bottom-right-radius: 4px;
    }

    a:hover {
        opacity: 0.8;
    }
`

export const ButtonContainer = styled.div`
    margin-top: 3em;

    button {
        display: block;
        width: 100%;
        font-size: 1rem;
        padding: 0.8em;
        background-color: #00c04b;
        border: none;
        margin-top: 0.7em;
        border-radius: 4px;
        letter-spacing: 0.2px;
        transition: all 0.2s ease-in-out;
    }

    button:hover {
        background-color: #009c3c;
    }
`
