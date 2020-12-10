import { handleActions } from 'redux-actions';


import { addTodoSuccess, addTodoRequest, deleteTodoSuccess, deleteTodoError, deleteTodoRequest, 
    addTodoError,toggleCompleteState,
fetchTodosRequest, fetchTodosSuccess, fetchTodosError,
getTodoByIdRequest, getTodoByIdError, getTodoByIdSuccess,
updateTodoItemRequest, updateTodoItemSuccess, updateTodoItemError, 
getTodoNotesRequest,
getTodoNotesSuccess,
getTodoNotesError,
addNoteRequest, addNoteSuccess, addNoteError,
deleteNoteError, deleteNoteRequest, deleteNoteSuccess,
toggleCompleteNoteStateRequest, toggleCompleteNoteStateSuccess, toggleCompleteNoteStateError} from './actions';


const initialState = {
    loading: false,
    error: null,
    todos: [],
    todoDetailItem: {
        title: '',
        date: '',
    },
    todoNotes: [],
    updating: false,
  
};
export const todosReducer = handleActions({
    [addTodoRequest] : (state) => ({
        ...state,
        error: null,
        loading: true,
    }),
    [addTodoSuccess]: (state, { payload: { todoItem } }) => {
        return {
        ...state,
        todos: [
            ...state.todos,
            {...todoItem}
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
    


    [addNoteRequest] : (state) => ({
        ...state,
        error: null,
        loading: false,
        updating: true,
    }),
    [addNoteSuccess]: (state, { payload: { note } }) => {
        return {
        ...state,
        todoNotes: [
            ...state.todoNotes,
            {...note}
        ],
        error: null,
        loading: false,
        updating: false,
    }},
    [addNoteError] : (state, {payload}) => { 
        return  {
        ...state,
        loading: false,
        error: payload,
        updating: false,
    }},

    [deleteNoteRequest] : (state) => ({
            ...state,
            error: null,
            loading: false,
            updating: true,
        }),

    [deleteNoteSuccess]: (state, { payload: { id } }) => {
        return {
        ...state,
        todoNotes: [
            ...state.todoNotes.filter((item) => item.id !== id)
        ],
        loading: false,
        updating: false,
    }},

    [deleteNoteError] : (state, {payload}) => ({
        ...state,
        loading: false,
        error: payload,
        updating: false,
    }),
   
    
    [getTodoNotesRequest] : (state) => ({
        ...state,
        error: null,
        loading: true,
    }),

    [getTodoNotesSuccess]: (state, { payload: { todoNotes } }) => {
        return {
        ...state,
        error: null,
        loading: false,
        todoNotes,

    }},
    [getTodoNotesError] : (state, {payload}) => { 
        return  {
        ...state,
        loading: false,
        error: payload,
    }},
    

    [toggleCompleteNoteStateRequest]: (state) => ({
        ...state,
        error: null,
        loading: true,
    }),

    [toggleCompleteNoteStateSuccess]: (state, {payload: {note}}) => {
        return {
        ...state,
        loading: false,
        error: null,
        todoNotes: [
            ...state.todoNotes.map((item) => {
                if (item.id === note.id) {
                   return {...note}
                }
                return {...item};
            })
        ]
    }},

    [toggleCompleteNoteStateError] : (state, {payload}) => ({
        ...state,
        loading: false,
        error: payload,
    }),
    
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
        todoDetailItem: null,
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
    [updateTodoItemRequest] : (state) => ({
        ...state,
        error: null,
        loading: true,
    }),
    [updateTodoItemSuccess] : (state, {payload: {todoItem}}) => {
        return{
        ...state,
        loading: false,
        todoDetailItem: {...todoItem},
    }},
    [updateTodoItemError] : (state, {payload}) => ({
        ...state,
        loading: false,
        error: payload,
    }),

}, initialState)

