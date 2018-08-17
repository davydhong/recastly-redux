import { connect } from 'react-redux';
import VideoPlayer from '../components/VideoPlayer.js';


//TODO: define a VideoPlayerContainer component which will hook up your action
//dispatchers with your VideoPlayer component props.


var  mapStateToProps = state => ({
  video: state.currentVideo //@: naming the state 'video' since they are calling it 'video' in the component
  //videos: state.videos 
});

//@: not passing mapDispatchToProps, since the VideoPlayer component does not use any eventHandler.
var VideoPlayerContainer = connect(mapStateToProps)(VideoPlayer);

export default VideoPlayerContainer;