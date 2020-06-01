# == Schema Information
#
# Table name: users
#
#  id              :bigint           not null, primary key
#  username        :string           not null
#  email           :string           not null
#  password_digest :string           not null
#  session_token   :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#
class User < ApplicationRecord
    validates :username, :session_token, :password_digest, presence: true 
    validates :password, length: {minimum: 6, allow_nil: true}
    
    
    has_many :owned_servers,
    foreign_key: :owner_id,
    class_name: :Server
    
    has_many :server_users,
    foreign_key: :user_id
    dependent: :destroy
    
    has_many :servers,
    through: :server_users,
    source: :server
    
    has_many :channels,
    through: :servers,
    source: :channels
    
    has_many :messages,
    foreign_key: :author_id
 
    
end
