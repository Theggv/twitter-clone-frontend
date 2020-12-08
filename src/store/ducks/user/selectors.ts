import { RootState } from '../../store';
import { UserState } from './types';

export const selectUser = (state: RootState): UserState =>
	state.user;

export const selectUserItem = (state: RootState) => selectUser(state).user;

export const selectUserLoadingState = (state: RootState) =>
	selectUser(state).loadingState;
