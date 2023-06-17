import * as Dialog from '@radix-ui/react-dialog'
import NewTransactionModal from '../NewTransactionModal'

import { HeaderContainer, HeaderContent, NewTransactionButton } from './styles'
import logoImg from '/logo.svg'

export default function Header() {
    return (
        <HeaderContainer>
            <HeaderContent>
                <img src={logoImg} alt="Logo DT Money" />
                
                <Dialog.Root>
                    <Dialog.Trigger asChild>
                        <NewTransactionButton
                            type="button">
                            Nova Transação
                        </NewTransactionButton>
                    </Dialog.Trigger>
                    
                    <NewTransactionModal />
                </Dialog.Root>
            </HeaderContent>
        </HeaderContainer>
    )
}