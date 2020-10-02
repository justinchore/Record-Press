import { combineReducers } from 'redux';

import isPlaying from './track_player_reducer'; 
import modal from './modal_reducer';
import currentTrack from './track_player_set_reducer'; 

export default combineReducers({
    modal,
    isPlaying, 
    currentTrack
});
