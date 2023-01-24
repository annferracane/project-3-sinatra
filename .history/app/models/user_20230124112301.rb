class User < ActiveRecord::Base
    has_many :reviews
    has_many :cereals, through: :reviews

    def review(cereal, star_rating)
        Review.create(cerial_id: cereal.id. user_id: self.id, star_rating: star_rating, id)
    end

    t.integer "star_rating"
    t.string "comment"
    t.string "header"
    t.integer "cereal_id"
    t.integer "user_id"
end