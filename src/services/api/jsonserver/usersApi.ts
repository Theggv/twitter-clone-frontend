import axios from 'axios';
import { RecommendationsState } from '../../../store/ducks/recommendations';
import { UserInterface } from '../../../store/ducks/user';

const fetchRecommended = async (): Promise<
	RecommendationsState['recommedations']
> => {
	const resp = await axios.get('http://localhost:3001/api/users');

	if (resp.status !== 200 || !resp.data) throw new Error();

	return resp.data;
};

const fetchUser = async (
	userName: string
): Promise<UserInterface | undefined> => {
	const resp = await axios.get(
		`http://localhost:3001/api/users?userName=${userName}`
	);

	if (resp.status !== 200 || !resp.data[0]) throw new Error();

	return resp.data[0];
};

export const UsersApi = {
	fetchRecommended,
	fetchUser,
};
