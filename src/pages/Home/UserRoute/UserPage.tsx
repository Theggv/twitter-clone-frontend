import { Button, makeStyles, useMediaQuery, useTheme } from '@material-ui/core';
import React from 'react';
import { ContentBlock } from '../../../components/Home/Main/ContentBlock';
import { TopBlock } from '../../../components/TopBlock';
import { SideBar } from '../../../components/Home/Main/Sidebar';

import {
	TopicsSuggestion,
	TopicProps,
} from '../../../components/Suggestions/Topic';
import { UsersSuggestion } from '../../../components/Suggestions/User';
import { Search } from '../../../components/Search';
import { scrollToTop } from '../../../helpers';
import { TweetsList } from '../../../components/Tweets/TweetsList';
import { User } from '../../../components/User/User';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
	fetchUser,
	LoadingState,
	selectUserItem,
	selectUserLoadingState,
} from '../../../store/ducks/user';

import VerifiedUserIcon from '@material-ui/icons/VerifiedUser';
import { NotFoundPage } from '../NotFoundPage';
import clsx from 'clsx';

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
		display: 'flex',
		alignItems: 'center',
	},
	headerVerifiedIcon: {
		margin: '0 0 -3px 3px',
		fontSize: 20,
	},
	headerButton: {
		padding: '0 8px',
	},
	buttonStopFollow: {
		width: 160,
		marginRight: 10,
		transition: 'visibility 0s, opacity 0.1s linear',
	},
	buttonHidden: {
		visibility: 'hidden',
		opacity: 0,
	},
}));

//header photo 200px

export const UserPage: React.FC = () => {
	const classes = useStyles();

	const theme = useTheme();
	const matches = useMediaQuery(theme.breakpoints.up(1005));

	const { userName } = useParams<{ userName: string }>();
	const [buttonHidden, setButtonHidden] = React.useState(
		document.documentElement.scrollTop < 255
	);

	const dispatch = useDispatch();
	const user = useSelector(selectUserItem);
	const loadingState = useSelector(selectUserLoadingState);

	React.useEffect(() => {
		dispatch(fetchUser(userName));
	}, [dispatch, userName]);

	React.useEffect(() => {
		const scrollEvent = (e: any) => {
			setButtonHidden((prev) => document.documentElement.scrollTop < 255);
		};

		document.addEventListener('scroll', scrollEvent);

		return () => {
			document.removeEventListener('scroll', scrollEvent);
		};
	}, []);

	if (loadingState === LoadingState.ERROR) return <NotFoundPage />;
	if (loadingState !== LoadingState.LOADED) return null;

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
								{user?.fullname}
								{user?.verified && (
									<VerifiedUserIcon
										color='primary'
										className={classes.headerVerifiedIcon}
									/>
								)}
							</div>
							<Button
								className={clsx(
									classes.buttonStopFollow,
									buttonHidden && classes.buttonHidden
								)}
								color='primary'
								variant='contained'
							>
								Читаемые
							</Button>
						</div>
					}
				></TopBlock>
				<User user={user} />
				<TweetsList></TweetsList>
			</ContentBlock>
			{matches && (
				<SideBar>
					<Search></Search>
					<UsersSuggestion title={'Вам может понравиться'} />
					<TopicsSuggestion
						recomendations={[
							{
								title: 'PROUD OF HARRY',
								actualWhere: 'Россия',
								numTweets: 56500,
							},
							{
								title: 'Добрый',
								actualWhere: 'Россия',
								numTweets: 2407,
							},
							{ title: 'Выздоравливайте', actualWhere: 'Россия' },
							{
								title: '#SaveHannibal',
								actualWhere: 'Россия',
								numTweets: 5649,
							},
							{ title: 'иркутской', actualWhere: 'Россия' },
						]}
					/>
				</SideBar>
			)}
		</>
	);
};
