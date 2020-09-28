class Api::TracksController < ApplicationController  

    def create
        @track = Track.create(track_params)

        if @track.save 
            render "api/tracks/show"
        else 
            render @track.errors.full_messages, status: 422 
        end
    end

    def index 
       if params[:userId] 
            @tracks = Track.where(artist_id: params[:userId])
            render "api/tracks/index"
        else 
            @tracks = Track.all 
            render "api/tracks/index"
        end
    end

    def show 
        @track = Track.find_by(id: params[:id])

        render "api/tracks/show"
    end 

    def delete
        @track = Track.find_by(params[:id])
        @track.destroy 

        render "api/user/show"
    end

    def track_params  
        params.require(:album).permit(
            :artist_id,
            :track_notes,
            :credits, 
            :title, 
            :lyrics,
            :downloadable, 
            :track_number,
            :genre_id,
            :album_id
        )
    end

end