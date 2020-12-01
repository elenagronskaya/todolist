import TextField from '@material-ui/core/TextField'
import moment from 'moment';
import Card from '@material-ui/core/Card';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import CardContent from '@material-ui/core/CardContent';
import { useSelector, useDispatch } from 'react-redux';
import { Button } from '@material-ui/core';
import { useState } from 'react';
import { selectTodos, selectAlert } from '../../redux/selectors';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import Checkbox from '@material-ui/core/Checkbox';
import ClearIcon from '@material-ui/icons/Clear';


function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
  }
  

const useStyles = makeStyles({
    root: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
    },


    title: {
      fontSize: 18,
      paddingRight:10,
      fontWeight: 700,
    },

    date: {
      paddingRight: 25,
    },
    button: {
        cursor: "pointer",
        
    }
  });

function TodosList (){
    const classes = useStyles();
    const todos = useSelector(selectTodos);
    const alert = useSelector(selectAlert);
    const dispatch = useDispatch();
    const [title, setTitle] = useState('');

    const handleClose = (e) => {
        dispatch({type: 'REMOVE_ALERT'})
    }
    

    const handleChange = (e) => {
        setTitle(e.target.value)
    };
    
    const deleteTodo = (id) => {
        return () => { 
            dispatch({type: 'DELETE_TODO', payload: { id }});
            dispatch({type: 'SET_ALERT', payload: {type: 'success', msg: `${id} id has been deleted`}})
    
            }
        
    };
    const toggleCompleteTodoState = (id) => {
        return (e) => {
        dispatch({type:'TOGGLE_COMPLETE_STATE', payload:{id}})
        }
    }
    const addTodo = (e) =>{
        e.preventDefault()

        if(title) {
        const newDate = new Date().toISOString();
        const todoItem ={
            id: newDate,
            date: newDate,
            title,
        }
        dispatch({type: 'ADD_TODO', payload: {todoItem: todoItem }});
        dispatch({type: 'SET_ALERT', payload: {type: 'success', msg: 'Todo item is created successful'}})
        setTitle('');
        }else{
            dispatch({type: 'SET_ALERT', payload: {type: 'error', msg: 'Todo title is required'}})
        }
    }
    return(
        <>
        <Card elevation={3}>
        <form onSubmit={addTodo}>
            <TextField onChange={handleChange} value={title} label="addTodo" variant="outlined" fullWidth/>
            <Button type='submit' variant="contained" color="primary" fullWidth>Add todo</Button>
            
        </form>
        {todos.map(({id, title, date, isCompleted}) => ( 
                <CardContent key={id} className={classes.root} >
                    <Checkbox checked={isCompleted} onChange={toggleCompleteTodoState(id)} inputProps={{ 'aria-label': 'primary checkbox' }} />
                    <Typography className={classes.title} color="textSecondary" variant="h5" component="h2">{title}</Typography>
                    <Typography className={classes.date}>{moment(date).format('MM/DD/YYYY h:mm')}</Typography>
                    <Button className={classes.button} onClick={deleteTodo(id)} variant="contained">
                    <ClearIcon color="primary"></ClearIcon>
                    </Button>
                    
                </CardContent>
            
            ))}
        </Card> 
         <Snackbar open={alert.show}>
            <Alert onClose={handleClose} severity={alert.type}>
                {alert.msg}
            </Alert>
        </Snackbar>
        </>
    )
}



export default TodosList;