import { Action } from 'redux';
import { LoadingState, TweetsState } from './types';

// Action Types enum

export enum TweetsActionsType {
	SET_TWEETS = 'tweets/SET_TWEETS',
	FETCH_TWEETS = 'tweets/FETCH_TWEETS',
	SET_LOADING_STATE = 'tweets/SET_LOADING_STATE',
}

// Action interfaces

export interface SetTweetsActionInterface extends Action<TweetsActionsType> {
	type: TweetsActionsType.SET_TWEETS;
	payload: TweetsState['items'];
}

export interface FetchTweetsActionInterface extends Action<TweetsActionsType> {
	type: TweetsActionsType.FETCH_TWEETS;
}

export interface SetTweetsLoadingStateActionInterface
	extends Action<TweetsActionsType> {
	type: TweetsActionsType.SET_LOADING_STATE;
	payload: LoadingState;
}

// Action type

export type TweetsActions =
	| SetTweetsActionInterface
	| FetchTweetsActionInterface
	| SetTweetsLoadingStateActionInterface;

