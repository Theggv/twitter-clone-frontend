import { put, call, takeLatest } from 'redux-saga/effects';
import { TweetsApi } from '../../../services/api/tweetsApi';
import { TopicsActionTypes } from './actions';
import { setTopics, setTopicsLoadingState } from './operations';
import { LoadingState } from './types';

function* fetchTopicsRequest() {
	try {
		const data = yield call(TweetsApi.fetchTweets);
		console.log(data);
		yield put(setTopics(data));
	} catch (error) {
		yield put(setTopicsLoadingState(LoadingState.ERROR));
	}
}

export function* topicsSaga() {
	yield takeLatest(TopicsActionTypes.FETCH_TOPICS, fetchTopicsRequest);
}
