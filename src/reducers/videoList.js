import Redux from 'redux';

var videoListReducer = (state = [], action) => {
  
  if (!action) {
    throw new Error('pass action');
  }
  switch (action.type) {
    case 'CHANGE_VIDEO_LIST':
      return
       action.videos || [];  //QUESTION: I thought we had to return a complete set of states?
      default:
        return state
  }
};

export default videoListReducer;
