import axios from 'axios';
import { baseUrl } from '.';
import { TweetInterface, TweetState } from '../../../store/ducks/tweet';
import { TweetsState } from '../../../store/ducks/tweets';

const fetchTweets = async (): Promise<TweetsState['items']> => {
	const resp = await axios.get(`${baseUrl}/tweets`);

	if (resp.status !== 200) throw new Error();

	return resp.data.result;
};

const fetchTweet = async (
	id: TweetInterface['_id']
): Promise<TweetState['tweet']> => {
	const resp = await axios.get(`${baseUrl}/tweets/${id}`);

	if (resp.status !== 200) throw new Error();

	return resp.data.result;
};

export const TweetsApi = {
	fetchTweet,
	fetchTweets,
};
