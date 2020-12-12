import React from 'react';
import { InputElement } from '../InputElement';
import { SignUpActionTypes, SignUpReducer } from './reducer/SignUpReducer';

export const NameInput: React.FC = () => {
	const [state, dispatch] = SignUpReducer();

	const nameValidation = (text: string): string | undefined => {
		if (!text.length) return 'Как вас зовут?';

		if (state.name !== text)
			dispatch({ type: SignUpActionTypes.SET_NAME, payload: text });

		return undefined;
	};

	console.log('render of nameinput');

	return (
		<InputElement
			autoFocus
			fullWidth
			title='Имя'
			maxLength={50}
			validationFunc={nameValidation}
		></InputElement>
	);
};
