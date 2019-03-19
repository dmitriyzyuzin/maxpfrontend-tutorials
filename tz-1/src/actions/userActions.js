import { LOG_IN } from "./actionTypes";

export function login(user, password) {
    return {
        type: LOG_IN,
        payload: {
            user: user,
            password: password
        }
    };
}

