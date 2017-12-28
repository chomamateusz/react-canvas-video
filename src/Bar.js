import React, { Component } from 'react'

import PlayPauseBtn from './PlayPauseBtn'
import TimeCounter from './TimeCounter'
import ProgressBar from './ProgressBar'
import MuteUnMuteBtn from './MuteUnMuteBtn'
import VolumeBar from './VolumeBar'
import { style } from './styles'

class Bar extends Component {
    render() {
        return (
            <div style={style.barConatiner}>
                <PlayPauseBtn
                    video={this.props.video}
                    styles={this.props.styles}
                />
                <TimeCounter
                    video={this.props.video}
                    styles={this.props.styles}
                />
                <ProgressBar
                    video={this.props.video}
                    styles={this.props.styles}
                />
                <MuteUnMuteBtn
                    video={this.props.video}
                    styles={this.props.styles}
                />
                <VolumeBar
                    video={this.props.video}
                    styles={this.props.styles}
                />
            </div>
        );
    }
}
export default Bar