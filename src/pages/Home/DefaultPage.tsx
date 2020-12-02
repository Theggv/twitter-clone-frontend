import { makeStyles, useMediaQuery, useTheme } from '@material-ui/core';
import React from 'react';
import { useDispatch } from 'react-redux';
import { ContentBlock } from '../../components/Home/Main/ContentBlock';
import { TopBlock } from '../../components/TopBlock';
import { SideBar } from '../../components/Home/Main/Sidebar';
import { ButtonSettings } from '../../containers/Buttons';
import { fetchTweets } from '../../store/ducks/tweets';

import CreatePost from '../../components/AddTweet/CreatePost';
import { ContentDivider } from '../../containers/Elements';
import { TweetsList } from '../../components/Tweets/TweetsList';
import { Search } from '../../components/Home/Main/Search';
import TopicRecomendations from '../../components/Home/Main/Suggestions/Sidebar/Topic';
import AuthorRecomendations from '../../components/Home/Main/Suggestions/Sidebar/Author';
import { TopicProps } from '../../components/Home/Main/Suggestions/Sidebar/Topic/Topic';

const useStyles = makeStyles((theme) => ({
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

export const DefaultPage: React.FC = () => {
	const classes = useStyles();

	const theme = useTheme();
	const matches = useMediaQuery(theme.breakpoints.up(1005));

	const dispatch = useDispatch();
	const [shouldUpdateTweets, setShouldUpdateTweets] = React.useState(false);

	React.useEffect(() => {
		if (shouldUpdateTweets) {
			dispatch(fetchTweets());
			setShouldUpdateTweets((prev) => false);
		}
	}, [dispatch, shouldUpdateTweets]);

	const updateTweets = () => setShouldUpdateTweets(true);

	const recs: TopicProps[] = [
		{ title: 'PROUD OF HARRY', actualWhere: 'Россия', numTweets: 56500 },
		{ title: 'Добрый', actualWhere: 'Россия', numTweets: 2407 },
		{ title: 'Выздоравливайте', actualWhere: 'Россия' },
		{ title: '#SaveHannibal', actualWhere: 'Россия', numTweets: 5649 },
		{ title: 'иркутской', actualWhere: 'Россия' },
	];

	return (
		<>
			<ContentBlock>
				<TopBlock
					title={
						<div className={classes.header}>
							<div
								className={classes.headerTitle}
								onClick={updateTweets}
							>
								Главная
							</div>
							<ButtonSettings />
						</div>
					}
				></TopBlock>
				<CreatePost></CreatePost>
				<ContentDivider></ContentDivider>
				<TweetsList></TweetsList>
			</ContentBlock>
			{matches && (
				<SideBar>
					<Search></Search>
					<TopicRecomendations recomendations={recs} />
					<AuthorRecomendations title={'Кого читать'} />
				</SideBar>
			)}
		</>
	);
};
