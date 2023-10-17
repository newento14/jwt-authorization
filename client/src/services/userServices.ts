import $api, {url} from "../http";
import {AuthResponse} from "../types/response.ts";
import {ILogin, IRegistration} from "../types/user.ts";
import {Dispatch} from "redux";
import {ActionTypes} from "../types/userReducer.ts";
import axios from "axios";

export default class userServices {
    static login(form:ILogin): (dispatch:Dispatch) => void {
        return async (dispatch:Dispatch) => {
            try {
                const response = await $api.post<AuthResponse>('/user/login', {
                    email: form.email,
                    password: form.password
                });
                console.log(response);
                localStorage.setItem('token', response.data.accessToken);
                dispatch({type: ActionTypes.LOGIN, payload: response.data.user});

            } catch (e: any) {
                console.log(e.response?.data?.message);
            }
        }
    }

    static registration(form:IRegistration): (dispatch:Dispatch) => void {
        return async (dispatch:Dispatch) => {
            try {
                const response = await $api.post<AuthResponse>('/user/registration', {
                    username: form.username, email:form.email, password:form.password
                });
                console.log(response);
                localStorage.setItem('token', response.data.accessToken);
                dispatch({type: ActionTypes.LOGOUT});

            } catch (e: any) {
                console.log(e.response?.data?.message);
            }
        }
    }

    static logout(): (dispatch:Dispatch) => void{
        return async (dispatch:Dispatch) => {
            try {
                const response = await $api.post('/user/logout');
                console.log(response);
                localStorage.removeItem('token');
                dispatch({type: ActionTypes.LOGOUT});

            } catch (e: any) {
                console.log(e.response?.data?.message);
            }
        }
    }

    static auth() {
        return async (dispatch:Dispatch) => {
            dispatch({type: ActionTypes.SET_IS_LOADING, payload: true});
            try {
                const response = await axios.get<AuthResponse>(`${url}/user/refresh`, {withCredentials: true});
                console.log(response);
                localStorage.setItem('token', response.data.accessToken);
                dispatch({type: ActionTypes.LOGIN, payload: response.data.user});

            } catch (e: any) {
                console.log(e.response?.data?.message);
            } finally {
                dispatch({type: ActionTypes.SET_IS_LOADING, payload: false});
            }
        }
    }
}
