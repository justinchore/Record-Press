import React from 'react';

class ArtistPage extends React.Component {
    constructor(props) {
        super(props)

    }

    componentDidMount() {
        this.props.fetchUser(this.props.userId);
        this.props.fetchArtistsAlbums(this.props.userId);
        this.props.fetchArtistsTracks(this.props.userId);
    }

    render() {
        console.log("!!")
        // this.props.fetchArtistsTracks(userId); 
        return(
            <div>Artist Show Page</div>
        )
    }

}

export default ArtistPage;