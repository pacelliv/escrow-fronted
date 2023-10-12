"use client"

import styled from "styled-components"

export const EscrowsContainer = styled.div`
    margin-top: 4em;
    display: flex;
    flex-direction: column;
    gap: 70px;
    overflow-x: scroll;
    padding-bottom: 1em;

    &::-webkit-scrollbar {
        height: 7px;
    }

    &::-webkit-scrollbar-track {
        border-bottom-left-radius: 10px;
        border-bottom-left-radius: 10px;
        padding: 0.2em;
    }

    &::-webkit-scrollbar-thumb {
        border-radius: 10px;
        background-color: #bababa;
    }

    &::-webkit-scrollbar-thumb:hover {
        background-color: #e8e8e8;
    }
`

export const Container = styled.div`
    display: flex;
    gap: 11px;

    @media (max-width: 1200px) {
        min-width: 1100px;
    }
`

export const Card = styled.div`
    border-radius: 4px;
    background-color: #0e101c;
    min-width: 295px;
`

export const TopCard = styled.div`
    padding: 0.3em 0;
    background-color: #4f6294;
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
    display: flex;
    justify-content: space-around;

    div {
        width: 50%;
    }

    div:nth-child(1) {
        border-right: 1px solid gray;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 7px;

        span {
            display: inline-block;
            border-radius: 50%;
            background-color: green;
            width: 10px;
            height: 10px;
        }
    }

    div:nth-child(2) {
        border-left: 1px solid gray;
    }
`

export const MiddleCard = styled.div`
    padding: 2em 0;

    p {
        margin: 0.5em 0 0.8em;
        font-size: 1rem;
    }
`

export const BottomCard = styled.div`
    padding: 0.3em 0;
    background-color: #bf1650;
    border-bottom-left-radius: 4px;
    border-bottom-right-radius: 4px;
    transition: all 0.1s ease-in-out;

    a {
        display: inline-block;
        width: 100%;
    }

    &:hover {
        cursor: pointer;
        background-color: #950638;
    }
`
