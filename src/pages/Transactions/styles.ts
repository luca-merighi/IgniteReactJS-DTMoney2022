import styled from 'styled-components'

export const TransactionsContainer = styled.main`
    margin: 4rem auto 0;
    padding: 0 1.5rem;
    width: 100%;
    max-width: 1120px;
`

export const TransactionsTable = styled.table`
    margin-top: 1.5rem;
    width: 100%;
    
    border-spacing: 0 0.5rem;
    border-collapse: separate;
    
    td {
        padding: 1.25rem 2rem;
        
        background-color: ${props => props.theme['gray-700']};
        
        &:first-child {
            border-top-left-radius: 6px;
            border-bottom-left-radius: 6px;
        }
        
        &:last-child {
            border-top-right-radius: 6px;
            border-bottom-right-radius: 6px;
        }
    }
`

interface PriceHighlightProps {
    variant: 'income' | 'outcome'
}

export const PriceHighlight = styled.span<PriceHighlightProps>`
    color: ${props => props.variant === 'income'
        ? props.theme['green-300'] 
        : props.theme['red-300']}
    
`