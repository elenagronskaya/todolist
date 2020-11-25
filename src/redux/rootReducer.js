const newDate = new Date();
const initialState = [
    {
        id: 'xgkdhgskruhgldk123',
        date: newDate.toISOString(),
        title: 'Initial todo Item',
    },
    {
        id: 'xgkdhskruhgldk124',
        date: newDate.toISOString(),
        title: 'New Todo Item',
    },

];


export const rootReducer = (state = initialState, action) => {
    switch(action.type){
        case'ADD_TODO': {
            const todoItem = action.todoItem;
            return [...state, todoItem];
        }
        case 'REMOVE_TODO': {
            const id = action.payload.id;
            return state.filter((item) => item.id !== id);
        }
        default:
            return state;
    }
};