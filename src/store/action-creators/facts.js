import { addFact } from '../../store/actions/facts';
import axios from 'axios';

const baseUrl = "http://numbersapi.com";

const add = (payload) => {
    return function (dispatch) {
        return axios
            .get(`${baseUrl}/random/trivia`)
            .then((response) => {
                dispatch(addFact(response.data));
            });
    };
};

export { add }