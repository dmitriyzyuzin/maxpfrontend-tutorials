import { LOG_IN, LOG_OUT } from "./actionTypes";

export function login(user, password) {
    return {
        type: LOG_IN,
        payload: {
            user: user,
            password: password
        }
    };
}

export function logout() {
    return {
        type: LOG_OUT
    };
}
