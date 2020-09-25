import React from 'react'

class FeaturedAlbums extends React.Component {
    constructor(props) {
        super(props); 
    }

    render() {
        return (
        <div>
            <div className="featured-albums-container">
            <div className="black-bar"></div>
            <div className="black-bar-end"></div>
            <div className="big-album-container">
                    {/*set to grid teplate 6* background image here*/}
                    <div className="big-album-title-container">
                        {/*Big Album Title here*/}        
                    </div>
                    <div className="artist-information"></div>
                    <div className="link-to-artist"></div>
            </div>
            
                
                <div className ="album1-container">
                    {/*background of album, */}
                    <div className="title-of-album"></div>
                    <div className="small-album-details"></div>
                </div>
                <div className="album2-container">
                    {/*background of album, */}
                    <div className="title-of-album"></div>
                    <div className="small-album-details"></div>
                </div>
                <div className="album3-container">
                    {/*background of album, */}
                    <div className="title-of-album"></div>
                    <div className="small-album-details"></div>
                </div>
           
                

           </div>
        </div>
        )
    }
}

export default FeaturedAlbums;