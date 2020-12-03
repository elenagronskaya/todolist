import { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom';
import moment from 'moment';
import Grid from '@material-ui/core/Grid';
import { selectTodos, fetchTodos } from '../../redux/todo';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';


const TodosList = ({loading, todos, error, fetchTodos}) => {
    useEffect( () => {
        fetchTodos()}, [fetchTodos]
    );

    const [isModelOpen, setIsModelOpen] = useState(false);

    function toggleModal(){
       setIsModelOpen(!isModelOpen);
    }
    
    function onButtonOpenClickHandler(e){
        toggleModal();
    }

    return(

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
                </Grid>
            ))}
            <Button className="btnChange" type="button" onClick={onButtonOpenClickHandler}>Edit title</Button>
        </Grid>
    )
}
const mapStateToProps = (state) =>{
      return {
    ...selectTodos(state),
}};
const mapDispatchToProps = (dispatch) => ({
    fetchTodos: () => dispatch(fetchTodos())
});

export default connect(mapStateToProps,mapDispatchToProps)(TodosList)