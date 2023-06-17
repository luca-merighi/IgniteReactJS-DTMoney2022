import {createContext, ReactNode, useState, useEffect, useCallback} from 'react'
import { api } from '../lib/axios'

interface Transaction {
    id: number,
    description: string,
    type: 'income' | 'outcome',
    category: string,
    price: number,
    createdAt: string
}

interface CreateTransactionInput {
    description: string,
    type: 'income' | 'outcome',
    category: string,
    price: number,
}

interface TransactionContextData {
    transactions: Transaction[],
    fetchTransactions: (query?: string) => Promise<void>,
    createTransaction: (data: CreateTransactionInput) => Promise<void>
}

interface TransactionsProviderProps {
    children: ReactNode
}

export const TransactionsContext = createContext<TransactionContextData>({} as TransactionContextData)

export default function TransactionsProvider(props: TransactionsProviderProps) {
    const [transactions, setTransactions] = useState<Transaction[]>([])
    
    const fetchTransactions = useCallback(async (query?: string) => {
        const response = await api.get('/transactions', {
            params: {
                _sort: 'createdAt',
                _order: 'desc',
                q: query
            }
        })
        setTransactions(response.data)
    }, [])
    
    const createTransaction = useCallback(async (data: CreateTransactionInput) => {
        const {description, price, category, type} = data
        
        const response = await api.post('/transactions', {
            description,
            price,
            category,
            type,
            createdAt: new Date()
        })
        
        setTransactions(state => [response.data, ...state])
    }, [])
    
    useEffect(() => {
        fetchTransactions()
    }, [fetchTransactions])
    
    return (
        <TransactionsContext.Provider value={{
            transactions,
            fetchTransactions,
            createTransaction
        }}>
            {props.children}
        </TransactionsContext.Provider>
    )
}