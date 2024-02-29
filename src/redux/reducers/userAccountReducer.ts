import { IBankAccount } from "@/Types/IBankAccount";
import { ADD_ACCOUNT, ADD_ACCOUNTS, DEPOSIT_MONEY, TRANSFER_MONEY } from "../actions/userAccountAction";
import { IDepositMoney } from "@/Types/IDepositMoney";
import { ITransferData } from "@/Types/ITransferData";

export interface IUserAccountState {
    accounts: IBankAccount[];
}

export interface IUserAccountAction {
    type: string;
    payLoad: {
        account?: IBankAccount;
        accounts?: IBankAccount[];
        deposit?: IDepositMoney;
        transfer?: ITransferData;
    }
}

const initialState: IUserAccountState = {
    accounts: [],
}
export default function userAccountReducer(state = initialState, action: IUserAccountAction): IUserAccountState {
    switch (action.type) {
        case ADD_ACCOUNT:
            return {
                ...state,
                accounts: [...state.accounts, action?.payLoad?.account],
            }
        case ADD_ACCOUNTS:
            return {
                ...state,   
                accounts: action.payLoad.accounts || [],
            }
        case DEPOSIT_MONEY:
            return {
                ...state,
                accounts: state.accounts.map(acc => 
                    acc.accountNumber === action?.payLoad?.deposit?.accountNumber
                        ? { ...acc, balance: acc.balance + (action?.payLoad?.deposit?.amount ?? 0) }
                        : acc
                    )
            }
        case TRANSFER_MONEY:
            return {
                ...state,
                accounts: state.accounts.map(acc => {
                    if (acc.accountNumber === action?.payLoad?.transfer?.from) {
                        return { ...acc, balance: acc.balance - (action?.payLoad?.transfer?.amount ?? 0) }
                    }
                    if (acc.accountNumber === action?.payLoad?.transfer?.to) {
                        return { ...acc, balance: acc.balance + (action?.payLoad?.transfer?.amount ?? 0) }
                    }
                    return acc;
                })
            }
        default:
            return state;
    }
}