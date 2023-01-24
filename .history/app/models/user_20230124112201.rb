class User < ActiveRecord::Base
    has_many :reviews
    has_many :cereals, through: :reviews

    def review(cereal)
        Review.create(ceralstar_rating: DateTime.now(), alien_id: self.id, earthling_id: earthling.id)
    end

    t.integer "star_rating"
    t.string "comment"
    t.string "header"
    t.integer "cereal_id"
    t.integer "user_id"
end