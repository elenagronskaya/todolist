import { useEffect , useState} from "react";
import { useDispatch, useSelector } from 'react-redux';
import { getTodoById } from '../../redux/todo/actions';
import moment from 'moment';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import {selectTodos} from '../../redux/todo';
import TodoNotes from '../../components/todos-notes';
import { useHistory } from "react-router-dom";
import DeleteConfirmationDialog from '../../components/common/DeleteConfirmationDialog';
import AddTodoList from '../../components/common/AddTodoList';
import { makeStyles } from '@material-ui/core/styles';
import {Link} from 'react-router-dom';

const useStyles = makeStyles({
    container: {
        width: "60%",
        margin: 10, 
        margin: "auto",
    },
    button: {
    display: "flex",
    marginTop: 20,
    justifyContent: "space-between",

    },
    title: {
        textTransform: "uppercase",
        fontWeight: 400,
    },
    date: {
        fontSize: 16
    },
    buttonContainer: {
        display: "inline-block"
    },
    back: {
        paddingLeft: 0
    }
})


export default function TodosDetailsPage(props){
    const dispatch = useDispatch();
    const [openAddTodoList, setOpenAddTodoList] = useState(false);
    const newDate = new Date().toISOString();
    let history = useHistory();
    const  {todoId} = props.match.params;
    const classes = useStyles();
    const [open, setOpen] = useState(false);
    useEffect(() => {
            dispatch(getTodoById({todoId}))
        }, [dispatch]
    );

    const handleClickOpen = () => {
        setOpenAddTodoList(true);
      };


      const onClose = (e)=> {
          setOpen(false);
      }
      const openConfirmDeleteDialog = () => {
        setOpen(!open);
      }
    
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

        <Button color="primary" component={Link} to={`/todos/`} className={classes.back}>go back</Button> 
        <div className={classes.buttonContairer} >
        <Button onClick={openConfirmDeleteDialog} color='secondary' >Delete</Button>
        <Button color="primary" onClick={handleClickOpen} >Update</Button>
        </div>
        
        </div>
        <Typography variant="h2" className={classes.title}>{todoDetailItem.title}</Typography> 
        <Typography variant="caption" className={classes.date} color="textSecondary">{moment(newDate).format('MM/DD/YYYY h:mm')}</Typography>
        
        <TodoNotes todoId={todoId}/>
        

        <AddTodoList openAddTodoList={openAddTodoList} setOpenAddTodoList={setOpenAddTodoList}
            isUpdate={true} dispatchActionName={'UPDATE_TODO_ITEM'} updateItem = {todoDetailItem}
            />

        {open && <DeleteConfirmationDialog title="Todo List" open={open} onClose={onClose} onHandlerToRun={deleteTodo(todoId)}/>}
    </div>
    
    )
}