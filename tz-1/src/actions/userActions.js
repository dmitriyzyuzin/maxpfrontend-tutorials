import { LOG_IN } from "./actionTypes";

export function login(payload) {
    return {
        type: LOG_IN,
        payload: payload
    };
}
