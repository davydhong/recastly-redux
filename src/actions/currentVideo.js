var changeVideo = (video) => ({
  //TODO:  Return some action object to change the currently playing video.
  type: 'CHANGE_VIDEO',
  video: video // QUESTION: why is not 'currentVideo?'
});

export default changeVideo;
