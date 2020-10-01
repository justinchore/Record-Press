import React from 'react';
import FeaturedAlbums from "./featured_albums_container"; 

class HomePage extends React.Component {
    
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        const albs = this.props.fetchAlbums(); 
    }

    componentWillUnmount() {
        this.props.clearAlbums(); 
    }

    newAndNotableList(albumArr) {
    debugger
       return albumArr.slice(1).map(album => (
             
                <li key={album.created_at} className="n-n-item">
                    <div className='n-n-item-inner'>
                         <div className="inner2-item">
                        <img className="n-n-artwork" src={album.picUrl} />
                        <div className="n-n-release-info">
                            <h4 className="n-n-album-title">{album.title}</h4>
                            <p>by</p>
                            <p className="n-n-album-artist">{album.artist_name}</p>
                       </div>
                         </div>
                    </div>
                </li>
            )
        )
    }
    
    render() {
        const albumArr = Object.values(this.props.albums)
        if (albumArr.length === 0 ) return null
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
    }
}

export default HomePage;