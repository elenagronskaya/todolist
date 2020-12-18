import {call, put, takeLatest, takeEvery } from 'redux-saga/effects';
import {
    deleteTodoSuccess,
    deleteTodoError,
    deleteTodoRequest,
    deleteTodo,

    addNote,
    addNoteSuccess,
    addNoteRequest,
    addNoteError,

    deleteNoteSuccess,
    deleteNoteError,
    deleteNoteRequest,
    deleteNote,

    addTodo,
    addTodoSuccess,
    addTodoRequest,
    addTodoError,

    fetchTodos,
    fetchTodosError, 
    fetchTodosRequest, 
    fetchTodosSuccess,

    getTodoById,
    getTodoByIdRequest,
    getTodoByIdSuccess,
    getTodoByIdError,

    updateTodoItem,
    updateTodoItemError,
    updateTodoItemRequest,
    updateTodoItemSuccess,

    getTodoNotes,
    getTodoNotesRequest,
    getTodoNotesSuccess,
    getTodoNotesError,

    toggleCompleteNoteState,
    toggleCompleteNoteStateRequest,
    toggleCompleteNoteStateSuccess,
    toggleCompleteNoteStateError

} from './actions'

import { setAlert } from '../alert/actions'



import {getTodos, createTodo, deleteTodo as removeTodo,
     fetchTodoById, updateTodo, getTodoNotes as apiGetTodoNotes,
      deleteNote as removeNote, apiAddTodoNote, apiUpdateNote} from '../../api';

function* fetchTodosHandler(){
    yield put(fetchTodosRequest())
    
    try{
        const todos = yield call(getTodos);
        yield put(fetchTodosSuccess({todos}))
        yield put(setAlert({type: 'success', msg: 'Todos successfully loaded!'}));
    }catch(error)
    {
        yield put(fetchTodosError(error))
    }
}


function* deleteTodoHandler({payload: {id}}){
    yield put(deleteTodoRequest())
    
    try{
        const todos = yield call(removeTodo, id);
        yield put(deleteTodoSuccess({id}))
        yield put(setAlert({type: 'success', msg: 'Item has been deleted!'}));
    }catch(error)
    {
        yield put(deleteTodoError(error))
    }
}


function* AddTodoHandler({payload: {todoItem}}){
    yield put(addTodoRequest());
    
    try{ 
        yield call(createTodo, todoItem);
        yield put(addTodoSuccess({todoItem}));
        yield put(setAlert({type: 'success', msg: 'Todos successfully added!'}));
    }catch(error)
    {
        yield put(addTodoError(error));
    }
}
function* GetTodoNotesHandler({payload: {todoId}}){
    yield put(getTodoNotesRequest());
    
    try{ 
        const todoNotes = yield call(apiGetTodoNotes, {todoId});
        yield put(getTodoNotesSuccess({todoNotes}));
    }catch(error) {
        yield put(getTodoNotesError(error));
    }

}

function* GetTodoByIdHandler({payload: {todoId}}){
    yield put(getTodoByIdRequest());
    try{ 
        const todoItem = yield call(fetchTodoById, {todoId});
        yield put(getTodoByIdSuccess({todoItem}));
        // yield put(setAlert({type: 'success', msg: 'Todos successfully added!'}));
    }catch(error)
    {
        yield put(getTodoByIdError(error));
    }
};

function* AddTodoNoteHandler({payload: {note}}){
    yield put(addNoteRequest());
    
    try{ 
        yield call(apiAddTodoNote, {note});
        yield put(addNoteSuccess({note}));
    }catch(error) {
        yield put(addNoteError(error));
    }

}
function* deleteNoteHandler({payload: {id}}){
    yield put(deleteNoteRequest())
    
    try{
        const notes = yield call(removeNote, id);
        yield put(deleteNoteSuccess({id}))
    }catch(error)
    {
        yield put(deleteNoteError(error))
    }
}

function* UpdateTodoItem({ payload: {todoItem}}) {
    yield put(updateTodoItemRequest())
    try{
       yield call(updateTodo, {todoItem});
        yield put(updateTodoItemSuccess({todoItem}))
        yield put(setAlert({type: 'success', msg: 'Item has been deleted!'}));
    }catch(error)
    {
        yield put(updateTodoItemError(error))
    }
}

function* ToggleCompleteNoteState ({payload:{note}}){
    // yield put(toggleCompleteNoteStateRequest())
 
    try{
        yield call(apiUpdateNote, {note});
        yield put(toggleCompleteNoteStateSuccess({note}))
    }catch(error){
        yield put(toggleCompleteNoteStateError(error))
    }
}





export function* todosSaga(){
    yield takeLatest(fetchTodos, fetchTodosHandler);
    yield takeEvery(deleteTodo, deleteTodoHandler);
    yield takeEvery(deleteNote, deleteNoteHandler);
    yield takeLatest(addTodo, AddTodoHandler);
    yield takeLatest(addNote, AddTodoNoteHandler);
    yield takeLatest(getTodoById, GetTodoByIdHandler);
    yield takeLatest(updateTodoItem, UpdateTodoItem);
    yield takeLatest(getTodoNotes, GetTodoNotesHandler);
    yield takeLatest(toggleCompleteNoteState, ToggleCompleteNoteState);
    
    
    
}
