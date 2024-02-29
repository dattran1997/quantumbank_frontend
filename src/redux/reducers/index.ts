import { combineReducers } from 'redux';
import appReducer from './appReducer';
import { IAppState } from './appReducer';
import { IAppAction } from './appReducer';
import transferModalReducer, { ITransferModalAction, ITransferModalState } from './transferModalReducer';
import userAccountReducer, { IUserAccountAction, IUserAccountState } from './userAccountReducer';

export interface IRootReducer {
    app: (state: IAppState | undefined, action: IAppAction) => IAppState;
    transferModal: (state: ITransferModalState | undefined, action: ITransferModalAction) => ITransferModalState;
    userAccount: (state: IUserAccountState, action: IUserAccountAction) => IUserAccountState;
}

export interface IRootState {
    app: IAppState;
    transferModal: ITransferModalState;
    userAccount: IUserAccountState;
}

const rootReducer = combineReducers<IRootReducer>({
    app: appReducer,
    transferModal: transferModalReducer,
    userAccount: userAccountReducer,
})

export default rootReducer;