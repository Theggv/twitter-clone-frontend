import {
	CreateTweetActionInterface,
	DeleteTweetActionInterface,
	FetchTweetActionInterface,
	SetTweetActionInterface,
	SetTweetLoadingStateActionInterface,
	TweetActionsType,
} from './actions';
import { LoadingState, TweetInterface, TweetState } from './types';

export const createTweet = (
	payload: TweetState['tweet']
): CreateTweetActionInterface => ({
	type: TweetActionsType.CREATE_TWEET,
	payload,
});

export const deleteTweet = (
	payload: TweetState['tweet']
): DeleteTweetActionInterface => ({
	type: TweetActionsType.DELETE_TWEET,
	payload,
});

export const setTweet = (
	payload: TweetState['tweet']
): SetTweetActionInterface => ({
	type: TweetActionsType.SET_TWEET,
	payload,
});

export const fetchTweet = (
	payload: TweetInterface['id']
): FetchTweetActionInterface => ({
	type: TweetActionsType.FETCH_TWEET,
	payload,
});

export const setTweetLoadingState = (
	payload: LoadingState
): SetTweetLoadingStateActionInterface => ({
	type: TweetActionsType.SET_LOADING_STATE,
	payload,
});
