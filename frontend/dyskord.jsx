import React from 'react';
import ReactDOM from 'react-dom';
import {getServers} from './util/server_api_util'
import configureStore from './store/store.js';
import Root from './components/root'

window.getServers = getServers;
document.addEventListener("DOMContentLoaded", () => {
    let store;
    if (window.currentUser) {
        const { servers } = window.currentUser;
        const preloadedState = {
            entities: {
                users: { [window.currentUser.id]: window.currentUser },
                servers,
            },
            session: { id: window.currentUser.id }
        };
        store = configureStore(preloadedState);
        delete window.currentUser;
        window.store = store;

    } else {
        store = configureStore();
        window.store = store;
    }
    
    const root = document.getElementById('root');
    ReactDOM.render(<Root store={store}/>, root)
})