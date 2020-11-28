import { UserInterface } from '../recommendations';

export enum LoadingState {
	LOADED = 'LOADED',
	LOADING = 'LOADING',
	ERROR = 'ERROR',
	NEVER = 'NEVER',
}

export interface TweetInterface {
	text?: string;
	user?: UserInterface;
}

export interface TweetsState {
	items: TweetInterface[];
	loadingState: LoadingState;
}
