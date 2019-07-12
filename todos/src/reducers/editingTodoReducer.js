import { SET_TODO_TEXT, ADD_TODO, SET_EDITING_TODO, UPDATE_TODO } from "../actions/Index";

const INITIAL_STATE = {
    id: null,
    text: '',
    done: false,
}

const editingTodoReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case SET_TODO_TEXT:
            return {
                ...state,
                text: action.text
            }
        case ADD_TODO:
            return INITIAL_STATE;
        case UPDATE_TODO:
            return INITIAL_STATE;
        case SET_EDITING_TODO:
            return action.todo;
        default:
            return state;
    }
}

export default editingTodoReducer;