# == Schema Information
#
# Table name: server_users
#
#  id         :bigint           not null, primary key
#  server_id  :integer          not null
#  user_id    :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class ServerUser < ApplicationRecord
    validates :server_id, :user_id, presence: true

    belongs_to :user
    
    belongs_to :server
    
end
