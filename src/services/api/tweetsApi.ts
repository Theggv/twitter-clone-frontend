import axios from 'axios';
import { TweetsState } from '../../store/ducks/tweets';

const fetchTweets = async (): Promise<TweetsState['items']> => {
	const resp = await axios.get('http://localhost:3001/api/tweets');
	return resp.data;
};

export const TweetsApi = {
	fetchTweets,
};
