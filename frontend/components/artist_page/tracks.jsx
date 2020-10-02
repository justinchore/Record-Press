import React from 'react' 

class Tracks extends React.Component {
    constructor(props) {
        super(props)

        this.toggleIcon = this.toggleIcon.bind(this)
        this.changeTrack = this.changeTrack.bind(this)
    }

    toggleIcon() {
        //    if (this.props.isPlaying && this.props.currentTrack.id === this.props.track.id) {
              return <i className="fas fa-play" />
        //  } else {
            //    return <i className="fas fa-pause" />
         
    }

    changeTrack(e) {
        e.preventDefault();
        debugger
        if (this.props.currentlyPlaying.id === this.props.track.id) {
            debugger
            if (this.props.isPlaying === true) {
                 debugger
                this.props.pauseTrack();
            } else {
                debugger
                this.props.playTrack();
            }
        } else {
            debugger
            this.props.trackSet(this.props.track);
            this.props.playTrack();
        }
    }

    render() {
        const track = this.props.track
        return(
            <li className="<div artist-track-items">
                <div className="track-inner-wrap">
                    <span
                        className="track-play-button"
                        onClick={this.changeTrack}>
                        {this.toggleIcon()}
    
                    </span>
                    <span className='track-text'>
                        {track.track_number}.&nbsp;
                  </span>
                    <span className='track-text'>
                        {track.title}
                    </span>
                </div>
            </li>
        )

    }
}    

export default Tracks




