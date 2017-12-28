import React, { Component } from 'react'

class VolumeBar extends Component {
    volumeChageHanlder = (e, video) => {
        const percent = e.nativeEvent.offsetX / e.target.offsetWidth;
        video.volume = percent
        this.forceUpdate()
    }

    render() {
        const { video, styles: style } = this.props

        return (
            <progress
                onClick={(e) => this.volumeChageHanlder(e, video)}
                min='0'
                max='1'
                value={video.volume}
                style={{
                    ...style.progress,
                    ...style.progressVol
                }}
            ></progress>
        )
    }
}
export default VolumeBar