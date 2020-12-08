import produce, { Draft } from 'immer';
import { UserActions, UserActionsType } from './actions';
import { LoadingState, UserState } from './types';

const initialState: UserState = {
	user: undefined,
	loadingState: LoadingState.NEVER,
};

const reducer = produce((draft: Draft<UserState>, action: UserActions) => {
	switch (action.type) {
		case UserActionsType.SET_USER:
			draft.user = action.payload;
			draft.loadingState = LoadingState.LOADED;
			break;

		case UserActionsType.FETCH_USER:
			draft.user = undefined;
			draft.loadingState = LoadingState.LOADING;
			break;

		case UserActionsType.SET_LOADING_STATE:
			draft.loadingState = action.payload;
			break;

		default:
			break;
	}
}, initialState);

export const userReducer = reducer;
