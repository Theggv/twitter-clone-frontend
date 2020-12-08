export enum LoadingState {
	NEVER = 'NEVER',
	REQUESTED = 'REQUESTED',
	SUCCESS = 'SUCCESS',
	FAILED = 'FAILED',
}

export interface UserAuthInterface {
	username: string;
	password: string;
}

export interface AuthState {
	user?: UserAuthInterface;
	authState: LoadingState;
	error: any;
}
