import { put, call, takeEvery } from 'redux-saga/effects';
import { UsersApi } from '../../../services/api/usersApi';
import { RecommendationsActionsType } from './actions';
import { setRecommended, setRecommendedLoadingState } from './operations';
import { LoadingState } from './types';

export function* getRecommendedUsers() {
	try {
		const data = yield call(UsersApi.fetchRecommended);

		console.log(data);

		yield put(setRecommended(data));
	} catch (error) {
		yield put(setRecommendedLoadingState(LoadingState.ERROR));
	}
}

export function* recommendationsSaga() {
	yield takeEvery(
		RecommendationsActionsType.FETCH_RECOMMENDED,
		getRecommendedUsers
	);
}
