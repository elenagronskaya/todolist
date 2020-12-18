import FormControl from '@material-ui/core/FormControl'
import moment from 'moment';
import Card from '@material-ui/core/Card';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { useSelector, useDispatch } from 'react-redux';
import { Button, OutlinedInput } from '@material-ui/core';
import { selectTodos} from '../../redux/todo/selectors';
import { selectAlert} from '../../redux/alert/selectors';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import Checkbox from '@material-ui/core/Checkbox';
import CreateIcon from '@material-ui/icons/Create';
import NoteItem from './noteitem';
import { useEffect , useState} from "react";
import { getTodoNotes } from '../../redux/todo/actions';
import { v4 as uuidv4} from 'uuid';
import IconButton from '@material-ui/core/IconButton';
import InputAdorment from '@material-ui/core/InputAdornment';
import TextField from '@material-ui/core/TextField'
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
    const [isFieldError, setIsFieldError] = useState(false);

    
    useEffect(() => {
        dispatch(getTodoNotes({todoId}))
    }, [dispatch]
);

const addNote = (e) =>{
    e.preventDefault()
    if (title === '') {
        setIsFieldError(true);
        return null;
    }
    if(title) {
    const newDate = new Date().toISOString();
    const note ={
        id: uuidv4(),
        date: newDate,
        title,
        todoItemId: todoId
    }
    dispatch({type: 'ADD_NOTE', payload: { note }});
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
// const AdronMent = (
//     <InputAdorment position="end">
//         <IconButton type="submit" color="primary" disabled ={title === ''}>
//             <CreateIcon/>
//         </IconButton>
//     </InputAdorment>
// )

    return(
        <div>
            
            <form onSubmit={addNote} className={classes.form}>
            <TextField autoFocus onChange={handleChange} value={title} label="addNote" variant="outlined" fullWidth  error={isFieldError}
               helperText={isFieldError ? 'Field is required' : ''} />
                <Button type='submit' color="primary" fullWidth>+ add note</Button>
            </form>
            {todoNotes.map((note) => ( 
                
                <NoteItem key={note.id} {...note}/>
                    
                
                ))} 
        </div>
    )
}



export default TodoNotes;