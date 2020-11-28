import { Action } from 'redux';
import { RecommendationsState } from './types';

// Action Types enum

export enum RecommendationsActionsType {
	SET_RECOMMENDED = 'recommendations/SET_RECOMMENDED',
	FETCH_RECOMMENDED = 'recommendations/FETCH_RECOMMENDED',
	SET_LOADING_STATE = 'recommendations/SET_LOADING_STATE',
}

// Action interfaces

export interface SetRecommendedActionInterface
	extends Action<RecommendationsActionsType> {
	type: RecommendationsActionsType.SET_RECOMMENDED;
	payload: RecommendationsState['recommedations'];
}

export interface FetchRecommendedActionInterface
	extends Action<RecommendationsActionsType> {
	type: RecommendationsActionsType.FETCH_RECOMMENDED;
}

export interface SetLoadingStateActionInterface
	extends Action<RecommendationsActionsType> {
	type: RecommendationsActionsType.SET_LOADING_STATE;
	payload: RecommendationsState['loadingState'];
}

// Action type

export type RecommendationsActions =
	| SetRecommendedActionInterface
	| FetchRecommendedActionInterface
	| SetLoadingStateActionInterface;
