export const ADD_TODO = 'ADD_TODO';
export const addTodo = text => ({ //action creator
    type: ADD_TODO,
    text
});
