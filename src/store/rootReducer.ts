import { combineReducers } from 'redux';

import authReducer from './ducks/auth';
import loadingReducer from './ducks/loading';
import recommendationsReducer from './ducks/recommendations';
import topicsReducer from './ducks/topics';
import tweetReducer from './ducks/tweet';
import tweetsReducer from './ducks/tweets';
import userReducer from './ducks/user';

export const rootReducer = combineReducers({
	auth: authReducer,
	user: userReducer,
	tweet: tweetReducer,
	tweetsList: tweetsReducer,
	recommendations: recommendationsReducer,
	topics: topicsReducer,
	loading: loadingReducer,
});
