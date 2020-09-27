# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first
require "open-uri"

genres = Genre.create([
    { genre_name: "None"},
    { genre_name: "Pop" }, 
    { genre_name: "Rock" }, 
    { genre_name: "Hip-hop" }, 
    { genre_name: "Alternative" }, 
    { genre_name: "Folk" }, 
    { genre_name: "Jazz" }, 
    { genre_name: "Classical" }, 
    { genre_name: "Metal" }, 
    { genre_name: "Electronic" }, 
    { genre_name: "Soundtrack" }, 
])

fans = User.create([
    {
        username: "bestfan",
        email: "bestfan@bestfan.com", 
        password: "Hunter12", 
        is_artist: false,
        genre_id: 0,
        artistName: "",
        location: "",
    },

    {
        username: "mikehemingway",
        email: "hemingway@bestfan.com", 
        password: "Hunter12", 
        is_artist: false,
        genre_id: 0,
        artistName: "",
        location: "",
    }
])

artists = User.create([
    {
       username: "bestartist",
       email: "bestartist@bestartist.com", 
       password: "Hunter12", 
       is_artist: true,
       artistName: "BESTBANDEVER",
       location: "Antartica",
       genre_id: 2
    }, 
    
    {
       username: "justinchore",
       email: "justinchore@bestartist.com", 
       password: "Hunter12", 
       is_artist: true,
       artistName: "Toughtimes",
       location: "California",
       genre_id: 3

    }
])

albums = Album.create([
    {
       title: "Westside Forever",
       artist_id: 3, 
       downloadable: true, 
       genre_id: 2
    }, 
])

tracks = Track.create([
    {
       title: "Time to Go",
       artist_id: 3, 
       downloadable: true, 
       genre_id: 2,
       album_id: 1, 
       track_number: 1 
    }, 

    {
       title: "Sure Thing",
       artist_id: 3, 
       downloadable: true,  
       genre_id: 2,
       album_id: 1, 
       track_number: 2
    }, 
    {
       title: "Closing Time",
       artist_id: 3, 
       downloadable: true, 
       genre_id: 2,
       album_id: 1,
       track_number: 3
    }, 

    {
       title: "American Pie",
       artist_id: 4, 
       downloadable: true, 
       genre_id: 3,
       track_number: 1 
    }
])





