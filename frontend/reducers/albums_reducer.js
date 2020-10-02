import {RECEIVE_ALBUM, RECEIVE_ALBUMS, CLEAR_ALBUMS} from '../actions/album_actions'; 

const albumsReducer = (state = {}, action) => {
    //debugger
    switch(action.type) {
        case RECEIVE_ALBUMS:
            return action.albums;
        case CLEAR_ALBUMS:
            return {};
        default: 
            return state
    }
}


export default albumsReducer; 