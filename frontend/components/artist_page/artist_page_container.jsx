import React from 'react';
import { connect } from 'react-redux';
import { fetchUser } from '../../actions/user_actions'; 
import { fetchArtistsAlbums } from '../../actions/album_actions'; 
import { fetchArtistsTracks } from '../../actions/track_actions';
import ArtistPage from './artist_page';
import { trackSet, playTrack, pauseTrack } from '../../actions/track_player_actions';

const mapStateToProps = (state, ownProps) => {
   
    const userId = ownProps.match.params.userId
    // debugger
    return {
        user: state.entities.users[userId], 
        albums: state.entities.albums, 
        tracks: state.entities.tracks,
        // currentUser: state.entities.users[state.session.id],
        userId
    };
};

const mapDispatchToProps = (dispatch) => {
    // debugger
    return {
        trackSet: (track) => dispatch(trackSet(track)),
        playTrack: () => dispatch(playTrack()),
        pauseTrack: () => dispatch(pauseTrack()),
        clearAlbums: () => dispatch(clearAlbums()),
        clearTracks: () => dispatch(clearTracks()), 
        clearUsers: () => dispatch(clearUsers()),
        fetchUser: (userId) => dispatch(fetchUser(userId)),
        fetchArtistsAlbums: (userId) => dispatch(fetchArtistsAlbums(userId)),
        fetchArtistsTracks: (userId) => dispatch(fetchArtistsTracks(userId)), 
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ArtistPage);