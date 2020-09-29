import React from 'react';

class ArtistPage extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
           
        }

        this.renderReleases = this.renderReleases.bind(this); 
        this.renderAlbums = this.renderAlbums.bind(this);
        this.albums_collection = this.albums_collection.bind(this); 
        this.tracks_collection = this.tracks_collection.bind(this);
        // this.getMainRelease = this.getMainRelease.bind(this);
    }

    componentDidMount() {
        this.props.fetchUser(this.props.userId);
        this.props.fetchArtistsAlbums(this.props.userId);
        this.props.fetchArtistsTracks(this.props.userId);
    }

    albums_collection() {
        let albums_obj = this.props.albums[0];
        let albums_collection = Object.values(albums_obj);

        return albums_collection;
    }

    tracks_collection() {
        let tracks_obj = this.props.tracks[0]; 
        let all_tracks = Object.values(tracks_obj); 
        let tracks_collection = [] 
        all_tracks.forEach(track => {
            if (track.album_id === null) {
                tracks_collection.push(track)
            }
        })
        
        return tracks_collection; 
    }   

    getMainRelease() {
        let tracks = this.renderTracks();
        let albums = this.renderAlbums();
        let releases;
        if (tracks && albums) {
            releases = tracks.concat(albums)
        } else if (!tracks && albums) {
            releases = albums
        } else if (tracks && !albums) {
            releases = tracks
        } else {
            console.log("hit null!")
            return null
        }

        releases.sort(function (a, b) {
            var keyA = new Date(a.created_at),
                keyB = new Date(b.created_at);
            // Compare the 2 dates
            if (keyA < keyB) return -1;
            if (keyA > keyB) return 1;
            return 0;
        });

        debugger

        if (releases.length != 0){ 
            let mainRelease = releases[0]
            if (mainRelease.album_id === undefined) {
                return(
                    <div>
                        <div>{mainRelease.title}</div>
                        <div>ALBUM ARTWORK </div>
                        <div>{mainRelease.artist_name}</div>
                        <div>MUSIC PLAYER</div>
                        {
                            mainRelease.tracks.map((track,i) => {
                                return <li key={i}><button>play</button> {track.track_number} <button>{track.title}</button><p>duration</p></li>
                            })
                        }
                        <div>{mainRelease.album_notes}</div>
                        <div>released {this.getFullDate()}</div>
                        <div>{mainRelease.credits}</div>
                    </div>
                )
            }
            else if (mainRelease.album_id === null) {
                return (
                    <div>
                        <div>{mainRelease.title}</div>
                        <div>TRACK ARTWORK </div>
                        <div>{mainRelease.artist_name}</div>
                        <div>MUSIC PLAYER</div>
                        <li><button>play</button> {mainRelease.track_number} <button>{mainRelease.title}</button><p>duration</p></li>
                        <div>{mainRelease.track_notes}</div>
                        <div>released {this.getFullDate()}</div>
                        <div>{mainRelease.credits}</div>
                    </div>
                )
            }
      }else {
             return null;
      }
    }

    renderSideBar() {

    }

    getFullDate(date) {
        let date_obj = new Date(date);
        let month = date_obj.toLocaleString('default', { month: 'long' });
        let day = date_obj.getDay();
        let year = date_obj.getFullYear();

        return month + " " + day + " " + year;
    }

    renderReleases() {
        let tracks = this.renderTracks();
        let albums = this.renderAlbums();
        let releases; 
        if (tracks && albums) {
            releases = tracks.concat(albums)
        } else if (!tracks && albums) {
            releases = albums 
        } else if (tracks && !albums) {
            releases = tracks
        } else {
            return null
        }

        releases.sort(function (a, b) {
            var keyA = new Date(a.created_at),
                keyB = new Date(b.created_at);
            // Compare the 2 dates
            if (keyA < keyB) return -1;
            if (keyA > keyB) return 1;
            return 0;
        });


        return releases.map((release, i) => {
            if (release.album_notes) {
                return(
                    <div key={i}>
                        <div>ARTWORK ELEMENT</div>
                        {/* <Link to= {`api/tracks/${release.id}`}> */}
                            <li>{release.title}</li>
                        {/* </Link> */}
                        <li>
                            {this.makeDate(release.created_at)}
                        </li>
                    </div>
                    )
            } else {
                return (
                    <div key={i}>
                        <div>ARTWORK ELEMENT</div>
                        {/* <Link to= {`api/tracks/${release.id}`}> */}
                        <li>{release.title}</li>
                        {/* </Link> */}
                        <li>
                            {this.makeDate(release.created_at)}
                        </li>
                    </div>
                     )
                }
        })
    }
        
    makeDate(date) {
        let date_obj = new Date(date);
        let month = date_obj.toLocaleString('default', { month: 'long'});
        let year = date_obj.getFullYear();
        
        return month + " " + year;
    }

    renderTracks() {
        if (this.props.tracks.length > 0) {
            // return this.tracks_collection().map((track, i) => (
            //     <div key={i}>
            //         <li>{track.title}</li>
            //     </div>
            // ))
            return this.tracks_collection()
        } else {
            return null;
        }
    }

    renderAlbums() {
      if (this.props.albums.length > 0) {
        //   return this.albums_collection().map((album, i) => (
        //       <div key={i}>
        //           <li>{album.title}</li>
        //       </div>
        //   ))
        return this.albums_collection()
      } else {
          return null;
      }
  
    }

    renderMainRelease() {

    }

    render() {
        console.log("rendering")
        // console.log(this.renderReleases())
        return(
            <div>
                <div>{this.getMainRelease()}</div>

              {this.renderReleases()} 
            </div>
            
        )
    }
}


export default ArtistPage;