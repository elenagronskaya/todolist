import TextField from '@material-ui/core/TextField'
import moment from 'moment';
import Card from '@material-ui/core/Card';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import CardContent from '@material-ui/core/CardContent';
import { useSelector, useDispatch } from 'react-redux';
import { Button } from '@material-ui/core';
import { selectTodos} from '../../redux/todo/selectors';
import { selectAlert} from '../../redux/alert/selectors';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import Checkbox from '@material-ui/core/Checkbox';
import ClearIcon from '@material-ui/icons/Clear';
import NoteItem from './noteitem';
import { useEffect , useState} from "react";
import { getTodoNotes } from '../../redux/todo/actions';
import { v4 as uuidv4} from 'uuid';


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

function TodoNotes ({todoId}){
    const classes = useStyles();
   
    const {todoNotes, loading, error} = useSelector(selectTodos);
    // const alert = useSelector(selectAlert);
    const dispatch = useDispatch();
    const [title, setTitle] = useState('');

    
    useEffect(() => {
        dispatch(getTodoNotes({todoId}))
    }, [dispatch]
);
const addNote = (e) =>{
    e.preventDefault()

    if(title) {
    const newDate = new Date().toISOString();
    const note ={
        id: uuidv4(),
        date: newDate,
        title,
    }
    dispatch({type: 'ADD_NOTE', payload: {note: note }});
    setTitle('');
    }
};
const handleChange = (e) => {
    setTitle(e.target.value)
};
    
    // const deleteTodo = (id) => {
    //     return () => { 
    //         dispatch({type: 'DELETE_TODO', payload: { id }});
    //         dispatch({type: 'SET_ALERT', payload: {type: 'success', msg: `${id} id has been deleted`}})
    
    //         }
        
    // };
    // const toggleCompleteTodoState = (id) => {
    //     return (e) => {
    //     dispatch({type:'TOGGLE_COMPLETE_STATE', payload:{id}})
    //     }
    // }
    // const addTodo = (e) =>{
    //     e.preventDefault()

    //     if(title) {
    //     const newDate = new Date().toISOString();
    //     const todoItem ={
    //         id: newDate,
    //         date: newDate,
    //         title,
    //     }
    //     dispatch({type: 'ADD_TODO', payload: {todoItem: todoItem }});
    //     dispatch({type: 'SET_ALERT', payload: {type: 'success', msg: 'Todo item is created successful'}})
    //     setTitle('');
    //     }else{
    //         dispatch({type: 'SET_ALERT', payload: {type: 'error', msg: 'Todo title is required'}})
    //     }
    // }

    if (loading){
        return <div>Loading...</div>
    }

    
    if (error){
        return <div>Error...</div>
    }
    
    if (!todoNotes){
        return <div>No notes were defined</div>
    }

    return(
        <Card container>
            
            <form onSubmit={addNote}>
                <TextField onChange={handleChange} value={title} label="addTodo" variant="outlined" fullWidth/>
                <Button type='submit' variant="contained" color="primary" >Add note</Button>
                
            </form>
            {todoNotes.map((note) => ( 
                
                <NoteItem key={note.id} {...note}/>
                    
                
                ))} 
        </Card>
    )
}



export default TodoNotes;