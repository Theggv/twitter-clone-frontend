import { compose, createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { AuthState } from './ducks/auth';
import { GlobalLoadingState } from './ducks/loading';

import { RecommendationsState } from './ducks/recommendations';
import { TopicsState } from './ducks/topics';
import { TweetState } from './ducks/tweet';
import { TweetsState } from './ducks/tweets';
import { UserState } from './ducks/user';

import { rootReducer } from './rootReducer';
import rootSaga from './rootSaga';

const sagaMiddleware = createSagaMiddleware();

const composeEnhancers =
	(window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export interface RootState {
	auth: AuthState;
	user: UserState;
	tweet: TweetState;
	tweetsList: TweetsState;
	recommendations: RecommendationsState;
	topics: TopicsState;
	loading: GlobalLoadingState;
}

export const store = createStore(
	rootReducer,
	composeEnhancers(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(rootSaga);
