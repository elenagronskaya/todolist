import { handleActions } from 'redux-actions';
import { setAlert, removeAlert } from './actions';

const initialState = {
    
    alert: {
        show: false,
        type: 'success',
        msg: '',
    },
};


export const alertReducer = handleActions({
    
    [setAlert]: (state, { payload: { type, msg } }) => ({
            ...state,
            alert: {
                show: true,
                type,
                msg
            },    
    }),
    
    [removeAlert]: (state, payload) => ({
        ...state,
        alert: { show: false },
    }),
        
}, initialState)

