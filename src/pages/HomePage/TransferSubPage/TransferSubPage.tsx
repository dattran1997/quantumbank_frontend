import styled from '@emotion/styled';
import { FormControl, InputAdornment, Paper, TextField } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { useForm } from 'react-hook-form';
import { IBankAccount } from '@/Types/IBankAccount';
import Card from '@/components/Card';
import { ITransferData } from '@/Types/ITransferData';
import { TransferType } from '@/enum/TransferType';

interface TransferSubPageProps {
    register: ReturnType<typeof useForm>['register'];
    searchCardsData: IBankAccount[];
    errors: ReturnType<typeof useForm>['formState']['errors'];
    onTransfer: (data: ITransferData) => void;
}

export default function TransferSubPage(props: TransferSubPageProps) {
    const { register, searchCardsData, onTransfer } = props;
    
    const handleCardClick = (account: IBankAccount) => {
        onTransfer({to: account.accountNumber, type: TransferType.TRANSFER});
    }

    return (
        <TransferSubPageStyled className='Quantum_transfer-sub-page'>
            <Paper elevation={2}>
                <div className='Quantum_transfer-sub-page-container'>
                    <FormControl fullWidth>
                        <TextField 
                            {...register('accountNumber', {
                                pattern: {
                                    value: /^[0-9]+$/,
                                    message: 'Invalid account number'
                                }                
                            })}
                            size='medium' 
                            variant='outlined'
                            placeholder='Search for account number'
                            error={props.errors.accountNumber ? true : false}
                            helperText={props.errors.accountNumber ? props.errors.accountNumber.message?.toString() : ''}
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <SearchIcon />
                                    </InputAdornment>
                                ),
                            }}/>
                    </FormControl>
                    <div className='Quantum_sub-account-container'>
                        {searchCardsData.map((account, index) => {
                            return (
                                <Card 
                                    key={String(index)} 
                                    account={account} 
                                    onClick={() => handleCardClick(account)} 
                                    allowHover={true}/>
                            )
                        })}
                    </div>
                </div>
            </Paper>
        </TransferSubPageStyled>
    )
}

const TransferSubPageStyled = styled.div`
    &.Quantum_transfer-sub-page {
        max-width: 1000px;
        margin: 0 auto;

        .Quantum_sub-account-container {
            margin-top: 24px;
            padding-right: 24px;
            display: flex;
            flex-direction: column;
            gap: 12px;
            max-height: calc(100vh - 250px);
            overflow-y: auto;
        }

        .MuiPaper-root {
            padding: 24px;
        }
    }   
`;