export interface IUser {
    id: number;
    name: string;
    phone?: number;
    email: string;
    role?: string;
};

export interface UserState {
    isAuth: boolean;
    user?: IUser;
};

export enum UserActionTypes {
    SET_USER = "SET_USER",
    SET_AUTH = "SET_AUTH"
};

export interface SetUserAction {
    type: UserActionTypes.SET_USER;
    payload: IUser
};

export interface SetAuthAction {
    type: UserActionTypes.SET_AUTH;
    payload: boolean;
};