import React, { Component } from 'react'

import { PauseIcon, PlayIcon } from './icons'

class PlayPauseBtn extends Component {
    componentDidMount(){
        this.props.video.addEventListener('play', ()=> this.forceUpdate(), false)
        this.props.video.addEventListener('pause', ()=> this.forceUpdate(), false)
    }
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
            <button
                onClick={(e) => this.onPlayPauseHandler(e, video)}
                style={style.button}
            >
                {
                    video.paused ?
                        <PlayIcon style={style.buttonIcon} />
                        :
                        <PauseIcon style={style.buttonIcon} />
                }
            </button>
        )
    }
}
export default PlayPauseBtn