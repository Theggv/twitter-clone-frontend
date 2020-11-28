import { RootState } from '../../store';
import { createSelector } from 'reselect';
import { LoadingState, RecommendationsState } from './types';

export const selectRecommendations = (state: RootState): RecommendationsState =>
	state.recommendations;

export const selectRecommendationsItems = createSelector(
	selectRecommendations,
	(suggested) => suggested.recommedations
);

export const selectRecommendionsLoadingState = (state: RootState) =>
	selectRecommendations(state).loadingState;

export const selectIsRecommendationsLoading = (state: RootState) =>
	selectRecommendionsLoadingState(state) === LoadingState.LOADING;
