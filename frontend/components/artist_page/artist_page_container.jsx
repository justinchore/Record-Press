import React from 'react';
import { connect } from 'react-redux';
import { fetchUser } from '../../actions/user_actions'; 
import { fetchArtistsAlbums } from '../../actions/album_actions'; 
import { fetchArtistsTracks } from '../../actions/track_actions';
import ArtistPage from './artist_page';

const mapStateToProps = (state, ownProps) => {
    const userId = ownProps.match.params.userId 
    return {
        user: state.entities.users[userId], 
        albums: Object.values(state.entities.albums), 
        tracks: Object.values(state.entities.tracks),
        currentUser: state.entities.users[state.session.id],
        userId
    };
};

const mapDispatchToProps = (dispatch) => {
    // debugger
    return {
        fetchUser: (userId) => dispatch(fetchUser(userId)),
        fetchArtistsAlbums: (userId) => dispatch(fetchArtistsAlbums(userId)),
        fetchArtistsTracks: (userId) => dispatch(fetchArtistsTracks(userId))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ArtistPage);