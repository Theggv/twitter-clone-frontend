import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { LoaderCircular } from '../../containers/Loaders';
import {
	fetchTweet,
	selectTweetContent,
	selectTweetLoadingState,
	LoadingState,
} from '../../store/ducks/tweet';
import { TweetFull } from './TweetFull';

export const Status: React.FC = () => {
	const { tweetId } = useParams<{
		userName: string;
		tweetId: string;
	}>();

	const dispatch = useDispatch();
	const tweet = useSelector(selectTweetContent);

	const loadingState = useSelector(selectTweetLoadingState);

	React.useEffect(() => {
		if (loadingState === LoadingState.ERROR) return;

		if (tweet?._id !== tweetId && loadingState !== LoadingState.LOADING)
			dispatch(fetchTweet(tweetId));

		window.scroll(0, 0);
	}, [dispatch, tweetId, tweet, loadingState]);

	if (loadingState === LoadingState.LOADING) return <LoaderCircular />;
	if (
		loadingState !== LoadingState.LOADED ||
		!tweet ||
		tweet?._id !== tweetId
	)
		return null;

	return <TweetFull {...tweet}></TweetFull>;
};
