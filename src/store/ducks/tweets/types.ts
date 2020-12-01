import { UserInterface } from '../recommendations';
import { TweetInterface } from '../tweet';

export enum LoadingState {
	LOADED = 'LOADED',
	LOADING = 'LOADING',
	ERROR = 'ERROR',
	NEVER = 'NEVER',
}

export interface TweetsState {
	items: TweetInterface[];
	loadingState: LoadingState;
}
