import moment from 'moment';
import Card from '@material-ui/core/Card';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import CardContent from '@material-ui/core/CardContent';
import { useDispatch } from 'react-redux';
import { Button } from '@material-ui/core';
import Checkbox from '@material-ui/core/Checkbox';
import ClearIcon from '@material-ui/icons/Clear';


const useStyles = makeStyles({
    root: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
    },
    button: {
        cursor: "pointer",
        
    },
    card: {
      marginTop: 10, 

    }
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
        const toggleCompleteState = !isCompleted;
        dispatch({type:'TOGGLE_COMPLETE_NOTE_STATE', payload:{note: {id, title, isCompleted: toggleCompleteState, date}}})
        }
    }
   
    

    return(
        <Card elevation={3} className={classes.card} onClick={toggleCompleteTodoState(id)}>
            <CardContent key={id} className={classes.root} >
              <Checkbox checked={isCompleted} onChange={toggleCompleteTodoState(id)} inputProps={{ 'aria-label': 'primary checkbox' }} />
                <Typography  color="textSecondary" variant="h4" component="h2">{title}</Typography>
                <Typography className={classes.date}>{moment(date).format('MM/DD/YYYY h:mm')}</Typography>
                <Button className={classes.button} onClick={deleteNote(id)} variant="contained">
                <ClearIcon color="primary"></ClearIcon>
                </Button> 
            </CardContent>
        </Card>
    )
}

export default NoteItem;