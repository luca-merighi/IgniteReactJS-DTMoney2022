import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }
    
    :focus {
        outline: none;
        box-shadow: 0 0 0 2px ${props => props.theme['green-500']};
    }
    
    body {
        background-color: ${props => props.theme['gray-800']};
        color: ${props => props.theme['gray-100']};
        -webkit-font-smoothing: antialiased;
    }
    
    body, input, button {
        font-family: 'Roboto', sans-serif;
    }
`