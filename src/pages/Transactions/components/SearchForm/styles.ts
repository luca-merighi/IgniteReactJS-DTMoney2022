import styled from 'styled-components'

export const SearchFormContainer = styled.form`
    display: flex;
    gap: 1rem;
    
    input {
        flex: 1;
        background-color: ${props => props.theme['gray-900']};
        padding: 1rem;
        
        color: ${props => props.theme['gray-300']};
        
        border: none;
        border-radius: 6px;
        
        &::placeholder {
            color: ${props => props.theme['gray-500']};
        }
    }
    
    button {
        padding: 1rem;
        background-color: transparent;
        
        display: flex;
        gap: 0.75rem;
        align-items: center;
        justify-content: center;
        
        font-weight: 700;
        color: ${props => props.theme['green-300']};
        
        border: 2px solid ${props => props.theme['green-300']};
        border-radius: 6px;
        transition: background-color 0.3s, color 0.3s, border-color 0.3s;
        
        &:disabled {
            opacity: 0.7;
            cursor: not-allowed;
        }
        
        &:not(:disabled):hover {
            background-color: ${props => props.theme['green-500']};
            color: ${props => props.theme.white};
            border-color: ${props => props.theme['green-500']};
        }
    }
`