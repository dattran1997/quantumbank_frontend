import { TransferType } from "@/enum/TransferType";

export interface ITransferData {
    from?: string;
    to?: string;
    amount?: number;
    type: TransferType;
}