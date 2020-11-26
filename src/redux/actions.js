import { createActions } from 'redux-actions';

const identity = (data) => data;
export const {addTodo, removeTodo}  = createActions({
    ADD_TODO: identity,
    REMOVE_TODO: identity,
});


