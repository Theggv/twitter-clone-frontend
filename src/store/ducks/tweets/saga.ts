import { put, call, takeEvery } from 'redux-saga/effects';
import { TweetsApi } from '../../../services/api/tweetsApi';

import { TweetsActionsType } from './actions';
import { setTweets, setTweetsLoadingState } from './operations';
import { LoadingState } from './types';

function* fetchTweetsRequestAsync() {
	try {
		const data = yield call(TweetsApi.fetchTweets);
		
		console.log(data);

		yield put(setTweets(data));
	} catch (error) {
		yield put(setTweetsLoadingState(LoadingState.ERROR));
	}
}

export function* tweetsSaga() {
	yield takeEvery(TweetsActionsType.FETCH_TWEETS, fetchTweetsRequestAsync);
}
