import { IconButton, makeStyles } from '@material-ui/core';
import React from 'react';

import MoreIcon from '@material-ui/icons/MoreHoriz';
import VerifiedUserIcon from '@material-ui/icons/VerifiedUser';

import CommentIcon from '@material-ui/icons/ChatBubbleOutlineOutlined';
import RetweetIcon from '@material-ui/icons/Replay';
import LikeIcon from '@material-ui/icons/FavoriteBorder';
import OptionsIcon from '@material-ui/icons/KeyboardArrowUp';
import { TweetInterface } from '../../../../../store/ducks/tweets';
import {
	ContainerAvatar,
	ContainerItemTitle,
} from '../../../../../containers/Containers';
import { ButtonCounter } from './ButtonCounter';
import { TweetImages } from './TweetImages';

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
}));

export interface TweetProps extends TweetInterface {
	posted?: Date;
	comments?: number;
	retweets?: number;
	likes?: number;
}

const defaultTweet: TweetInterface = {
	user: {
		fullName: 'Team Secret',
		userName: 'teamsecret',
		verified: true,
		avatarUrl:
			'https://pbs.twimg.com/profile_images/1322870988137205760/4UPgWLRP_bigger.jpg',
	},
	text:
		'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laudantium possimus amet sapiente quas mollitia perferendis recusandae excepturi non, corrupti fugit doloremque laboriosam eaque asperiores animi minima, illum, doloribus quasi cupiditate.',
};

export const TweetMini: React.FC<TweetProps> = ({
	posted,
	comments,
	retweets,
	likes,
	user = defaultTweet.user!,
	text = defaultTweet.text!,
}): React.ReactElement => {
	const classes = useStyles();

	const titleButton = (
		<IconButton className={classes.moreIcon} color='primary'>
			<MoreIcon />
		</IconButton>
	);

	return (
		<ContainerAvatar source={user.avatarUrl} className={classes.container}>
			<ContainerItemTitle
				className={classes.header}
				titleButton={() => titleButton}
			>
				<div className={classes.headerText}>
					{user.fullName}
					{user?.verified && (
						<VerifiedUserIcon
							color='primary'
							className={classes.icon}
						/>
					)}
				</div>
				<div className={classes.headerUrl}>
					{`@${user.userName} · 2 ч`}
				</div>
			</ContainerItemTitle>
			<div className={classes.contentBlock}>{text}</div>
			<div className={classes.media}>
				<TweetImages
					media={[
						'https://pbs.twimg.com/media/EoAUQ46XcAAxU77?format=jpg&name=large',
						'https://pbs.twimg.com/media/EoAUQ47W8AQwi9B?format=jpg&name=large',
						'https://pbs.twimg.com/media/EoAUQ47XcAEkYrZ?format=jpg&name=small',
						'https://pbs.twimg.com/media/EoAUQ48W4AgNEit?format=jpg&name=large',
					]}
				></TweetImages>
			</div>
			<div className={classes.footer}>
				<ButtonCounter icon={<CommentIcon />} text={comments} />
				<ButtonCounter
					icon={<RetweetIcon />}
					hoverProps={{
						color: 'rgb(23, 191, 99)',
						backgroundColor: 'rgba(23, 191, 99, 0.1)',
					}}
					text={retweets}
				/>
				<ButtonCounter
					icon={<LikeIcon />}
					hoverProps={{
						color: 'rgb(224, 36, 94)',
						backgroundColor: 'rgba(224, 36, 94, 0.1)',
					}}
					text={likes}
				/>
				<ButtonCounter icon={<OptionsIcon />} />
			</div>
		</ContainerAvatar>
	);
};
