import { createAccount, searchAccountByUserId } from "@/api/bankAccountService";
import HomeSubPage from "./HomeSubPage";
import { AccountType } from "@/enum/AccountType";
import ICreateBankAccountData from "@/Types/ICreateBankAccountData";
import { successToast } from "@/utils/toast";
import { IRootState } from "@/redux/reducers";
import { useDispatch, useSelector } from "react-redux";
import { addAccount, addAccounts } from "@/redux/actions/userAccountAction";
import { IDepositMoney } from "@/Types/IDepositMoney";
import { useEffect } from "react";
import { ISearchBankAccountByUserId } from "@/Types/ISearchBankAccountByUserId";
import { setData, setOpen } from "@/redux/actions/transferModalAction";
import { TransferType } from "@/enum/TransferType";
import { ITransferData } from "@/Types/ITransferData";

export default function HomeSubPageContainer() {
    const user = JSON.parse(sessionStorage.getItem('user') || '{}'); 
    const dispatch = useDispatch();
    const { accounts } = useSelector((state: IRootState) => state.userAccount);
    const currentAccount = accounts.find((account) => account.type === AccountType.CURRENT);
    const savingAccount = accounts.find((account) => account.type === AccountType.SAVING);
    
    useEffect(() => {
        if (user) getAccountByUserId({ userId: user.id });
    }, [user?.id])
    
    const getAccountByUserId = async (data: ISearchBankAccountByUserId) => {
        try {
            const response = await searchAccountByUserId(data);
            dispatch(addAccounts(response.data));
        } catch (error) {
            console.log(error);
        }
    }

    const createNewAccount = async (data: ICreateBankAccountData) => {
        try {
            const response = await createAccount(data);

            dispatch(addAccount(response.data));
            successToast('Account created successfully!');
        } catch (error) {
            console.log(error);
        }
    }

    const onDepositMoneyClick = (data: IDepositMoney) => {
        const { accountNumber } = data;

        dispatch(setOpen());
        dispatch(setData({ to: accountNumber, type: TransferType.DEPOSIT}));
    }

    const onCreateAccountClick = (type: AccountType) => {
        if (user) {
            const { id, username } = user;
            createNewAccount({ userId: id, username, type});
        } 
    }

    const onMoveMoneyClick = (data: ITransferData) => {
        const { from, to, type } = data;
        
        dispatch(setOpen());
        dispatch(setData({ from, to, type }));
    }
    
    return (
        <HomeSubPage
            onMoveMoneyClick={onMoveMoneyClick}
            onDepositMoneyClick={onDepositMoneyClick}
            currentAccount={currentAccount}
            savingAccount={savingAccount} 
            onCreateAccountClick={onCreateAccountClick} />
    )
}