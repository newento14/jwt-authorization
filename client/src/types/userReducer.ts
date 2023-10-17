import {IUser} from "./user.ts";


export interface IState {
    user: IUser,
    isAuth: boolean,
    isLoading: boolean
}

export enum ActionTypes {
    LOGIN = "LOGIN",
    LOGOUT = "LOGOUT",
    SET_IS_LOADING = "SET_IS_LOADING"
}

interface fetchLogin {
    type: ActionTypes.LOGIN,
    payload: IUser
}

interface fetchLogout {
    type: ActionTypes.LOGOUT,
}

interface fetchSetIsLoading {
    type: ActionTypes.SET_IS_LOADING,
    payload: boolean
}

export type Actions = fetchLogin | fetchLogout | fetchSetIsLoading;