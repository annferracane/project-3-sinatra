class User < ActiveRecord::Base
    has_many :reviews
    has_many :cereals, through: :reviews

    def review(cereal, star_rating, header, comment)
        Review.create(cerial_id: cereal.id. user_id: self.id, star_rating: star_rating, header: header, comment: comment)
    end

end