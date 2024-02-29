import { IBankAccount } from '@/Types/IBankAccount';
import styled from '@emotion/styled';

interface ICard {
    onClick?: () => void;
    allowHover?: boolean;
    account: IBankAccount | undefined;
}

export default function Card(props: ICard) {
    const { account } = props;

    const onCardClick = () => {
        const {onClick} = props;

        if (onClick) onClick();
    }

    return (
        <CardStyled 
            className={`Quantum_card ${props.allowHover ? 'allow-hover' : ''}`} 
            onClick={onCardClick}>
                {account ? (<>
                     <p className='Quantum_card-owner Quantum_card-content'>
                     Name: <span className='Quantum_card-detail'>{account.username}</span>
                    </p>
                    <p className='Quantum_card-number Quantum_card-content'>
                        Card Number: <span className='Quantum_card-detail'>{account.accountNumber}</span>
                    </p>
                    <p className='Quantum_card-number Quantum_card-content'>
                        Balance: <span className='Quantum_card-detail'>$ {account.balance}</span>
                    </p>
                </>) : (
                    <p className='Quantum_card-type Quantum_card-content blank'>
                        Account not available, please add new account!
                    </p>
                )}
        </CardStyled>
    )
}

const CardStyled = styled.div`
    &.Quantum_card {
        width: 100%;
        padding: 24px;
        border-radius: 8px;
        border: 1px solid #e0e0e0;
        
        .Quantum_card-content {
            font-size: 1rem;
            font-weight: 400;
            color: #3f51b5;
            margin: 0px 0px 12px 0px;

            .Quantum_card-detail {
                font-weight: 700;
                text-transform: capitalize;
            }
        }

        .Quantum_card-content.blank {
            margin: 0px;
        }

        :hover {
            &.allow-hover {
                cursor: pointer;
                background-color: #1976d20a;
            }
        }
    }
`