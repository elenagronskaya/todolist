import { handleActions } from 'redux-actions';
import { addTodo, deleteTodo, setAlert, removeAlert, toggleCompleteState} from './actions';

const newDate = new Date().toISOString();

const initialState = {
    todos: [
        {
            id: 'xgkdhgskruhgldk123',
            date: newDate,
            title: 'Initial todo Item',
            isCompleted: false,
        },
    ],
    alert: {
        show: false,
        type: 'success',
        msg: '',
    },
};




// export const todosReducer = (state = initialState, action) => {
//     switch(action.type){
//         case'ADD_TODO': {
//             const todoItem = action.todoItem;
//             return [...state, todoItem];
//         }
//         case 'REMOVE_TODO': {
//             const id = action.payload.id;
//             return state.filter((item) => item.id !== id);
//         }
//         default:
//             return state;
//     }
// };

export const rootReducer = handleActions({
    [addTodo]: (state, { payload: { todoItem } }) => ({
        ...state,
        todos: [
            ...state.todos,
            todoItem
        ],
        alert: {
            show: true,
            type: "success",
            msg: "Todo item is created successful"
        }  
    }),
    [setAlert]: (state, { payload: { type, msg } }) => ({
            ...state,
            alert: {
                show: true,
                type,
                msg
            },    
    }),
    [toggleCompleteState]: (state, {payload: {id}}) => {
        return {
        ...state,
        todos: [
            ...state.todos.map((item) => {
                if (item.id === id) {
                    item.isCompleted = !item.isCompleted;
                }
                return item;
            })

        ]
    }},
    
    [removeAlert]: (state, payload) => ({
        ...state,
        alert: { show: false },
    }),
    [deleteTodo]: (state, { payload: { id } }) => {
        return {
        ...state,
        todos: [
            ...state.todos.filter((item) => item.id !== id)
        ]
    }}
        
}, initialState)

