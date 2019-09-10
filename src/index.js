import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import configureStore from './store';

const initialState = {
    todos: [
        {
            id: 0,
            created_at: "",
            updated_at: "",
            title: "Title 0",
            content: "Watch TV",
            completed: false
        },
        {
            id: 1,
            created_at: "",
            updated_at: "",
            title: "Title 1",
            content: "Clean the fridge",
            completed: false
        },
        {
            id: 2,
            created_at: "",
            updated_at: "",
            title: "Title 2",
            content: "Have sex",
            completed: false
        },
        {
            id: 3,
            created_at: "",
            updated_at: "",
            title: "Title 3",
            content: "Cook dinner",
            completed: true
        }
    ]
};
const store = configureStore(initialState);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
    ,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
