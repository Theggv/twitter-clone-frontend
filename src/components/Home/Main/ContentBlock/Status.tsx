import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { LoaderCircular } from '../../../../containers/Loaders';
import {
	selectIsTweetLoading,
	selectIsTweetLoaded,
	fetchTweet,
	selectTweetContent,
} from '../../../../store/ducks/tweet';
import { TweetFull } from './Tweet/TweetFull';

export const Status: React.FC = () => {
	const { tweetId } = useParams<{
		userName: string;
		tweetId: string;
	}>();

	const dispatch = useDispatch();
	const tweet = useSelector(selectTweetContent);

	const isLoading = useSelector(selectIsTweetLoading);
	const isLoaded = useSelector(selectIsTweetLoaded);

	React.useEffect(() => {
		if (tweet?.id !== tweetId && !isLoading) {
			dispatch(fetchTweet(tweetId));
		}

		window.scroll(0, 0);
	}, [dispatch, tweetId, tweet, isLoading]);

	if (isLoading) return <LoaderCircular />;
	if (!isLoaded || !tweet || tweet?.id !== tweetId) return null;

	return <TweetFull {...tweet}></TweetFull>;
};
