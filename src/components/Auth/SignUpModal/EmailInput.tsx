import React from 'react';
import { InputElement } from '../InputElement';
import { SignUpActionTypes, SignUpReducer } from './reducer/SignUpReducer';

export const EmailInput: React.FC<{ usePhone: boolean }> = ({ usePhone }) => {
	const [state, dispatch] = SignUpReducer();

	const emailValidation = (text: string): string | undefined => {
		if (state.email !== text)
			dispatch({ type: SignUpActionTypes.SET_EMAIL, payload: text });

		return undefined;
	};

	const phoneValidation = (text: string): string | undefined => {
		if (state.email !== text)
			dispatch({ type: SignUpActionTypes.SET_EMAIL, payload: text });

		return undefined;
	};

	console.log('render of nameinput');

	return (
		<InputElement
			fullWidth
			title={usePhone ? 'Телефон' : 'Адрес электронной почты'}
			validationFunc={(text) =>
				usePhone ? phoneValidation(text) : emailValidation(text)
			}
			useDebounceDelay={250}
		></InputElement>
	);
};
