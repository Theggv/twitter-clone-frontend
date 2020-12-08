export enum LoadingState {
	LOADED = 'LOADED',
	LOADING = 'LOADING',
	ERROR = 'ERROR',
	NEVER = 'NEVER',
}

export interface UserInterface {
	fullname: string;
	username: string;
	avatarUrl?: string;
	about?: string;
	verified: boolean;
}

export interface UserState {
	user?: UserInterface;
	loadingState: LoadingState;
}
