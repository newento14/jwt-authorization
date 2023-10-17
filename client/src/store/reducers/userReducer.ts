import {Actions, ActionTypes, IState} from "../../types/userReducer.ts";

const defaultState:IState = {
    user: {email: "", id: -1},
    isAuth: false,
    isLoading: false
}

export const userReducer = (state = defaultState, action:Actions) => {
    switch (action.type) {
        case ActionTypes.LOGIN: {
            return {
                ...state,
                isAuth: true,
                user: action.payload
            }
        }
        case ActionTypes.LOGOUT: {
            return {
                ...state,
                isAuth: false,
                user: {id: -1, email: ""}
            }
        }
        case ActionTypes.SET_IS_LOADING: {
            return {
                ...state,
                isLoading: action.payload,
            }
        }
        default: {
            return state;
        }
    }
}