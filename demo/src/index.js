import React, { Component } from 'react'
import { render } from 'react-dom'

import CanvasVideo from '../../src'

class Demo extends Component {
  render() {
    return <div>
      <CanvasVideo
        src='http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4'
        options={{
          text: 'This copy is registered for XXX!',
          // poster: 'https://images.pexels.com/photos/383557/pexels-photo-383557.jpeg?w=1260&h=750&auto=compress&cs=tinysrgb',
          autoplay: true
        }}
        styles={{
          barContainer: {
            backgroundColor: 'pink'
          }
        }}
      />
    </div>
  }
}

render(<Demo />, document.querySelector('#demo'))
