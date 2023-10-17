export interface IUser {
    id: number,
    email: string,
}

export interface IRegistration {
    username: string,
    email: string,
    password: string
}

export interface ILogin {
    email: string,
    password: string,
}