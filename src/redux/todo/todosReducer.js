import { handleActions } from 'redux-actions';
import { addTodoSuccess, addTodoRequest, deleteTodoSuccess, deleteTodoError, deleteTodoRequest, addTodoError,toggleCompleteState,
fetchTodosRequest, fetchTodosSuccess, fetchTodosError,
getTodoByIdRequest, getTodoByIdError, getTodoByIdSuccess} from './actions';


const initialState = {
    loading: false,
    error: null,
    todos: [],
    todoDetailItem: {
        title: '',
        date: '',
    }
  
};
export const todosReducer = handleActions({
    [addTodoSuccess]: (state, { payload: { todoItem } }) => {
        return {
        ...state,
        todos: [
            ...state.todos,
            todoItem
        ],
        error: null,
        loading: false,
    }},
    [addTodoError] : (state, {payload}) => { 
        return  {
        ...state,
        loading: false,
        error: payload,
    }},
    [addTodoRequest] : (state) => ({
        ...state,
        error: null,
        loading: true,
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
    [deleteTodoSuccess]: (state, { payload: { id } }) => {
        return {
        ...state,
        todos: [
            ...state.todos.filter((item) => item.id !== id)
        ],
        loading: false,
    }},

    [deleteTodoError] : (state, {payload}) => ({
        ...state,
        loading: false,
        error: payload,
    }),
    [deleteTodoRequest] : (state) => ({
        ...state,
        error: null,
        loading: true,
    }),

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
    [getTodoByIdRequest] : (state) => ({
        ...state,
        error: null,
        loading: true,
    }
    ),
    [getTodoByIdSuccess] : (state, {payload: {todoItem}}) => {
          return {
        ...state,
        loading: false,
        todoDetailItem: todoItem,
    }},
    [getTodoByIdError] : (state, {payload}) => ({
        ...state,
        loading: false,
        error: payload,
        // todoDetailItem: null,
    }),

}, initialState)

