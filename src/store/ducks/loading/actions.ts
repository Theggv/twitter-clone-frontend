import { Action } from 'redux';
import { LoadingState } from './types';

// Action Types enum

export enum LoadingActionsType {
	SET_LOADING_STATE = 'loading/SET_LOADING_STATE',
}

// Action interfaces

export interface SetLoadingStateActionInterface
	extends Action<LoadingActionsType> {
	type: LoadingActionsType.SET_LOADING_STATE;
	payload: { name: string; loadingState: LoadingState };
}

// Action type

export type LoadingActions = SetLoadingStateActionInterface;
