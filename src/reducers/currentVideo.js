import Redux from 'redux';

const StateInit = {
  videos: [],
  currentVideo: null
}


var currentVideoReducer = (state = StateInit, action) => {
  //TODO: define a reducer for the currentVideo field of our state.
  //currentvideo is the action object
  switch (action.type) {
    case 'CHANGE_VIDEO':
      return Object.assign({}, state, {
        currentVideo: action.video
      })
      default:
        return state
  }
};

export default currentVideoReducer;


