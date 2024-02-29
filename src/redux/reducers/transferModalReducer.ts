import { ITransferData } from "@/Types/ITransferData";
import { CLEAR_DATA, SET_DATA, SET_OPEN } from "../actions/transferModalAction";
import { SET_CLOSE } from "../actions/transferModalAction";

export interface ITransferModalState {
    show: boolean;
    data: ITransferData | null;
}

export interface ITransferModalAction {
    type: string;
    payLoad: ITransferModalState;
}

const initialState: ITransferModalState = {
    show: false,
    data: null,
}


const transferModalReducer = (state = initialState, action: ITransferModalAction ): ITransferModalState => {

    switch (action.type) {
        case SET_OPEN:
            return {
                ...state,
                show: action.payLoad.show,
            }
        case SET_CLOSE:
            return {
                ...state,
                show: action.payLoad.show,
                data: null,
            }
        case SET_DATA:
            return {
                ...state,
                data: {...state.data, ...action.payLoad.data},
            }
        case CLEAR_DATA:
            return {
                ...state,
                data: null,
            }
        default:
            return state;
    }
}

export default transferModalReducer;