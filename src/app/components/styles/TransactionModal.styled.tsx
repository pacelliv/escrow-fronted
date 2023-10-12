"use client"

import styled from "styled-components"

export const ModalContainer = styled.div`
    position: fixed;
    padding: 2em 3em;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    margin: auto;
    max-width: 800px;
    min-width: 300px;
    background-color: #081229;
    color: whitesmoke;
    height: 475px;
    z-index: 99;
    box-shadow: 0px 1px 1px rgba(192,23,79,0.1),
                0px 2px 4px rgba(192,23,79,0.1),
                0px 4px 8px rgba(192,23,79,0.1),
                0px 8px 16px rgba(192,23,79,0.1),
                0px 16px 32px rgba(192,23,79,0.1);
                0px 32px 64px rgba(192,23,79,0.1);
    overflow-x: hidden;
    overflow-y: hidden;
    border-radius: 7px;
    letter-spacing: 0.3px;

    h1 {
        letter-spacing: 0.5px;
    }

    .close-modal {
        display: block;
        font-size: 1.5rem;
        margin: auto 0 1em auto;
        cursor: pointer;
        color: #ff7aa8;;
        transition: all 0.2s ease;
    }

    .close-modal:hover {
        color: whitesmoke;
    }

    .loader-container h1 {
        text-align: center;
        margin-bottom: 1em;
    }

    .loader {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        margin-bottom: 0.5em;
    }

    .text-container {
        letter-spacing: 0.5px;
        font-size: 0.75rem;
        margin-bottom: 2em;
        width: 100%;
        display: flex;
        justify-content: space-between;
        gap: 30px;
    }

    .icon-container {
        background-color: #0066ff;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 30px;
        height: 30px;
        position: relative;
    }

    .spinner {
        position: absolute;
        top: 15px;
        left: 50%;
        width: 20px;
        height: 20px;
        border-radius: 50%;
        border: 4px solid white;
        border-top: 4px solid #f8f9fa;
        border-right: 4px solid #dee2e6;
        border-bottom: 4px solid #adb5bd;
        border-left: 4px solid #495057;
        animation: 1.5s linear infinite spinner;
        transform: translate3d(-50%, -50%, 0);
        will-change: transform;
    }

    @keyframes spinner {
        0% {
            transform: translate3d(-50%, -50%, 0) rotate(0deg);
        }
        100% {
            transform: translate3d(-50%, -50%, 0) rotate(360deg);
        }
    }

    .bar {
        left: 50px;
        width: calc(100% - 100px);
        background-color: #0066ff;
        height: 10px;
        position: absolute;
        z-index: -1;
    }

    .icon {
        font-size: 1rem;
    }

    .transaction {
        padding: 2em;
        border: 1.8px solid #343a40;
        border-radius: 4px;
        display: flex;
        justify-content: space-between;
        gap: 20px;
        margin-bottom: 2.5em;
    }

    .hash-container {
        overflow: hidden;
    }

    .hash-link {
        text-decoration: underline;
        color: #ff7aa8;
        transition: all 0.2s ease;
    }

    .hash-link:hover {
        color: whitesmoke;
    }

    .add-token {
        display: block;
        margin: 0 auto;
        padding: 0.6em 1.2em;
        border: 1px solid #516391;
        background-color: #0e101c;
        transition: all 0.2s ease-in-out;
        letter-spacing: 0.3px;
        color: white;
        border-radius: 4px;
        font-size: 1rem;
        font-family: inherit;
        transition: all 0.4s ease;
    }

    .add-token:hover {
        border: 1px solid #bf1650;
    }

    @media (max-width: 935px) {
        margin: auto 2.7em auto;
        padding: 2em;
    }

    @media (max-width: 745px) {
        margin: auto 1em auto;

        .loader-container h1 {
            font-size: 1.6rem;
        }
    }

    @media (max-width: 480px) {
        .align-right {
            text-align: right;
        }
    }

    @media (max-width: 450px) {
        .loader-container h1 {
            font-size: 1.4rem;
        }
    }
`
