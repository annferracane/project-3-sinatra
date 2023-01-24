class ApplicationController < Sinatra::Base
  set :default_content_type, 'application/json'
  
  # Add your routes here

  # Review Routes
  get "/reviews" do
    reviews = Review.all
    reviews.to_json(include: [:cereal, :user])
  end

  post "/reviews"

  delete "/reviews/:id" do
    review = Review.find(params[:id])
    review.destroy
  end

  patch "/reviews/:id" do
    review = Review.find(params[:id])
    review.update(body: params[:body])
    review.to_json
  end

  # User Routes
  get "/users" do
    users = User.all
    users.to_json(include: {reviews: {include: [:cereal]}})
  end

  # Cereal Routes
  get "/cereals" do
    cereals = Cereal.all
    cereals.to_json(include: {reviews: {include: [:user]}})
  end

  get "/cereals/:id" do
    cereals = Cereal.find(params[:id])
    cereals.to_json(include: {reviews: {include: [:user]}})
  end

  patch "/cereals/:id" do
    cereal = Cereal.find(params[:id])
    cereal.update(body: params[:body])
    cereal.to_json
  end

end
