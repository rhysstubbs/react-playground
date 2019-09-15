
import { ADD_TODO, DELETE_TODO, EDIT_TODO, COMPLETE_TODO } from '../action-types/todos';

const addTodo = (todo) => (
    {
        type: ADD_TODO,
        payload: todo
    }
);

const deleteTodo = (todo) => (
    {
        type: DELETE_TODO,
        payload: todo
    }
);

const editTodo = (todo) => (
    {
        type: EDIT_TODO,
        payload: todo
    }
);

const completeTodo = (todo) => (
    {
        type: COMPLETE_TODO,
        payload: todo
    }
);

export { addTodo, deleteTodo, editTodo, completeTodo };