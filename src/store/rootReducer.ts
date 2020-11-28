import { combineReducers } from 'redux';

import loadingReducer from './ducks/loading';
import recommendationsReducer from './ducks/recommendations';
import topicsReducer from './ducks/topics';
import tweetsReducer from './ducks/tweets';

export const rootReducer = combineReducers({
	tweets: tweetsReducer,
	recommendations: recommendationsReducer,
	topics: topicsReducer,
	loading: loadingReducer,
});
