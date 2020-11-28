import { RootState } from '../../store';
import { LoadingState, GlobalLoadingState } from './types';

export const selectLoading = (state: RootState): GlobalLoadingState =>
	state.loading;

export const selectHeaderLoading = (state: RootState) =>
	selectLoading(state).header === LoadingState.LOADING;

export const selectHeaderLoaded = (state: RootState) =>
	selectLoading(state).header === LoadingState.LOADED;

export const selectMainLoading = (state: RootState) =>
	selectLoading(state).main === LoadingState.LOADING;

export const selectMainLoaded = (state: RootState) =>
	selectLoading(state).main === LoadingState.LOADED;

export const selectMainHeaderLoading = (state: RootState) =>
	selectLoading(state).mainHeader === LoadingState.LOADING;

export const selectMainHeaderLoaded = (state: RootState) =>
	selectLoading(state).mainHeader === LoadingState.LOADED;

export const selectSidebarLoading = (state: RootState) =>
	selectLoading(state).sidebar === LoadingState.LOADING;

export const selectSidebarLoaded = (state: RootState) =>
	selectLoading(state).sidebar === LoadingState.LOADED;

export const selectSidebarMediaLoading = (state: RootState) =>
	selectLoading(state).sidebarMedia === LoadingState.LOADING;

export const selectSidebarMediaLoaded = (state: RootState) =>
	selectLoading(state).sidebarMedia === LoadingState.LOADED;

export const selectSuggestionsAuthorsLoading = (state: RootState) =>
	selectLoading(state).suggestionsAuthors === LoadingState.LOADING;

export const selectSuggestionsAuthorsLoaded = (state: RootState) =>
	selectLoading(state).suggestionsAuthors === LoadingState.LOADED;

export const selectSuggestionsTopicsLoading = (state: RootState) =>
	selectLoading(state).suggestionsTopics === LoadingState.LOADING;

export const selectSuggestionsTopicsLoaded = (state: RootState) =>
	selectLoading(state).suggestionsTopics === LoadingState.LOADED;
