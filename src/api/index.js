import axios from 'axios';


const url = "https://todoshatle.firebaseio.com"


export const getTodos = async () => { 
    const response = await axios.get(`${url}/todos.json`)
    if (!response.data)
    {
        return [];
    }
    const todos = Object.keys(response.data).map((key)=> (
        {   ...response.data[key],
            id: key})) ;  

      
    return todos;
    
};

export const createTodo = async ([todoItem]) =>{
    const response = await axios.post(`${url}/todos.json`, {...todoItem}) ;
    return response;
}

export const updateTodo = async ([todoItem]) =>{
 
    const response =  axios.patch(`${url}/todos/${todoItem.id}.json`, {...todoItem}) ;
    return response;
}
export const deleteTodo = async (id) => {
    await axios.delete(`${url}/todos/${id}.json`);
}




