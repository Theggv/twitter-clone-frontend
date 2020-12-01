import { combineReducers } from 'redux';

import loadingReducer from './ducks/loading';
import recommendationsReducer from './ducks/recommendations';
import topicsReducer from './ducks/topics';
import tweetReducer from './ducks/tweet';
import tweetsReducer from './ducks/tweets';

export const rootReducer = combineReducers({
	tweet: tweetReducer,
	tweetsList: tweetsReducer,
	recommendations: recommendationsReducer,
	topics: topicsReducer,
	loading: loadingReducer,
});
