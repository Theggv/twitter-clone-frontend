import { Action } from 'redux';
import { AuthState } from './types';

// Action Types enum

export enum AuthActionsType {
	CHECK_AUTH = 'auth/CHECK_AUTH',
	REQUEST_AUTH = 'auth/REQUEST_AUTH',
	SUCCESS_AUTH = 'auth/SUCCESS_AUTH',
	FAILED_AUTH = 'auth/FAILED_AUTH',
	LOGOUT_AUTH = 'auth/LOGOUT_AUTH',
}

// Action interfaces

export interface CheckAuthActionInterface extends Action<AuthActionsType> {
	type: AuthActionsType.CHECK_AUTH;
}

export interface RequestAuthActionInterface extends Action<AuthActionsType> {
	type: AuthActionsType.REQUEST_AUTH;
	payload: AuthState['user'];
}

export interface SuccessAuthActionInterface extends Action<AuthActionsType> {
	type: AuthActionsType.SUCCESS_AUTH;
}

export interface FailedAuthActionInterface extends Action<AuthActionsType> {
	type: AuthActionsType.FAILED_AUTH;
	payload: AuthState['error'];
}

export interface LogoutAuthActionInterface extends Action<AuthActionsType> {
	type: AuthActionsType.LOGOUT_AUTH;
}

// Action type

export type AuthActions =
	| CheckAuthActionInterface
	| RequestAuthActionInterface
	| SuccessAuthActionInterface
	| FailedAuthActionInterface
	| LogoutAuthActionInterface;
