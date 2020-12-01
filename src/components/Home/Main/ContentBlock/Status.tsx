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
	const isLoading = useSelector(selectIsTweetLoading);
	const isLoaded = useSelector(selectIsTweetLoaded);
	const tweet = useSelector(selectTweetContent);

	React.useEffect(() => {
		dispatch(fetchTweet(tweetId));
		window.scroll(0, 0);
	}, [dispatch, tweetId]);

	if (isLoading) return <LoaderCircular />;
	if (!isLoaded || !tweet) return null;

	return <TweetFull {...tweet}></TweetFull>;
};
