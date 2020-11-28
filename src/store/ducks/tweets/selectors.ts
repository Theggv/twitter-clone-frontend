import { RootState } from '../../store';
import { createSelector } from 'reselect';
import { LoadingState, TweetsState } from './types';

export const selectTweets = (state: RootState): TweetsState => state.tweets;

export const selectTweetsItems = createSelector(
	selectTweets,
	(tweets) => tweets.items
);

export const selectLoadingState = (state: RootState) =>
	selectTweets(state).loadingState;

export const selectIsTweetsLoading = (state: RootState) =>
	selectLoadingState(state) === LoadingState.LOADING;

export const selectIsTweetsLoaded = (state: RootState) =>
	selectLoadingState(state) === LoadingState.LOADED;
