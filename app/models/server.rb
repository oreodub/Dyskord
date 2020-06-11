# == Schema Information
#
# Table name: servers
#
#  id         :bigint           not null, primary key
#  private    :boolean          not null
#  name       :string           not null
#  owner_id   :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class Server < ApplicationRecord
    validates :name, :owner_id, presence: true
    validates :name, uniqueness: true
    validates :private, inclusion: { in: [true, false] }

    belongs_to :owner,
    class_name: :User

    has_many :channels,
    dependent: :destroy

    has_many :server_users,
    dependent: :destroy

    has_many :users,
    through: :server_users,
    source: :user

end
