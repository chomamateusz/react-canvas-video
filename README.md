# react-canvas-video

<!-- [![Travis][build-badge]][build] -->
[![npm package][npm-badge]][npm]
<!-- [![Coveralls][coveralls-badge]][coveralls] -->

`react-canvas-video` is a React component with no other dependencies than prop-types, that protects your videos from being downloaded. To achive this I used a canvas that displaying 25 frames per second from hidden `<video>` tag.

It is very simple protection, but our link to video is quite hard to find if one doesent know nothing about programming.

This is VERY FIRST version! I appreciate any contribution and issues.

# Instalation

```
npm install react-canvas-video
```

# Usage

Import component from package:

```
import CanvasVideo from 'react-canvas-video'
```

Use it in your JSX. You can pass several options in addition to src (this is code from [example](http://react-canvas-video.surge.sh/)):

```javascript
<CanvasVideo
    src='http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4'
    options={{
        text: 'This copy is registered for XXX!',
        poster: 'https://images.pexels.com/photos/383557/pexels-photo-383557.jpeg?w=1260&h=750',
        autoplay: true
    }}
    styles={{
        barContainer: {
        backgroundColor: 'pink'
        }
    }}
/>
```

Options are self-describing.

As you see you can pass own styles. You can pass stylesobject that looks like:

```javascript
styles: PropTypes.shape({
    canvas: PropTypes.object,
    canvasConatiner: PropTypes.object,
    barContainer: PropTypes.object,
    button: PropTypes.object,
    buttonIcon: PropTypes.object,
    progress: PropTypes.object,
    progressVol: PropTypes.object,
    progressMuted: PropTypes.object,
    time: PropTypes.object
})
```

[build-badge]: https://img.shields.io/travis/user/repo/master.png?style=flat-square
[build]: https://travis-ci.org/user/repo

[npm-badge]: https://img.shields.io/npm/v/npm-package.png?style=flat-square
[npm]: https://www.npmjs.com/package/react-canvas-video

[coveralls-badge]: https://img.shields.io/coveralls/user/repo/master.png?style=flat-square
[coveralls]: https://coveralls.io/github/user/repo
