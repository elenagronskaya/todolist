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
   form: {
       marginTop:20,
   }
  });

function TodoNotes ({todoId}){
    const classes = useStyles();
   
    const {todoNotes, loading, error} = useSelector(selectTodos);
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
        todoItemId: todoId
    }
    dispatch({type: 'ADD_NOTE', payload: {note: note }});
    setTitle('');
    }
};
const handleChange = (e) => {
    setTitle(e.target.value)
};
    
    
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
        <div>
            
            <form onSubmit={addNote} className={classes.form}>
                <TextField onChange={handleChange} value={title} label="addTodo" variant="outlined" fullWidth />
                <Button type='submit' variant="contained" color="primary" fullWidth>+ Add note</Button>
                
            </form>
            {todoNotes.map((note) => ( 
                
                <NoteItem key={note.id} {...note}/>
                    
                
                ))} 
        </div>
    )
}



export default TodoNotes;