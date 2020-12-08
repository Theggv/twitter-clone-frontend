import React from 'react';
import { LoginInput } from './LoginInput';
import { PasswordInput } from './PasswordInput';

interface InputContainerProps {
	onValidData: (data: { login: string; password: string }) => void;
}

export const InputContainer: React.FC<InputContainerProps> = ({
	onValidData,
}) => {
	const [isValidationPassed, setValidationPassed] = React.useState(false);

	const [loginData, setLoginData] = React.useState({
		login: '',
		password: '',
	});

	React.useEffect(() => {
		let isValidationFailed = !loginData.login || !loginData.password;

		if (isValidationFailed !== isValidationPassed)
			setValidationPassed((prev) => isValidationFailed);
	}, [isValidationPassed, loginData]);

	React.useEffect(() => {
		if (isValidationPassed)
			setLoginData((prev) => {
				onValidData(prev);
				return prev;
			});
	}, [isValidationPassed, onValidData]);

	// const handleLoginClick = () => {
	// 	if (authState !== LoadingState.REQUESTED)
	// 		dispatch(
	// 			requestAuth({
	// 				username: loginData.login,
	// 				password: loginData.password,
	// 			})
	// 		);
	// };

	return (
		<>
			<LoginInput
				onChange={(text: string) => {
					setLoginData((prev) => ({ ...prev, login: text }));
				}}
			/>
			<PasswordInput
				onChange={(text: string) => {
					setLoginData((prev) => ({
						...prev,
						password: text,
					}));
				}}
			/>
		</>
	);
};
