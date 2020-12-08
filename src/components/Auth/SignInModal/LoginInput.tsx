import React from 'react';
import { InputElement } from '../InputElement';

interface LoginInputInterface {
	onChange: (text: string) => void;
}

export const LoginInput: React.FC<LoginInputInterface> = ({ onChange }) => {
	const [text, setText] = React.useState('');

	React.useEffect(() => {
		if (text) onChange(text);
	}, [onChange, text]);

	return (
		<InputElement
			value={text}
			fullWidth
			title='Пароль'
			type='password'
			validationFunc={(text: string) => {
				setText((prev) => text);
				return undefined;
			}}
		></InputElement>
	);
};
