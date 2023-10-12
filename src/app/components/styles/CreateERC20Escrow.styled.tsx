"use client"

import styled from "styled-components"

export const Wrapper = styled.main`
    max-width: 90%;
    margin: 4.5em auto auto;
`

export const Container = styled.div`
    background-color: #bf1650;
    letter-spacing: 0.3px;
    max-width: 600px;
    min-width: 300px;
    margin: 0 auto;
    text-align: center;
    padding: 2.5em;
    border-radius: 7px;

    p {
        margin-top: 0.8em;
        margin-bottom: 1.2em;
    }
`

export const Form = styled.form`
    display: flex;
    justify-content: space-around;
    flex-direction: column;
    text-align: left;

    label {
        margin: 2em 0 0.2em;
        letter-spacing: 0.5px;
        color: #fff;
        font-size: 1.1rem;
    }

    input {
        font-size: 0.9rem;
        padding: 0.8em;
        font-weight: 600;
        border: 1px solid #516391;
        background-color: #dbdbdb;
        transition: all 0.2s ease-in-out;
        letter-spacing: 0.5px;
        color: #0e101c;
        border-radius: 4px;
    }

    input:hover {
        border: 1px solid #0e101c;
    }

    input:last-child {
        color: #0e101c;
        cursor: pointer;
        margin-top: 3.5em;
    }

    input:last-child:hover {
        background-color: #999999;
        border: 1px solid #516391;
    }

    select {
        font-size: 0.9rem;
        padding: 0.8em;
        font-weight: 600;
        border: 1px solid #516391;
        background-color: #dbdbdb;
        transition: all 0.2s ease-in-out;
        letter-spacing: 0.1px;
        color: #0e101c;
        border-radius: 4px;
    }

    select:hover {
        border: 1px solid #0e101c;
    }
`
