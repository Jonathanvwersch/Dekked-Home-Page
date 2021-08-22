import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
    section {
        width: 100%;
    }

    .innerContainer {
        max-width: 1400px;
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
