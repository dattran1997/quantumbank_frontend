import { IBankAccount } from '@/Types/IBankAccount';
import { IDepositMoney } from '@/Types/IDepositMoney';
import { ITransferData } from '@/Types/ITransferData';
import Card from '@/components/Card';
import { ButtonStyled } from '@/components/Style/ButtonStyled';
import { AccountType } from '@/enum/AccountType';
import { TransferType } from '@/enum/TransferType';
import styled from '@emotion/styled';
import { Grid, Paper } from '@mui/material';

interface HomeSubPageProps {
    onCreateAccountClick: (type: AccountType) => void;
    currentAccount: IBankAccount | undefined;
    savingAccount: IBankAccount | undefined;
    onDepositMoneyClick: (data: IDepositMoney) => void;
    onMoveMoneyClick: (data: ITransferData) => void;
}

export default function HomeSubPage(props: HomeSubPageProps) {
    const { onCreateAccountClick, currentAccount, savingAccount, onDepositMoneyClick, onMoveMoneyClick } = props;

    const onCurrentAccountDeposit = () => {
        onDepositMoneyClick({accountNumber: currentAccount?.accountNumber});
    }

    const onSavingAccountDeposit = () => {
        onDepositMoneyClick({accountNumber: savingAccount?.accountNumber});
    }

    const onMoveCurrentToSaving = () => {
        onMoveMoneyClick({from: currentAccount?.accountNumber, to: savingAccount?.accountNumber, type: TransferType.TRANSFER})
    }

    const onMoveSavingToCurrent = () => {
        onMoveMoneyClick({from: savingAccount?.accountNumber, to: currentAccount?.accountNumber, type: TransferType.TRANSFER})
    }

    return (
        <HomeSubPageStyled className='Quantum_home-sub-page'>
            <Paper elevation={2}>
               <Grid container spacing={2}>
                    <Grid item xs={12} md={6} sx={{display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
                        <p className='Quantum-card-type'>Current account</p>
                        <Card account={currentAccount} />
                        {!currentAccount ? (
                            <ButtonStyled 
                                onClick={() => onCreateAccountClick(AccountType.CURRENT)}
                                variant='contained' 
                                color='primary' 
                                sx={{marginTop: '24px'}}>Add new account</ButtonStyled>
                        ) : (<>
                            <ButtonStyled 
                                onClick={onCurrentAccountDeposit}
                                variant='contained' 
                                color='primary' 
                                sx={{marginTop: '24px'}}>Deposit</ButtonStyled>
                            <ButtonStyled 
                                onClick={onMoveCurrentToSaving}
                                variant='contained' 
                                color='primary' 
                                sx={{marginTop: '24px'}}>Move money to save account</ButtonStyled>
                        </>)}
                    </Grid>
                    <Grid item xs={12} md={6} sx={{display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
                        <p className='Quantum-card-type'>Save account</p>
                        <Card account={savingAccount} />
                        {!savingAccount ? (
                            <ButtonStyled 
                                onClick={() => onCreateAccountClick(AccountType.SAVING)}
                                variant='contained' 
                                color='primary' 
                                sx={{marginTop: '24px'}}>Add new account</ButtonStyled>
                        ) : (<>
                            <ButtonStyled 
                                onClick={onSavingAccountDeposit}
                                variant='contained' 
                                color='primary' 
                                sx={{marginTop: '24px'}}>Deposit</ButtonStyled>
                            <ButtonStyled 
                                onClick={onMoveSavingToCurrent}
                                variant='contained' 
                                color='primary' 
                                sx={{marginTop: '24px'}}>Move money to current account</ButtonStyled>
                        </>)}
                    </Grid>
               </Grid>
            </Paper>
        </HomeSubPageStyled>
    )
}

const HomeSubPageStyled = styled.div`
    max-width: 1000px;
    margin: 0 auto;

    .Quantum-card-type {
        width: 100%;
        text-align: center;
        font-size: 1.5rem;
        font-weight: 500;
        margin-bottom: 0px 0px 24px 0px;
        color: #3f51b5;
    }

    .MuiPaper-root {
        padding: 24px;
    }
`;

