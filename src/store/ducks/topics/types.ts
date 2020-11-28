export enum LoadingState {
	LOADED = 'LOADED',
	LOADING = 'LOADING',
	ERROR = 'ERROR',
	NEVER = 'NEVER',
}

export interface Topic {
	name: string;
	category?: string;
	country?: string;
	tweetsCount?: number;
}

export interface TopicsState {
	topics?: Topic[];
	loadingState: LoadingState;
}