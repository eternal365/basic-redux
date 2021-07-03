const ADD_TODO = 'todos/addTodo';
const REMOVE_TODO = 'todos/removeTodo';

export const addTodo = (title) => ({
    type: ADD_TODO,
    payload: title,
});

export const removeTodo = (id) => ({
    type: REMOVE_TODO,
    payload: id,
});

const initialState = [{
    id: 0,
    title: 'My First Todo',
    completed: true,
}];

export const todosReducer = (todos = initialState, action) => {
    switch (action.type) {
        case ADD_TODO:
            return [...todos, {
                id: todos.length,
                title: action.payload,
                completed: false,
            }];

        case REMOVE_TODO:
            return todos.filter(todo => todo.id !== action.payload);

        default:
            return todos;
    }
};
