import { put, call, takeEvery } from 'redux-saga/effects';
import { UsersApi } from '../../../services/api/jsonserver/usersApi';
import { FetchUserActionInterface, UserActionsType } from './actions';
import { setUser, setUserLoadingState } from './operations';
import { LoadingState } from './types';

export function* getUser(action: FetchUserActionInterface) {
	try {
		const data = yield call(UsersApi.fetchUser, action.payload);

		yield put(setUser(data));
	} catch (error) {
		yield put(setUserLoadingState(LoadingState.ERROR));
	}
}

export function* userSaga() {
	yield takeEvery(UserActionsType.FETCH_USER, getUser);
}
