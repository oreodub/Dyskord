@servers.each do |server|
    json.set! server.id do
        json.id server.id
        json.name server.name
        json.ownerId server.owner_id
        json.userIds server.users.map(&:id)
    end
end
