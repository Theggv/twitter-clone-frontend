import { compose, createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { GlobalLoadingState } from './ducks/loading';

import { RecommendationsState } from './ducks/recommendations';
import { TopicsState } from './ducks/topics';
import { TweetsState } from './ducks/tweets';

import { rootReducer } from './rootReducer';
import rootSaga from './saga';

const sagaMiddleware = createSagaMiddleware();

const composeEnhancers =
	(window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export interface RootState {
	tweets: TweetsState;
	recommendations: RecommendationsState;
	topics: TopicsState;
	loading: GlobalLoadingState;
}

export const store = createStore(
	rootReducer,
	composeEnhancers(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(rootSaga);
