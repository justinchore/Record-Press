 json.set! @album.id do 
    json.partial! 'api/albums/album', album: @album
 end