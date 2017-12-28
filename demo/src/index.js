import React, { Component } from 'react'
import { render } from 'react-dom'

import CanvasVideo from '../../src'

class Demo extends Component {
  render() {
    return <div>
      <CanvasVideo
        src='https://klublublin.pl/assets/kryptowaluty.mp4'
        options={{
          text: 'This copy is registered for',
          poster: 'https://static.pexels.com/photos/60597/dahlia-red-blossom-bloom-60597.jpeg',
          autoplay: true
        }}
        styles={{
          button: {
            backgroundColor: 'green'
          }
        }}
      />
    </div>
  }
}

render(<Demo />, document.querySelector('#demo'))
