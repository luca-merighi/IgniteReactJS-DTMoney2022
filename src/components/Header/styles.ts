import styled from 'styled-components'

export const HeaderContainer = styled.header`
    background-color: ${props => props.theme['gray-900']};
    padding: 2.5rem 0 7.5rem;
        
`

export const HeaderContent = styled.div`
    margin: 0 auto;
    padding: 0 1.5rem;
    width: 100%;
    max-width: 1120px;
    
    display: flex;
    align-items: center;
    justify-content: space-between;
`

export const NewTransactionButton = styled.button`
    height: 50px;
    background-color: ${props => props.theme['green-500']};
    padding: 0 1.25rem;
    
    font-size: 1rem;
    font-weight: 700;
    color: ${props => props.theme.white};
    
    border: none;
    border-radius: 6px;
    cursor: pointer;
    transition: background-color 0.3s;
    
    &:hover {
        background-color: ${props => props.theme['green-700']};
    }
`