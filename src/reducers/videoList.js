import Redux from 'redux';

var videoListReducer = (state = [], action) => {
  //TODO: define a reducer for the videoList field of our state.
  debugger;
  if (!action) {
    throw new Error('pass action');
  }
  switch (action.type) {
    case 'CHANGE_VIDEO_LIST':
      return action.videos
      default:
        return state
  }
};

export default videoListReducer;
