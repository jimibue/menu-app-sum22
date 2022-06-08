class CreateThings < ActiveRecord::Migration[7.0]
  def change
    create_table :things do |t|
      t.string :attr1
      t.string :attr2

      t.timestamps
    end
  end
end
