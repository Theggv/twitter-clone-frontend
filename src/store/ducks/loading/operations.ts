import { SetLoadingStateActionInterface, LoadingActionsType } from './actions';
import { LoadingState } from './types';

export const setHeaderLoadingState = (
	payload: LoadingState
): SetLoadingStateActionInterface => ({
	type: LoadingActionsType.SET_LOADING_STATE,
	payload: { name: 'header', loadingState: payload },
});

export const setMainLoadingState = (
	payload: LoadingState
): SetLoadingStateActionInterface => ({
	type: LoadingActionsType.SET_LOADING_STATE,
	payload: { name: 'main', loadingState: payload },
});

export const setMainHeaderLoadingState = (
	payload: LoadingState
): SetLoadingStateActionInterface => ({
	type: LoadingActionsType.SET_LOADING_STATE,
	payload: { name: 'mainHeader', loadingState: payload },
});

export const setSidebarLoadingState = (
	payload: LoadingState
): SetLoadingStateActionInterface => ({
	type: LoadingActionsType.SET_LOADING_STATE,
	payload: { name: 'sidebar', loadingState: payload },
});

export const setSidebarMediaLoadingState = (
	payload: LoadingState
): SetLoadingStateActionInterface => ({
	type: LoadingActionsType.SET_LOADING_STATE,
	payload: { name: 'sidebarMedia', loadingState: payload },
});

export const setSuggestionsAuthorsLoadingState = (
	payload: LoadingState
): SetLoadingStateActionInterface => ({
	type: LoadingActionsType.SET_LOADING_STATE,
	payload: { name: 'suggestionsAuthors', loadingState: payload },
});

export const setSuggestionsTopicsLoadingState = (
	payload: LoadingState
): SetLoadingStateActionInterface => ({
	type: LoadingActionsType.SET_LOADING_STATE,
	payload: { name: 'suggestionsTopics', loadingState: payload },
});
