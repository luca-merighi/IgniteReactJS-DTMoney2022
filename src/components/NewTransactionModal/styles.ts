import styled from 'styled-components'
import * as Dialog from '@radix-ui/react-dialog'
import * as RadioGroup from '@radix-ui/react-radio-group'

export const Overlay = styled(Dialog.Overlay)`
    position: fixed;
    inset: 0;
    
    width: 100vw;
    height: 100vh;
    
    background-color: rgba(0, 0, 0, 0.75);
    
`

export const Content = styled(Dialog.Content)`
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    min-width: 32rem;
    padding: 2.5rem 3rem;
    
    background-color: ${props => props.theme['gray-800']};
    
    border-radius: 6px;

    form {
        margin-top: 2rem;
        
        display: flex;
        flex-direction: column;
        gap: 1rem;
        
        input {
            background-color: ${props => props.theme['gray-900']};
            padding: 1rem;
            
            color: ${props => props.theme['gray-300']};

            border: none;
            border-radius: 6px;
            
            &::placeholder {
                color: ${props => props.theme['gray-500']};
            }
        }
        
        button[type="submit"] {
            margin-top: 1.5rem;
            height: 58px;
            padding: 0 1.25rem;
            background-color: ${props => props.theme['green-500']};
            
            font-size: 1rem;
            font-weight: 700;
            color: ${props => props.theme.white};
            
            border: none;
            border-radius: 6px;
            cursor: pointer;
            transition: background-color 0.3s;
            
            &:disabled {
                opacity: 0.75;
                cursor: not-allowed;
            }
            
            &:not(:disabled):hover {
                background-color: ${props => props.theme['green-700']};
            }
        }
    }
`

export const CloseButton = styled(Dialog.Close)`
    position: absolute;
    top: 1.5rem;
    right: 1.5rem;
    
    background-color: transparent;
    
    line-height: 0;
    color: ${props => props.theme['gray-500']};
    
    border: none;
    cursor: pointer;
`

export const TransationType = styled(RadioGroup.Root)`
    margin-top: 0.5rem;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
`

interface TransationTypeButtonProps {
    variant: 'income' | 'outcome'
}

export const TransationTypeButton = styled(RadioGroup.Item)<TransationTypeButtonProps>`
    background-color: ${props => props.theme['gray-700']};
    padding: 1rem;
    
    display: flex;
    gap: 0.5rem;
    align-items: center;
    justify-content: center;
    
    color: ${props => props.theme['gray-300']};
    
    border: 2px solid transparent;
    border-radius: 6px;
    cursor: pointer;
    
    &:focus {
        outline: none;
        border-color: ${props => props.theme['gray-300']};
        box-shadow: none;
    }
    
    svg {
        color: ${props => props.variant === 'income'
            ? props.theme['green-300']
            : props.theme['red-300']};
    }
    
    &[data-state='unchecked']:hover {
        background-color: ${props => props.theme['gray-600']};
    }
    
    &[data-state='checked'] {
        color: ${props => props.theme.white};
        background-color: ${props => props.variant === 'income'
            ? props.theme['green-500']
            : props.theme['red-500']};
        
        
        svg {
            color: ${props => props.theme.white};
        }
    }
`