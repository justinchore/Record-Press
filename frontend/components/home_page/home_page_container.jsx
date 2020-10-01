import React from 'react';
import { connect } from 'react-redux';
import HomePage from './home_page';
import { fetchAlbums, clearAlbums } from '../../actions/album_actions'; 

const mapStateToProps = (state) => {
    return {
        albums: state.entities.albums
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchAlbums: () => dispatch(fetchAlbums()), 
        clearAlbums: () => dispatch(clearAlbums())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);