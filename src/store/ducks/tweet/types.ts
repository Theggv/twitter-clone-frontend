import { UserInterface } from '../user';

export enum LoadingState {
	LOADED = 'LOADED',
	LOADING = 'LOADING',
	ERROR = 'ERROR',
	NEVER = 'NEVER',
}

export interface TweetInterface {
	_id: string;
	createdAtUTC: string;
	user: UserInterface;

	text: string;
	attachments?: string[];

	commentsCount: number;
	likesCount: number;
	retweetsCount: number;
	retweetsWithCommentCount: number;
}

export interface TweetState {
	tweet?: TweetInterface;
	loadingState: LoadingState;
}
