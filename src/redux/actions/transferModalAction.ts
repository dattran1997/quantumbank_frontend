import { ITransferData } from "@/Types/ITransferData";

export const SET_OPEN = 'SET_OPEN';
export const SET_CLOSE = 'SET_CLOSE';
export const SET_DATA = 'SET_DATA';
export const CLEAR_DATA = 'CLEAR_DATA';

export const setOpen = () => {
    return {
        type: SET_OPEN,
        payLoad: { show: true},
    }
}

export const setClose = () => {
    return {
        type: SET_CLOSE,
        payLoad: { show: false},
    }
}

export const setData = (data: ITransferData) => {
    return {
        type: SET_DATA,
        payLoad: { data },
    }
}

export const clearData = () => {
    return {
        type: CLEAR_DATA,
        payLoad: null,
    }
}