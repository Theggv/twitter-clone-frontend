import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { LoaderCircular } from '../../../../../containers/Loaders';
import { TweetInterface } from '../../../../../store/ducks/tweet';
import {
	fetchTweets,
	selectIsTweetsLoading,
	selectTweetsItems,
} from '../../../../../store/ducks/tweets';
import UsersSuggestion from '../../Suggestions/ContentBlock/UsersSuggestion';
import ContentDivider from '../ContentDivider';
import { TweetMini } from './TweetMini';

interface TweetsListProps {
	query?: string;
}

export const TweetsList: React.FC<TweetsListProps> = (): React.ReactElement | null => {
	const tweets = useSelector(selectTweetsItems);
	const isLoading = useSelector(selectIsTweetsLoading);

	const dispatch = useDispatch();

	React.useEffect(() => {
		dispatch(fetchTweets());
	}, [dispatch]);

	if (isLoading) return <LoaderCircular />;

	return (
		<React.Fragment>
			{tweets.map((item: TweetInterface, index: number) => (
				<div key={index}>
					<TweetMini {...item} />
					{index === 3 && (
						<React.Fragment>
							<ContentDivider />
							<UsersSuggestion />
							<ContentDivider />
						</React.Fragment>
					)}
				</div>
			))}
		</React.Fragment>
	);
};
