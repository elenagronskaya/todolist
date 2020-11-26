import TextField from '@material-ui/core/TextField'
import moment from 'moment';
import Card from '@material-ui/core/Card';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import CardContent from '@material-ui/core/CardContent';
import { useSelector, useDispatch } from 'react-redux';
import { ADD_TODO } from '../../redux/actions';
import { Button } from '@material-ui/core';
import { useState } from 'react';
import { selectTodos } from '../../redux/selectors';



const useStyles = makeStyles({
    root: {
      minWidth: 275,
      marginBottom: 10,
      
    },
    title: {
      fontSize: 18,
      marginBottom: 10,
      fontWeight: 700,
    },
    date: {
      marginBottom: 12,
    },
  });

function TodosList (){
    const classes = useStyles();
    const todos = useSelector(selectTodos);
    const dispatch = useDispatch();
    const [title, setTitle] = useState('');

    const handleChange = (e) => {
        setTitle(e.target.value)
    }

    const addTodo = (e) =>{
        e.preventDefault()
        const newDate = new Date().toISOString();
        const todoItem ={
            id: newDate,
            date: newDate,
            title,
        }
        dispatch({type: 'ADD_TODO', payload: {todoItem }});
        setTitle('');
    }
    return(
        
        <Card className={classes.root} elevation={3}>
        <form onSubmit={addTodo}>
            <TextField onChange={handleChange} value={title} label="addTodo" variant="outlined" fullWidth/>
            <Button type='submit'>Add todo</Button>
            
        </form>
        {todos.map(({id, title, date}) => (
                <CardContent key={id}>
                    <Typography className={classes.title} color="textSecondary" variant="h5" component="h2">{title}</Typography>
                    <Typography className={classes.date}>{moment(date).format('MMMM Do YYYY, h:mm')}</Typography>
                </CardContent>
            
            ))}
        </Card> 
    )
}



export default TodosList;