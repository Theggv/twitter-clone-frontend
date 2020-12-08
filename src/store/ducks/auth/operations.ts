import {
	AuthActionsType,
	CheckAuthActionInterface,
	FailedAuthActionInterface,
	LogoutAuthActionInterface,
	RequestAuthActionInterface,
	SuccessAuthActionInterface,
} from './actions';
import { AuthState, UserAuthInterface } from './types';

export const checkAuth = (): CheckAuthActionInterface => ({
	type: AuthActionsType.CHECK_AUTH,
});

export const requestAuth = (
	payload: UserAuthInterface
): RequestAuthActionInterface => ({
	type: AuthActionsType.REQUEST_AUTH,
	payload,
});

export const successAuth = (): SuccessAuthActionInterface => ({
	type: AuthActionsType.SUCCESS_AUTH,
});

export const failedAuth = (
	payload: AuthState['error']
): FailedAuthActionInterface => ({
	type: AuthActionsType.FAILED_AUTH,
	payload,
});

export const logoutAuth = (): LogoutAuthActionInterface => ({
	type: AuthActionsType.LOGOUT_AUTH,
});
