import { RECEIVE_SERVER } from '../actions/server_actions';
import { RECEIVE_CHANNEL, RECEIVE_CHANNELS, REMOVE_CHANNEL } from '../actions/channel_actions';

const channelsReducer = (state = {}, action) => {
    Object.freeze(state);
    let newState = Object.assign({}, state);
    switch (action.type) {
        // case RECEIVE_CHANNELS:
        //     return
        case RECEIVE_SERVER:
            return Object.assign(newState, action.channels)
        case RECEIVE_CHANNEL:
            return Object.assign(newState, action.channel)
            case REMOVE_CHANNEL:
                delete newState[action.channel.id];
                return newState;
        default:
            return state;
    }
}

export default channelsReducer;
