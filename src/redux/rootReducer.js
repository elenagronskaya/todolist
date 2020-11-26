import{ handleActions} from 'redux-actions';
import { addTodo, removeTodo} from './actions';

const newDate = new Date().toISOString();

const initialState = {
    
todos: [ 
    {
        id: 'xgkdhgskruhgldk123',
        date: newDate,
        title: 'Initial todo Item',
    },
    ]
};


// export const rootReducer = (state = initialState, action) => {
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
        ],
}),
    [removeTodo]: (state, {payload:{id}}) => 
        state.filter((item) => item.id !== id)
}, initialState)

