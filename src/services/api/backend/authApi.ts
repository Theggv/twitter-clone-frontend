import axios from 'axios';
import { baseUrl } from '.';
import { UserAuthInterface } from '../../../store/ducks/auth';

/**
 * Sends request to validate token
 * @param token jwt token
 * @returns status code
 */
const checkAuthorization = async (token: string): Promise<number> => {
	const resp = await axios.get(`${baseUrl}/auth/check`, {
		headers: {
			Authorization: `Bearer ${token}`,
		},
	});

	return resp.status;
};

const signup = async (userInfo: {
	email: string;
	fullname: string;
	username: string;
	password: string;
	password2: string;
}): Promise<void> => {
	const resp = await axios.post(`${baseUrl}/auth/signup`);

	if (resp.status !== 201) throw new Error();
};

/**
 * Sign in request for api
 *
 * @returns [user, token]
 */
const signin = async (userInfo: UserAuthInterface): Promise<any> => {
	const resp = await axios.post(`${baseUrl}/auth/signin`, userInfo);

	if (resp.status === 401) throw new Error(resp.status.toString());
	if (resp.status !== 200) throw new Error();

	return resp.data.result;
};

const signout = async (): Promise<void> => {
	throw new Error('Not implemented');
};

export const AuthApi = {
	checkAuthorization,
	signup,
	signin,
	signout,
};
