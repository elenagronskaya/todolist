import { useEffect , useState} from "react";
import { useDispatch, useSelector } from 'react-redux';
import { getTodoById } from '../../redux/todo/actions';
import moment from 'moment';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import {selectTodos} from '../../redux/todo';
import TodoNotes from '../../components/todos-notes';
import { useHistory } from "react-router-dom";
import AddTodoList from '../../components/common/AddTodoList';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    container: {
        width: "60%",
        margin: 10, 
        margin: "auto",
    },
    button: {
        justifyContent: "flex-end",
        display: "flex",
        marginTop: 20,
        
    },
    title: {
        textTransform: "uppercase",
        fontWeight: 400,
    },
    date: {
        fontSize: 16
    }
})


export default function TodosDetailsPage(props){
    const dispatch = useDispatch();
    const [openAddTodoList, setOpenAddTodoList] = useState(false);
    const newDate = new Date().toISOString();
    let history = useHistory();
    const  {todoId} = props.match.params;
    const classes = useStyles();

    useEffect(() => {
            dispatch(getTodoById({todoId}))
        }, [dispatch]
    );

    const handleClickOpen = () => {
        setOpenAddTodoList(true);
      };

    const deleteTodo = (id) => {
        return () => { 
            dispatch({type: 'DELETE_TODO', payload: { id }});
            dispatch({type: 'SET_ALERT', payload: {type: 'success', msg: `${id} id has been deleted`}})
            history.push('/todos')
        
            }
            
        };
        
        
    const {
        loading,
        todoDetailItem, 
        error} = useSelector(selectTodos);
        if(!todoDetailItem){
            return (
                <div>empty</div>
            )
        }
        if(error){
            return(
                <div>error</div>
            )
        }

    
    
    return(
    <div className={classes.container}>
        <div className={classes.button}>
        <Button onClick={deleteTodo(todoId)} variant="contained" >Delete</Button>
        <Button variant="contained" color="primary" onClick={handleClickOpen} >Update</Button>
        </div>
        <Typography variant="h2" className={classes.title}>{todoDetailItem.title}</Typography> 
        <Typography variant="caption" className={classes.date} color="textSecondary">{moment(newDate).format('MM/DD/YYYY h:mm')}</Typography>
        
        <TodoNotes todoId={todoId}/>
        

        <AddTodoList openAddTodoList={openAddTodoList} setOpenAddTodoList={setOpenAddTodoList}
            isUpdate={true} dispatchActionName={'UPDATE_TODO_ITEM'} updateItem = {todoDetailItem}
            />
    </div>
    
    )
}