import { ADD_TODO, EDIT_TODO, DELETE_TODO, COMPLETE_TODO } from "../action-types/todos";

const todos = (state = [], action) => {
    if (action.type) {
        switch (action.type) {

            case ADD_TODO:
                return [...state, action.payload]

            case EDIT_TODO:
                break;

            case DELETE_TODO:
                return state.filter((todo) => {
                    return todo.id !== action.payload.id;
                })

            case COMPLETE_TODO:
                return state.map((todo) => {

                    if (todo.id === action.payload.id) {
                        todo.completed = true;
                        return todo;
                    }

                    return todo;
                })

            default: {
                return state;
            }

        }
    } else {
        return state;
    }
};

export default todos;