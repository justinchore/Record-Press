import { TRACK_SET } from '../actions/track_player_actions';

const trackPlayerSetReducer = (state = {}, action) => {
    // debugger
    switch (action.type) {
        case TRACK_SET:
            return action.track;
        default:
            return state;
    }
};

export default trackPlayerSetReducer;