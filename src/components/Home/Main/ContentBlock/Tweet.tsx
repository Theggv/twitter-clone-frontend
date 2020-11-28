import { IconButton, makeStyles } from '@material-ui/core';
import React from 'react';
import clsx from 'clsx';

import MoreIcon from '@material-ui/icons/MoreHoriz';

import CommentIcon from '@material-ui/icons/ChatBubbleOutlineOutlined';
import RetweetIcon from '@material-ui/icons/Replay';
import LikeIcon from '@material-ui/icons/FavoriteBorder';
import OptionsIcon from '@material-ui/icons/KeyboardArrowUp';
import ButtonWithIcon from '../../../../containers/Buttons/ButtonWithIcon';
import { TweetInterface } from '../../../../store/ducks/tweets';
import {
	ContainerAvatar,
	ContainerItemTitle,
} from '../../../../containers/Containers';

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
	footer: {
		marginTop: 5,
		marginLeft: -5,
		paddingRight: 75,
		display: 'flex',
		justifyContent: 'space-between',
	},
	buttonWithNumber: {
		display: 'flex',
		alignItems: 'center',
	},
	footerButtonIcon: {
		width: 30,
		height: 30,
	},
	footerIcon: {
		fontSize: 15,
		color: 'rgb(91, 112, 131)',

		'& svg': {
			fontSize: 20,
			color: 'rgb(91, 112, 131)',
		},
	},
	footerIconNumber: {
		padding: '0 4px',
		fontSize: 13,
	},
	defaultHover: {
		'&:hover': {
			'& svg': {
				color: theme.palette.primary.main,
			},
			'& div': {
				color: theme.palette.primary.main,
			},
		},
	},
	greenHover: {
		'&:hover': {
			'& svg': {
				color: 'rgb(23, 191, 99)',
			},
			'& div': {
				color: 'rgb(23, 191, 99)',
			},
			'& .MuiIconButton-colorPrimary': {
				backgroundColor: 'rgba(23, 191, 99, 0.1)',
			},
		},
	},
	redHover: {
		'&:hover': {
			'& svg': {
				color: 'rgb(224, 36, 94)',
			},
			'& div': {
				color: 'rgb(224, 36, 94)',
			},
			'& .MuiIconButton-colorPrimary': {
				backgroundColor: 'rgba(224, 36, 94, 0.1)',
			},
		},
	},
}));

interface TweetProps extends TweetInterface {
	posted?: Date;
	comments?: Array<string>;
	retweets?: Array<string>;
	likes?: Array<string>;
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

const Tweet: React.FC<TweetProps> = ({
	posted,
	comments,
	retweets,
	likes,
	user = defaultTweet.user!,
	text = defaultTweet.text!,
}): React.ReactElement => {
	const classes = useStyles();

	const ButtonWithNumber: React.FC<{
		icon: React.ReactNode;
		className: string;
		number?: number;
		onClick?: () => void;
	}> = ({ icon, className, number, onClick }) => (
		<ButtonWithIcon
			icon={icon}
			className={className}
			onClick={() => onClick && onClick()}
		>
			{number ? (
				<div className={classes.footerIconNumber}>{number}</div>
			) : null}
		</ButtonWithIcon>
	);

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
				<div className={classes.headerText}>{user.fullName}</div>
				<div className={classes.headerUrl}>
					{`@${user.userName} · 2 ч`}
				</div>
			</ContainerItemTitle>
			<div className={classes.contentBlock}>{text}</div>
			<div className={classes.footer}>
				<ButtonWithNumber
					icon={<CommentIcon />}
					className={clsx(classes.footerIcon, classes.defaultHover)}
					number={5}
				/>
				<ButtonWithNumber
					icon={<RetweetIcon />}
					className={clsx(classes.footerIcon, classes.greenHover)}
					number={3}
				/>
				<ButtonWithNumber
					icon={<LikeIcon />}
					className={clsx(classes.footerIcon, classes.redHover)}
					number={50}
				/>
				<ButtonWithNumber
					icon={<OptionsIcon />}
					className={clsx(classes.footerIcon, classes.defaultHover)}
				/>
			</div>
		</ContainerAvatar>
	);
};

export default Tweet;
