json.server do 
    json.extract! @server, :id, :private, :name, :owner_id
    json.userIds @server.users.map(&:id)    
end