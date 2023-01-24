class User < ActiveRecord::Base
    has_many :reviews
    has_many :cereals, through: :reviews

    def review(cereal)
        Visitation.create(date: DateTime.now(), alien_id: self.id, earthling_id: earthling.id)
    end
end