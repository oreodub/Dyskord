import * as APIUtil from '../util/server_api_util';

export const RECEIVE_SERVERS = 'RECEIVE_SERVERS';
export const RECEIVE_SERVER = 'RECEIVE_SERVER';
export const REMOVE_SERVER = 'REMOVE_SERVER';
export const RECEIVE_SERVER_ERRORS = 'RECEIVE_SERVER_ERRORS';
export const CLEAR_SERVER_ERRORS = "CLEAR_SERVER_ERRORS";

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

export const receiveServerErrors = (errors) => ({
    type: RECEIVE_SERVER_ERRORS,
    errors
})

export const clearServerErrors = () => ({
    type: CLEAR_SERVER_ERRORS
})

export const getServers = () => dispatch => (
    APIUtil.getServers().then(
        (servers) => dispatch(receiveServers(servers)),
        (error) => dispatch(receiveServerErrors(error.responseJSON))
    )
);

export const getServer = (serverId) => dispatch => (
    APIUtil.getServer(serverId).then(
        (server) => dispatch(receiveServer(server)),
        (error) => dispatch(receiveServerErrors(error.responseJSON))
    )
);


export const createServer = (server) => dispatch => (
    APIUtil.createServer(server).then(
        (server) => dispatch(receiveServer(server)),
        (error) => dispatch(receiveServerErrors(error.responseJSON))
    )
);
export const deleteServer = (serverId) => dispatch => (
    APIUtil.removeServer(serverId).then(
        (serverId) => dispatch(removeServer(serverId)),
        (error) => dispatch(receiveServerErrors(error.responseJSON))
    )
);

export const joinServer = (serverUser) => dispatch => (
    APIUtil.joinServer(serverUser).then(
        (server) => dispatch(receiveServer(server)),
        (error) => dispatch(receiveServerErrors(error.responseJSON))
    )
);
export const leaveServer = (serverUser) => dispatch => (
    APIUtil.leaveServer(serverUser).then(
        (serverId) => dispatch(removeServer(serverId)),
        (error) => dispatch(receiveServerErrors(error.responseJSON))
    )
);
