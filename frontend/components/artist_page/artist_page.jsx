import React from 'react';
import { Link } from 'react-router-dom';
import { Redirect } from 'react-router-dom';
import TrackContainer from './tracks_container';
import TrackPlayerContainer from '../trackplayer/track_player_container';

class ArtistPage extends React.Component {
    constructor(props){
        super(props); 


    }

    componentDidMount(){
        this.props.fetchArtistsAlbums(this.props.userId);
        this.props.fetchArtistsTracks(this.props.userId);
        this.props.fetchUser(this.props.userId);
    }

    componentDidUpdate(prevProps) {
        if (this.props.match.params.userId !== prevProps.match.params.userId) {
            this.props.fetchArtistsAlbums(this.props.userId);
            this.props.fetchArtistsTracks(this.props.userId);
            this.props.fetchUser(this.props.userId);
        }
    }

    // componentWillUnmount() {
    //     // this.props.setTrack();
    //     this.props.clearTracks();
    //     this.props.clearAlbums();
    //     this.props.clearArtists();
    // }

    mainRelease(albums, tracks) {
        // debugger
        if (albums.length > 0) {
            return albums[0];  
        } else if (tracks.length > 0) {
            return tracks[0] 
        } else {
            return null; 
        }
    }

    discography_maker(albumReleases, trackReleases) {
        let discoArray; 
        if (trackReleases.length > 0) {
            let filteredTracks;
            filteredTracks = trackReleases.filter(track => track.album_name === undefined)
            discoArray = albumReleases.concat(filteredTracks)
        }else {
            discoArray = albumReleases
        }

        return discoArray; 
    }

    make_half_dates(date) {
        
        let date2 = new Date(date)
        const month = date2.toLocaleString('default', { month: 'long' });

        const year = date2.getFullYear()

        return month + " " + year; 
    }

  

    render() {
        let { albums, tracks, user} = this.props; 
        if ((albums === {} && tracks === {}) || user === undefined ) {
            return null 
        }

        const albumReleases = (Object.values(albums)); 
        const trackReleases = (Object.values(tracks)); 

        const mainRelease = this.mainRelease(albumReleases, trackReleases)
        if (mainRelease === null) {
            return null;
        } else {
                let tracks = []
                if (mainRelease.album_notes === undefined) {
                    tracks.push(mainRelease); 
                } else {
                    tracks = mainRelease.tracks
                }

                const discog = this.discography_maker(albumReleases, trackReleases)
              
                    const discography = discog.map(release => (
                    <li key={release.id}>
                        <div className="discog-item-wrapper">
                        <div><img className="discog-image"src={release.picUrl}/></div>
                        <p>{release.title}</p>
                        <p>{this.make_half_dates(release.created_at)}</p>
                        </div>
                    </li>

                    
                ))
            //    debugger 
                 return(
                     <div className="full-artist-background">
                     <div className="main-artist-page-container">
                         <div className="main-artist-subcontainer">
                         <div className="main-artist-banner"> </div>
                            <div className="album-content-house">
                             <div className="artist-page-column-1">
                                <div album = "album-header">
                                     <div className="album-title-text">{mainRelease.title}</div>
                                         <p className="album-header-artistName ">by &nbsp;{mainRelease.artist_name}</p>
                                 </div>
                                 <div className="artist-player">
                                         <TrackPlayerContainer/>
                                 </div>
                                 <div className="track-list">
                                     <ul>
                                     {
                                        tracks.map((track) => (
                                        <TrackContainer key={track.title.concat(track.id)} track={track} />))
                                      
                                     }
                                     </ul>
                                 </div>

                                 <div>
                                        <p>released &nbsp;{this.make_half_dates(mainRelease.created_at)} </p>
                                 </div>
                             </div>
                             
                             <div className="artist-page-column-2">
                                 <div className="album-photo">
                                     <img src={mainRelease.picUrl}/>
                                 </div>
                             
                             </div>
         
                             <div className="artist-page-column-3">
                                     <div>
                                         <img src={this.props.user.picUrl} className="artist-profile-photo"/>
                                         <p className="artist-side-name">{mainRelease.artist_name}</p>
                                         <p className="artist-side-location">{this.props.user.location}</p>
                                     </div>
                                     <div className="discog-bar">
                                         <div className= "discog-sidebar-text">Discography</div>
                                         <ul>{discography}</ul>
                                     </div>
                             </div>                  
                            
                            </div>
                         </div>
                     </div>
                     </div>
                 )
        }
            
    }


}

export default ArtistPage;