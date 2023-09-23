const defaultState = {
    isAuth: false,
    user: {}
};

const SET_USER = "SET_USER";
const SET_AUTH = "SET_AUTH";

export function userReducer(state = defaultState, action) {
    switch (action.type) {
        case SET_USER:
            return { ...state, user: action.payload };
        case SET_AUTH:
            return { ...state, isAuth: action.payload };
        default:
            return state;
    };
};

export const setUserAction = payload => ({ type: SET_USER, payload });
export const setAuthAction = payload => ({ type: SET_AUTH, payload });