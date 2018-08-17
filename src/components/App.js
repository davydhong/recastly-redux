import React from 'react';
import VideoListContainer from '../containers/VideoListContainer.js'; //Importing Containers
import VideoPlayerContainer from '../containers/VideoPlayerContainer.js';
import Nav from './Nav.js';
import VideoPlayer from './VideoPlayer.js';
import VideoList from './VideoList.js';
import changeVideo from '../actions/currentVideo.js'; //Importing in Actions
import changeVideoList from '../actions/videoList.js';
import searchAct from '../actions/search.js';
import exampleVideoData from '../data/exampleVideoData.js';
import store from '../store/store.js'; //Importing store
//import PropTypes from 'prop-types;

//QUESTION: Do we need connect here? 
//import connect from 'react';

export default class App extends React.Component {
  //@: Do not need constructor anymore since it will come from redux
  constructor(props) {
    super(props);

    //# this.state = {
    //   videos: [],
    //   currentVideo: null
    // };
  }
  componentDidMount() {
    store.dispatch(searchAct('react tutorials'));
    //#    this.getYouTubeVideos('react tutorials');
  }

  //# //@: no longer needed since we have dispatch and action
  // handleVideoListEntryTitleClick(video) {
  //   this.setState({ currentVideo: video });
  // }

  //# //@: do not need getYouTubeVideos anymore since we defined it
  // getYouTubeVideos(query) {
  //   var options = {
  //     key: this.props.API_KEY,
  //     query: query
  //   };

  //   this.props.searchYouTube(options, (videos) =>
  //     this.setState({
  //       videos: videos,
  //       currentVideo: videos[0]
  //     })
  //   );
  // }

  //TODO: swap out the React components below for the container components
  //  you wrote in the 'containers' directory.
  render() {
    return (
      <div>
        <Nav />
        <div className="row">
          <div className="col-md-7">
            <VideoPlayerContainer />
          </div>
          <div className="col-md-5">
            <VideoListContainer />
          </div>
        </div>
      </div>
    );
  }
}


/* @: App.propTypes = {
  
  currentVideo: :PropTypes.object.isRequried //@ not entirely sure about this since reducer
  videoList: :PropTypes.array.isRequried
  
}*/ //Validates the type of property