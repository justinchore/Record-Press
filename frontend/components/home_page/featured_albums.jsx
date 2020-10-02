import React from 'react'
import { Link } from 'react-router-dom';

class FeaturedAlbums extends React.Component {
    constructor(props) {
        super(props); 
    }

    getImage(release) {
        return ( {backgroundImage: `url(${release.picUrl})` }); 
    }

    render() {
        let mainFeatured = this.props.albumArr[0]
        let subAlbum1 = this.props.albumArr[2]
        let subAlbum2 = this.props.albumArr[3]
        let subAlbum3 = this.props.albumArr[5]
    
        return (
            <div>
            <div className="featured-albums-container">
                <div className="albums-show-container">
                    albums show
                    <div className="featured-albums-container-2">
                    <div className="main-featured-album-container">
                        <Link to={`/users/${mainFeatured.artist_id}`}>
                        <div className="main-feature-details"
                            style={this.getImage(mainFeatured)}>
                            <p className="main-feature-title-text">{mainFeatured.title}</p>
                            <p className="main-feature-artist-text">{mainFeatured.artist_name}</p>
                        </div>
                        </Link>
                        
                    </div>
                   
                        <ul className="sub-artists-container">
                        
                            <li className="sub-album1">
                                
                               
                                <Link to ={`/users/${subAlbum1.artist_id}`} className="sub-feature-wrap"
                                    style={this.getImage(subAlbum1)}>
                                        <p className="sub-feature-title-text">{subAlbum1.title}</p>
                                        <p className="sub-feature-artist-text">{subAlbum1.artist_name}</p>
                                        
                                </Link>
                            </li>
                            <li className="sub-album2">
                                <Link to={`/users/${subAlbum2.artist_id}`} className="sub-feature-wrap"
                                    style={this.getImage(subAlbum2)}>
                                        <p className="sub-feature-title-text">{subAlbum2.title}</p>
                                        <p className="sub-feature-artist-text">{subAlbum2.artist_name}</p>
                                    
                                </Link>
                            </li>
                            <li className="sub-album3">
                                    <Link to={`/users/${subAlbum3.artist_id}`} className="sub-feature-wrap"
                                    style={this.getImage(subAlbum3)}>
                                        <p className="sub-feature-title-text">{subAlbum3.title}</p>
                                        <p className="sub-feature-artist-text">{subAlbum3.artist_name}</p>
                                    
                                </Link>
                            </li>
               
                        </ul>
                        </div>
            </div>
            </div>
    </div>
              
         )
    }
}

export default FeaturedAlbums;