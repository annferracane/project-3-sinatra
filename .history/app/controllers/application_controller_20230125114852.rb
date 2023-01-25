class ApplicationController < Sinatra::Base
  set :default_content_type, 'application/json'
  
  # Add your routes here

  # Review Routes
  get "/reviews" do
    reviews = Review.all
    reviews.to_json(include: [:cereal, :user])
  end

  post "/reviews" do
    review = Review.create(user_id: params[:user_id], cereal_id: params[:cereal_id], header: params[:header], comment: params[:comment], star_rating: params[:star_rating])
    review.to_json
  end

  delete "/reviews/:id" do
    review = Review.find(params[:id])
    review.destroy
  end

  patch "/reviews/:id" do
    review = Review.find(params[:id])
    review.update(header: params[:header], comment: params[:comment], star_rating: params[:star_rating])
    review.to_json
  end

  # User Routes
  get "/users" do
    users = User.all
    users.to_json(include: {reviews: {include: [:cereal]}})
  end

  get "/users/:id" do
    user = User.find(params[:id])
    user.to_json(include: {reviews: {include: [:cereal]}})
  end

  # Cereal Routes
  get "/cereals" do
    cereals = Cereal.all
    cereals.to_json(include: {reviews: {include: [:user]}})
  end

  get "/cereals/:id" do
    cereals = Cereal.find(params[:id])
    cereals.to_json(include: {reviews: {include: [:user, :cereal]}})
  end

end
