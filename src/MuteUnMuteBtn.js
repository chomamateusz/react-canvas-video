import React, { Component } from 'react'

import { MuteIcon, UnMuteIcon } from './icons'

class MuteUnMuteBtn extends Component {
    muteUnMuteHandler = (e, video) => {
        video.muted = !video.muted
        this.forceUpdate()
    }

    render() {
        const { video, styles: style} = this.props

        return (
            <div
                onClick={e => this.muteUnMuteHandler(e, video)}
                style={style.button}
            >
                {
                    video.muted ?
                        <UnMuteIcon style={style.buttonIcon} />
                        :
                        <MuteIcon style={style.buttonIcon} />
                }
            </div>
        )
    }
}
export default MuteUnMuteBtn