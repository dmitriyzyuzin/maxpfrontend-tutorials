import { auth } from '../helpers/auth';

const initialState = {
    isLoggedIn: false
};

const user = (state = initialState, action) => {
    switch (action.type) {
        case 'LOG_IN':
            const user = action.payload.user;
            const password = action.payload.password;
            return Object.assign({}, state, {
                ...state,
                isLoggedIn: auth(user, password)
            });
        default:
            return state;
    }
};

export default user;
