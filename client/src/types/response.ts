import {IUser} from "./user.ts";

export interface AuthResponse {
    accessToken: string,
    refreshToken: string,
    user: IUser
}