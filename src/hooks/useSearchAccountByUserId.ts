import { IBankAccount } from "@/Types/IBankAccount";
import { ISearchBankAccountByUserId } from "@/Types/ISearchBankAccountByUserId";
import { searchAccountByUserId } from "@/api/bankAccountService";
import { useEffect, useState } from "react";

export default function useSearchAccountByUserId(data: ISearchBankAccountByUserId) {
    const  [userAccounts, setUserAccounts] = useState<IBankAccount[]>([]);

    const getAccountByUserId = async (data: ISearchBankAccountByUserId) => {
        
        try {
            const response = await searchAccountByUserId(data);
            setUserAccounts(response.data);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getAccountByUserId(data);
    }, [])

    return {userAccounts};
}