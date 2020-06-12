import * as APIUtil from '../util/channel_api_util';

export const RECEIVE_CHANNEL = 'RECEIVE_CHANNEL';
export const REMOVE_CHANNEL = 'REMOVE_CHANNEL';
export const RECEIVE_CHANNELS = 'RECEIVE_CHANNELS';
export const RECEIVE_CHANNEL_ERRORS = 'RECEIVE_CHANNEL_ERRORS';
export const CLEAR_CHANNEL_ERRORS = "CLEAR_CHANNEL_ERRORS";


export const receiveChannels = (channels) => ({
    type: RECEIVE_CHANNELS,
    channels
});
export const receiveChannel = (channel) => ({
    type: RECEIVE_CHANNEL,
    channel
});

export const removeChannel = (channel) => ({
    type: REMOVE_CHANNEL,
    channel
});

export const receiveChannelErrors = (errors) => ({
    type: RECEIVE_CHANNEL_ERRORS,
    errors
});

export const clearChannelErrors = () => ({
    type: CLEAR_CHANNEL_ERRORS,
})
export const getChannel = (channelId) => dispatch => (
    APIUtil.getChannel(channelId).then(
        (channel) => dispatch(receiveChannel(channel)),
        (error) => dispatch(receiveErrors(error))
    )
);


export const getChannels = (serverId) => dispatch => (
    APIUtil.getChannels(serverId).then(
        (channels) => dispatch(receiveChannels(channels)),
        (error) => dispatch(receiveErrors(error))
    )
);

export const createChannel = (channel, serverId) => dispatch => (
    APIUtil.createChannel(channel, serverId).then(
        (channel) => dispatch(receiveChannel(channel)),
        (error) => dispatch(receiveErrors(error))
    )
);

export const deleteChannel = (channelId) => dispatch => (
    APIUtil.removeChannel(channelId).then(
        (channel) => dispatch(removeChannel(channel)),
        (error) => dispatch(receiveErrors(error))
    )
);

export const updateChannel = (channel, channelId) => dispatch => (
    APIUtil.updateChannel(channel, channelId).then(
        (channel) => dispatch(receiveChannel(channel)),
        (error) => dispatch(receiveErrors(error))
    )
);