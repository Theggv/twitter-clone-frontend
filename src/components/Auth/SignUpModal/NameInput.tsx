import React from 'react';
import { InputElement } from '../InputElement';

interface NameInputProps {
	onChange: (name: string) => void;
}

export const NameInput: React.FC<NameInputProps> = ({ onChange }) => {
	const [name, setName] = React.useState('');

	React.useEffect(() => {
		onChange(name);
	}, [onChange, name]);

	const nameValidation = (text: string): string | undefined => {
		if (!text.length) return 'Как вас зовут?';

		if (name !== text) setName((prev) => text);

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
