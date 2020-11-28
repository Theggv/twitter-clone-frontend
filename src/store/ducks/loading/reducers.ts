import produce, { Draft } from 'immer';
import { LoadingActions, LoadingActionsType } from './actions';
import { LoadingState, GlobalLoadingState } from './types';

const initialTweetsState: GlobalLoadingState = {
	header: LoadingState.NEVER,
	main: LoadingState.NEVER,
	mainHeader: LoadingState.NEVER,
	sidebar: LoadingState.NEVER,
	sidebarMedia: LoadingState.NEVER,
	suggestionsAuthors: LoadingState.NEVER,
	suggestionsTopics: LoadingState.NEVER,
};

const reducer = produce(
	(draft: Draft<GlobalLoadingState>, action: LoadingActions) => {
		switch (action.type) {
			case LoadingActionsType.SET_LOADING_STATE:
				// @ts-ignore
				draft[action.payload.name] = action.payload.loadingState;
				break;

			default:
				break;
		}
	},
	initialTweetsState
);

export const loadingReducer = reducer;
