export const getServers = () => (
    $.ajax({
        url: '/api/servers'
    })
)

export const getServer = (serverId) => (
    $.ajax({
        url: `/api/servers/${serverId}`,
    })
)

export const createServer = (server) => (
    $.ajax({
        method: 'POST',
        url: '/api/servers',
        data: { server }
    })
)

export const updateServer = (serverId) => (
    $.ajax({
        method: 'PATCH',
        url: `/api/servers/${serverId}`,
    })
)

export const removeServer = (serverId) => (
    $.ajax({
        method: 'DELETE',
        url: `/api/servers/${serverId}`,
    })
)

export const joinServer = (serverUser) => (
    $.ajax({
        method: 'POST',
        url: `/api/server_users`,
        data: { serverUser }
    })
)
export const leaveServer = (serverUser) => (
    $.ajax({
        method: 'DELETE',
        url: `/api/server_users`,
        data: { serverUser }
    })
)