json.extract! user, :id, :username, :email
json.serverIds user.servers.map(&:id)
json.ownedServerIds user.owned_servers.map(&:id)