import axios from 'axios';
import { RecommendationsState } from '../../store/ducks/recommendations';

const fetchRecommended = async (): Promise<
	RecommendationsState['recommedations']
> => {
	const resp = await axios.get('http://localhost:3001/api/users');
	return resp.data;
};

export const UsersApi = {
	fetchRecommended,
};
