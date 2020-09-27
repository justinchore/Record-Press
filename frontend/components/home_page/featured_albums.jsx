import React from 'react'

class FeaturedAlbums extends React.Component {
    constructor(props) {
        super(props); 
    }

    render() {
        return (
            <div>
            <div className="featured-albums-container">
                <div className="albums-show-container">
                    albums show
                    <div className="main-featured-album-container">
                        main featured
                    </div>
                   
                        <div className="sub-artists-container">
                        
                        <div className="sub-album1">album1</div>
                        <div className="sub-album2">album2</div>
                        <div className="sub-album3">album3</div>
               
                        </div>

            </div>
            </div>
    </div>
              
         )
    }
}

export default FeaturedAlbums;