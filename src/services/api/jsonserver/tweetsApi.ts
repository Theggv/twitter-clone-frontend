import axios from 'axios';
import { TweetInterface, TweetState } from '../../../store/ducks/tweet';
import { TweetsState } from '../../../store/ducks/tweets';

const fetchTweets = async (): Promise<TweetsState['items']> => {
	const resp = await axios.get('http://localhost:3001/api/tweets');

	return resp.data;
};

const fetchTweet = async (
	id: TweetInterface['_id']
): Promise<TweetState['tweet']> => {
	const resp = await axios.get(`http://localhost:3001/api/tweets?id=${id}`);
	return resp.data[0];
};

export const TweetsApi = {
	fetchTweet,
	fetchTweets,
};
