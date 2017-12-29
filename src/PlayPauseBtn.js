import React, { Component } from 'react'

import { PauseIcon, PlayIcon } from './icons'

class PlayPauseBtn extends Component {
    componentDidMount() {
        this.props.video.addEventListener('play', this.playPauseListener, false)
        this.props.video.addEventListener('pause', this.playPauseListener, false)
    }

    componentWillUnmount() {
        this.props.video.removeEventListener('play', this.playPauseListener, false)
        this.props.video.removeEventListener('pause', this.playPauseListener, false)
    }

    playPauseListener = () => this.forceUpdate()

    onPlayPauseHandler = (e, video) => {
        video.paused ?
            video.play()
            :
            video.pause()
        this.forceUpdate()
    }

    render() {
        const { video, styles: style } = this.props

        return (
            <div
                onClick={(e) => this.onPlayPauseHandler(e, video)}
                style={style.button}
            >
                {
                    video.paused ?
                        <PlayIcon style={style.buttonIcon} />
                        :
                        <PauseIcon style={style.buttonIcon} />
                }
            </div>
        )
    }
}
export default PlayPauseBtn