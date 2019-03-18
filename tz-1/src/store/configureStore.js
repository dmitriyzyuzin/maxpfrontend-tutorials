import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducers/reducers';

export default function configureStore(initialState) {
    return createStore(rootReducer, initialState, applyMiddleware());
}
