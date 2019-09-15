
import { ADD_FACT } from '../action-types/facts';

const addFact = (todo) => (
    {
        type: ADD_FACT,
        payload: todo
    }
);

export { addFact };