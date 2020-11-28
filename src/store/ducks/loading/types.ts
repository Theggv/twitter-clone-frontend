export enum LoadingState {
	LOADED = 'LOADED',
	LOADING = 'LOADING',
	ERROR = 'ERROR',
	NEVER = 'NEVER',
}

export interface GlobalLoadingState {
	header: LoadingState;
	main: LoadingState;
	mainHeader: LoadingState;
	sidebar: LoadingState;
	sidebarMedia: LoadingState;
	suggestionsAuthors: LoadingState;
	suggestionsTopics: LoadingState;
}
