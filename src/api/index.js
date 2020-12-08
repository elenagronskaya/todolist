import axios from 'axios';


const url = "https://todoshatle.firebaseio.com"


export const getTodos = async () => { 
    const response = await axios.get(`${url}/todos.json`)
    if (!response.data) {
        return [];
    }
    const todos = Object.keys(response.data).map((key)=> (
        {   ...response.data[key],
            id: key})) ;  

      
    return todos;
    
};

export const createTodo = async (todoItem) =>{
    const response = await axios.post(`${url}/todos.json`, {...todoItem}) ;
    return response;
}

export const updateTodo = async ({todoItem}) =>{ 
    const response =  await axios.patch(`${url}/todos/${todoItem.id}.json`, {...todoItem}) ;
    return response.data;
}
export const deleteTodo = async (id) => {
    await axios.delete(`${url}/todos/${id}.json`);
}
export const deleteNote = async (id) => {
    await axios.delete(`${url}/notes/${id}.json`);
}

export const fetchTodoById = async ({todoId}) => {
    debugger;
    const response =  await axios.get(`${url}/todos/${todoId}.json`);
    return response.data;
}

export const getTodoNotes = async ({todoId}) => {
    const response =  await axios.get(`${url}/notes.json`);
    if (!response.data) {
        return [];
    }
  
    const notes = Object.keys(response.data).map((key) => ({
      ...response.data[key],
      id: key,
    }))    ;

    const todoNotes = notes.filter((note) => note.todoItemId === todoId);


   return todoNotes;
    
}

export const apiAddTodoNote = async({note}) => {
    const response = await axios.post(`${url}/notes.json`, {...note}) ;
    return response.data;
}

export const apiUpdateNote = async ({note}) =>{ 
    debugger;
    const response =  await axios.patch(`${url}/notes/${note.id}.json`, {...note}) ;
    debugger;
    return response.data;
}


