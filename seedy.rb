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

user1 = User.create(username: "bestfan", email: "bestfan@bestfan.com", 
password: "Hunter12", is_artist: false, genre_id: 1, aristName: "", location: "")
user2 = User.create(username: "mikehemingway", email: "hemingway@bestfan.com", password: "Hunter12",
is_artist: false, genre_id: 1, artistName: "", location: "")
user3 = User.create(username: "bestartist", email: "bestartist@bestartist.com", password: "Hunter12",
is_artist: true, genre_id: 2, artistName: "BESTBANDEVER", location: "Antartica")
user4 = User.create(username: "justinchore", email: "justinchore@bestartist.com", password: "Hunter12",
is_artist: true, genre_id: 6, artistName: "Toughtimes", location: "Los Angeles, California")
user5 = User.create(username: "thenagain", email: "ThenAgain@bestartist.com", password: "Hunter12",
is_artist: true, genre_id: 5, artistName: "Then Again,", location: "Seattle, Washington")



album1 = Album.create(title: "Westside Forever", artist_id: 3, downloadable: true, genre_id: 2)
album2 = Album.create(title: "Time to Fly", artist_id: 3, downloadable: true, genre_id: 2)
album3 = Album.create(title: "Straight No Chaser", artist_id: 3, downloadable: false, genre_id: 2)
album4 = Album.create(title: "Tomorrow is a Long Time", artist_id: 4, downloadable: true, genre_id: 6)
album5 = Album.create(title: "Freewheeling", artist_id: 4, downloadable: false, genre_id: 6)
album6 = Album.create(title: "Florence Place", artist_id: 5, downloadable: true, genre_id: 5)


track1 = Track.create(title: "Time to Go", artist_id: 3, downloadable: true, genre_id: 2, album_id: 1, track_number: 1 )
track2 = Track.create(title: "Sure Thing", artist_id: 3, downloadable: true, genre_id: 2, album_id: 1, track_number: 2 )
track3 = Track.create(title: "Closing Time", artist_id: 3, downloadable: true, genre_id: 2, album_id: 1, track_number: 3 )
track4 = Track.create(title: "Wavy", artist_id: 3, downloadable: true, genre_id: 2, album_id: 1, track_number: 4 )
track5 = Track.create(title: "Light Drinker", artist_id: 3, downloadable: true, genre_id: 2, album_id: 1, track_number: 5 )
track6 = Track.create(title: "Waking hours", artist_id: 3, downloadable: true, genre_id: 2, album_id: 1, track_number: 6 )
track7 = Track.create(title: "Cookies and Milk", artist_id: 3, downloadable: false, genre_id: 2, album_id: 2, track_number: 1 )
track8 = Track.create(title: "It's Cool", artist_id: 3, downloadable: false, genre_id: 2, album_id: 2, track_number: 2 )
track9 = Track.create(title: "Time to Fly", artist_id: 3, downloadable: false, genre_id: 2, album_id: 2, track_number: 3 )
track10 = Track.create(title: "Straight No Chaser", artist_id: 3, downloadable: true, genre_id: 2, album_id: 3, track_number: 1 )
track11 = Track.create(title: "Vodka", artist_id: 3, downloadable: true, genre_id: 2, album_id: 3, track_number: 2 )
track12 = Track.create(title: "Manhattan", artist_id: 3, downloadable: true, genre_id: 2, album_id: 3, track_number: 3 )
track13 = Track.create(title: "Oh Dear", artist_id: 4, downloadable: true, genre_id: 6, album_id: 4, track_number: 1 )
track14 = Track.create(title: "Running Somewhere", artist_id: 4, downloadable: true, genre_id: 6, album_id: 4, track_number: 2 )
track15 = Track.create(title: "How Tragic", artist_id: 4, downloadable: true, genre_id: 6, album_id: 4, track_number: 3 )
track16 = Track.create(title: "Tomorrow is a Long Time", artist_id: 4, downloadable: true, genre_id: 6, album_id: 4, track_number: 4 )
track17 = Track.create(title: "Freewheeling", artist_id: 4, downloadable: false, genre_id: 6, album_id: 5, track_number: 1 )
track18 = Track.create(title: "It's Not", artist_id: 4, downloadable: false, genre_id: 6, album_id: 5, track_number: 2 )
track19 = Track.create(title: "Tantalizing", artist_id: 4, downloadable: false, genre_id: 6, album_id: 5, track_number: 3)
track20 = Track.create(title: "Summer Somewhere", artist_id: 4, downloadable: true, genre_id: 6, track_number: 1 )
track21 = Track.create(title: "Never been", artist_id: 4, downloadable: true, genre_id: 6, track_number: 1 )
track22 = Track.create(title: "As Ever", artist_id: 5, downloadable: true, genre_id: 4, album_id: 6, track_number: 1 )
track23 = Track.create(title: "Bright Lights", artist_id: 5, downloadable: true, genre_id: 4, album_id: 6, track_number: 2 )
track24 = Track.create(title: "Moving Day", artist_id: 5, downloadable: true, genre_id: 4, album_id: 6, track_number: 3 )
track25 = Track.create(title: "When I'm With You(I Can't Leave)", artist_id: 5, downloadable: true, genre_id: 4, album_id: 6, track_number: 4 )
track26 = Track.create(title: "Ocean Watching in the Evening", artist_id: 5, downloadable: true, genre_id: 4, album_id: 6, track_number: 5 )
track27 = Track.create(title: "Flowers on the Grass", artist_id: 5, downloadable: true, genre_id: 4, album_id: 6, track_number: 6 )
track28 = Track.create(title: "That's Why it Breaks My Heart", artist_id: 5, downloadable: true, genre_id: 4, album_id: 6, track_number: 7 )