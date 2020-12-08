import React from 'react';
import { InputElement } from '../InputElement';

interface LoginInputInterface {
	onChange: (text: string) => void;
}

export const LoginInput: React.FC<LoginInputInterface> = ({ onChange }) => {
	const [text, setText] = React.useState('');

	React.useEffect(() => {
		onChange(text);
	}, [onChange, text]);

	return (
		<InputElement
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
