class CreateCereals < ActiveRecord::Migration[6.1]
   def change
    create_table :cereals do |t|
      t.string :cereal_name
      t.string :image_url 
      t.string :brand 
      t.string :highlights 
  
    end
  end
end
