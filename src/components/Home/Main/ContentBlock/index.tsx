import { makeStyles } from '@material-ui/core';
import React, { useEffect } from 'react';

import { ContainerBase } from '../../../../containers/Containers';

import ShiningIcon from '../../../../containers/Icons/ShiningIcon';

import CreatePost from './CreatePost';
import { TweetMini } from './Tweet/TweetMini';
import { TweetFull } from './Tweet/TweetFull';
import ContentDivider from './ContentDivider';
import UsersSuggestion from '../Suggestions/ContentBlock/UsersSuggestion';

import { useSelector, useDispatch } from 'react-redux';
import {
	fetchTweets,
	selectIsTweetsLoading,
	selectTweetsItems,
	TweetInterface,
} from '../../../../store/ducks/tweets';
import { LoaderCircular } from '../../../../containers/Loaders';
import { ButtonWithIcon } from '../../../../containers/Buttons';
import { generateNum } from '../../../../helpers';

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
	homeBlock: {
		position: 'sticky',
		top: 0,

		fontSize: 19,
		fontWeight: 800,
		display: 'flex',
		justifyContent: 'space-between',
		borderBottom: '1px solid rgba(128,128,128,0.15)',
		height: 54,
		alignItems: 'center',
		backgroundColor: 'white',
		zIndex: 1000,
	},
	homeBlockTitle: {
		marginLeft: 15,
	},
	homeBlockButton: {
		padding: 8,
		marginRight: 7,
	},
}));

const ContentBlock: React.FC = (): React.ReactElement => {
	const classes = useStyles();

	const tweets = useSelector(selectTweetsItems);
	const isLoading = useSelector(selectIsTweetsLoading);

	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(fetchTweets());
	}, [dispatch]);

	const header = (
		<div className={classes.homeBlock}>
			<div className={classes.homeBlockTitle}>Главная</div>
			<ButtonWithIcon
				className={classes.homeBlockButton}
				icon={<ShiningIcon />}
			></ButtonWithIcon>
		</div>
	);

	return (
		<ContainerBase className={classes.root}>
			{header}
			<CreatePost></CreatePost>
			<ContentDivider></ContentDivider>
			<div>
				{isLoading ? (
					<LoaderCircular />
				) : (
					<>
						{tweets.map((item: TweetInterface, index: number) => (
							<div key={index}>
								<TweetMini
									likes={generateNum(100000)}
									comments={generateNum(10000)}
									retweets={generateNum(10000)}
									{...item}
								/>
								{index === 3 && (
									<React.Fragment>
										<ContentDivider />
										<UsersSuggestion />
										<ContentDivider />
									</React.Fragment>
								)}
							</div>
						))}
					</>
				)}
			</div>
		</ContainerBase>
	);
};

export default ContentBlock;
