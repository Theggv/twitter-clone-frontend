import { makeStyles, useMediaQuery, useTheme } from '@material-ui/core';
import React from 'react';
import { ContentBlock } from '../../components/Home/Main/ContentBlock';
import { TopBlock } from '../../components/TopBlock';
import { SideBar } from '../../components/Home/Main/Sidebar';
import { ButtonSettings } from '../../containers/Buttons';

import CreatePost from '../../components/AddTweet/CreatePost';
import { ContentDivider } from '../../containers/Elements';
import { TweetsList } from '../../components/Tweets/TweetsList';
import { Search } from '../../components/Search';
import { scrollToTop } from '../../helpers';
import {
	TopicsSuggestion,
	TopicProps,
} from '../../components/Suggestions/Topic';
import { UsersSuggestion } from '../../components/Suggestions/User';

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
								onClick={scrollToTop}
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
					<TopicsSuggestion recomendations={recs} />
					<UsersSuggestion title={'Кого читать'} />
				</SideBar>
			)}
		</>
	);
};
