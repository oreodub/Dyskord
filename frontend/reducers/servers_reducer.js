import { RECEIVE_SERVERS, RECEIVE_SERVER, REMOVE_SERVER} from "../actions/server_actions";
import { RECEIVE_CURRENT_USER } from "../actions/session_actions";

const serversReducer = (state = {}, action) => {
    Object.freeze(state);
    let newState = Object.assign({}, state)
    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            return Object.assign(newState, action.servers);
        case RECEIVE_SERVERS:
            return Object.assign(newState, action.servers);
        case RECEIVE_SERVER:
            return Object.assign(newState, action.server);
        case REMOVE_SERVER:
            return {};
        default:
            return state;
    }
}

export default serversReducer;