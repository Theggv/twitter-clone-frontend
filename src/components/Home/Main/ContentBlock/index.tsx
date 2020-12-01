import { makeStyles } from '@material-ui/core';
import React from 'react';

import { ContainerBase } from '../../../../containers/Containers';

import ShiningIcon from '../../../../containers/Icons/ShiningIcon';

import CreatePost from './CreatePost';
import ContentDivider from './ContentDivider';

import { ButtonWithIcon } from '../../../../containers/Buttons';
import { TopBlock } from './TopBlock';
import { Route, Switch } from 'react-router-dom';
import { TweetsList } from './Tweet/TweetsList';
import { SearchButtons } from './TopBlock/SearchButtons';
import { TweetFull } from './Tweet/TweetFull';
import { Status } from './Status';
import { useDispatch } from 'react-redux';
import { fetchTweets } from '../../../../store/ducks/tweets';

const useStyles = makeStyles((theme) => ({
	root: {
		[theme.breakpoints.down(750)]: {
			flex: '1 1 600px',
		},
		flex: '10 0 600px',
		maxWidth: '600px',
		textAlign: 'center',

		borderRight: '1px solid rgba(128,128,128,0.15)',
	},
	header: {
		flex: 1,
		display: 'flex',
		justifyContent: 'space-between',
		alignItems: 'center',
	},
	headerTitle: {
		marginLeft: 10,
		cursor: 'pointer',
	},
	headerButton: {
		padding: '0 8px',
	},
}));

const ContentBlock: React.FC = (): React.ReactElement => {
	const classes = useStyles();
	const dispatch = useDispatch();
	const [shouldUpdateTweets, setShouldUpdateTweets] = React.useState(false);

	React.useEffect(() => {
		if (shouldUpdateTweets) {
			dispatch(fetchTweets());
			setShouldUpdateTweets((prev) => false);
		}
	}, [dispatch, shouldUpdateTweets]);

	const updateTweets = () => setShouldUpdateTweets(true);
	const scrollToTop = () => window.scroll(0, 0);

	return (
		<ContainerBase className={classes.root}>
			<Switch>
				<Route exact path='/'>
					<TopBlock
						title={
							<div className={classes.header}>
								<div
									className={classes.headerTitle}
									onClick={updateTweets}
								>
									Главная
								</div>
								<ButtonWithIcon
									className={classes.headerButton}
									icon={<ShiningIcon />}
								></ButtonWithIcon>
							</div>
						}
					></TopBlock>
					<CreatePost></CreatePost>
					<ContentDivider></ContentDivider>
					<TweetsList></TweetsList>
				</Route>
				<Route path='/:userName/status/:tweetId'>
					<TopBlock
						showBackButton
						title={
							<div className={classes.header}>
								<div
									className={classes.headerTitle}
									onClick={scrollToTop}
								>
									Твитнуть
								</div>
							</div>
						}
					></TopBlock>
					<Status></Status>
				</Route>
				<Route path='/search'>
					<TopBlock
						showBackButton
						title={
							<div className={classes.header}>
								<div className={classes.headerTitle}>
									Главная
								</div>
								<ButtonWithIcon
									className={classes.headerButton}
									icon={<ShiningIcon />}
								></ButtonWithIcon>
							</div>
						}
					>
						<SearchButtons />
					</TopBlock>
				</Route>
			</Switch>
		</ContainerBase>
	);
};

export default ContentBlock;
