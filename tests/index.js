import { combineReducers, createStore } from '../index.js';

import { filterReducer, toggleVisibility } from './slices/filterSlice.js';
import { addTodo, removeTodo, todosReducer } from './slices/todosSlice.js';

const store = createStore(combineReducers({
    filter: filterReducer,
    todos: todosReducer,
}));

const unsubscribe = store.subscribe(() => {
    console.log('Store changed:', store.getState());
});

console.log('Initial state:', store.getState());

console.log('Toggle visibility.');
store.dispatch(toggleVisibility());

console.log('Add todo.');
store.dispatch(addTodo('My New Todo'));

console.log('Remove todo.');
store.dispatch(removeTodo(0));

console.log('Unsubscribe.');
unsubscribe();

console.log('Toggle visibility.');
store.dispatch(toggleVisibility());
