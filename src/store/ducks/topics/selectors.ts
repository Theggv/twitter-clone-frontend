import { RootState } from '../../store';
import { createSelector } from 'reselect';
import { LoadingState, TopicsState } from './types';

const selectTopics = (state: RootState): TopicsState => state.topics;

export const selectTopicsItems = createSelector(
	selectTopics,
	(topics) => topics.topics
);

export const selectLoadingState = (state: RootState) =>
	selectTopics(state).loadingState;

export const selectIsTopicsLoading = (state: RootState) =>
	selectLoadingState(state) === LoadingState.LOADING;

export const selectIsTopicsLoaded = (state: RootState) =>
	selectLoadingState(state) === LoadingState.LOADED;
