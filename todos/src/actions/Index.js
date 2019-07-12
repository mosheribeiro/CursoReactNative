export const ADD_TODO = 'ADD_TODO';
export const addTodo = text => ({ //action creator
    type: ADD_TODO,
    text
});

export const TOGGLE_TODO = 'TOGGLE_TODO';
export const toggleTodo = todoId => ({ //action creator
    type: TOGGLE_TODO,
    todoId
});

export const SET_TODO_TEXT = 'SET_TODO_TEXT';
export const setTodoText = text => ({ //action creator
    type: SET_TODO_TEXT,
    text
});

export const SET_EDITING_TODO = 'SET_EDITING_TODO';
export const setEditingTodo = todo => ({ //action creator
    type: SET_EDITING_TODO,
    todo
});

export const UPDATE_TODO  = 'UPDATE_TODO';
export const updateTodo = todo => ({ //action creator
    type: UPDATE_TODO,
    todo
});



