import { connect } from 'react-redux';
import moment from 'moment';
import Card from '@material-ui/core/Card';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import CardContent from '@material-ui/core/CardContent';

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

function TodosList ({ todos }){
    const classes = useStyles();
    return(
        <>
        {todos.map(({id, title, date}) => (
            <Card className={classes.root} elevation={3}>
                <CardContent key={id}>
                    <Typography className={classes.title} color="textSecondary" variant="h5" component="h2">{title}</Typography>
                    <Typography className={classes.date}>{moment(date).format('MMMM Do YYYY, h:mm')}</Typography>
                </CardContent>
            </Card>
            ))}
        </>    
    )
}
//     <ul>
//         {todos.map(({id, title, date})=> (
//         <li key={id}>
//             <h5>{title}</h5>
//             <p>{moment(date).format('dd/mm/yyyy hh:mm')}</p>
//         </li>
//         ))}
        
//     </ul>
// ;

const mapStateToProps = (state) => {
    return {
        todos: state,
    };
};
export default connect(mapStateToProps)(TodosList);