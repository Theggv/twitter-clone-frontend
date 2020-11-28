import produce, { Draft } from 'immer';
import { RecommendationsActions, RecommendationsActionsType } from './actions';
import { LoadingState, RecommendationsState } from './types';

const initialUsersState: RecommendationsState = {
	recommedations: [],
	loadingState: LoadingState.NEVER,
};

const reducer = produce(
	(draft: Draft<RecommendationsState>, action: RecommendationsActions) => {
		switch (action.type) {
			case RecommendationsActionsType.SET_RECOMMENDED:
				draft.recommedations = action.payload;
				draft.loadingState = LoadingState.LOADED;
				break;

			case RecommendationsActionsType.FETCH_RECOMMENDED:
				draft.recommedations = [];
				draft.loadingState = LoadingState.LOADING;
				break;

			case RecommendationsActionsType.SET_LOADING_STATE:
				draft.loadingState = action.payload;
				break;

			default:
				break;
		}
	},
	initialUsersState
);

export const recommendationsReducer = reducer;
