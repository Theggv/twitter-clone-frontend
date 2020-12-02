import { IconButton, makeStyles } from '@material-ui/core';
import React from 'react';

import MoreIcon from '@material-ui/icons/MoreHoriz';
import VerifiedUserIcon from '@material-ui/icons/VerifiedUser';

import CommentIcon from '@material-ui/icons/ChatBubbleOutlineOutlined';
import RetweetIcon from '@material-ui/icons/Replay';
import LikeIcon from '@material-ui/icons/FavoriteBorder';
import OptionsIcon from '@material-ui/icons/KeyboardArrowUp';
import {
	ContainerAvatar,
	ContainerItemTitle,
} from '../../../../../containers/Containers';
import { ButtonCounter } from './ButtonCounter';
import { TweetInterface } from '../../../../../store/ducks/tweet';
import { formatDateDifference } from '../../../../../helpers';
import { Link, useHistory } from 'react-router-dom';
import { MediaContainer } from '../MediaContainer';

const useStyles = makeStyles((theme) => ({
	root: {
		display: 'flex',
		justifyContent: 'space-between',
	},
	iconContainer: {
		marginRight: 10,

		'& img': {
			width: 49,
			height: 49,
			borderRadius: '100%',
		},
	},
	container: {
		flex: 1,
		display: 'flex',
		justifyContent: 'space-between',
		flexDirection: 'column',
	},
	header: {
		flex: 1,

		margin: '0 0 -4px',
		textAlign: 'left',

		display: 'flex',
		justifyContent: 'flex-start',
		fontSize: 15,
	},
	headerText: {
		fontWeight: 700,
		marginRight: 5,
	},
	icon: {
		margin: '0 0 -3px 3px',
		fontSize: 18,
	},
	headerUrl: {
		fontWeight: 400,
		color: 'rgb(91, 112, 131)',
	},
	moreIcon: {
		margin: '-5px -5px 0 0',
		fontSize: 15,
		width: 30,
		height: 30,

		'& svg': {
			color: 'black',
		},

		'& svg:hover': {
			color: theme.palette.primary.main,
		},
	},
	contentBlock: {
		textAlign: 'left',
	},
	media: {
		marginTop: 10,
		padding: 0,
		borderRadius: 16,
		border: '1px solid rgba(128, 128, 128, 0.15)',
		overflow: 'hidden',
	},
	footer: {
		marginTop: 5,
		marginLeft: -5,
		paddingRight: 75,
		display: 'flex',
		justifyContent: 'space-between',
	},
	link: {
		color: 'inherit',
		border: 'none',
		textDecoration: 'none',

		'&:hover': {
			textDecoration: 'underline',
		},
	},
}));

export interface TweetProps extends TweetInterface {}

export const TweetMini: React.FC<TweetProps> = ({
	id,
	createdAtUTC,
	user,
	text,
	attachments,
	commentsCount,
	likesCount,
	retweetsCount,
	retweetsWithCommentCount,
}): React.ReactElement => {
	const classes = useStyles();
	const history = useHistory();

	const titleButton = (
		<IconButton className={classes.moreIcon} color='primary'>
			<MoreIcon />
		</IconButton>
	);

	const handleContainerClick = () => {
		history.push(`/${user.userName}/status/${id}`);
	};

	const handleClickButton = (e: any) => {
		e.stopPropagation();
	};

	return (
		<ContainerAvatar
			source={user.avatarUrl}
			className={classes.container}
			onClick={handleContainerClick}
		>
			<ContainerItemTitle
				className={classes.header}
				titleButton={() => titleButton}
			>
				<div className={classes.headerText}>
					{user?.fullName}
					{user?.verified && (
						<VerifiedUserIcon
							color='primary'
							className={classes.icon}
						/>
					)}
				</div>
				<div className={classes.headerUrl}>
					<span>@{user?.userName}</span>
					&nbsp;·&nbsp;
					<Link
						className={classes.link}
						to={`/${user.userName}/status/${id}`}
						onClick={handleClickButton}
					>
						<span>{formatDateDifference(createdAtUTC)}</span>
					</Link>
				</div>
			</ContainerItemTitle>
			<div className={classes.contentBlock}>{text}</div>
			{attachments && attachments.length ? (
				<div className={classes.media}>
					<MediaContainer></MediaContainer>
				</div>
			) : null}
			<div className={classes.footer}>
				<ButtonCounter
					icon={<CommentIcon />}
					text={commentsCount}
					onClick={handleClickButton}
				/>
				<ButtonCounter
					icon={<RetweetIcon />}
					hoverProps={{
						color: 'rgb(23, 191, 99)',
						backgroundColor: 'rgba(23, 191, 99, 0.1)',
					}}
					text={retweetsCount + retweetsWithCommentCount}
					onClick={handleClickButton}
				/>
				<ButtonCounter
					icon={<LikeIcon />}
					hoverProps={{
						color: 'rgb(224, 36, 94)',
						backgroundColor: 'rgba(224, 36, 94, 0.1)',
					}}
					text={likesCount}
					onClick={handleClickButton}
				/>
				<ButtonCounter
					icon={<OptionsIcon />}
					onClick={handleClickButton}
				/>
			</div>
		</ContainerAvatar>
	);
};
