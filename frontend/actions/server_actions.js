import * as APIUtil from '../util/server_api_util';

export const RECEIVE_SERVERS = 'RECEIVE_SERVERS';
export const RECEIVE_SERVER = 'RECEIVE_SERVER';
export const REMOVE_SERVER = 'REMOVE_SERVER';
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';
export const CLEAR_ERRORS = "CLEAR_ERRORS";

export const receiveServers = (servers) => ({
    type: RECEIVE_SERVERS,
    servers
});

export const receiveServer = (server) => ({
    type: RECEIVE_SERVER,
    server
});

export const removeServer = (serverId) => ({
    type: REMOVE_SERVER,
    serverId
})

export const receiveErrors = (errors) => ({
    type: RECEIVE_ERRORS,
    errors
})

export const clearErrors = () => ({
    type: CLEAR_ERRORS
})

export const getServers = () => dispatch => (
    APIUtil.getServers().then(
        (servers) => dispatch(receiveServers(servers)),
        (error) => dispatch(receiveErrors(error.responseJSON))
    )
);

export const getServer = (serverId) => dispatch => (
    APIUtil.getServer(serverId).then(
        (server) => dispatch(receiveServer(server)),
        (error) => dispatch(receiveErrors(error.responseJSON))
    )
);


export const createServer = (server) => dispatch => (
    APIUtil.createServer(server).then(
        (server) => dispatch(receiveServer(server)),
        (error) => dispatch(receiveErrors(error.responseJSON))
    )
);
export const deleteServer = (serverId) => dispatch => (
    APIUtil.removeServer(serverId).then(
        (serverId) => dispatch(removeServer(serverId)),
        (error) => dispatch(receiveErrors(error.responseJSON))
    )
);
