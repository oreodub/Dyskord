json.server do 
    json.extract! @server, :id, :private, :name, :owner_id
    json.users @server.users    
end

json.users do
  @server.users.each do |user|
    json.partial! "api/users/user", user: user
  end
end