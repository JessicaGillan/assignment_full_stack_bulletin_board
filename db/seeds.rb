# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
N = 10

puts "Cleaning database"

Post.destroy_all

N.times do
  Post.create({
    title: Faker::ChuckNorris.fact,
    body: Faker::Hipster.paragraph,
    author: Faker::Name.first_name
  })
end
