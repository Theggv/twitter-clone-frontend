export enum LoadingState {
	LOADED = 'LOADED',
	LOADING = 'LOADING',
	ERROR = 'ERROR',
	NEVER = 'NEVER',
}

export interface UserInterface {
	fullName: string;
	userName: string;
	avatarUrl?: string;
	description?: string;
	verified: boolean;
}

export interface RecommendationsState {
	recommedations?: UserInterface[];
	loadingState: LoadingState;
}
