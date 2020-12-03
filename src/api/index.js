import axios from 'axios';
import { v4 as uuidv4} from 'uuid'

const url = "https://todoshatle.firebaseio.com" //process.env.REACT_APP_API_URL;

export const getTodos = async () => { 
    const response = await axios.get(`${url}/todos.json`)
    const todos = Object.keys(response.data).map((key)=> (
        {   ...response.data[key],
            id: key})) ;  

    return todos;
    
};

export const createTodo = async (todoItem) =>{

    const newTodoItem = {
            ...todoItem,
            date: new Date().toJSON(),
            id: uuidv4(),

    };

    await axios.post('${url}/todos.json', newTodoItem);
}