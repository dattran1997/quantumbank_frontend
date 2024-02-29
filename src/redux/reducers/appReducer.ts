import { SET_LOADING } from "../actions/appAction";
import { ISetLoadingAction } from "../actions/appAction";

// interface IApp {
//     loadings: {
//         [key: string]: {loading: boolean}
//     }
// }

// const app: IApp = {
//     loadings: {
//         'getUser': {loading: false}, 
//         'get': {loading: true},
//     }
// }

export interface IAppState {
    loading: boolean;
    type: string;
}

export interface IAppAction {
    type: string;
    payLoad: ISetLoadingAction
}

const initialState: IAppState = {
    loading: false,
    type: '',
}


const appReducer = (state = initialState, action: IAppAction ): IAppState => {
    switch (action.type) {
        case SET_LOADING:
            return {
                ...state,
                loading: action.payLoad.loading,
                type: action.payLoad.type,
            }
        default:
            return state;
    }
}

export default appReducer;