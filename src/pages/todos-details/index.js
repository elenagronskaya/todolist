import { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import {  getTodoById } from '../../redux/todo/actions';

import {
    selectTodos,

} from '../../redux/todo';

export default function TodosDetailsPage(props){
    const dispatch = useDispatch();
    const  {id} = props.match.params
    useEffect(() => {
            dispatch(getTodoById({id}))
        }, [dispatch]
    );
    
    const {
        loading,
        todoDetailItem, 
        error} = useSelector(selectTodos);
    
    return(
    <div>Details Page: TodoList Id:  {id}
        <div>{todoDetailItem.title}{todoDetailItem.date}</div>
    </div>
    )
}