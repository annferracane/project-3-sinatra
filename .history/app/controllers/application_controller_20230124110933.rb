class ApplicationController < Sinatra::Base
  set :default_content_type, 'application/json'
  
  # Add your routes here
  get "/reviews" do
    reviews = Review.all
    reviews.to_json(include: [:cereal, :user])
  end

  delete "/reviews/:id" do
    review = Review.find(params[:id])
    review.to_json(include: [:cereal, :user])
  end

  get "/users" do
    users = User.all
    users.to_json(include: {reviews: {include: [:cereal]}})
  end

  get "/cereals" do
    cereals = Cereal.all
    cereals.to_json(include: {reviews: {include: [:user]}})
  end

  get "/cereals/:id" do
    cereals = Cereal.find(params[:id])
    cereals.to_json(include: {reviews: {include: [:user]}})
  end

end
