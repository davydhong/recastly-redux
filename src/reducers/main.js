import { combineReducers } from 'redux';
import currentVideo from './currentVideo.js';
import videoList from './videoList.js';

//

var rootReducer = combineReducers({
    currentVideo,
    videoList   
});
/* currentVideo and videoList becomes the name for state */
//!!!! One state gets one reducer



export default rootReducer;
