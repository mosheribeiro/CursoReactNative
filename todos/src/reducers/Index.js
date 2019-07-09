import {combineReducers} from 'redux';
import todoListReducer from './todoListReducers';
import editingTodoReducer from './editingTodoReducer';

const rootReducer = combineReducers({
    todos: todoListReducer,
    editingTodo: editingTodoReducer
});

export default rootReducer;
