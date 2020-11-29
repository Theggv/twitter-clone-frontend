import { makeStyles } from '@material-ui/core';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ContainerBase } from '../../../../containers/Containers';
import Search from './Search';

import StickyBox from 'react-sticky-box';
import { TopicProps } from '../Suggestions/Sidebar/Topic/Topic';
import TopicRecomendations from '../Suggestions/Sidebar/Topic';

import AuthorRecomendations from '../Suggestions/Sidebar/Author';
import {
	fetchRecommended,
	selectIsRecommendationsLoading,
	selectRecommendationsItems,
} from '../../../../store/ducks/recommendations';
import {
	LoadingState,
	selectSidebarLoading,
	setSidebarLoadingState,
} from '../../../../store/ducks/loading';
import { LoaderCircular } from '../../../../containers/Loaders';

const useStyles = makeStyles((theme) => ({
	root: {
		[theme.breakpoints.up(1095)]: {
			flex: '0 0 360px',
			padding: '0 0 0 20px',
		},
		padding: '0 0 0 10px',
		flex: '0 0 300px',
		textAlign: 'center',
	},
	container: {
		paddingLeft: 10,
	},
	content: {},
}));

const SideBlock: React.FC = (): React.ReactElement | null => {
	const classes = useStyles();

	const recs: Array<TopicProps> = [
		{ title: 'PROUD OF HARRY', actualWhere: 'Россия', numTweets: 56500 },
		{ title: 'Добрый', actualWhere: 'Россия', numTweets: 2407 },
		{ title: 'Выздоравливайте', actualWhere: 'Россия' },
		{ title: '#SaveHannibal', actualWhere: 'Россия', numTweets: 5649 },
		{ title: 'иркутской', actualWhere: 'Россия' },
	];

	const recommended = useSelector(selectRecommendationsItems);
	const isLoading = useSelector(selectIsRecommendationsLoading);
	const dispatch = useDispatch();
	const isSidebarLoading = useSelector(selectSidebarLoading);

	React.useEffect(() => {
		dispatch(setSidebarLoadingState(LoadingState.LOADED));
		dispatch(fetchRecommended());

		return () => {
			dispatch(setSidebarLoadingState(LoadingState.NEVER));
		};
	}, [dispatch]);

	return (
		<ContainerBase className={classes.root}>
			<StickyBox className={classes.container}>
				{isSidebarLoading ? (
					<LoaderCircular />
				) : (
					<React.Fragment>
						<Search></Search>
						<AuthorRecomendations
							title={'Кого читать'}
							recomendations={recommended}
							isLoading={isLoading}
						/>
						<TopicRecomendations recomendations={recs} />
						<AuthorRecomendations title={'Вам может понравиться'} />
						<TopicRecomendations />
					</React.Fragment>
				)}
			</StickyBox>
		</ContainerBase>
	);
};

export default SideBlock;
