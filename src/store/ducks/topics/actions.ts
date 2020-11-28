import { Action } from 'redux';
import { LoadingState, TopicsState } from './types';

// Action Types enum
export enum TopicsActionTypes {
	SET_TOPICS = 'topics/SET_TOPICS',
	FETCH_TOPICS = 'topics/FETCH_TOPICS',
	SET_LOADING_STATE = 'topics/SET_LOADING_STATE',
}

// Action interfaces

export interface SetTopicsActionInterface extends Action<TopicsActionTypes> {
	type: TopicsActionTypes.SET_TOPICS;
	payload: TopicsState['topics'];
}

export interface FetchTopicsActionInterface extends Action<TopicsActionTypes> {
	type: TopicsActionTypes.FETCH_TOPICS;
}

export interface SetTopicsLoadingStateActionInterface
	extends Action<TopicsActionTypes> {
	type: TopicsActionTypes.SET_LOADING_STATE;
	payload: LoadingState;
}

// Action type

export type TopicsActions =
	| SetTopicsActionInterface
	| FetchTopicsActionInterface
	| SetTopicsLoadingStateActionInterface;
