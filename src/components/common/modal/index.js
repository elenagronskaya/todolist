import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Button from '@material-ui/core/Button';
import ClearIcon from '@material-ui/icons/Clear';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { v4 as uuidv4} from 'uuid';


const AddTodoList = ({openAddTodoList, setOpeAddTodoList}) => {
    
    const [todoTitle, setTodoTitle] = useState('');
    const dispatch = useDispatch();

    const handleClose = (e) => {
        setOpeAddTodoList(false);
      };
      const handleChange = (e) => {
        setTodoTitle(e.target.value)
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
        setTodoTitle('');
        }
    }  

    return(

        <Dialog open={openAddTodoList} onClose={handleClose} aria-labelledby="form-dialog-title">
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

    )
}

export default AddTodoList;