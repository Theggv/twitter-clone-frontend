import { all } from 'redux-saga/effects';
import { loadingSaga } from './ducks/loading';
import { recommendationsSaga } from './ducks/recommendations';
import { topicsSaga } from './ducks/topics';
import { tweetSaga } from './ducks/tweet';
import { tweetsListSaga } from './ducks/tweets';

export default function* rootSaga() {
	yield all([
		tweetSaga(),
		tweetsListSaga(),
		recommendationsSaga(),
		topicsSaga(),
		loadingSaga(),
	]);
}
