import{ handleActions} from 'redux-actions';
import { addTodo, removeTodo, setAlert, removeAlert} from './actions';

const newDate = new Date().toISOString();

const initialState = {
    todos: [ 
        {
            id: 'xgkdhgskruhgldk123',
            date: newDate,
            title: 'Initial todo Item',
        },
    ],
    alert: {
        show: false
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

export const rootReducer = handleActions ({
    [addTodo]: (state, {payload: {todoItem}}) => ({
        ...state,
        todos: [
        ...state.todos,
        todoItem
        ]
        }),
    [setAlert]: (state, payload) => {
        return{
        ...state,
        alert: {show:true},
    }},
    [removeAlert]: (state, payload) => ({
        ...state,
        alert: {show: false},
    }),
    [removeTodo]: (state, {payload:{id}}) => 
        state.filter((item) => item.id !== id)
}, initialState)

