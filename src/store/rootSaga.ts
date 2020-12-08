import { all } from 'redux-saga/effects';
import { authSaga } from './ducks/auth';
import { loadingSaga } from './ducks/loading';
import { recommendationsSaga } from './ducks/recommendations';
import { topicsSaga } from './ducks/topics';
import { tweetSaga } from './ducks/tweet';
import { tweetsListSaga } from './ducks/tweets';
import { userSaga } from './ducks/user';

export default function* rootSaga() {
	yield all([
		authSaga(),
		userSaga(),
		tweetSaga(),
		tweetsListSaga(),
		recommendationsSaga(),
		topicsSaga(),
		loadingSaga(),
	]);
}
