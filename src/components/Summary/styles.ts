import styled, { css } from 'styled-components'

export const SummaryContainer = styled.section`
    margin: 0 auto;
    margin-top: -5rem;
    padding: 0 1.5rem;
    width: 100%;
    max-width: 1120px;
    
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
`

interface SummaryCardProps {
    variant?: 'green'
}

export const SummaryCard = styled.div<SummaryCardProps>`
    background-color: ${props => props.theme['gray-600']};
    padding: 2rem;
    
    border-radius: 6px;
    
    header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        
        color: ${props => props.theme['gray-300']};
    }
    
    strong {
        margin-top: 1rem;
        display: block;
        
        font-size: 2rem;
    }
    
    ${props => props.variant === 'green' && css`
        background-color: ${props => props.theme['green-700']};
    `}
`
