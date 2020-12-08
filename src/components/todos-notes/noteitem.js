import moment from 'moment';
import Card from '@material-ui/core/Card';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import CardContent from '@material-ui/core/CardContent';
import { useSelector, useDispatch } from 'react-redux';
import { Button } from '@material-ui/core';
import { useEffect, useState } from 'react';
import { selectTodos} from '../../redux/todo/selectors';
import Snackbar from '@material-ui/core/Snackbar';
import Checkbox from '@material-ui/core/Checkbox';
import ClearIcon from '@material-ui/icons/Clear';


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
        
    },
    // completedItem: {
    //   textDecoration: 'line-through',
    //   opacity: '0.5',
    //   '&:hover': {
    //     textDecoration: 'line-through',
    //   }
    // },
    // todoItem: {
    //   textDecoration: 'none',
    //   opacity: '1',
    //   transition: 'all 350ms ease-out',
     
    // },
  });


function NoteItem({id, title, isCompleted, date}){
  
    const classes = useStyles();
    const dispatch = useDispatch();
    // const [isComplete, setIsComplete] = useState(isCompleted);
    
    
    const deleteNote = (id) => {
        return () => { 
            dispatch({type: 'DELETE_NOTE', payload: { id }});
        }
        
    };
    const toggleCompleteTodoState = (id) => {
        return (e) => {
        const isComplete = !isCompleted;
        dispatch({type:'TOGGLE_COMPLETE_NOTE_STATE', payload:{note: {id, title, isComplete, date}}})
        }
    }
   
    

    return(
        <Card elevation={3} className={`${classes.todoItem} ${isCompleted ? classes.completedItem : ''}`} onClick={toggleCompleteTodoState(id)}>
          <Checkbox checked={isCompleted} onChange={toggleCompleteTodoState(id)} inputProps={{ 'aria-label': 'primary checkbox' }} />
            <CardContent key={id} className={classes.root} >
                <Typography className={classes.title} color="textSecondary" variant="h5" component="h2">{title}</Typography>
                <Typography className={classes.date}>{moment(date).format('MM/DD/YYYY h:mm')}</Typography>
                <Button className={classes.button} onClick={deleteNote(id)} variant="contained">
                <ClearIcon color="primary"></ClearIcon>
                </Button> 
            </CardContent>
        </Card>
    )
}

export default NoteItem;