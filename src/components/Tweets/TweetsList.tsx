import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { LoaderCircular } from '../../containers/Loaders';
import { TweetInterface } from '../../store/ducks/tweet';
import {
	fetchTweets,
	selectIsTweetsLoaded,
	selectIsTweetsLoading,
	selectTweetsItems,
} from '../../store/ducks/tweets';
import { ContentDivider } from '../../containers/Elements';
import { TweetMini } from './TweetMini';
import { UsersSuggestion } from '../Suggestions/ContentBlock/UsersSuggestion';

interface TweetsListProps {
	query?: string;
}

export const TweetsList: React.FC<TweetsListProps> = (): React.ReactElement | null => {
	const tweets = useSelector(selectTweetsItems);
	const isLoading = useSelector(selectIsTweetsLoading);
	const isLoaded = useSelector(selectIsTweetsLoaded);

	const dispatch = useDispatch();

	React.useEffect(() => {
		if (!isLoaded && !isLoading) dispatch(fetchTweets());
	}, [dispatch, isLoaded, isLoading]);

	if (isLoading) return <LoaderCircular />;
	if (!isLoaded) return null;

	const showSuggestions = false;

	return (
		<>
			{tweets
				.filter((_, i) => i < 3)
				.map((item: TweetInterface, index: number) => (
					<TweetMini {...item} />
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
					<TweetMini {...item} />
				))}
		</>
	);
};
