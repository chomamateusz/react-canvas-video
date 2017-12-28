import React, { Component } from 'react'

class ProgressBar extends Component {
    componentDidMount(){
        this.props.video.addEventListener('timeupdate', () => this.forceUpdate(), false)
    }

    seek = (e, video) => {
        const percent = e.nativeEvent.offsetX / e.target.offsetWidth;
        video.currentTime = percent * video.duration;
        if (video.paused || video.ended) {
            video.play().then(() => video.pause())
        }
    }

    render() {
        const { video, styles: style } = this.props

        return (
            <progress
                onClick={(e) => this.seek(e, video)}
                min='0'
                max='100'
                value={video.currentTime ? (video.currentTime / video.duration) * 100 : 0}
                style={style.progress}
            ></progress>
        )
    }
}
export default ProgressBar