import { RECEIVE_TRACK, RECEIVE_TRACKS, CLEAR_TRACKS } from '../actions/track_actions';

const tracksReducer = (state = {}, action) => {

    switch (action.type) {
    
        case RECEIVE_TRACKS:
            return Object.assign({}, state, action.tracks)
         case CLEAR_TRACKS: 
            return {}; 
        default:
            return state
    }
}


export default tracksReducer;