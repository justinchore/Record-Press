import React from 'react';
import { connect } from 'react-redux';
import Tracks from './tracks';
import { trackSet, playTrack, pauseTrack } from '../../actions/track_player_actions';

const mapStateToProps = (state) => {
    // debugger
    return {
    currentlyPlaying: state.ui.currentTrack,
    isPlaying: state.ui.isPlaying.playing,
}};

const mapDispatchToProps = (dispatch) => ({
    trackSet: (track) => dispatch(trackSet(track)),
    playTrack: () => dispatch(playTrack()),
    pauseTrack: () => dispatch(pauseTrack())
});


export default connect(mapStateToProps, mapDispatchToProps)(Tracks);


