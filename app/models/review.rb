class Review < ActiveRecord::Base
    belongs_to :cereal
    belongs_to :user
end