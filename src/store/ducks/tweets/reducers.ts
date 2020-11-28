import produce, { Draft } from 'immer';
import { TweetsActions, TweetsActionsType } from './actions';
import { LoadingState, TweetsState } from './types';

const initialTweetsState: TweetsState = {
	items: [],
	loadingState: LoadingState.NEVER,
};

const reducer = produce((draft: Draft<TweetsState>, action: TweetsActions) => {
	switch (action.type) {
		case TweetsActionsType.SET_TWEETS:
			draft.items = action.payload;
			draft.loadingState = LoadingState.LOADED;
			break;

		case TweetsActionsType.FETCH_TWEETS:
			draft.items = [];
			draft.loadingState = LoadingState.LOADING;
			break;

		case TweetsActionsType.SET_LOADING_STATE:
			draft.loadingState = action.payload;
			break;

		default:
			break;
	}
}, initialTweetsState);

export const tweetsReducer = reducer;
