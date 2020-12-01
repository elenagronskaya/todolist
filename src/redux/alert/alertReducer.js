import { handleActions } from 'redux-actions';
import { addTodo, setAlert, removeAlert } from './actions';

const newDate = new Date().toISOString();

const initialState = {
    // todos: [
    //     {
    //         id: 'xgkdhgskruhgldk123',
    //         date: newDate,
    //         title: 'Initial todo Item',
    //         isCompleted: false,
    //     },
    // ],
    alert: {
        show: false,
        type: 'success',
        msg: '',
    },
};


export const alertReducer = handleActions({
    // [addTodo]: (state, { payload: { todoItem } }) => ({
    //     ...state,
    //     todos: [
    //         ...state.todos,
    //         todoItem
    //     ],
    //     alert: {
    //         show: true,
    //         type: "success",
    //         msg: "Todo item is created successful"
    //     }  
    // }),
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

