export const SET_LOADING = 'SET_LOADING';

export interface ISetLoadingAction {
    loading: boolean;
    type: string;
}

export const setLoading = (data: ISetLoadingAction) => {
    return {
        type: SET_LOADING,
        payload: data,
    }
}