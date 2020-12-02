import { IconButton, makeStyles } from '@material-ui/core';
import React from 'react';
import {
	ContainerAvatar,
	ContainerItem,
	ContainerItemTitle,
} from '../../../../../containers/Containers';

import VerifiedUserIcon from '@material-ui/icons/VerifiedUser';
import MoreIcon from '@material-ui/icons/MoreHoriz';
import CommentIcon from '@material-ui/icons/ChatBubbleOutlineOutlined';
import RetweetIcon from '@material-ui/icons/Replay';
import LikeIcon from '@material-ui/icons/FavoriteBorder';
import OptionsIcon from '@material-ui/icons/KeyboardArrowUp';

import { TweetProps } from './TweetMini';
import { ButtonCounter } from './ButtonCounter';
import { cutNumber2, formatDateFull } from '../../../../../helpers';
import clsx from 'clsx';
import { MediaContainer } from '../MediaContainer';

const useStyles = makeStyles((theme) => ({
	header: {
		flex: 1,
		display: 'flex',
		justifyContent: 'space-between',
		flexDirection: 'column',
	},
	headerContainer: {
		flex: 1,

		margin: '0 0 -4px',
		textAlign: 'left',

		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
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
	headerMoreIcon: {
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
	main: {
		paddingTop: 5,
		paddingBottom: 5,
	},
	textBlock: {
		textAlign: 'left',
		fontSize: 23,
	},
	mediaBlock: {
		marginTop: 10,
		padding: 0,
		borderRadius: 16,
		border: '1px solid rgba(128, 128, 128, 0.15)',
		overflow: 'hidden',
	},
	moreInfoBlock: {
		padding: '15px 0',
		fontSize: 15,
		textAlign: 'left',
		color: theme.palette.text.secondary,
	},
	likesAndRetweetsBlock: {
		display: 'flex',
		paddingLeft: 5,

		'& div:last-of-type': {
			marginRight: 0,
		},
	},
	likesBlock: {
		display: 'flex',
		marginRight: 20,
	},
	likesBlockBold: {
		color: theme.palette.text.primary,
		fontWeight: 700,
	},
	moreInfoBlockSpanBold: {
		paddingRight: 2,
	},
	footer: {
		marginTop: 5,
		padding: '0 60px',
		display: 'flex',
		justifyContent: 'space-between',
	},
	link: {
		color: 'inherit',
		border: 'none',
		textDecoration: 'none',
		cursor: 'pointer',

		'&:hover': {
			textDecoration: 'underline',
		},
	},
}));

export const TweetFull: React.FC<TweetProps> = ({
	id,
	createdAtUTC,
	user,
	text,
	attachments,
	commentsCount,
	likesCount,
	retweetsCount,
	retweetsWithCommentCount,
}) => {
	const classes = useStyles();

	const titleButton = (
		<IconButton className={classes.headerMoreIcon} color='primary'>
			<MoreIcon />
		</IconButton>
	);

	return (
		<div>
			<ContainerAvatar
				source={user?.avatarUrl}
				className={classes.header}
				noBorder
				hoverType='disabled'
			>
				<ContainerItemTitle
					className={classes.headerContainer}
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
					<div className={classes.headerUrl}>@{user?.userName}</div>
				</ContainerItemTitle>
			</ContainerAvatar>
			<ContainerItem hoverType='disabled' className={classes.main}>
				<div className={classes.textBlock}>{text}</div>
				{attachments && attachments.length ? (
					<div className={classes.mediaBlock}>
						<MediaContainer></MediaContainer>
					</div>
				) : null}
				<ContainerItem
					className={classes.moreInfoBlock}
					hoverType='disabled'
				>
					<span className={classes.link}>
						{formatDateFull(createdAtUTC)}
					</span>
					{' · Twitter'}
				</ContainerItem>
				{(retweetsCount || retweetsWithCommentCount || likesCount) && (
					<ContainerItem
						className={clsx(classes.moreInfoBlock)}
						hoverType='disabled'
					>
						<div className={classes.likesAndRetweetsBlock}>
							{retweetsCount && (
								<div className={classes.likesBlock}>
									<div className={classes.likesBlockBold}>
										{cutNumber2(retweetsCount)}
									</div>
									&nbsp;
									<span>ретвитов</span>
								</div>
							)}
							{retweetsWithCommentCount && (
								<div className={classes.likesBlock}>
									<div className={classes.likesBlockBold}>
										{cutNumber2(retweetsWithCommentCount)}
									</div>
									&nbsp;
									<span>твита с цитатами</span>
								</div>
							)}
							{likesCount && (
								<div className={classes.likesBlock}>
									<div className={classes.likesBlockBold}>
										{cutNumber2(likesCount)}
									</div>
									&nbsp;
									<span>отметок «Нравится»</span>
								</div>
							)}
						</div>
					</ContainerItem>
				)}
				<div className={classes.footer}>
					<ButtonCounter icon={<CommentIcon />} type='big' />
					<ButtonCounter
						icon={<RetweetIcon />}
						hoverProps={{
							color: 'rgb(23, 191, 99)',
							backgroundColor: 'rgba(23, 191, 99, 0.1)',
						}}
						type='big'
					/>
					<ButtonCounter
						icon={<LikeIcon />}
						hoverProps={{
							color: 'rgb(224, 36, 94)',
							backgroundColor: 'rgba(224, 36, 94, 0.1)',
						}}
						type='big'
					/>
					<ButtonCounter icon={<OptionsIcon />} type='big' />
				</div>
			</ContainerItem>
		</div>
	);
};
