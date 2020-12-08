import { Button, makeStyles } from '@material-ui/core';
import React from 'react';
import { useParams } from 'react-router-dom';
import { ContainerItem } from '../../containers/Containers';
import { Avatar } from '../../containers/Elements';

import VerifiedUserIcon from '@material-ui/icons/VerifiedUser';

import TwitterIcon from '@material-ui/icons/Twitter';
import SettingsIcon from '@material-ui/icons/Settings';
import HomeIcon from '@material-ui/icons/Home';
import PersonIcon from '@material-ui/icons/PersonOutlineOutlined';
import NotificationsIcon from '@material-ui/icons/NotificationsNoneOutlined';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import MoreIcon from '@material-ui/icons/MoreHoriz';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import { ButtonWithIcon } from '../../containers/Buttons';
import {
	fetchUser,
	LoadingState,
	selectUserItem,
	selectUserLoadingState,
	UserInterface,
} from '../../store/ducks/user';
import { useDispatch, useSelector } from 'react-redux';

const useStyles = makeStyles((theme) => ({
	root: {
		fontSize: 15,
		textAlign: 'left',
	},
	headerPhoto: {
		height: 200,
		backgroundColor: theme.palette.text.secondary,

		backgroundImage: 'url(https://source.unsplash.com/random/800x200)',
		backgroundRepeat: 'no-repeat',
		backgroundPosition: 'center center',
		backgroundSize: 'cover',
	},
	userAvatar: {
		position: 'absolute',
		bottom: 0,
		left: 0,
		marginBottom: -8,
	},
	containerUnderPhoto: {
		flex: 1,
		display: 'flex',
		justifyContent: 'space-between',
		position: 'relative',
		marginBottom: 10,
	},
	containerButtons: {
		display: 'flex',
	},
	containerUser: {
		margin: '5px 0 10px',
	},
	button: {
		marginRight: 10,
		'& button': { border: `1px solid ${theme.palette.primary.main}` },
	},
	buttonStopFollow: { width: 160 },
	buttonFollow: {},
	headerText: {
		fontWeight: 800,
		marginRight: 5,
		fontSize: 19,
	},
	headerVerifiedIcon: {
		margin: '0 0 -3px 3px',
		fontSize: 20,
	},
	headerUrl: {
		fontWeight: 400,
		color: 'rgb(91, 112, 131)',
	},
	description: {},
}));

interface UserProps {
	user?: UserInterface;
}

export const User: React.FC<UserProps> = ({ user }) => {
	const classes = useStyles();

	return (
		<div className={classes.root}>
			<div className={classes.headerPhoto}></div>
			<ContainerItem hoverType='disabled'>
				<div className={classes.containerUnderPhoto}>
					<div>
						<Avatar
							className={classes.userAvatar}
							size='big'
							source={user?.avatarUrl}
						/>
					</div>

					<div className={classes.containerButtons}>
						<ButtonWithIcon
							className={classes.button}
							size={39}
							icon={<MoreIcon />}
						></ButtonWithIcon>
						<ButtonWithIcon
							className={classes.button}
							size={39}
							icon={<MoreIcon />}
						></ButtonWithIcon>
						<ButtonWithIcon
							className={classes.button}
							size={39}
							icon={<MoreIcon />}
						></ButtonWithIcon>
						<Button
							className={classes.buttonStopFollow}
							color='primary'
							variant='contained'
						>
							Читаемые
						</Button>
					</div>
				</div>
				<div className={classes.containerUser}>
					<div className={classes.headerText}>
						{user?.fullname}
						{user?.verified && (
							<VerifiedUserIcon
								color='primary'
								className={classes.headerVerifiedIcon}
							/>
						)}
					</div>
					<div className={classes.headerUrl}>@{user?.username}</div>
				</div>
				<div>{user?.about}</div>
			</ContainerItem>
		</div>
	);
};
