import { handleActions } from 'redux-actions';
import { addTodo, deleteTodo, toggleCompleteState,
fetchTodosRequest, fetchTodosSuccess, fetchTodosError} from './actions';

const newDate = new Date().toISOString();
const initialState = {
    loading: false,
    error: null,
    todos: [{date : newDate,
    id : "kasdJGKkd234321Gdks23Dkkdj3",
    title : "Init Todo List"}],
  
};
export const todosReducer = handleActions({
    [addTodo]: (state, { payload: { todoItem } }) => ({
        ...state,
        todos: [
            ...state.todos,
            todoItem
        ],
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
    }},
    [fetchTodosRequest] : (state) => ({
        ...state,
        error: null,
        loading: true,
    }
    ),
    [fetchTodosSuccess] : (state, {payload: {todos}}) => ({
        ...state,
        loading: false,
        todos,
    }),
    [fetchTodosError] : (state, {payload}) => ({
        ...state,
        loading: false,
        error: payload,
        todos: [],
    }),
}, initialState)

