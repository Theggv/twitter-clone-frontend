import { makeStyles, useMediaQuery, useTheme } from '@material-ui/core';
import React from 'react';
import { ContentBlock } from '../../components/Home/Main/ContentBlock';
import { TopBlock } from '../../components/TopBlock';
import { SideBar } from '../../components/Home/Main/Sidebar';

import { Status } from '../../components/Home/Main/ContentBlock/Status';
import TopicRecomendations from '../../components/Home/Main/Suggestions/Sidebar/Topic';
import AuthorRecomendations from '../../components/Home/Main/Suggestions/Sidebar/Author';
import { Search } from '../../components/Home/Main/Search';
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

export const FullTweetPage: React.FC = () => {
	const classes = useStyles();

	const theme = useTheme();
	const matches = useMediaQuery(theme.breakpoints.up(1005));

	const scrollToTop = () => window.scroll(0, 0);

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
			</ContentBlock>
			{matches && (
				<SideBar>
					<Search></Search>
					<AuthorRecomendations title={'Вам может понравиться'} />
					<TopicRecomendations recomendations={recs} />
				</SideBar>
			)}
		</>
	);
};
