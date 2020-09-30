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

# User.destroy_all

fans = User.create([
    {
        username: "bestfan",
        email: "bestfan@bestfan.com", 
        password: "Hunter12", 
        is_artist: false,
        genre_id: 1,
        artistName: "",
        location: "",
    },

    {
        username: "mikehemingway",
        email: "hemingway@bestfan.com", 
        password: "Hunter12", 
        is_artist: false,
        genre_id: 1,
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
       genre_id: 6

    }
])

# Album.destroy_all
albums = Album.create([
    {
       title: "Westside Forever",
       artist_id: 3, 
       downloadable: true, 
       genre_id: 2
    }, 
    {
        title: "Time to Fly",
        artist_id: 3, 
        downloadable: true, 
        genre_id: 2
    },
    {
       title: "Tomorrow is a Long Time",
       artist_id: 4, 
       downloadable: true, 
       genre_id: 6
    }, 
    {
       title: "Freewheeling",
       artist_id: 4, 
       downloadable: true, 
       genre_id: 6
    }, 
])
# Track.destroy_all

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
    },

    {
        title: "No Album", 
        artist_id: 4, 
        downloadable: true, 
        genre_id: 3, 
        track_number: 1 
    },

    {
       title: "Going to the place",
       artist_id: 3, 
       downloadable: true, 
       genre_id: 3,
       track_number: 1, 
       album_id: 2

    },

    {
       title: "Monday Blues",
       artist_id: 3, 
       downloadable: true, 
       genre_id: 3,
       track_number: 2,
       album_id: 2

    },

    {
        title: "Don't Go There",
       artist_id: 4, 
       downloadable: true, 
       genre_id: 3,
       track_number: 1,
       album_id: 3
    },

    {
        title: "Burning Fast",
       artist_id: 4, 
       downloadable: true, 
       genre_id: 3,
       track_number: 2,
       album_id: 3
    },

    {
        title: "Ocean",
       artist_id: 4, 
       downloadable: true, 
       genre_id: 3,
       track_number: 3,
       album_id: 3
    },

    {
        title: "New Sun",
       artist_id: 4, 
       downloadable: true, 
       genre_id: 3,
       track_number: 1,
       album_id: 4
    },

        {
        title: "Mountains",
        artist_id: 4, 
       downloadable: true, 
       genre_id: 3,
       track_number: 2,
       album_id: 4
    },

        {
        title: "Living",
        artist_id: 4, 
       downloadable: true, 
       genre_id: 3,
       track_number: 3,
       album_id: 4
    },

        {
        title: "Time to Go",
       artist_id: 4, 
       downloadable: true, 
       genre_id: 3,
       track_number: 4,
       album_id: 4
    },

        {
        title: "I See You",
        artist_id: 4, 
       downloadable: true, 
       genre_id: 3,
       track_number: 5,
       album_id: 4
    },

    

img_file1 = open('https://record-press-seeds.s3-us-west-1.amazonaws.com/anime_couple.jpg')
img_file2 = open('https://record-press-seeds.s3-us-west-1.amazonaws.com/anime_desk.jpg')
img_file3 = open('https://record-press-seeds.s3-us-west-1.amazonaws.com/anime_dude.jpg')
img_file4 = open('https://record-press-seeds.s3-us-west-1.amazonaws.com/anime_girl.jpg')
img_file5 = open('https://record-press-seeds.s3-us-west-1.amazonaws.com/anime_girl2.jpg')
img_file6 = open('https://record-press-seeds.s3-us-west-1.amazonaws.com/anime_people.jpg')
img_file7 = open('https://record-press-seeds.s3-us-west-1.amazonaws.com/anime_roof.jpg')
img_file8 = open('https://record-press-seeds.s3-us-west-1.amazonaws.com/anime_soda_machine.jpg')
img_file9 = open('https://record-press-seeds.s3-us-west-1.amazonaws.com/cowboy_bebop.jpg')
img_file10 = open("https://record-press-seeds.s3-us-west-1.amazonaws.com/city_bw.jpg")
img_file11 = open("https://record-press-seeds.s3-us-west-1.amazonaws.com/foggy_lake.jpg")
img_file12 = open("https://record-press-seeds.s3-us-west-1.amazonaws.com/house_sketch.jpg")
img_file13 = open("https://record-press-seeds.s3-us-west-1.amazonaws.com/synth_beach.jpg")
img_file14 = open("https://record-press-seeds.s3-us-west-1.amazonaws.com/water_pattern.jpeg")
img_file15 = open("https://record-press-seeds.s3-us-west-1.amazonaws.com/water_color_bridge.jpg")

track_file1 = open('https://record-press-seeds.s3-us-west-1.amazonaws.com/01_-_Until_We_Get_By.mp3')
track_file2 = open('https://record-press-seeds.s3-us-west-1.amazonaws.com/Aglow_Hollow_-_04_-_Dog_Soldier___Stand_Down.mp3')
track_file3 = open('https://record-press-seeds.s3-us-west-1.amazonaws.com/An_Eagle_In_Your_Mind_-_05_-_Wild_Fruits_Kingdom.mp3')
track_file4 = open('https://record-press-seeds.s3-us-west-1.amazonaws.com/An_Eagle_In_Your_Mind_-_07_-_Green_Grass.mp3')
track_file5 = open('https://record-press-seeds.s3-us-west-1.amazonaws.com/An_Eagle_In_Your_Mind_-_09_-_River_of_your_Soul.mp3')
track_file6 = open('https://record-press-seeds.s3-us-west-1.amazonaws.com/Axletree_-_03_-_Three_Ravens.mp3')
track_file7 = open('https://record-press-seeds.s3-us-west-1.amazonaws.com/Derek_Clegg_-_02_-_Solar_Panel_Control_Holder.mp3')
track_file8 = open('https://record-press-seeds.s3-us-west-1.amazonaws.com/Derek_Clegg_-_07_-_Ill_Almost_Get_Us_There.mp3')
track_file9 = open('https://record-press-seeds.s3-us-west-1.amazonaws.com/Derek_Clegg_-_08_-_Cest_La_Vie.mp3')
track_file10 = open('https://record-press-seeds.s3-us-west-1.amazonaws.com/Derek_Clegg_-_10_-_A_Strong_Will_Is_Needed.mp3')
track_file11 = open('https://record-press-seeds.s3-us-west-1.amazonaws.com/Derek_Clegg_-_12_-_Annalise.mp3')
track_file12= open("https://record-press-seeds.s3-us-west-1.amazonaws.com/When+I'm+With+(Mastered).mp3")
track_file13 = open("https://record-press-seeds.s3-us-west-1.amazonaws.com/As+Ever+(Mastered).mp3")
track_file14 = open("https://record-press-seeds.s3-us-west-1.amazonaws.com/Bright+Lights+(Mastered).mp3")
track_file15 = open("https://record-press-seeds.s3-us-west-1.amazonaws.com/Flowers+On+The+Grass+(Mastered).mp3")
track_file16 = open("https://record-press-seeds.s3-us-west-1.amazonaws.com/Got+Me+Babe+(Mastered).mp3")
track_file17 = open("https://record-press-seeds.s3-us-west-1.amazonaws.com/Moving+Day+(Mastered).mp3")
track_file18 = open("https://record-press-seeds.s3-us-west-1.amazonaws.com/OWITE+(Mastered).mp3")
track_file19 = open("https://record-press-seeds.s3-us-west-1.amazonaws.com/Yung_Kartz_-_01_-_I_Am_Up.mp3")
track_file20 = open("https://record-press-seeds.s3-us-west-1.amazonaws.com/Loyalty_Freak_Music_-_01_-_Sunglasses.mp3")
track_file21 = open("https://record-press-seeds.s3-us-west-1.amazonaws.com/Yung_Kartz_-_01_-_Jeopardy.mp3")
track_file22 = open("https://record-press-seeds.s3-us-west-1.amazonaws.com/Yung_Kartz_-_03_-_Intranet.mp3")
track_file23 = open("https://record-press-seeds.s3-us-west-1.amazonaws.com/Yung_Kartz_-_03_-_Uptown.mp3")
track_file24 = open("https://record-press-seeds.s3-us-west-1.amazonaws.com/Yung_Kartz_-_04_-_One_Way.mp3")
track_file25 = open("https://record-press-seeds.s3-us-west-1.amazonaws.com/Yung_Kartz_-_05_-_Picture_Perfect.mp3")
track_file26 = open("https://record-press-seeds.s3-us-west-1.amazonaws.com/Yung_Kartz_-_06_-_Psychedelic.mp3")
track_file27 = open("https://record-press-seeds.s3-us-west-1.amazonaws.com/Yung_Kartz_-_07_-_Frontline.mp3")
track_file28 = open("https://record-press-seeds.s3-us-west-1.amazonaws.com/Yung_Kartz_-_08_-_Too_Much_Ice.mp3")
track_file29 = open("https://record-press-seeds.s3-us-west-1.amazonaws.com/Yung_Kartz_-_10_-_Liz.mp3")
track_file30 = open("https://record-press-seeds.s3-us-west-1.amazonaws.com/Yung_Kartz_-_11_-_Wise_Guy.mp3")
track_file31 = open("https://record-press-seeds.s3-us-west-1.amazonaws.com/Yung_Kartz_-_07_-_Fallout.mp3)")
track_file32 = open("https://record-press-seeds.s3-us-west-1.amazonaws.com/electric-tric_-_Sketch_26.mp3")
