import { ADD_FACT } from "../action-types/facts";

const todos = (state = [], action) => {
    if (action.type) {
        switch (action.type) {

            case ADD_FACT:
                return [...state, action.payload]

            default: {
                return state;
            }

        }
    } else {
        return state;
    }
};

export default todos;