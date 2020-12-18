import { fetchTodosRequest,fetchTodosSuccess, fetchTodosError } from './actions';
import { getTodos, createTodo } from '../../api';

export const fetchTodos = () => async (dispatch) => {
    dispatch(fetchTodosRequest());

    try{
        const todos = await getTodos();
        dispatch(fetchTodosSuccess({todos}))
    }
    catch(error){
        dispatch(fetchTodosError(error))
    }
};


export const addTodos = () => async (dispatch) => {
    dispatch(fetchTodosRequest());

    try{
        const newTodoItem = await createTodo();
        dispatch(fetchTodosSuccess({newTodoItem}))
    }
    catch(error){
        dispatch(fetchTodosError(error))
    }
}