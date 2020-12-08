import {
	FetchUserActionInterface,
	SetLoadingStateActionInterface,
	SetUserActionInterface,
	UserActionsType,
} from './actions';
import { UserInterface, UserState } from './types';

export const setUser = (
	payload: UserState['user']
): SetUserActionInterface => ({
	type: UserActionsType.SET_USER,
	payload,
});

export const fetchUser = (
	payload: UserInterface['username']
): FetchUserActionInterface => ({
	type: UserActionsType.FETCH_USER,
	payload,
});

export const setUserLoadingState = (
	payload: UserState['loadingState']
): SetLoadingStateActionInterface => ({
	type: UserActionsType.SET_LOADING_STATE,
	payload,
});
