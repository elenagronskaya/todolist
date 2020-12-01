import { createActions } from 'redux-actions';

const identity = (data) => data;
export const {setAlert, removeAlert} = createActions ({
    SET_ALERT: identity,
    REMOVE_ALERT: identity,
});