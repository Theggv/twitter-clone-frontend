import { Action } from 'redux';
import { UserInterface, UserState } from './types';

// Action Types enum

export enum UserActionsType {
	SET_USER = 'user/SET_USER',
	FETCH_USER = 'user/FETCH_USER',
	SET_LOADING_STATE = 'user/SET_LOADING_STATE',
}

// Action interfaces

export interface SetUserActionInterface extends Action<UserActionsType> {
	type: UserActionsType.SET_USER;
	payload: UserState['user'];
}

export interface FetchUserActionInterface extends Action<UserActionsType> {
	type: UserActionsType.FETCH_USER;
	payload: UserInterface['username'];
}

export interface SetLoadingStateActionInterface
	extends Action<UserActionsType> {
	type: UserActionsType.SET_LOADING_STATE;
	payload: UserState['loadingState'];
}

// Action type

export type UserActions =
	| SetUserActionInterface
	| FetchUserActionInterface
	| SetLoadingStateActionInterface;
