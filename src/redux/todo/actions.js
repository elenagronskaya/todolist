import { createActions } from 'redux-actions';

const identity = (data) => data;
export const {addTodo, deleteTodo}  = createActions({
    ADD_TODO: identity,
    DELETE_TODO: identity,
});

export const {toggleCompleteState} = createActions ({
    TOGGLE_COMPLETE_STATE: identity,
    
})


