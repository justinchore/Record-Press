import { SET_TRACK } from '../actions/track_player_actions';

const trackPlayerSetReducer = (state = {}, action) => {
    //debugger
    switch (action.type) {
        case SET_TRACK:
            return Object.assign({}, state, action.track);
        default:
            return state;
    }
};

export default trackPlayerSetReducer;