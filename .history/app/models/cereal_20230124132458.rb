class Cereal < ActiveRecord::Base
    has_many :reviews
    has_many :users, through: :reviews

    # def self.count
    #     Cereal.all.size
    # end

    # def number_of_reviews
    #     self.reviews.size
    # end

    def average_rating
        
    end
end