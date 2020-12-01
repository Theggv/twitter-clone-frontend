import produce, { Draft } from 'immer';
import { TweetActions, TweetActionsType } from './actions';
import { LoadingState, TweetState } from './types';

const initialState: TweetState = {
	tweet: undefined,
	loadingState: LoadingState.NEVER,
};

const reducer = produce((draft: Draft<TweetState>, action: TweetActions) => {
	switch (action.type) {
		case TweetActionsType.SET_TWEET:
			draft.tweet = action.payload;
			draft.loadingState = LoadingState.LOADED;
			break;

		case TweetActionsType.FETCH_TWEET:
			draft.tweet = undefined;
			draft.loadingState = LoadingState.LOADING;
			break;

		case TweetActionsType.SET_LOADING_STATE:
			draft.loadingState = action.payload;
			break;

		default:
			break;
	}
}, initialState);

export const tweetReducer = reducer;
