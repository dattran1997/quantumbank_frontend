import ICreateBankAccountData from "@/Types/ICreateBankAccountData";
import axiosInstance from "./axiosInstance";
import { ISearchBankAccount } from "@/Types/ISearchBankAccount";
import { ISearchBankAccountByUserId } from "@/Types/ISearchBankAccountByUserId";
import { IDepositMoney } from "@/Types/IDepositMoney";
import { ITransferMoney } from "@/Types/ITransferMoney";

export const createAccount = async (data: ICreateBankAccountData) => {
    return axiosInstance.post('/accounts', data);
}

export const searchAccounts = async (data: ISearchBankAccount) => {
    return axiosInstance.get('/accounts/search', { params: data });
}

export const searchAccountByUserId = async (data: ISearchBankAccountByUserId) => {
    return axiosInstance.get('/accounts/searchByUserId', { params: data });
}

export const depositMoney = async (data: IDepositMoney) => {
    return axiosInstance.post('/accounts/deposit', data);
}

export const transferMoney = async (data: ITransferMoney) => {
    return axiosInstance.post('/accounts/transfer', data);
}