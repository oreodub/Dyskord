json.extract! user, :id, :username
json.servers user.servers.map(&:id)
