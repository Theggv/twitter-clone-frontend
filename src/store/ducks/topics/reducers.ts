import produce, { Draft } from 'immer';
import { TopicsActions, TopicsActionTypes } from './actions';
import { TopicsState, LoadingState } from './types';

const initialTopicsState: TopicsState = {
	topics: [],
	loadingState: LoadingState.NEVER,
};

const reducer = produce((draft: Draft<TopicsState>, action: TopicsActions) => {
	switch (action.type) {
		case TopicsActionTypes.SET_TOPICS:
			draft.topics = action.payload;
			draft.loadingState = LoadingState.LOADED;
			break;

		case TopicsActionTypes.FETCH_TOPICS:
			draft.loadingState = LoadingState.LOADING;
			break;

		case TopicsActionTypes.SET_LOADING_STATE:
			draft.loadingState = action.payload;
			break;

		default:
			break;
	}
}, initialTopicsState);

export const topicsReducer = reducer;
