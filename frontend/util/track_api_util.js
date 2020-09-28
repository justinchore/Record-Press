import { $CombinedState } from "redux"

export const fetchTracks = (albumId) => {
    return $.ajax({
        method: 'GET',
        url: '/api/tracks/', 
        data: { albumId }
    })
}

export const fetchArtistsTracks = (userId) => {
    return $.ajax({
        method: 'GET', 
        url: '/api/tracks/', 
        data: { userId }
    })

}