import { RootState } from '../../store';
import { createSelector } from 'reselect';
import { LoadingState, TweetState } from './types';

export const selectTweet = (state: RootState): TweetState => state.tweets;

// export const selectTweetsItems = createSelector(
// 	selectTweets,
// 	(tweets) => tweets.items
// );

// export const selectLoadingState = (state: RootState) =>
// 	selectTweets(state).loadingState;

// export const selectIsTweetsLoading = (state: RootState) =>
// 	selectLoadingState(state) === LoadingState.LOADING;

// export const selectIsTweetsLoaded = (state: RootState) =>
// 	selectLoadingState(state) === LoadingState.LOADED;
