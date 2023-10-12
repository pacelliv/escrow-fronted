"use client"

import styled from "styled-components"

export const Container = styled.div`
    position: fixed;
    padding: 2em;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    margin: auto;
    max-width: 350px;
    min-width: 300px;
    height: max-content;
    background-color: #081229;
    color: whitesmoke;
    z-index: 99;
    box-shadow: 0px 1px 1px rgba(192,23,79,0.1),
                0px 2px 4px rgba(192,23,79,0.1),
                0px 4px 8px rgba(192,23,79,0.1),
                0px 8px 16px rgba(192,23,79,0.1),
                0px 16px 32px rgba(192,23,79,0.1);
                0px 32px 64px rgba(192,23,79,0.1);
    border-radius: 7px;
    letter-spacing: 0.3px;

    div {
        position: absolute;
        top: 10px;
        right: 10px;
        display: block;
        font-size: 1.5rem;
        cursor: pointer;
        color: #ff7aa8;;
        transition: all 0.2s ease;

        &:hover {
            color: whitesmoke;
        }
    }

    p {
        margin-top: 1em;
    }

    form {
        display: flex;
        justify-content: space-around;
        flex-direction: column;
        text-align: left;
    
        label {
            margin: 2em 0 0.2em;
            letter-spacing: 0.5px;
            color: #fff;
            font-size: 0.9rem;
        }
    
        input {
            font-size: 0.9rem;
            padding: 0.8em;
            border: 1px solid #516391;
            transition: all 0.2s ease-in-out;
            letter-spacing: 0.5px;
            color: #0e101c;
            border-radius: 4px;
            font-weight: 600;
            border: 1px solid #516391;
            background-color: #000;
            color: #fff;
        }

        input[type=submit] {
            margin-top: 1.5em;
        }

        input[type=submit]:hover {
            background-color: #bf1650;
            cursor: pointer;
        }
    }
`
