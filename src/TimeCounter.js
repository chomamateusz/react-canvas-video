import React, { Component } from 'react'

class TimeCounter extends Component {
    componentDidMount(){
        this.props.video.addEventListener('timeupdate', () => this.forceUpdate(), false)
    }

    secondsToHms = (seconds) => {
        seconds = Number(seconds)
        if (!seconds) return '00:00:00'
    
        const h = Math.floor(seconds / 3600);
        const m = Math.floor(seconds % 3600 / 60);
        const s = Math.floor(seconds % 3600 % 60);
    
        return `${h < 10 ? '0' + h : h}:${m < 10 ? '0' + m : m}:${s < 10 ? '0' + s : s}`
    }

    render() {
        const { video, styles: style } = this.props

        return (
            <div style={style.time}>
                {this.secondsToHms(video.currentTime)}
                /
                {this.secondsToHms(video.duration)}
            </div>
        )
    }
}
export default TimeCounter