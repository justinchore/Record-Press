# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

fans = User.create([
    {
        username_or_email: "bestfan",
        email: "bestfan@bestfan.com", 
        password: "Hunter12", 
        is_artist: false,
        artistName: "",
        location: "",
        genre: ""
    }
])

artists = User.create([
    {
       username_or_email: "bestartist",
       email: "bestartist@bestartist.com", 
       password: "Hunter12", 
       is_artist: true,
       artistName: "BESTBANDEVER",
       location: "Antartica",
       genre: "Gregorian Chants"
    }
])

