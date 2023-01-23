puts "🌱 Seeding spices..."
Cereal.destroy_all
Review.destroy_all
User.destroy_all

# create cereal 
puts 'Creating cereal'
c1 = Cereal.create(
    cereal_name: 'Cocoa Krispies', 
    brand: 'Kellogg', 
    highlights: "Pour milk over this chocolatey, sweetened rice cereal for a magical surprise your kids will love.", 
    image_url: "https://images.kglobalservices.com/www.kelloggs.com/en_us/product/product_4508483/kicproductimage-124785_new_image_9_21_2021.png") 

c2 = Cereal.create(
    cereal_name: 'Zucaritas', 
    brand: 'Kellogg', 
    highlights: "Every bowl of crispy, golden corn flakes includes sugary frosting that delivers a spark of sweetness to each bite to help energize your morning", 
    image_url: "https://i5.walmartimages.com/asr/6181d74a-a809-46d8-a7cf-7e20658603b0.463fac85eefa3bb72d241c301b75945a.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF") 

c3 = Cereal.create(
    cereal_name: 'Corn Flakes', 
    brand: 'Kellogg', 
    highlights: "Kellogg's Corn Flakes® cereal is the Original & Best® cereal. Every bite of these crispy, golden flakes is just as delicious as the first. You'll be on your way to a great day when you pour a bowl of Kellogg's Corn Flakes® cereal into your breakfast bowl.", 
    image_url: "https://m.media-amazon.com/images/I/71yCkxYW4XL.jpg") 

c4 = Cereal.create(
    cereal_name: 'Raisin Bran', 
    brand: 'Kellogg', 
    highlights: "The classic, delicious balance of crispy, wheat bran flakes with delectably sweet raisins never ceases to make morning amazing.", 
    image_url: "https://images.kglobalservices.com/www.kelloggs.com/en_us/product/product_4508483/kicproductimage-124785_new_image_9_21_2021.png") 

c5 = Cereal.create(
    cereal_name: 'Life', 
    brand: 'Quaker', 
    highlights: "You don't have to be a kid to love the simple and sweet flavor of Life Cereal. And you don't have to be a grown-up to benefit from the whole grain Quaker Oats and wheat baked inside each square. Wholesome with just the right taste of sweetness, Life Cereal is a delicious choice for the entire family.", 
    image_url: "https://images.albertsons-media.com/is/image/ABS/960053007-ECOM?$ng-ecom-pdp-desktop$&defaultImage=Not_Available") 

c6 = Cereal.create(
    cereal_name: 'Eggo Blueberry Waffle', 
    brand: 'Kellogg', 
    highlights: "Inspired by the classic, homemade taste of our Eggo Blueberry Waffles, we set out to craft a cereal that brings warmth and smiles to kids and grownups alike - even on the busiest mornings.", 
    image_url: "https://images.albertsons-media.com/is/image/ABS/960543592-ECOM?$ng-ecom-pdp-desktop$&defaultImage=Not_Available") 

c7 = Cereal.create(
    cereal_name: 'Toasted Coconut Cheerios', 
    brand: 'General Mills', 
    highlights: "Limited Edition Sweetened whole grain oat cereal", 
    image_url: "https://i.kinja-img.com/gawker-media/image/upload/c_fit,f_auto,g_center,pg_1,q_60,w_965/vhqahmeyatnjyfod2wr6.jpg") 


# creating users 
puts "Creating users" 

u1 = User.create(name: 'Alex Miller', email: 'alexmiller@gmail.com')
u2 = User.create(name: 'John Doe', email: 'johndoe@gmail.com')
u3 = User.create(name: 'Ann Apple', email: 'annapple@aol.com')
u4 = User.create(name: 'Anthony Butts', email: 'anthonybutts@gmail.com')

# creating reviews 

puts "Creating reviews" 

Review.create(
    star_rating: 4,
    header: 'Absolutely cocoa-licious!', 
    comment: "My family loves this cereal. It snaps, crackles, and pops just like the original Rice Krispies. It's too bad they changed the recipe though. The old Cocoa Krispies was so much better",
    user_id: u1.id, 
    cereal_id: c1.id)
Review.create(
    star_rating: 4,
    header: 'Delicious crunch', 
    comment: "This cereal was so good, I ate two bowls in one sitting. I loved the sweetness of it. The crunch of the flakes. I have never seen zucaritas before and I found my new go to morning cereal. I highly recommend this cereal for all",
    user_id: u2.id, 
    cereal_id: c2.id)
Review.create(
    star_rating: 5,
    header: 'My all time favorite', 
    comment: "Corn Flakes is a comfort food for me. The corn flavor and the crunch is all I need to have a happy day. It's also a go to when I'm not feeling well.",
    user_id: u2.id, 
    cereal_id: c3.id)
Review.create(
    star_rating: 5,
    header: 'Wonderful', 
    comment: "I buy Raisin Bran cereal on a regular basis. It tastes delicious and extremely healthy. High in fiber.",
    user_id: u2.id, 
    cereal_id: c4.id)


puts "✅ Done seeding!"


