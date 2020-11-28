import { all } from 'redux-saga/effects';
import { loadingSaga } from './ducks/loading';
import { recommendationsSaga } from './ducks/recommendations';
import { topicsSaga } from './ducks/topics';
import { tweetsSaga } from './ducks/tweets';

export default function* rootSaga() {
	yield all([
		tweetsSaga(),
		recommendationsSaga(),
		topicsSaga(),
		loadingSaga(),
	]);
}
