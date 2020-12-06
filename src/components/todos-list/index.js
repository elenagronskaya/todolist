import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {Link} from 'react-router-dom';
import moment from 'moment';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import { selectAlert} from '../../redux/alert/selectors';
import ClearIcon from '@material-ui/icons/Clear';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import { v4 as uuidv4} from 'uuid';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';



import {
    selectTodos,
    fetchTodos,
} from '../../redux/todo';
function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
  }

const TodosList = () => {
    const dispatch = useDispatch();
    const alert = useSelector(selectAlert);
    const [openAddTodoDialog, setOpeAddTodoDialog] = useState(false);
    
    const [todoTitle, setTodoTitle] = useState('');
    const {
        loading,
        todos, 
        error} = useSelector(selectTodos);

    
    const handleChange = (e) => {
        setTodoTitle(e.target.value)
    };
    const handleClickOpen = () => {
        setOpeAddTodoDialog(true);
      };
      const handleClose = (e) => {
        setOpeAddTodoDialog(false);
        dispatch({type: 'REMOVE_ALERT'})
      };
    
    
    const addTodo = (e) =>{
        e.preventDefault()
        if(todoTitle) {
        const newDate = new Date().toISOString();
        const todoItem ={
            id: uuidv4(),
            date: newDate,
            title: todoTitle,
        }
        dispatch({type: 'ADD_TODO', payload: {todoItem: todoItem }});
        dispatch({type: 'SET_ALERT', payload: {type: 'success', msg: 'Todo item is created successful'}})
        setTodoTitle('');
        }else{
            dispatch({type: 'SET_ALERT', payload: {type: 'error', msg: 'Todo title is required'}})
        }
    }  
    const deleteTodo = (id) => {
        return () => { 
            dispatch({type: 'DELETE_TODO', payload: { id }});
            dispatch({type: 'SET_ALERT', payload: {type: 'success', msg: `${id} id has been deleted`}})
    
            }
        
    };
    useEffect(() => {
       dispatch(fetchTodos());
    }, [dispatch]
    );

        if (loading){
            return <div>Loading...</div>
        }

        
        if (error){
            return <div>Error...</div>
        }
    

    return(
        <>
         <Grid container>
            {todos.map(({title, id, date}) => (
                <Grid item xs = {3} key ={id}>
                    <Card>
                        <CardActionArea component={Link} to={`/todos/${id}`}>
                            <CardContent>
                                <Typography variant="h5">{title}</Typography>
                                <Typography variant="caption" color="textSecondary">{moment(date).format('MM/DD/YYYY h:mm')}</Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
            <Button onClick={deleteTodo(id)} variant="contained">
                <ClearIcon color="primary"></ClearIcon>
            </Button>
                </Grid>
            ))}
            
            <Dialog open={openAddTodoDialog} onClose={handleClose} aria-labelledby="form-dialog-title">
            <DialogTitle>Add Todo Items</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        To subscribe to this website, please enter your email address here. We will send updates
                        occasionally.
                    </DialogContentText>
                <form onSubmit={addTodo}>
                    <TextField autoFocus onChange={handleChange} value={todoTitle} label="addTodo" variant="outlined" fullWidth />
                
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        <ClearIcon color="primary"></ClearIcon>
                    </Button>
                    <Button type="submit" onClick={handleClose} color="primary">
                        Submit
                    </Button>
                </DialogActions>
                </form>
                </DialogContent>
            </Dialog>
            <Button variant="contained" color="primary" onClick={handleClickOpen}>Add todo</Button>
        
        </Grid>
        <Snackbar open={alert.show}>
        <Alert onClose={handleClose} severity={alert.type}>
            {alert.msg}
        </Alert>
    </Snackbar>
    </>
    )
}

export default TodosList;