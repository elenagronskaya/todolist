import { createActions } from 'redux-actions';

const identity = (data) => data;
export const {
    addTodo,
    addTodoRequest, 
    addTodoSuccess, 
    addTodoError, 

    addNote,
    addNoteRequest, 
    addNoteSuccess, 
    addNoteError, 

    deleteNoteRequest, 
    deleteNote, 
    deleteNoteSuccess,
    deleteNoteError, 

    deleteTodoRequest, 
    deleteTodo, 
    deleteTodoSuccess,
    deleteTodoError, 

    fetchTodos, 
    fetchTodosRequest,
    fetchTodosSuccess, 
    fetchTodosError,

    getTodoById,
    getTodoByIdRequest,
    getTodoByIdSuccess,
    getTodoByIdError, 

    updateTodoItem,
    updateTodoItemRequest,
    updateTodoItemSuccess,
    updateTodoItemError,

    getTodoNotes,
    getTodoNotesRequest,
    getTodoNotesSuccess,
    getTodoNotesError,

    }  = createActions({

    ADD_TODO: identity,
    ADD_TODO_REQUEST: identity,
    ADD_TODO_SUCCESS: identity,
    ADD_TODO_ERROR: identity,

    DELETE_TODO_REQUEST: identity,
    DELETE_TODO: identity,
    DELETE_TODO_SUCCESS: identity,
    DELETE_TODO_ERROR: identity,

    ADD_NOTE: identity,
    ADD_NOTE_REQUEST: identity,
    ADD_NOTE_SUCCESS: identity,
    ADD_NOTE_ERROR: identity,

    DELETE_NOTE_REQUEST: identity,
    DELETE_NOTE: identity,
    DELETE_NOTE_SUCCESS: identity,
    DELETE_NOTE_ERROR: identity,

    FETCH_TODOS: identity,
    FETCH_TODOS_REQUEST: identity,
    FETCH_TODOS_SUCCESS: identity,
    FETCH_TODOS_ERROR: identity,

    GET_TODO_BY_ID: identity,
    GET_TODO_BY_ID_REQUEST: identity,
    GET_TODO_BY_ID_SUCCESS: identity,
    GET_TODO_BY_ID_ERROR: identity,

    UPDATE_TODO_ITEM: identity,
    UPDATE_TODO_ITEM_REQUEST: identity,
    UPDATE_TODO_ITEM_SUCCESS: identity,
    UPDATE_TODO_ITEM_ERROR: identity,

    GET_TODO_NOTES: identity,
    GET_TODO_NOTES_REQUEST: identity,
    GET_TODO_NOTES_SUCCESS: identity,
    GET_TODO_NOTES_ERROR: identity,

});

export const {toggleCompleteNoteState, toggleCompleteNoteStateRequest, toggleCompleteNoteStateSuccess, toggleCompleteNoteStateError} = createActions ({
    TOGGLE_COMPLETE_NOTE_STATE: identity,
    TOGGLE_COMPLETE_NOTE_STATE_REQUEST: identity,
    TOGGLE_COMPLETE_NOTE_STATE_SUCCESS: identity,
    TOGGLE_COMPLETE_NOTE_STATE_ERROR: identity,

    
})


