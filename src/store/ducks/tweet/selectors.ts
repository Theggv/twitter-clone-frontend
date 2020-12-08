import { RootState } from '../../store';
import { LoadingState, TweetState } from './types';

export const selectTweet = (state: RootState): TweetState => state.tweet;

export const selectTweetContent = (state: RootState) =>
	selectTweet(state).tweet;

export const selectTweetLoadingState = (state: RootState) =>
	selectTweet(state).loadingState;

export const selectIsTweetLoading = (state: RootState) =>
	selectTweetLoadingState(state) === LoadingState.LOADING;

export const selectIsTweetLoaded = (state: RootState) =>
	selectTweetLoadingState(state) === LoadingState.LOADED;
