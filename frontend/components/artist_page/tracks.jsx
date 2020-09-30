import React from 'react' 

class Tracks extends React.Component {
    constructor(props) {
        super(props)

        this.toggleIcon = this.toggleIcon.bind(this)
        this.changeTrack = this.changeTrack.bind(this)
    }

    toggleIcon() {
          if (this.props.isPlaying && this.props.currentTrack.id === this.props.track.id) {
            return <i className="playing-small-icon" />
        } else {
            return <i className="paused-small-icon" />
        }
    }

    changeTrack(e) {
        e.preventDefault();
        if (this.props.currentlyPlaying.id !== this.props.track.id) {
            if (this.props.isPlaying !== true) {
                this.props.playTrack();
            } else {
                this.props.pauseTrack();
            }
        } else {
            this.props.trackSet(this.props.track);
            this.props.setPlay();
        }

    }

    render() {
        const track = this.props.track

        return(
            <li className="<div artist-track-items">
                <div className="track-inner-wrap">
                    <span
                        className="track-toggle-button"
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




