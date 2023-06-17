import * as Dialog from '@radix-ui/react-dialog'
import { useForm, Controller } from 'react-hook-form'
import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useContextSelector } from 'use-context-selector'

import { CloseButton, Content, Overlay, TransationType, TransationTypeButton } from './styles'
import { ArrowCircleDown, ArrowCircleUp, X } from 'phosphor-react'
import { TransactionsContext } from '../../contexts/TransactionsContext'

const newTransactionFormSchema = z.object({
    description: z.string(),
    price: z.number(),
    category: z.string(),
    type: z.enum(['income', 'outcome']),
})

type NewTransactionFormInputs = z.infer<typeof newTransactionFormSchema>

export default function NewTransactionModal() {
    const createTransaction = useContextSelector(TransactionsContext, (context) => {
        return context.createTransaction
    })
    const {
        register, handleSubmit, control, formState: {isSubmitting}, reset} 
    = useForm<NewTransactionFormInputs>({
        resolver: zodResolver(newTransactionFormSchema),
        defaultValues: {
            type: 'income'
        }
    })
    
    async function handleCreateNewTransaction(data: NewTransactionFormInputs) {
        const {description, price, category, type} = data
        
        await createTransaction({
            description, 
            price, 
            category, 
            type
        })
        
        reset()
    }
    
    return (
        <Dialog.Portal>
            <Overlay />
            
            <Content>
                <Dialog.Title>
                    Nova Transação
                </Dialog.Title>   
                
                <CloseButton>
                    <X size={24} />
                </CloseButton>
                
                <form onSubmit={handleSubmit(handleCreateNewTransaction)}>
                    <input 
                    type="text"
                    placeholder="Descrição"
                    required
                    {...register('description')} />
                    
                    <input 
                    type="number"
                    placeholder="Preço"
                    required
                    {...register('price', {valueAsNumber: true})} />
                    
                    <input 
                    type="text"
                    placeholder="Categoria"
                    required
                    {...register('category')} />
                    
                    <Controller
                        control={control}
                        name="type"
                        render={({field}) => {
                            return (
                                <TransationType 
                                    onValueChange={field.onChange} 
                                    value={field.value}>
                                    <TransationTypeButton 
                                        variant="income"
                                        value="income">
                                        <ArrowCircleUp size={24} />
                                        Entrada    
                                    </TransationTypeButton>
                                    <TransationTypeButton 
                                        variant="outcome"
                                        value="outcome">
                                        <ArrowCircleDown size={24} />
                                        Saída 
                                    </TransationTypeButton>
                                </TransationType>
                            )
                        }} />
                         
                    <button type="submit" disabled={isSubmitting}>
                        Cadastrar
                    </button>
                </form> 
            </Content>
        </Dialog.Portal>
    )
}