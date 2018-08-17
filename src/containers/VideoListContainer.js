import { connect } from 'react-redux';
import VideoList from './../components/VideoList.js';
import changeVideo from './../actions/currentVideo.js';

// var VideoListContainer = (/*takes in actions*/) => {};

//TODO: define a VideoListContainer component which will hook up your action
// dispatchers with your VideoList component props.

//@: WE have to get new items from the state - use mapStateToProps



// Need mapDispatchToProps() that receives the dispatch() method and returns callback props that you want to inject into the presentational component
// We are invoking dispatch to videolist entry

//@: mapDispatchToProps:
var mapDispatchToProps = dispatch => ({
  handleVideoListEntryTitleClick: video => dispatch(changeVideo(video)) });

var  mapStateToProps = state => ({
  // video: state.video, //@ not entirely sure about this since reducer
  videos: state.videoList

});

var VideoListContainer = connect(mapStateToProps, mapDispatchToProps)(VideoList);


// export default VideoListContainer ;
export default VideoListContainer;
/* The first argument of connect: where we want to map our state to the properties
/* connect allows us to automatically subcribes the component */
/* because everything is bundled by Provider, we dont have to reload `store` everytime
*/