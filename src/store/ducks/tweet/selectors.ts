import { RootState } from '../../store';
import { LoadingState, TweetState } from './types';

export const selectTweet = (state: RootState): TweetState => state.tweet;

export const selectTweetContent = (state: RootState) =>
	selectTweet(state).tweet;

export const selectLoadingState = (state: RootState) =>
	selectTweet(state).loadingState;

export const selectIsTweetLoading = (state: RootState) =>
	selectLoadingState(state) === LoadingState.LOADING;

export const selectIsTweetLoaded = (state: RootState) =>
	selectLoadingState(state) === LoadingState.LOADED;
