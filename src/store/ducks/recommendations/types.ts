import { UserInterface } from "../user";

export enum LoadingState {
	LOADED = 'LOADED',
	LOADING = 'LOADING',
	ERROR = 'ERROR',
	NEVER = 'NEVER',
}

export interface RecommendationsState {
	recommedations?: UserInterface[];
	loadingState: LoadingState;
}
