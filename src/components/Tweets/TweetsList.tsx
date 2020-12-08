import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { LoaderCircular } from '../../containers/Loaders';
import { TweetInterface } from '../../store/ducks/tweet';
import {
	fetchTweets,
	LoadingState,
	selectIsTweetsLoaded,
	selectIsTweetsLoading,
	selectTweetsItems,
	selectTweetsLoadingState,
} from '../../store/ducks/tweets';
import { ContentDivider } from '../../containers/Elements';
import { TweetMini } from './TweetMini';
import { UsersSuggestion } from '../Suggestions/ContentBlock/UsersSuggestion';

interface TweetsListProps {
	query?: string;
}

export const TweetsList: React.FC<TweetsListProps> = (): React.ReactElement | null => {
	const tweets = useSelector(selectTweetsItems);
	const loadingState = useSelector(selectTweetsLoadingState);

	const dispatch = useDispatch();

	React.useEffect(() => {
		if (loadingState === LoadingState.ERROR) return;
		if (
			loadingState !== LoadingState.LOADED &&
			loadingState !== LoadingState.LOADING
		)
			dispatch(fetchTweets());
	}, [dispatch, loadingState]);

	if (loadingState === LoadingState.LOADING) return <LoaderCircular />;
	if (loadingState !== LoadingState.LOADED) return null;

	const showSuggestions = false;

	return (
		<>
			{tweets
				.filter((_, i) => i < 3)
				.map((item: TweetInterface, index: number) => (
					<TweetMini {...item} key={item._id} />
				))}
			{showSuggestions && (
				<>
					<ContentDivider />
					<UsersSuggestion />
					<ContentDivider />
				</>
			)}

			{tweets
				.filter((_, i) => i > 3)
				.map((item: TweetInterface, index: number) => (
					<TweetMini {...item} key={item._id} />
				))}
		</>
	);
};
