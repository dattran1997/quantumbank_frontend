import { IBankAccount } from "@/Types/IBankAccount";
import TransferSubPage from "./TransferSubPage";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { ISearchBankAccount } from "@/Types/ISearchBankAccount";
import { searchAccounts } from "@/api/bankAccountService";
import { debounce } from 'lodash';
import { ITransferData } from "@/Types/ITransferData";
import { useDispatch, useSelector } from "react-redux";
import { setData, setOpen } from "@/redux/actions/transferModalAction";
import { IRootState } from "@/redux/reducers";
import { AccountType } from "@/enum/AccountType";

export default function TransferSubPageContainer() {
    const [searchCardsData, setSearchCardsData] = useState<IBankAccount[]>([]);
    const { register, watch, formState: { errors } } = useForm();
    const accountNumber = watch('accountNumber');
    const { id } = JSON.parse(sessionStorage.getItem('user') || '{}');
    const { accounts } = useSelector((state: IRootState) => state.userAccount);
    const currentAccount = accounts.find((account) => account.type === AccountType.CURRENT);
    const dispatch = useDispatch();


    useEffect(() => {
        const debouncedOnSearch = debounce(() => {
            onSearch({ accountNumber });
            console.log('accountNumber..', accountNumber);
        }, 500);

        debouncedOnSearch();

        return () => {
            debouncedOnSearch.cancel();
        };
    }, [accountNumber]);

    const onSearch = async (data: ISearchBankAccount) => {
        console.log('onSearch..', data);
        setSearchCardsData([]);

        try {
            const response = await searchAccounts(data);
            // Filter out the current user's account
            const filterData = response.data.filter((account: IBankAccount) => account.userId !== id);

            setSearchCardsData(filterData);
        } catch (error) {
            console.log(error);
        }
    }

    const onTransfer = (data: ITransferData) => {
        const to = data?.to;
        const type = data?.type;
        console.log('currentAccount?.accountNumber..', currentAccount?.accountNumber);

        dispatch(setOpen());
        dispatch(setData({from: currentAccount?.accountNumber, to, type }));
    }


    return (
        <TransferSubPage
            searchCardsData={searchCardsData}
            register={register}
            onTransfer={onTransfer}
            errors={errors}
        />
    )
}