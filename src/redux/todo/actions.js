import { createActions } from 'redux-actions';

const identity = (data) => data;
export const {addTodo, deleteTodo, fetchTodosRequest,fetchTodosSuccess, fetchTodosError }  = createActions({
    ADD_TODO: identity,
    DELETE_TODO: identity,
    FETCH_TODOS_REQUEST: identity,
    FETCH_TODOS_SUCCESS: identity,
    FETCH_TODOS_ERROR: identity,
});

export const {toggleCompleteState} = createActions ({
    TOGGLE_COMPLETE_STATE: identity,
    
})


