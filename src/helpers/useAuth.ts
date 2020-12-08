import { useState } from 'react';
import { AuthApi } from '../services/api/backend/authApi';

export const useAuth = () => {
	const [isAuth, setIsAuth] = useState<boolean>(
		!!localStorage.getItem('token')
	);

	const signup = (user: {
		email: string;
		fullname: string;
		username: string;
		password: string;
		password2: string;
	}) => {
		AuthApi.signup(user).then().catch();
	};

	const signin = (user: { username: string; password: string }) => {
		AuthApi.signin(user)
			.then(([_, token]) => {
				localStorage.setItem('token', token);
			})
			.catch();
	};

	const signout = () => {
		// rework
		AuthApi.signout().then().catch();
		setIsAuth(false);
		localStorage.removeItem('token');
	};

	return {
		signup,
		signin,
		signout,
		isAuth,
	};
};
