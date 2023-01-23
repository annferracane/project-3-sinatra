class CreateCereals < ActiveRecord::Migration[6.1]
   def change
    create_table :cereals do |t|
      t.integer :value
      t.string :cereal_name
    end
  end
end
