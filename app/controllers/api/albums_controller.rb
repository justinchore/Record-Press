class Api::AlbumsController < ApplicationController  
    def create 
        # album_songs = JASON.parse[params[:album][:tracks]
        # song_files = params[:album][:song_files]
        # album_artwork = params[:album][:artwork]
        @album = Album.new(album_params)

        if @album.save 
            render "api/albums/show"
        else 
            render json: @album.errors.full_messages, status: 422
        end

        # if @album.valid 
        #     render json: @album.errors.full_messages, status: 422 and return 
        # end
        
        # @album.album_artwork.attach(io: File.open(album_artwork), filename: album_artwork)
    end

    def show 
        # 
        @album = Album.find_by(id: params[:id])

        render "api/albums/show"
    end

    def index 
        # debugger
        if params[:userId] 
            @albums = Album.where(artist_id: params[:userId])
            render "api/albums/index"
        else 
            @albums = Album.all 
            render "api/albums/index"
        end
    end

    def create_tracks(album_songs, album_artwork) 
    end

    private 

    def album_params 
        params.require(:album).permit(
            :artist_id,
            :album_notes,
            :credits, 
            :title, 
            :downloadable, 
            :genre_id 
        )
    end
end