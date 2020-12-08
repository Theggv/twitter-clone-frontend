import { RootState } from '../../store';
import { createSelector } from 'reselect';
import { LoadingState, TweetsState } from './types';

export const selectTweets = (state: RootState): TweetsState => state.tweetsList;

export const selectTweetsItems = createSelector(
	selectTweets,
	(tweets) => tweets.items
);

export const selectTweetsLoadingState = (state: RootState) =>
	selectTweets(state).loadingState;

export const selectIsTweetsLoading = (state: RootState) =>
	selectTweetsLoadingState(state) === LoadingState.LOADING;

export const selectIsTweetsLoaded = (state: RootState) =>
	selectTweetsLoadingState(state) === LoadingState.LOADED;
