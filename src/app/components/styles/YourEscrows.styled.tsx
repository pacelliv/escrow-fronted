"use client"

import styled from "styled-components"

interface CreateEscrowProps {
    isConnected: boolean
}

export const Wrapper = styled.main<CreateEscrowProps>`
    width: 90%;
    margin: 5em auto auto;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    flex-direction: ${({ isConnected }) => !isConnected && "column"};
    align-items: ${({ isConnected }) => !isConnected && "center"};
    gap: ${({ isConnected }) => isConnected && "50px 11px"};

    h2 {
        width: max-content;
        letter-spacing: 0.3px;
    }

    button {
        display: block;
        font-size: 0.9rem;
        padding: 1em;
        font-weight: 600;
        border: 1px solid #516391;
        background-color: #0e101c;
        transition: all 0.2s ease-in-out;
        letter-spacing: 0.3px;
        color: inherit;
        cursor: pointer;
        border-radius: 4px;
        width: 150px;
        margin: 6em 0 0;

        &:hover {
            background-color: #bf1650;
        }
    }
`
