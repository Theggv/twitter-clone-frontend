import {
	FetchRecommendedActionInterface,
	RecommendationsActionsType,
	SetLoadingStateActionInterface,
	SetRecommendedActionInterface,
} from './actions';
import { RecommendationsState } from './types';

export const setRecommended = (
	payload: RecommendationsState['recommedations']
): SetRecommendedActionInterface => ({
	type: RecommendationsActionsType.SET_RECOMMENDED,
	payload,
});

export const fetchRecommended = (): FetchRecommendedActionInterface => ({
	type: RecommendationsActionsType.FETCH_RECOMMENDED,
});

export const setRecommendedLoadingState = (
	payload: RecommendationsState['loadingState']
): SetLoadingStateActionInterface => ({
	type: RecommendationsActionsType.SET_LOADING_STATE,
	payload,
});
