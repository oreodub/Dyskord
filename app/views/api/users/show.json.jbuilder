json.partial! "api/users/user", user: @user 


  @user.servers.each do |server|
    json.set! server.id do
      json.id server.id
      json.name server.name
      json.members []
    end
  end
