import { handleActions } from 'redux-actions';
import { addTodo, deleteTodo, toggleCompleteState} from './actions';



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
    // alert: {
    //     show: false,
    //     type: 'success',
    //     msg: '',
    // },
};
export const todosReducer = handleActions({
    [addTodo]: (state, { payload: { todoItem } }) => ({
        ...state,
        todos: [
            ...state.todos,
            todoItem
        ],
        // alert: {
        //     show: true,
        //     type: "success",
        //     msg: "Todo item is created successful"
        // }  
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
    
    [deleteTodo]: (state, { payload: { id } }) => {
        return {
        ...state,
        todos: [
            ...state.todos.filter((item) => item.id !== id)
        ]
    }}
        
}, initialState)

