import { addTodo, deleteTodo, editTodo, completeTodo } from '../../store/actions/todos';

const add = (payload) => {
    return function (dispatch) {
        return dispatch(addTodo(payload));
    };
};

const remove = (payload) => {
    return function (dispatch) {
        return dispatch(deleteTodo(payload));
    };
};

const edit = (payload) => {
    return function (dispatch) {
        return dispatch(editTodo(payload));
    };
};

const complete = (payload) => {
    return function (dispatch) {
        return dispatch(completeTodo(payload));
    }
}

export { add, remove, edit, complete };