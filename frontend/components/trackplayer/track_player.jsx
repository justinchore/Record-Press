import React from 'react'


class TrackPlayer extends React.Component {
    constructor(props) {
        super(props)

        this.audio = React.createRef()

    }

    componentDidMount() {
        // debugger
        if (Object.keys(this.props.currentlyPlaying).length === 0) {
            // debugger
            this.props.trackSet(this.props.tracksObj[0]);
        }
    }


    componentDidUpdate() {
        if(this.props.isPlaying) {
            this.audio.current.play()
        } else {
            this.audio.current.pause()
        }
    }

    render() {
        // debugger
        const { tracks, tracksObj } = this.props
        if (Object.keys(this.props.currentlyPlaying).length === 0) {
            // debugger
            return null
        }
        // debugger
        return (
            <div>
                <audio 
                    controls="controls"
                    ref = {this.audio} 
                    src={this.props.currentlyPlaying.trackUrl} >
                </audio>
            </div>
        )
    }
}

export default TrackPlayer