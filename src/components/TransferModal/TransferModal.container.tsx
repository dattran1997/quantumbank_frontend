import { setClose, setData } from "@/redux/actions/transferModalAction";
import TransferModal from "./TransferModal";
import { IRootState } from "@/redux/reducers";
import { useDispatch, useSelector } from "react-redux";
import { IDepositMoney } from "@/Types/IDepositMoney";
import { depositMoney, transferMoney } from "@/api/bankAccountService";
import { useForm } from 'react-hook-form';
import { errorToast, successToast } from "@/utils/toast";
import { depositMoneyToAccount, moveMoneyFromToAccount } from "@/redux/actions/userAccountAction";
import { TransferType } from "@/enum/TransferType";
import { ITransferData } from "@/Types/ITransferData";
import { AccountType } from "@/enum/AccountType";

export default function TransferModalContainer() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const dispatch = useDispatch();
    const show = useSelector((state: IRootState) => state.transferModal.show);
    const transferModalData = useSelector((state: IRootState) => state.transferModal.data);
    const { accounts } = useSelector((state: IRootState) => state.userAccount);
    const currentAccount = accounts.find((account) => account.type === AccountType.CURRENT);
    const savingAccount = accounts.find((account) => account.type === AccountType.SAVING);
    const isCurrentAccountChoose = transferModalData?.from === currentAccount?.accountNumber;
    const isSavingAccountChoose = transferModalData?.from === savingAccount?.accountNumber;

    const handleClose = () => {
        dispatch(setClose());
    }

    const onDeposit = async (data: IDepositMoney) => {
        const { amount } = data;
        const to = transferModalData?.to;
        const depositData = { amount: Number(amount), accountNumber: to };

        try {
            const response = await depositMoney(depositData);
            console.log(response);

            successToast('Money deposited successfully');
            dispatch(depositMoneyToAccount(depositData));
            dispatch(setClose());
        } catch(error) {
            console.log(error);
            
            if (error?.response?.data?.message) {
               return errorToast(error?.response?.data?.message.toString());
            }

            errorToast('Failed to deposit money');
        }
    }

    const onTransfer = async (data: ITransferData) => {
        const { amount } = data;
        const from = transferModalData?.from || '';
        const to = transferModalData?.to || '';
        const transferData = { amount: Number(amount), fromAccount: from, toAccount: to, type: TransferType.TRANSFER };


        try {
            const response = await transferMoney(transferData);
            console.log(response);

            successToast('Money transferred successfully');
            dispatch(moveMoneyFromToAccount({amount: Number(amount), from, to, type: TransferType.TRANSFER}));
            dispatch(setClose());
        } catch (error) {
            console.log(error);

            if (error?.response?.data?.message) {
                return errorToast(error?.response?.data?.message.toString());
            }

            errorToast('Failed to transfer money');
        }

    }

    const onChooseAccount = (accountType: AccountType) => {
        if (accountType === AccountType.CURRENT) {
            dispatch(setData({ from: currentAccount?.accountNumber, type: TransferType.TRANSFER }));
        }

        if (accountType === AccountType.SAVING) {
            dispatch(setData({ from: savingAccount?.accountNumber, type: TransferType.TRANSFER}));
        }
    }

    return (
        <TransferModal 
            show={show}
            register={register}
            errors={errors}
            handleClose={handleClose} 
            currentAccount={currentAccount}
            savingAccount={savingAccount}
            isCurrentAccountChoose={isCurrentAccountChoose}
            isSavingAccountChoose={isSavingAccountChoose}
            handleSubmit={handleSubmit((data) => {
                if (transferModalData?.type === TransferType.DEPOSIT) {
                    return onDeposit(data);
                }

                if(transferModalData?.type === TransferType.TRANSFER) {
                    return onTransfer(data);
                }

            })}
            onChooseAccount={onChooseAccount}
            data={transferModalData} />
    )
}