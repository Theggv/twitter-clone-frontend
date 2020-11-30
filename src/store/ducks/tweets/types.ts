import { UserInterface } from '../recommendations';

export enum LoadingState {
	LOADED = 'LOADED',
	LOADING = 'LOADING',
	ERROR = 'ERROR',
	NEVER = 'NEVER',
}

export interface TweetInterface {
	createdAtUTC?: Date;
	user?: UserInterface;
	text?: string;
}

export interface TweetsState {
	items: TweetInterface[];
	loadingState: LoadingState;
}
