class CreateReviews < ActiveRecord::Migration[6.1]
   def change
    create_table :reviews do |t|
      t.integer :star_rating 
      t.string :comment
      t.string :header
      t.integer :cereal_id
      t.integer :user_id
    end
  end
end
