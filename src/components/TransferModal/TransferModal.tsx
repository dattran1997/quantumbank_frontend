import styled from '@emotion/styled';
import { Box, InputAdornment, Modal, Paper, Stack, TextField } from "@mui/material";
import { ButtonStyled } from '../Style/ButtonStyled';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import { TransferType } from '@/enum/TransferType';
import { ITransferData } from '@/Types/ITransferData';
import { useForm } from 'react-hook-form';
import { useLocation, useNavigate } from 'react-router-dom';
import { IBankAccount } from '@/Types/IBankAccount';
import { useDispatch } from 'react-redux';
import { setClose } from '@/redux/actions/transferModalAction';
import { AccountType } from '@/enum/AccountType';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
}

interface TransferModalProps {
    show: boolean;
    handleClose: () => void;
    data: ITransferData | null;
    register: ReturnType<typeof useForm>['register'];
    handleSubmit: ReturnType<typeof useForm>['handleSubmit'];
    errors: ReturnType<typeof useForm>['formState']['errors'];
    currentAccount: IBankAccount | undefined;
    saveAccount: IBankAccount | undefined;
    isCurrentAccountChoose: boolean;
    isSavingAccountChoose: boolean;
    onChooseAccount: (accountType: AccountType) => void;
}

export default function TransferModal(props: TransferModalProps) {
    const { 
        show, 
        data, 
        isCurrentAccountChoose, 
        isSavingAccountChoose, 
        currentAccount, 
        saveAccount,
        onChooseAccount, 
        handleClose, 
        register, 
        handleSubmit, 
        errors } = props;
    const location = useLocation();
    const navigate = useNavigate();
    const isTransferPage = location.pathname === '/home/transfer';
    const dispatch = useDispatch();

    const onGoBack = () => {
        navigate('/home');
        dispatch(setClose());
    }

    const onChooseCurrentAccount = () => {
        onChooseAccount(AccountType.CURRENT);
    }

    const onChooseSavingAccount = () => {
        onChooseAccount(AccountType.SAVING);
    }


    return (
        <TransferModalStyled className='Quantum_transfer-modal'>
            <Modal
                open={show}
                onClose={handleClose}
            >
                <Box sx={style}>
                    <Paper className='Quantum_transfer-modal-container' elevation={2}>
                        <TextField 
                            {...register('amount', {
                                required: 'This field is required',
                                min: { value: 1, message: 'Amount must be at least 1' },
                                max: { value: 1000000, message: 'Amount must be at most 100.000' },
                                pattern: {
                                    value: /^[0-9]+$/,
                                    message: 'Invalid amount'
                                }
                            })}
                            placeholder='Enter your transfer amount' 
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <AttachMoneyIcon />
                                    </InputAdornment>
                                ),
                            }}
                            error={errors.amount ? true : false}
                            helperText={errors.amount ? errors.amount.message?.toString() : ''}
                            fullWidth/>

                        <p className='Quantum_transfer-modal-content'>
                            From: <span className='Quantum_transfer-modal-detail'>
                                    {data?.type === TransferType.DEPOSIT && TransferType.DEPOSIT}
                                    {data?.type === TransferType.TRANSFER && !isTransferPage && data.from}
                                    {isTransferPage && (<Stack direction='row' gap={1}>
                                        <ButtonStyled
                                            sx={{ fontWeight: 300, fontSize: '0.6rem' }}
                                            variant={isCurrentAccountChoose ? 'contained' : 'outlined' } 
                                            color='primary'
                                            size='small'
                                            onClick={onChooseCurrentAccount}>Current Account</ButtonStyled>
                                        <ButtonStyled 
                                            sx={{ fontWeight: 300, fontSize: '0.6rem' }}
                                            variant={isSavingAccountChoose ? 'contained' : 'outlined'} 
                                            color='primary' 
                                            size='small'
                                            onClick={onChooseSavingAccount}>Save Account</ButtonStyled>
                                    </Stack>)}
                                </span>
                        </p>

                        <p className='Quantum_transfer-modal-content'>
                            To: <span className='Quantum_transfer-modal-detail'>
                                    {data?.to ? data?.to : ''}
                                </span>
                        </p>

                        <Stack direction='row' spacing={1} justifyContent='flex-end'>
                            <ButtonStyled 
                                variant='outlined' 
                                color='primary' 
                                onClick={handleClose}>Cancel</ButtonStyled>
                            {currentAccount || saveAccount ? (
                                <ButtonStyled 
                                    onClick={handleSubmit}
                                    variant='contained' 
                                    color='primary'>Transfer</ButtonStyled>
                            ) : (
                                <ButtonStyled 
                                    onClick={onGoBack}
                                    variant='contained' 
                                    color='primary'>Create Account First</ButtonStyled>
                            )}
                        </Stack>
                    </Paper>
                </Box>
            </Modal>
        </TransferModalStyled>
    )
}

const TransferModalStyled = styled.div`
    &.Quantum_transfer-modal {
        display: flex;
        align-items: center;
        justify-content: center;
        min-height: 100vh;

        .MuiPaper-root {
            padding: 24px;
        }
    }
`;