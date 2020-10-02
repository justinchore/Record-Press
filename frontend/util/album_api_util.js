import { $CombinedState } from "redux"

export const fetchAlbums = () => {
    return $.ajax({
        method: 'GET',
        url: '/api/albums',
    })
}

export const fetchArtistsAlbums = (userId) => {
    // debugger
    return $.ajax({
        method: 'GET',
        url: '/api/albums',
        data: { userId }
    })
}

export const fetchAlbum = (albumId) => {
    return $.ajax({
        method: 'GET',
        url: `/api/albums/${albumId}`,
    })
}

export const createAlbum = (album) => {
    return $.ajax({
        method: 'CREATE',
        url: `/api/albums`,
        data: album
    })
}
