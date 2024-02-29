import { IBankAccount } from "@/Types/IBankAccount";
import { IDepositMoney } from "@/Types/IDepositMoney";
import { ITransferData } from "@/Types/ITransferData";
export const ADD_ACCOUNT = 'ADD_ACCOUNT';
export const ADD_ACCOUNTS = 'ADD_ACCOUNTS';
export const DEPOSIT_MONEY = 'DEPOSIT_MONEY';
export const TRANSFER_MONEY = 'TRANSFER_MONEY';

export const addAccount = (data: IBankAccount) => {
    return {
        type: ADD_ACCOUNT,
        payLoad: {account: data},
    }
}

export const addAccounts = (data: IBankAccount[]) => {
    return {
        type: ADD_ACCOUNTS,
        payLoad: {accounts: data},
    }
}

export const depositMoneyToAccount = (data: IDepositMoney) => {
    return {
        type: DEPOSIT_MONEY,
        payLoad: {deposit: data},
    }
}

export const moveMoneyFromToAccount = (data: ITransferData) => {
    return {
        type: TRANSFER_MONEY,
        payLoad: {transfer: data},
    }
} 