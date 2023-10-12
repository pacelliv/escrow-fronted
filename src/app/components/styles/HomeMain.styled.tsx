"use client"

import styled from "styled-components"

export const HomeMain = styled.main`
    display: flex;
    gap: 30px;
    width: 100%;
    height: max-content;

    @media (max-width: 900px) {
        flex-direction: column;
    }
`

export const HeroImage = styled.div`
    width: 44%;
    order: 2;
    border-radius: 4px;
    border: 1px solid transparent;
    box-shadow: 0px 0px 20px 2px #010817;

    @media (max-width: 900px) {
        width: 100%;
    }
`

export const HeroIntro = styled.div`
    width: 55%;
    order: 1;

    h1 {
        font-size: 3.5rem;
        line-height: 1.1;
        margin-bottom: 0.4em;
        letter-spacing: 0.2px;
    }

    p {
        color: #ec5990;
        letter-spacing: 0.35px;
        font-size: 1.05rem;
    }

    div {
        display: flex;
        align-items: center;
        margin-top: 5em;

        a {
            border: none;
            font-size: 0.9rem;
            padding: 1.1em 1em;
            font-weight: 600;
            border: 1px solid #516391;
            background-color: #0e101c;
            transition: all 0.2s ease-in-out;
            text-transform: uppercase;
            letter-spacing: 0.8px;
        }

        a:hover {
            background-color: #bf1650;
        }

        a:nth-child(1) {
            border-top-left-radius: 4px;
            border-bottom-left-radius: 4px;
        }

        a:nth-child(2) {
            border-top-right-radius: 4px;
            border-bottom-right-radius: 4px;
            background-color: #000;
            display: flex;
            align-items: center;
            gap: 7px;
        }

        a:hover:nth-child(2) {
            background-color: #bf1650;
        }

        @media (max-width: 900px) {
            margin: 4em 0;
        }
    }

    @media (max-width: 900px) {
        width: 100%;
    }
`

export const EscrowsSection = styled.section`
    margin: 0 auto 1em;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    letter-spacing: 0.2px;

    h1 {
        position: relative;
        font-size: 2rem;
        width: max-content;
        margin: 0 auto 1.5em;
    }

    h1::before {
        position: absolute;
        top: 40px;
        left: 0;
        content: "";
        width: 100%;
        height: 4px;
        background-color: #bf1650;
    }
`
