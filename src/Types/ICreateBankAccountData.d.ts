import { AccountType } from "@/enum/AccountType";

export default interface ICreateBankAccountData {
    userId: string;
    type: AccountType;
    username: string;
}