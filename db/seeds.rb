# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first
require "open-uri"
ActiveRecord::Base.transaction do
     Track.destroy_all 
     Album.destroy_all 
     User.destroy_all 
     Genre.destroy_all 
     
     # Genre.destroy_all

      none = Genre.create(genre_name: "None") 
      pop = Genre.create(genre_name: "Pop")
      rock = Genre.create(genre_name: "Rock")
      hiphop = Genre.create(genre_name: "Hip-Hop")
      alternative = Genre.create(genre_name: "Alternative")
      folk = Genre.create(genre_name: "Folk")
      jazz = Genre.create(genre_name: "Jazz")
      classical = Genre.create(genre_name: "Classical")
      metal = Genre.create(genre_name: "Metal")
      electronic = Genre.create(genre_name: "Electronic")
      soundtrack = Genre.create(genre_name: "Soundtrack")


     img_file1 = URI.open('https://record-press-seeds.s3-us-west-1.amazonaws.com/anime_couple.jpg')
     img_file2 = URI.open('https://record-press-seeds.s3-us-west-1.amazonaws.com/anime_desk.jpg')
     img_file3 = URI.open('https://record-press-seeds.s3-us-west-1.amazonaws.com/anime_dude.jpg')
     img_file4 = URI.open('https://record-press-seeds.s3-us-west-1.amazonaws.com/anime_girl.jpg')
     img_file5 = URI.open('https://record-press-seeds.s3-us-west-1.amazonaws.com/anime_girl2.jpg')
     img_file6 = URI.open('https://record-press-seeds.s3-us-west-1.amazonaws.com/anime_people.jpg')
     img_file7 = URI.open('https://record-press-seeds.s3-us-west-1.amazonaws.com/anime_roof.jpg')
     img_file8 = URI.open('https://record-press-seeds.s3-us-west-1.amazonaws.com/anime_soda_machine.jpg')
     img_file9 = URI.open('https://record-press-seeds.s3-us-west-1.amazonaws.com/cowboy_bebop.jpg')
     img_file10 = URI.open("https://record-press-seeds.s3-us-west-1.amazonaws.com/city_bw.jpg")
     img_file11 = URI.open("https://record-press-seeds.s3-us-west-1.amazonaws.com/foggy_lake.jpg")
     img_file12 = URI.open("https://record-press-seeds.s3-us-west-1.amazonaws.com/house_sketch.jpg")
     img_file13 = URI.open("https://record-press-seeds.s3-us-west-1.amazonaws.com/synth_beach.jpg")
     img_file14 = URI.open("https://record-press-seeds.s3-us-west-1.amazonaws.com/water_pattern.jpeg")
     img_file15 = URI.open("https://record-press-seeds.s3-us-west-1.amazonaws.com/water_color_bridge.jpg")
     
     track_file1 = URI.open('https://record-press-seeds.s3-us-west-1.amazonaws.com/01_-_Until_We_Get_By.mp3')
     track_file2 = URI.open('https://record-press-seeds.s3-us-west-1.amazonaws.com/Aglow_Hollow_-_04_-_Dog_Soldier___Stand_Down.mp3')
     track_file3 = URI.open('https://record-press-seeds.s3-us-west-1.amazonaws.com/An_Eagle_In_Your_Mind_-_05_-_Wild_Fruits_Kingdom.mp3')
     track_file4 = URI.open('https://record-press-seeds.s3-us-west-1.amazonaws.com/An_Eagle_In_Your_Mind_-_07_-_Green_Grass.mp3')
     track_file5 = URI.open('https://record-press-seeds.s3-us-west-1.amazonaws.com/An_Eagle_In_Your_Mind_-_09_-_River_of_your_Soul.mp3')
     track_file6 = URI.open('https://record-press-seeds.s3-us-west-1.amazonaws.com/Axletree_-_03_-_Three_Ravens.mp3')
     track_file7 = URI.open('https://record-press-seeds.s3-us-west-1.amazonaws.com/Derek_Clegg_-_02_-_Solar_Panel_Control_Holder.mp3')
     track_file8 = URI.open('https://record-press-seeds.s3-us-west-1.amazonaws.com/Derek_Clegg_-_07_-_Ill_Almost_Get_Us_There.mp3')
     track_file9 = URI.open('https://record-press-seeds.s3-us-west-1.amazonaws.com/Derek_Clegg_-_08_-_Cest_La_Vie.mp3')
     track_file10 = URI.open('https://record-press-seeds.s3-us-west-1.amazonaws.com/Derek_Clegg_-_10_-_A_Strong_Will_Is_Needed.mp3')
     track_file11 = URI.open('https://record-press-seeds.s3-us-west-1.amazonaws.com/Derek_Clegg_-_12_-_Annalise.mp3')
     track_file12= URI.open("https://record-press-seeds.s3-us-west-1.amazonaws.com/When+I'm+With+(Mastered).mp3")
     track_file13 = URI.open("https://record-press-seeds.s3-us-west-1.amazonaws.com/As+Ever+(Mastered).mp3")
     track_file14 = URI.open("https://record-press-seeds.s3-us-west-1.amazonaws.com/Bright+Lights+(Mastered).mp3")
     track_file15 = URI.open("https://record-press-seeds.s3-us-west-1.amazonaws.com/Flowers+On+The+Grass+(Mastered).mp3")
     track_file16 = URI.open("https://record-press-seeds.s3-us-west-1.amazonaws.com/Got+Me+Babe+(Mastered).mp3")
     track_file17 = URI.open("https://record-press-seeds.s3-us-west-1.amazonaws.com/Moving+Day+(Mastered).mp3")
     track_file18 = URI.open("https://record-press-seeds.s3-us-west-1.amazonaws.com/OWITE+(Mastered).mp3")
     track_file19 = URI.open("https://record-press-seeds.s3-us-west-1.amazonaws.com/Yung_Kartz_-_01_-_I_Am_Up.mp3")
     track_file20 = URI.open("https://record-press-seeds.s3-us-west-1.amazonaws.com/Loyalty_Freak_Music_-_01_-_Sunglasses.mp3")
     track_file21 = URI.open("https://record-press-seeds.s3-us-west-1.amazonaws.com/Yung_Kartz_-_01_-_Jeopardy.mp3")
     track_file22 = URI.open("https://record-press-seeds.s3-us-west-1.amazonaws.com/Yung_Kartz_-_03_-_Intranet.mp3")
     track_file23 = URI.open("https://record-press-seeds.s3-us-west-1.amazonaws.com/Yung_Kartz_-_03_-_Uptown.mp3")
     track_file24 = URI.open("https://record-press-seeds.s3-us-west-1.amazonaws.com/Yung_Kartz_-_04_-_One_Way.mp3")
     track_file25 = URI.open("https://record-press-seeds.s3-us-west-1.amazonaws.com/Yung_Kartz_-_05_-_Picture_Perfect.mp3")
     track_file26 = URI.open("https://record-press-seeds.s3-us-west-1.amazonaws.com/Yung_Kartz_-_06_-_Psychedelic.mp3")
     track_file27 = URI.open("https://record-press-seeds.s3-us-west-1.amazonaws.com/Yung_Kartz_-_07_-_Frontline.mp3")
     track_file28 = URI.open("https://record-press-seeds.s3-us-west-1.amazonaws.com/Yung_Kartz_-_08_-_Too_Much_Ice.mp3")
     track_file29 = URI.open("https://record-press-seeds.s3-us-west-1.amazonaws.com/Yung_Kartz_-_10_-_Liz.mp3")
     track_file30 = URI.open("https://record-press-seeds.s3-us-west-1.amazonaws.com/Yung_Kartz_-_11_-_Wise_Guy.mp3")
     track_file31 = URI.open("https://record-press-seeds.s3-us-west-1.amazonaws.com/Yung_Kartz_-_07_-_Fallout.mp3")
     track_file32 = URI.open("https://record-press-seeds.s3-us-west-1.amazonaws.com/electric-tric_-_Sketch_26.mp3")
     
     
     
     
     user1 = User.create(username: "bestfan", email: "bestfan@bestfan.com", 
     password: "Hunter12", is_artist: false, genre_id: none.id, artistName: "", location: "")
     user2 = User.create(username: "mikehemingway", email: "hemingway@bestfan.com", password: "Hunter12",
     is_artist: false, genre_id: none.id, artistName: "", location: "")
     user3 = User.create(username: "bestartist", email: "bestartist@bestartist.com", password: "Hunter12",
     is_artist: true, genre_id: pop.id, artistName: "BESTBANDEVER", location: "Antartica")
     user4 = User.create(username: "justinchore", email: "justinchore@bestartist.com", password: "Hunter12",
     is_artist: true, genre_id: folk.id, artistName: "Toughtimes", location: "Los Angeles, California")
     user5 = User.create(username: "thenagain", email: "ThenAgain@bestartist.com", password: "Hunter12",
     is_artist: true, genre_id: alternative.id, artistName: "Then Again,", location: "Seattle, Washington")
     user6 = User.create(username: "bluebirds", email: "bluebirds@bestartist.com", password: "Hunter12",
     is_artist: true, genre_id: jazz.id, artistName: "Bluey Vluey", location: "San Francisco, California")
     
     user1.profile_picture.attach(io:img_file1, filename:"anime_cople.jpg")
     user2.profile_picture.attach(io:img_file2, filename:"anime_girl1.jpg")
     user3.profile_picture.attach(io:img_file4, filename:"anime_girl2.jpg")
     user4.profile_picture.attach(io:img_file3, filename:"anime_dude.jpg")
     user5.profile_picture.attach(io:img_file7, filename:"anime_desk.jpg")
     user6.profile_picture.attach(io:img_file8, filename: "anime_girly.jpg")
     
     
     album1 = Album.create(title: "Westside Forever", artist_id: user3.id, downloadable: true, genre_id: pop.id)
     album2 = Album.create(title: "Time to Fly", artist_id: user3.id, downloadable: true, genre_id: pop.id)
     album3 = Album.create(title: "Straight No Chaser", artist_id: user3.id, downloadable: true, genre_id: pop.id)
     album4 = Album.create(title: "Tomorrow is a Long Time", artist_id: user4.id, downloadable: true, genre_id: folk.id)
     album5 = Album.create(title: "Freewheeling", artist_id: user5.id, downloadable: true, genre_id: folk.id)
     album6 = Album.create(title: "Florence Place", artist_id: user6.id, downloadable: true, genre_id: alternative.id)
     
     album1.album_artwork.attach(io:img_file10, filename:"city.jpg")
     album2.album_artwork.attach(io:img_file11, filename:"foggy_lake.jpg")
     album3.album_artwork.attach(io:img_file15, filename:"bridge.jpg")
     album4.album_artwork.attach(io:img_file13, filename:"synth")
     album5.album_artwork.attach(io:img_file9, filename:"cowboy_bebop.jpg")
     album6.album_artwork.attach(io:img_file5, filename:"anime_people")
     
     
     
     track1 = Track.create(title: "Time to Go", artist_id: user3.id, downloadable: true, genre_id: pop.id, album_id: album1.id, track_number: 1 )
     track2 = Track.create(title: "Sure Thing", artist_id: user3.id, downloadable: true, genre_id: pop.id, album_id: album1.id, track_number: 2 )
     track3 = Track.create(title: "Closing Time", artist_id: user3.id, downloadable: true, genre_id: pop.id, album_id: album1.id, track_number: 3 )
     track4 = Track.create(title: "Wavy", artist_id: user3.id, downloadable: true, genre_id: pop.id, album_id: album1.id, track_number: 4 )
     track5 = Track.create(title: "Light Drinker", artist_id: user3.id, downloadable: true, genre_id: pop.id, album_id: album1.id, track_number: 5 )
     track6 = Track.create(title: "Waking hours", artist_id: user3.id, downloadable: true, genre_id: pop.id, album_id: album1.id, track_number: 6 )
     track7 = Track.create(title: "Cookies and Milk", artist_id: user3.id, downloadable: true, genre_id: pop.id, album_id: album2.id, track_number: 1 )
     track8 = Track.create(title: "It's Cool", artist_id: user3.id, downloadable: true, genre_id: pop.id, album_id: album2.id , track_number: 2 )
     track9 = Track.create(title: "Time to Fly", artist_id: user3.id, downloadable: true, genre_id: pop.id, album_id: album2.id, track_number: 3 )
     track10 = Track.create(title: "Straight No Chaser", artist_id: user3.id, downloadable: true, genre_id: pop.id, album_id: album3.id, track_number: 1 )
     track11 = Track.create(title: "Vodka", artist_id: user3.id, downloadable: true, genre_id: pop.id, album_id: album3.id, track_number: 2 )
     track12 = Track.create(title: "Manhattan", artist_id: user3.id, downloadable: true, genre_id: pop.id, album_id: album3.id, track_number: 3 )
     track13 = Track.create(title: "Oh Dear", artist_id: user4.id, downloadable: true, genre_id: folk.id, album_id: album4.id, track_number: 1 )
     track14 = Track.create(title: "Running Somewhere", artist_id: user4.id, downloadable: true, genre_id: folk.id, album_id: album4.id, track_number: 2 )
     track15 = Track.create(title: "How Tragic", artist_id: user4.id, downloadable: true, genre_id: folk.id, album_id: album4.id, track_number: 3 )
     track16 = Track.create(title: "Tomorrow is a Long Time", artist_id: user4.id, downloadable: true, genre_id: folk.id, album_id: album4.id, track_number: 4 )
     track17 = Track.create(title: "Freewheeling", artist_id: user4.id, downloadable: true, genre_id: folk.id, album_id: album5.id, track_number: 1 )
     track18 = Track.create(title: "It's Not", artist_id: user4.id, downloadable: true, genre_id: folk.id, album_id: album5.id, track_number: 2 )
     track19 = Track.create(title: "Tantalizing", artist_id: user4.id, downloadable: true, genre_id: folk.id, album_id: album5.id, track_number: 3)
     track20 = Track.create(title: "Summer Somewhere", artist_id: user4.id, downloadable: true, genre_id: folk.id, track_number: 1 )
     track21 = Track.create(title: "Never been", artist_id: user4.id, downloadable: true, genre_id: folk.id, track_number: 1 )
     track22 = Track.create(title: "As Ever", artist_id: user5.id, downloadable: true, genre_id: alternative.id, album_id: album6.id, track_number: 1 )
     track23 = Track.create(title: "Bright Lights", artist_id: user5.id, downloadable: true, genre_id: alternative.id, album_id: album6.id, track_number: 2 )
     track24 = Track.create(title: "Moving Day", artist_id: user5.id, downloadable: true, genre_id: alternative.id, album_id: album6.id, track_number: 3 )
     track25 = Track.create(title: "When I'm With You(I Can't Leave)", artist_id: user5.id, downloadable: true, genre_id: alternative.id, album_id: album6.id, track_number: 4 )
     track26 = Track.create(title: "Ocean Watching in the Evening", artist_id: user5.id, downloadable: true, genre_id: alternative.id, album_id: album6.id, track_number: 5 )
     track27 = Track.create(title: "Flowers on the Grass", artist_id: user5.id, downloadable: true, genre_id: alternative.id, album_id: album6.id, track_number: 6 )
     track28 = Track.create(title: "That's Why it Breaks My Heart", artist_id: user5.id, downloadable: true, genre_id: alternative.id, album_id: album6.id, track_number: 7 )
     track29 = Track.create(title: "Yeah, I Know", artist_id: user6.id, downloadable: true, genre_id: jazz.id, track_number: 1)
     
     track1.song_file.attach(io:track_file19, filename:"hip_hop1")
     track2.song_file.attach(io:track_file20, filename:"hip_hop2")
     track3.song_file.attach(io:track_file21, filename:"hip_hop3")
     track4.song_file.attach(io:track_file22, filename:"hip_hop3")
     track5.song_file.attach(io:track_file23, filename:"hip_hop3")
     track6.song_file.attach(io:track_file24, filename:"hip_hop4")
     track7.song_file.attach(io:track_file25, filename:"hip_hop5")
     track8.song_file.attach(io:track_file26, filename:"hip_hop6")
     track9.song_file.attach(io:track_file27, filename:"hip_6")
     track10.song_file.attach(io:track_file28 ,filename:"hip7")
     track11.song_file.attach(io:track_file29 ,filename:"hip8")
     track12.song_file.attach(io:track_file30 ,filename:"hip9")
     track13.song_file.attach(io:track_file1, filename:"until_we_get_by.mp3")
     track14.song_file.attach(io:track_file2, filename:"dog_soldier.mp3")
     track15.song_file.attach(io:track_file3, filename:"wild_fruits.mp3")
     track16.song_file.attach(io:track_file4, filename:"green_grass.mp3")
     track17.song_file.attach(io:track_file5, filename:"river_of.mp3")
     track18.song_file.attach(io:track_file6, filename:"three_ravens.mp3")
     track19.song_file.attach(io:track_file7, filename:"solar.mp3")
     track20.song_file.attach(io:track_file8, filename:"almost.mp3")
     track20.track_artwork.attach(io:img_file6, filename:"roof.jpg")
     track21.song_file.attach(io:track_file9, filename:"cest.mp3")
     track21.track_artwork.attach(io:img_file14, filename: "couple.jpg")
     track22.song_file.attach(io:track_file13, filename:"mine1")
     track23.song_file.attach(io:track_file14, filename:"mine2")
     track24.song_file.attach(io:track_file15, filename:"mine3")
     track25.song_file.attach(io:track_file16, filename:"mine4")
     track26.song_file.attach(io:track_file17, filename:"mine5")
     track27.song_file.attach(io:track_file18, filename:"mine6")
     track28.song_file.attach(io:track_file12, filename:"mine7")
     track29.song_file.attach(io:track_file32, filename:"jazz")
     track29.track_artwork.attach(io:img_file12, filename:"water.jpg")


end
