import {RECEIVE_ALBUM, RECEIVE_ALBUMS} from '../actions/album_actions'; 

const albumsReducer = (state = {}, action) => {
    //debugger
    switch(action.type) {
        case RECEIVE_ALBUMS: 
            return Object.assign({}, state, action.albums)
        default: 
            return state
    }
}


export default albumsReducer; 