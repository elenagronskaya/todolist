import { createStore, applyMiddleware, compose } from 'redux';
import { rootReducer } from './rootReducer';
import thunk from  'redux-thunk'

//const composeEnchancers = window.__REDUX_DEVTOOLS_EXTENSION__COMPOSE__ || compose;
const composeEnchancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

export const store = createStore(
    rootReducer,
    {},
    composeEnchancers(applyMiddleware(thunk))
    );