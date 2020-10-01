import React from 'react'


class TrackPlayer extends React.Component {
    constructor(props) {
        super(props)


    }

    render() {
    //    debugger
        const { tracks, tracksObj } = this.props
        if (tracksObj.length === 0) {
            return null
        }
        return (
            <div>
                <audio controls="controls" src={tracksObj[0].trackUrl} ></audio>
            </div>
        )
    }
}

export default TrackPlayer