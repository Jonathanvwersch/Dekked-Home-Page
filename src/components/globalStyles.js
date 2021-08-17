import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
    a {
        text-decoration: none;
        &:focus {
            color: ${({ theme }) => theme.colors.primary}!important;
        }
        &:hover {
            color: ${({ theme }) => theme.colors.primary};
        }
    }

    section {
        width: 100%;
    }

    .innerContainer {
        max-width: 1280px;
        display: flex;
        align-items: center;
        margin: auto;
        padding: 0px ${({ theme }) => theme.spacers.size32};
    }

    body {
        display: flex;
        flex-direction: column;
        min-height: 100vh;
        min-height: -webkit-fill-available;
    }

    * {
        margin: 0;
        box-sizing: border-box;
        font-family: ${({ theme }) => theme.typography.fontFamily};
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
