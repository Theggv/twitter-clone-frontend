import { put, call, takeEvery } from 'redux-saga/effects';
import { TweetsApi } from '../../../services/api/backend/tweetsApi';

import { FetchTweetActionInterface, TweetActionsType } from './actions';
import { setTweet, setTweetLoadingState } from './operations';
import { LoadingState } from './types';

function* fetchTweetRequest(action: FetchTweetActionInterface) {
	try {
		const data = yield call(TweetsApi.fetchTweet, action.payload);

		// console.log(data);

		yield put(setTweet(data));
	} catch (error) {
		yield put(setTweetLoadingState(LoadingState.ERROR));
	}
}

export function* tweetSaga() {
	yield takeEvery(TweetActionsType.FETCH_TWEET, fetchTweetRequest);
}
