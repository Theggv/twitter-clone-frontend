import { Action } from 'redux';
import { LoadingState, TweetInterface, TweetState } from './types';

// Action Types enum

export enum TweetActionsType {
	CREATE_TWEET = 'tweet/CREATE_TWEET',
	DELETE_TWEET = 'tweet/DELETE_TWEET',
	SET_TWEET = 'tweet/SET_TWEET',
	FETCH_TWEET = 'tweet/FETCH_TWEET',
	SET_LOADING_STATE = 'tweet/SET_LOADING_STATE',
}

// Action interfaces

export interface CreateTweetActionInterface extends Action<TweetActionsType> {
	type: TweetActionsType.CREATE_TWEET;
	payload: TweetState['tweet'];
}

export interface DeleteTweetActionInterface extends Action<TweetActionsType> {
	type: TweetActionsType.DELETE_TWEET;
	payload: TweetState['tweet'];
}

export interface SetTweetActionInterface extends Action<TweetActionsType> {
	type: TweetActionsType.SET_TWEET;
	payload: TweetState['tweet'];
}

export interface FetchTweetActionInterface extends Action<TweetActionsType> {
	type: TweetActionsType.FETCH_TWEET;
	payload: TweetInterface['_id'];
}

export interface SetTweetLoadingStateActionInterface
	extends Action<TweetActionsType> {
	type: TweetActionsType.SET_LOADING_STATE;
	payload: LoadingState;
}

// Action type

export type TweetActions =
	| CreateTweetActionInterface
	| DeleteTweetActionInterface
	| SetTweetActionInterface
	| FetchTweetActionInterface
	| SetTweetLoadingStateActionInterface;
