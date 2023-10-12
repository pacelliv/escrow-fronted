"use client"

import styled from "styled-components"

interface CreateEscrowProps {
    isConnected: boolean
}

export const Wrapper = styled.main<CreateEscrowProps>`
    width: 90%;
    margin: auto auto auto;
    display: ${({ isConnected }) => !isConnected && "flex"};
    flex-direction: ${({ isConnected }) => !isConnected && "column"};
    align-items: ${({ isConnected }) => !isConnected && "center"};

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

export const Form = styled.form`
    display: flex;
    justify-content: space-around;
    flex-direction: column;
    height: 100%;
    width: 350px;

    label {
        margin: 2em 0 0.5em;
        letter-spacing: 0.5px;
    }

    select {
        font-size: 0.9rem;
        padding: 1em;
        font-weight: 600;
        border: 1px solid #516391;
        background-color: #0e101c;
        transition: all 0.2s ease-in-out;
        letter-spacing: 0.1px;
        color: inherit;
        border-radius: 4px;
    }

    select:focus {
        outline: 1px solid #bf1650;
        border: 1px solid transparent;
    }

    select:hover {
        border: 1px solid #bf1650;
    }

    input {
        font-size: 0.9rem;
        padding: 1em;
        font-weight: 600;
        border: 1px solid #516391;
        background-color: #0e101c;
        transition: all 0.2s ease-in-out;
        letter-spacing: 0.8px;
        color: inherit;
        cursor: pointer;
        margin: 3em 0 0;
        border-radius: 4px;
    }

    input:hover {
        background-color: #bf1650;
    }
`
