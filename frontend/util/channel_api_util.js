export const getChannels = (serverId) => (
    $.ajax({
        url: `/api/servers/${serverId}/channels`
    })
)

export const getChannel = (channelId) => (
    $.ajax({
        url: `/api/channels/${channelId}`,
    })
)

export const createChannel = (channel, serverId) => (
    $.ajax({
        method: 'POST',
        url: `/api/servers/${serverId}/channels`,
        data: { channel }
    })
)

export const updateChannel = (channel, channelId) => (
    $.ajax({
        method: 'PATCH',
        url: `/api/channels/${channelId}`,
        data: { channel }
    })
)

export const removeChannel = (channelId) => (
    $.ajax({
        method: 'DELETE',
        url: `/api/channels/${channelId}`,
    })
)