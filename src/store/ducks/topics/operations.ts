import {
	FetchTopicsActionInterface,
	SetTopicsActionInterface,
	SetTopicsLoadingStateActionInterface,
	TopicsActionTypes,
} from './actions';
import { TopicsState } from './types';

export const setTopics = (
	payload: TopicsState['topics']
): SetTopicsActionInterface => ({
	type: TopicsActionTypes.SET_TOPICS,
	payload,
});

export const fetchTopics = (): FetchTopicsActionInterface => ({
	type: TopicsActionTypes.FETCH_TOPICS,
});

export const setTopicsLoadingState = (
	payload: TopicsState['loadingState']
): SetTopicsLoadingStateActionInterface => ({
	type: TopicsActionTypes.SET_LOADING_STATE,
	payload,
});
