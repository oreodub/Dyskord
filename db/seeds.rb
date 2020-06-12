# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
User.create!(username: 'DemoAcount', password: 'demodemo', email: 'Demo@demo.com')
User.create!(username: 'Dobberman', password: 'dobberman', email: 'Dobberman@gmail.com')
User.create!(username: 'Alex Lee', password: 'alexlee', email: 'AlexLee@gmail.com')
User.create!(username: 'Adrian Kim', password: 'adriankim', email: 'AdrianKim@gmail.com')

Server.destroy_all
Server.create!(name: 'First Server', owner_id: User.first.id, private: false)
Server.create!(name: 'League', owner_id: User.first.id, private: false)
Server.create!(name: 'PDPSI',owner_id: User.second.id, private: false)

ServerUser.destroy_all
ServerUser.create!(user_id: User.first.id, server_id: Server.first.id)
ServerUser.create!(user_id: User.second.id, server_id: Server.first.id)
ServerUser.create!(user_id: User.third.id, server_id: Server.first.id)
ServerUser.create!(user_id: User.fourth.id, server_id: Server.first.id)

ServerUser.create!(user_id: User.first.id, server_id: Server.second.id)
ServerUser.create!(user_id: User.second.id, server_id: Server.second.id)
ServerUser.create!(user_id: User.fourth.id, server_id: Server.second.id)

ServerUser.create!(user_id: User.first.id, server_id: Server.third.id)
ServerUser.create!(user_id: User.second.id, server_id: Server.third.id)


Channel.destroy_all
Channel.create!(name: 'General', server_id: Server.first.id)
Channel.create!(name: 'General', server_id: Server.second.id)
Channel.create!(name: 'General', server_id: Server.third.id)
