import { createActions } from 'redux-actions';

const identity = (data) => data;
export const {addTodo, addTodoRequest, addTodoSuccess, addTodoError, deleteTodoRequest, deleteTodo, deleteTodoSuccess, deleteTodoError, fetchTodos, fetchTodosRequest,fetchTodosSuccess, fetchTodosError }  = createActions({
    ADD_TODO: identity,
    ADD_TODO_REQUEST: identity,
    ADD_TODO_SUCCESS: identity,
    ADD_TODO_ERROR: identity,
    DELETE_TODO_REQUEST: identity,
    DELETE_TODO: identity,
    DELETE_TODO_SUCCESS: identity,
    DELETE_TOTO_ERROR: identity,
    FETCH_TODOS: identity,
    FETCH_TODOS_REQUEST: identity,
    FETCH_TODOS_SUCCESS: identity,
    FETCH_TODOS_ERROR: identity,
});

export const {toggleCompleteState} = createActions ({
    TOGGLE_COMPLETE_STATE: identity,
    
})


