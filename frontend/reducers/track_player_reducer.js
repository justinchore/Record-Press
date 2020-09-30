import { PLAY, PAUSE } from '../actions/track_player_actions';

const trackPlayerReducer = (state = { playing: false }, action) => {
    //debugger
    switch (action.type) {
        case PLAY:
            return Object.assign({}, state, { playing: true });

        case PAUSE:
            return Object.assign({}, state, { playing: false });
    
        // case SET_TRACK: 
        //     return Object.assign({}, state, { action.track})

        default:
            return state;
    }
};

export default trackPlayerReducer;