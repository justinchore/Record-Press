import React from 'react'


class TrackPlayer extends React.Component {
    constructor(props) {
        super(props)


    }

    render() {
       debugger
        const { tracks } = this.props
        // console.log(tracks[0].trackUrl)
        return (
            <div>
                <audio controls="controls" src={tracks[0].trackUrl} ></audio>
            </div>
        )
    }
}

export default TrackPlayer