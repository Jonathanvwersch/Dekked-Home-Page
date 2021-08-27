import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
    section {
        width: 100%;
    }

    .innerContainer {
        max-width: 1450px;
        display: flex;
        align-items: center;
        margin: auto;
        padding-left: ${({ theme }) => theme.spacers.size32};
        padding-right: ${({ theme }) => theme.spacers.size32};
    }

    body {
        display: flex;
        flex-direction: column;
        min-height: 100vh;
        min-height: -webkit-fill-available;
    }

    .hidden {
        visibility: hidden;
        opacity: 0;
        transition: visibility 0s 1s, opacity 1s linear;
    }

    .visible {
        visibility: visible;
        opacity: 1;
        transition: opacity 1s linear;
    }


    * {
        margin: 0;
        box-sizing: border-box;
        font-family: Inter;
        color: ${({ theme }) => theme.colors.fontColor};
        &:focus {
            outline: 0;
        }
        &:disabled {
            cursor: not-allowed;
        }
    }
`

export default GlobalStyle
