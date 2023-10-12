"use client"

import styled from "styled-components"

export const TimerContainer = styled.div`
    width: 100%;
`

export const Timer = styled.div`
    div:first-child {
        margin: 0 0 1.5em 0;

        p {
            margin-bottom: 1em;
            text-transform: uppercase;

            @media (max-width: 1015px) {
                margin-bottom: 2em;
            }
        }

        @media (max-width: 1015px) {
            font-size: 1.2rem;
            text-align: center;
        }
    }

    div:last-child {
        margin: 0;
        border-radius: 3px;
        display: grid;
        grid-template-columns: repeat(7, 1fr);
        text-align: center;
        font-size: 1.8rem;

        small {
            font-size: 0.8rem;
            letter-spacing: 0.6px;
        }

        @media (max-width: 545px) {
            font-size: 1.5rem;
        }
    }
`
