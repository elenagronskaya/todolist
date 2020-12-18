
import { combineReducers } from 'redux';
import { alertReducer } from './alert/alertReducer';
import { todosReducer} from './todo/todosReducer';


export const rootReducer = combineReducers({
    todos: todosReducer,
    alert: alertReducer,
});