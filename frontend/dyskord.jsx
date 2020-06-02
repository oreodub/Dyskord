import React from 'react';
import ReactDOM from 'react-dom';
// import { signUp, login, logout } from './util/session_api_util';
import configureStore from './store/store.js';
import Root from './components/root'

document.addEventListener("DOMContentLoaded", () => {
    // window.signUp = signUp;
    // window.login = login;
    // window.logout = logout;

    // const store = configureStore();
    // window.getState = store.getState;
    // window.dispatch = store.dispatch;

    let store;
    if (window.currentUser) {
        const preloadedState = {
            entities: {
                users: { [window.currentUser.id]: window.currentUser }
            },
            session: { id: window.currentUser.id }
        };
        store = configureStore(preloadedState);
        delete window.currentUser;
    } else {
        store = configureStore();
    }
    
    const root = document.getElementById('root');
    ReactDOM.render(<Root store={store}/>, root)
})