import {call, put, takeLatest, takeEvery } from 'redux-saga/effects';
import {
    deleteTodoSuccess,
    deleteTodoError,
    deleteTodoRequest,
    deleteTodo,
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
    getTodoNotesError

} from './actions'

import { setAlert } from '../alert/actions'



import {getTodos, createTodo, deleteTodo as removeTodo, fetchTodoById, updateTodo, getTodoNotes as apiGetTodoNotes} from '../../api';

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
        debugger;
        const todoItem = yield call(fetchTodoById, {todoId});
        debugger;
        yield put(getTodoByIdSuccess({todoItem}));
        // yield put(setAlert({type: 'success', msg: 'Todos successfully added!'}));
    }catch(error)
    {
        yield put(getTodoByIdError(error));
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





export function* todosSaga(){
    yield takeLatest(fetchTodos, fetchTodosHandler);
    yield takeEvery(deleteTodo, deleteTodoHandler);
    yield takeLatest(addTodo, AddTodoHandler);
    yield takeLatest(getTodoById, GetTodoByIdHandler);
    yield takeLatest(updateTodoItem, UpdateTodoItem);
    yield takeLatest(getTodoNotes, GetTodoNotesHandler)
    
    
}
