import {combineReducers} from 'redux';
import todoListReducer from './todoListReducers';

const rootReducer = combineReducers({
    todos: todoListReducer
});

export default rootReducer;
