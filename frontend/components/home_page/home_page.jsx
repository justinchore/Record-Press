import React from 'react';
import FeaturedAlbums from "./featured_albums_container"; 
import { Link } from 'react-router-dom';

class HomePage extends React.Component {
    
    constructor(props) {
        super(props)

        this.state = { 
            loaded: false,
        }
    }

    componentDidMount() {
        const albs = this.props.fetchAlbums();
        Promise.all([albs]).then(() => this.setState({loaded: true})); 
    }

    componentWillUnmount() {
        // this.props.clearAlbums(); 
    }

    newAndNotableList(albumArr) {
       return albumArr.slice(1).map(album => (
             
                <li key={album.created_at} className="n-n-item">
                    <Link to= {`/users/${album.artist_id}`} className='n-n-item-inner'>
                         <div className="inner2-item">
                        <img className="n-n-artwork" src={album.picUrl} />
                        <div className="n-n-release-info">
                            <h4 className="n-n-album-title">{album.title}</h4>
                            <p>by</p>
                            <p className="n-n-album-artist">{album.artist_name}</p>
                       </div>
                         </div>
                    </Link>
                </li>
            )
        )
    }
    
    render() {
        // const albumArr = Object.values(this.props.albums)
        // if (albumArr.length === 0 ) return null
        if (this.state.loaded) {
            const albumArr = Object.values(this.props.albums)

        return (
            <div className="home-page-wrapper">
                <FeaturedAlbums albumArr = {albumArr}/>
                <div className="home-page-mid-banner">
                    -- Find a song that <span className="bold-in-banner">moves</span> you --
                </div>
                <div className="new-and-notable-container">
                    <div className="n-n-clear">
                        <h3>new and notable</h3> 
                    </div>
                    <div className="n-n-clear">
                        <ul className="n-n-list">
                        {this.newAndNotableList(albumArr)}
                        </ul>
                    </div>
                </div>
            </div>
            
        )
        } else {
            return (
                <div></div>
            )
        }
    }
}

export default HomePage;