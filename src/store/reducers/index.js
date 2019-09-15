import { combineReducers } from 'redux';
import todos from './todos';
import facts from './facts';

export default combineReducers({
    todos,
    facts
});