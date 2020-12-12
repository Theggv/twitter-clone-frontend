import { useReducer } from 'react';

export enum SignUpActionTypes {
	SET_NAME = 'SET_NAME',
	SET_EMAIL = 'SET_EMAIL',
}

interface SignUpState {
	name: string;
	email: string;
}

const reducer = (
	state: SignUpState,
	action: { type: SignUpActionTypes; payload: any }
): SignUpState => {
	switch (action.type) {
		case SignUpActionTypes.SET_NAME:
			return { ...state, name: action.payload };

		case SignUpActionTypes.SET_EMAIL:
			return { ...state, email: action.payload };

		default:
			throw new Error('Unknown type');
	}
};

const initialValue: SignUpState = {
	name: '',
	email: '',
};

export const SignUpReducer = () => useReducer(reducer, initialValue);
