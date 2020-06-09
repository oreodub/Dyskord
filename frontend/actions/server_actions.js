import * as APIUtil from '../util/server_api_util';

export const RECEIVE_SERVER = 'RECEIVE_SERVER';
export const REMOVE_SERVER = 'REMOVE_SERVER';
export const RECEIVE_SERVERS = 'RECEIVE_SERVERS';
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';


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

export const getServers = () => dispatch => (
    api_util.getServers().then(
        (servers) => dispatch(receiveServers(servers)),
        (error) => dispatch(receiveErrors(error))
    )
);

export const getServer = (serverId) => dispatch => (
    api_util.getServer(serverId).then(
        (server) => dispatch(receiveServer(server)),
        (error) => dispatch(receiveErrors(error))
    )
);


export const createServer = (server) => dispatch => (
    api_util.createServer(server).then(
        (server) => dispatch(receiveServer(server)),
        (error) => dispatch(receiveErrors(error))
    )
);
export const deleteServer = (serverId) => dispatch => (
    api_util.removeServer(serverId).then(
        (serverId2) => dispatch(removeServer(serverId2)),
        (error) => dispatch(receiveErrors(error))
    )
);

export const joinServer = (server) => dispatch => (
    api_util.joinServer(server).then(
        (server) => dispatch(receiveServer(server)),
        (error) => dispatch(receiveErrors(error))
    )
);
export const leaveServer = (serverId, userId) => dispatch => (
    api_util.leaveServer(serverId, userId).then(
        (serverId2) => dispatch(removeServer(serverId2)),
        (error) => dispatch(receiveErrors(error))
    )
);