class Cereal < ActiveRecord::Base
    has_many :reviews
    has_many :users, through: :reviews

    def self.count
        Cereal.all.size
    end

    def visit(earthling)
        Visitation.create(date: DateTime.now(), alien_id: self.id, earthling_id: earthling.id)
    end
end