import { connect } from 'react-redux'; 
import {playTrack, pauseTrack, trackSet } from '../../actions/track_player_actions'; 
import TrackPlayer from './track_player';  



const mapStateToProps = (state) => {
    debugger
    return {
       tracks_obj: Object.values(state.entities.tracks),
       isPlaying: state.ui.isPlaying.playing,
       currentlyPlaying: state.ui.currentTrack
    }
};
const mapDispatchToProps = dispatch => {
    //debugger
    return {
        trackSet: (track) => dispatch(trackSet(track)),
        playTrack: () => dispatch(playTrack()),
        pauseTrack: () => dispatch(pauseTrack())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(TrackPlayer);