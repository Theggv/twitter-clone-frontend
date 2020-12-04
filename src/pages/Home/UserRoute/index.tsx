import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { NotFoundPage } from '../NotFoundPage';
import { FullTweetPage } from './FullTweetPage';
import { LikesPage } from './LikesPage';
import { MediaPage } from './MediaPage';
import { TweetsPage } from './TweetsPage';
import { WithRepliesPage } from './WithRepliesPage';

export const UserRoute: React.FC = () => {
	return (
		<Switch>
			<Route exact path='/:userName'>
				<TweetsPage />
			</Route>
			<Route exact path='/:userName/with_replies'>
				<WithRepliesPage />
			</Route>
			<Route exact path='/:userName/media'>
				<MediaPage />
			</Route>
			<Route exact path='/:userName/likes'>
				<LikesPage />
			</Route>
			<Route exact path='/:userName/status/:tweetId'>
				<FullTweetPage />
			</Route>
			<Route>
				<NotFoundPage />
			</Route>
		</Switch>
	);
};
