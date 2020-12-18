import { createStore, applyMiddleware, compose } from 'redux';
import { rootReducer } from './rootReducer';
import thunk from  'redux-thunk'
import createSagaMiddleware from 'redux-saga'
import {startSagas} from './startSagas'
const sagaMiddleware = createSagaMiddleware();
const composeEnchancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

export const store = createStore(
    rootReducer,
    {},
    composeEnchancers(applyMiddleware(thunk, sagaMiddleware))
    );

    startSagas(sagaMiddleware);

