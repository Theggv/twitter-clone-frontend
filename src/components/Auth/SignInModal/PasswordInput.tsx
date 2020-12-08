import React from 'react';
import { InputElement } from '../InputElement';

interface PasswordInputInterface {
	onChange: (text: string) => void;
}

export const PasswordInput: React.FC<PasswordInputInterface> = ({
	onChange,
}) => {
	const [text, setText] = React.useState('');

	React.useEffect(() => {
		onChange(text);
	}, [onChange, text]);

	return (
		<InputElement
			autoFocus
			fullWidth
			title='Номер телефона, адрес электронной почты или имя пользователя'
			validationFunc={(text: string) => {
				setText((prev) => text);
				return undefined;
			}}
		></InputElement>
	);
};
