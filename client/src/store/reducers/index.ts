import {combineReducers} from "redux";
import {userReducer} from "./userReducer.ts";

export const rootReducer = combineReducers({
    user: userReducer,
})

export type rootState = ReturnType<typeof rootReducer>;